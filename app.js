// ==================================================
// نظام البطولة أون - التطبيق الرئيسي
// ==================================================

// تعريف المتغيرات العامة
let appData = {};
let currentTeam = '';
let currentTeamData = {};
let standingsData = [];

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
    const teamElement = document.getElementById('team-app');
    
    if (!teamElement) {
        console.error('عنصر team-app غير موجود في الصفحة');
        return;
    }
    
    currentTeam = teamElement.getAttribute('data-team');
    
    if (!currentTeam) {
        console.error('يجب تحديد الفريق باستخدام خاصية data-team');
        return;
    }
    
    // تحميل البيانات
    loadData();
});

// دالة تحميل البيانات من JSON
async function loadData() {
    try {
        // رابط ملف البيانات على GitHub
        const dataUrl = 'https://raw.githubusercontent.com/elbotolaon-dotcom/elbotolaon-123/main/data.json';
        
        const response = await fetch(dataUrl);
        
        if (!response.ok) {
            throw new Error(`فشل تحميل البيانات: ${response.status}`);
        }
        
        appData = await response.json();
        
        // تأكد من وجود الفريق المطلوب
        if (!appData.teams || !appData.teams[currentTeam]) {
            throw new Error(`الفريق ${currentTeam} غير موجود في البيانات`);
        }
        
        // تخزين بيانات الفريق الحالي
        currentTeamData = appData.teams[currentTeam];
        
        // معالجة الترتيب
        processStandings();
        
        // عرض الواجهة
        renderInterface();
        
    } catch (error) {
        console.error('خطأ في تحميل البيانات:', error);
        document.getElementById('team-app').innerHTML = `
            <div style="text-align: center; padding: 40px; color: #d2151e;">
                <h3>⚠️ حدث خطأ في تحميل البيانات</h3>
                <p>${error.message}</p>
                <p>يرجى المحاولة لاحقاً</p>
            </div>
        `;
    }
}

// معالجة بيانات الترتيب
function processStandings() {
    if (!appData.standings || !Array.isArray(appData.standings)) {
        console.error('بيانات الترتيب غير صالحة');
        return;
    }
    
    // نسخ البيانات
    standingsData = [...appData.standings];
    
    // ترتيب الفرق حسب النقاط ثم فارق الأهداف
    standingsData.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        const diffA = a.goalsFor - a.goalsAgainst;
        const diffB = b.goalsFor - b.goalsAgainst;
        if (diffB !== diffA) return diffB - diffA;
        return b.goalsFor - a.goalsFor;
    });
    
    // إضافة الترتيب النهائي
    standingsData.forEach((team, index) => {
        team.rank = index + 1;
        team.teamInfo = appData.teams[team.teamId];
        team.goalDifference = team.goalsFor - team.goalsAgainst;
    });
}

// عرض الواجهة الرئيسية
function renderInterface() {
    const container = document.getElementById('team-app');
    
    // إضافة CSS
    const css = generateCSS();
    
    // بناء HTML
    let html = `
        ${css}
        <div id="elbotolaon-app-container">
            ${renderTeamHeader()}
            ${renderTeamStats()}
            ${renderStandingsTable()}
            ${renderMatchesSection()}
            ${renderSquadSection()}
            ${renderTransfersSection()}
        </div>
    `;
    
    container.innerHTML = html;
    
    // تفعيل المكونات التفاعلية
    setupInteractions();
}

// إنشاء CSS
function generateCSS() {
    return `
    <style>
        /* =========================================
           نظام البطولة أون - الأنماط الرئيسية
           ========================================= */
        #elbotolaon-app-container {
            font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif;
            background-color: #fff;
            color: #333;
            direction: rtl;
            text-align: right;
            font-size: 14px;
            line-height: 1.6;
            width: 100%;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        #elbotolaon-app-container * {
            box-sizing: border-box;
        }
        
        /* الأقسام العامة */
        .app-section {
            margin-bottom: 25px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
            background: #fff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .app-section-header {
            padding: 15px 20px;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-bottom: 1px solid #dee2e6;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .app-section-title {
            font-size: 18px;
            font-weight: 700;
            color: #333;
            margin: 0;
            position: relative;
            padding-right: 15px;
        }
        
        .app-section-title::before {
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 20px;
            background-color: #d2151e;
            border-radius: 2px;
        }
        
        /* رأس الفريق */
        .team-header-container {
            display: flex;
            align-items: center;
            gap: 25px;
            padding: 25px;
            background: #fdfdfd;
            border-bottom: 1px solid #eee;
            flex-wrap: wrap;
        }
        
        .team-logo-large {
            width: 120px;
            height: 120px;
            object-fit: contain;
            border-radius: 12px;
            padding: 10px;
            background: #fff;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }
        
        .team-info {
            flex: 1;
            min-width: 300px;
        }
        
        .team-name {
            font-size: 32px;
            font-weight: 800;
            color: #d2151e;
            margin: 0 0 10px 0;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        
        .team-details {
            font-size: 15px;
            color: #555;
        }
        
        .team-detail-item {
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .team-detail-label {
            font-weight: 600;
            color: #333;
            min-width: 100px;
        }
        
        /* إحصائيات الفريق */
        .team-stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            padding: 20px;
            background: #fafafa;
        }
        
        .stat-box {
            text-align: center;
            padding: 15px;
            background: #fff;
            border-radius: 8px;
            border: 1px solid #eee;
            transition: all 0.3s ease;
        }
        
        .stat-box:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .stat-value {
            font-size: 28px;
            font-weight: 800;
            color: #d2151e;
            display: block;
            margin-bottom: 5px;
        }
        
        .stat-label {
            font-size: 13px;
            color: #666;
            display: block;
            font-weight: 600;
        }
        
        /* جدول الترتيب */
        .standings-container {
            padding: 0;
        }
        
        .standings-scroll {
            width: 100%;
            overflow-x: auto;
        }
        
        .standings-table {
            width: 100%;
            border-collapse: collapse;
            min-width: 800px;
        }
        
        .standings-table th {
            background: #f4f4f4;
            color: #555;
            font-weight: 700;
            padding: 14px 10px;
            text-align: center;
            font-size: 13px;
            border-bottom: 2px solid #ddd;
            white-space: nowrap;
        }
        
        .standings-table td {
            padding: 12px 10px;
            text-align: center;
            border-bottom: 1px solid #eee;
            font-size: 14px;
            vertical-align: middle;
        }
        
        .rank-cell {
            width: 50px;
        }
        
        .team-cell {
            text-align: right !important;
            padding-right: 15px;
            width: 35%;
        }
        
        .team-flex {
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: flex-start;
        }
        
        .team-logo-small {
            width: 28px;
            height: 28px;
            object-fit: contain;
        }
        
        .rank-badge {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            background: #6c757d;
        }
        
        .rank-1 { background: #28a745; }
        .rank-2 { background: #28a745; }
        .rank-3 { background: #007bff; }
        .rank-4 { background: #17a2b8; }
        .rank-15 { background: #dc3545; }
        .rank-16 { background: #dc3545; }
        
        .current-team-row {
            background-color: #fff9f9 !important;
            border-left: 4px solid #d2151e;
            font-weight: 600;
        }
        
        .points-cell {
            font-weight: 800;
            color: #000;
            background: rgba(0,0,0,0.03);
            border-radius: 4px;
        }
        
        /* جدول المباريات */
        .matches-controls {
            padding: 15px 20px;
            background: #f8f9fa;
            border-bottom: 1px solid #dee2e6;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
        }
        
        .round-selector {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .round-select {
            padding: 8px 15px;
            border: 1px solid #ced4da;
            border-radius: 6px;
            font-size: 14px;
            background: #fff;
            cursor: pointer;
            min-width: 150px;
        }
        
        .matches-list {
            padding: 0;
        }
        
        .match-row {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            border-bottom: 1px solid #f5f5f5;
            transition: background 0.2s;
        }
        
        .match-row:hover {
            background: #f9f9f9;
        }
        
        .match-date {
            width: 80px;
            font-size: 13px;
            color: #555;
            font-weight: bold;
            text-align: center;
            border-left: 1px solid #eee;
            padding-left: 15px;
        }
        
        .match-info {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            min-width: 300px;
        }
        
        .match-team {
            width: 40%;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
        }
        
        .match-team.home {
            justify-content: flex-start;
        }
        
        .match-team.away {
            justify-content: flex-end;
            flex-direction: row-reverse;
        }
        
        .match-team img {
            width: 30px;
            height: 30px;
            object-fit: contain;
        }
        
        .match-result {
            background: #e9ecef;
            padding: 6px 15px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 15px;
            min-width: 60px;
            text-align: center;
        }
        
        .match-venue {
            font-size: 12px;
            color: #777;
            background: #f1f1f1;
            padding: 4px 10px;
            border-radius: 4px;
            border: 1px solid #eee;
            white-space: nowrap;
            margin-top: 5px;
        }
        
        /* تشكيلة الفريق */
        .squad-container {
            padding: 20px;
        }
        
        .squad-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 15px;
        }
        
        .player-card {
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            background: #fff;
            cursor: pointer;
            transition: all 0.2s;
            overflow: hidden;
        }
        
        .player-card:hover {
            border-color: #d2151e;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        
        .player-card.active {
            border: 2px solid #d2151e;
            background: #fffafa;
        }
        
        .player-main {
            display: flex;
            align-items: center;
            padding: 12px;
        }
        
        .player-image {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 3px solid #fff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            margin-left: 15px;
            object-fit: cover;
            background: #f5f5f5;
        }
        
        .player-text {
            flex: 1;
        }
        
        .player-name {
            margin: 0;
            font-size: 15px;
            font-weight: 700;
            color: #333;
        }
        
        .player-position {
            margin: 4px 0 0;
            font-size: 13px;
            color: #888;
            text-transform: uppercase;
        }
        
        .player-number {
            background: #d2151e;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 14px;
        }
        
        .player-stats {
            display: none;
            border-top: 1px solid #eee;
            padding: 15px;
            background: #fff;
            animation: slideOpen 0.3s ease;
        }
        
        .player-card.active .player-stats {
            display: block;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-value-small {
            font-weight: bold;
            font-size: 16px;
            color: #d2151e;
            display: block;
        }
        
        .stat-label-small {
            font-size: 11px;
            color: #999;
            display: block;
        }
        
        @keyframes slideOpen {
            from { opacity: 0; max-height: 0; }
            to { opacity: 1; max-height: 200px; }
        }
        
        /* الانتقالات */
        .transfers-container {
            padding: 0;
        }
        
        .transfers-scroll {
            overflow-x: auto;
            width: 100%;
        }
        
        .transfers-table {
            width: 100%;
            border-collapse: collapse;
            min-width: 700px;
        }
        
        .transfers-table th,
        .transfers-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
            vertical-align: middle;
        }
        
        .transfers-table thead th {
            background: #fbfbfb;
            color: #555;
            font-size: 14px;
            font-weight: 600;
            text-align: right;
        }
        
        .transfer-player {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .transfer-player img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            object-fit: cover;
        }
        
        .transfer-club {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .transfer-club img {
            width: 24px;
            height: 24px;
            object-fit: contain;
        }
        
        .transfer-type {
            font-weight: bold;
            font-size: 12px;
            padding: 4px 8px;
            border-radius: 4px;
            text-align: center;
        }
        
        .transfer-type.transfer {
            background: #e6ffe6;
            color: #28a745;
        }
        
        .transfer-type.free {
            background: #e6f2ff;
            color: #007bff;
        }
        
        .transfer-type.loan {
            background: #fff0f0;
            color: #dc3545;
        }
        
        /* التكيف مع الهواتف */
        @media (max-width: 768px) {
            .team-header-container {
                flex-direction: column;
                text-align: center;
                padding: 20px;
            }
            
            .team-logo-large {
                width: 100px;
                height: 100px;
            }
            
            .team-info {
                min-width: 100%;
            }
            
            .team-name {
                font-size: 28px;
            }
            
            .team-detail-item {
                justify-content: center;
            }
            
            .app-section-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }
            
            .matches-controls {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .match-info {
                flex-direction: column;
                gap: 10px;
                min-width: 100%;
            }
            
            .match-team {
                width: 100%;
                justify-content: center !important;
            }
            
            .match-team.away {
                flex-direction: row;
            }
            
            .squad-grid {
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                gap: 10px;
            }
            
            .player-main {
                padding: 10px;
            }
            
            .player-image {
                width: 50px;
                height: 50px;
                margin-left: 10px;
            }
            
            .hide-on-mobile {
                display: none !important;
            }
        }
        
        @media (max-width: 480px) {
            .team-stats-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .squad-grid {
                grid-template-columns: 1fr;
            }
            
            .stat-box {
                padding: 12px 8px;
            }
            
            .stat-value {
                font-size: 24px;
            }
        }
    </style>
    `;
}

// عرض رأس الفريق
function renderTeamHeader() {
    return `
    <div class="app-section">
        <div class="team-header-container">
            <img src="${currentTeamData.logo}" class="team-logo-large" alt="${currentTeamData.name}" 
                 onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
            <div class="team-info">
                <h1 class="team-name">${currentTeamData.name}</h1>
                <div class="team-details">
                    <div class="team-detail-item">
                        <span class="team-detail-label">المدرب:</span>
                        <span>${currentTeamData.coach || 'غير محدد'}</span>
                    </div>
                    <div class="team-detail-item">
                        <span class="team-detail-label">تاريخ التأسيس:</span>
                        <span>${currentTeamData.founded || 'غير محدد'}</span>
                    </div>
                    <div class="team-detail-item">
                        <span class="team-detail-label">الملعب:</span>
                        <span>${currentTeamData.stadium || 'غير محدد'}</span>
                    </div>
                    <div class="team-detail-item">
                        <span class="team-detail-label">المدينة:</span>
                        <span>${currentTeamData.city || 'غير محدد'}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

// عرض إحصائيات الفريق
function renderTeamStats() {
    const teamStanding = standingsData.find(t => t.teamId === currentTeam);
    
    if (!teamStanding) return '';
    
    return `
    <div class="app-section">
        <div class="app-section-header">
            <h3 class="app-section-title">إحصائيات الفريق</h3>
        </div>
        <div class="team-stats-grid">
            <div class="stat-box">
                <span class="stat-value">${teamStanding.rank || '--'}</span>
                <span class="stat-label">المركز الحالي</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${teamStanding.points || 0}</span>
                <span class="stat-label">النقاط</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${teamStanding.played || 0}</span>
                <span class="stat-label">المباريات</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${teamStanding.wins || 0}</span>
                <span class="stat-label">الفوز</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${teamStanding.draws || 0}</span>
                <span class="stat-label">التعادل</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${teamStanding.losses || 0}</span>
                <span class="stat-label">الخسارة</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${teamStanding.goalsFor || 0}</span>
                <span class="stat-label">الأهداف</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${teamStanding.goalDifference > 0 ? '+' : ''}${teamStanding.goalDifference || 0}</span>
                <span class="stat-label">فارق الأهداف</span>
            </div>
        </div>
    </div>
    `;
}

// عرض جدول الترتيب
function renderStandingsTable() {
    let rows = '';
    
    standingsData.forEach((team, index) => {
        const isCurrentTeam = team.teamId === currentTeam;
        const rowClass = isCurrentTeam ? 'current-team-row' : '';
        
        let rankClass = '';
        if (team.rank === 1 || team.rank === 2) rankClass = 'rank-1';
        else if (team.rank === 3) rankClass = 'rank-3';
        else if (team.rank === 15 || team.rank === 16) rankClass = 'rank-15';
        
        rows += `
        <tr class="${rowClass}">
            <td class="rank-cell">
                <span class="rank-badge ${rankClass}">${team.rank}</span>
            </td>
            <td class="team-cell">
                <div class="team-flex">
                    <img src="${team.teamInfo.logo}" class="team-logo-small" alt="${team.teamInfo.name}"
                         onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                    <span>${team.teamInfo.name}</span>
                </div>
            </td>
            <td>${team.played}</td>
            <td class="hide-on-mobile">${team.wins}</td>
            <td class="hide-on-mobile">${team.draws}</td>
            <td class="hide-on-mobile">${team.losses}</td>
            <td class="hide-on-mobile">${team.goalsFor}</td>
            <td class="hide-on-mobile">${team.goalsAgainst}</td>
            <td class="hide-on-mobile">${team.goalDifference > 0 ? '+' : ''}${team.goalDifference}</td>
            <td class="points-cell">${team.points}</td>
        </tr>
        `;
    });
    
    return `
    <div class="app-section standings-container">
        <div class="app-section-header">
            <h3 class="app-section-title">الترتيب العام</h3>
            <div style="font-size: 13px; color: #666;">
                <span>آخر تحديث: ${formatDate(appData.competition.lastUpdated)}</span>
            </div>
        </div>
        <div class="standings-scroll">
            <table class="standings-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>الفريق</th>
                        <th>لعب</th>
                        <th class="hide-on-mobile">فوز</th>
                        <th class="hide-on-mobile">تعادل</th>
                        <th class="hide-on-mobile">خسارة</th>
                        <th class="hide-on-mobile">له</th>
                        <th class="hide-on-mobile">عليه</th>
                        <th class="hide-on-mobile">+/-</th>
                        <th>ن</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    </div>
    `;
}

// عرض قسم المباريات
function renderMatchesSection() {
    // إنشاء خيارات الجولات
    let roundOptions = '';
    const totalRounds = appData.competition.totalRounds || 30;
    
    for (let i = 1; i <= totalRounds; i++) {
        const selected = i === appData.competition.currentRound ? 'selected' : '';
        roundOptions += `<option value="${i}" ${selected}>الجولة ${i}</option>`;
    }
    
    return `
    <div class="app-section">
        <div class="app-section-header">
            <h3 class="app-section-title">جدول المباريات</h3>
        </div>
        <div class="matches-controls">
            <div class="round-selector">
                <label for="roundSelect">اختر الجولة:</label>
                <select id="roundSelect" class="round-select" onchange="loadMatches(this.value)">
                    ${roundOptions}
                </select>
            </div>
            <div style="font-size: 13px; color: #666;">
                الموسم: ${appData.competition.season}
            </div>
        </div>
        <div class="matches-list" id="matchesList">
            <!-- سيتم تحميل المباريات هنا -->
        </div>
    </div>
    `;
}

// عرض قسم التشكيلة
function renderSquadSection() {
    const players = appData.players[currentTeam] || [];
    
    if (players.length === 0) {
        return `
        <div class="app-section">
            <div class="app-section-header">
                <h3 class="app-section-title">تشكيلة الفريق</h3>
            </div>
            <div style="padding: 30px; text-align: center; color: #666;">
                لا توجد بيانات للاعبين حالياً
            </div>
        </div>
        `;
    }
    
    let playersHTML = '';
    
    players.forEach((player, index) => {
        playersHTML += `
        <div class="player-card" id="player-${index}" onclick="togglePlayerCard(${index})">
            <div class="player-main">
                <img src="${player.image}" class="player-image" alt="${player.name}"
                     onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                <div class="player-text">
                    <h4 class="player-name">${player.name}</h4>
                    <p class="player-position">${player.position}</p>
                </div>
                <div class="player-number">${player.number || '--'}</div>
            </div>
            <div class="player-stats">
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-value-small">${player.stats?.matches || 0}</span>
                        <span class="stat-label-small">مباريات</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value-small">${player.stats?.goals || 0}</span>
                        <span class="stat-label-small">أهداف</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value-small">${player.stats?.assists || 0}</span>
                        <span class="stat-label-small">تمريرات حاسمة</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value-small">${player.stats?.yellowCards || 0}</span>
                        <span class="stat-label-small">بطاقات صفراء</span>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    return `
    <div class="app-section">
        <div class="app-section-header">
            <h3 class="app-section-title">تشكيلة الفريق (${players.length} لاعب)</h3>
        </div>
        <div class="squad-container">
            <div class="squad-grid" id="squadGrid">
                ${playersHTML}
            </div>
        </div>
    </div>
    `;
}

// عرض قسم الانتقالات
function renderTransfersSection() {
    const transfers = appData.transfers?.[currentTeam] || [];
    
    if (transfers.length === 0) {
        return `
        <div class="app-section">
            <div class="app-section-header">
                <h3 class="app-section-title">الانتقالات والإعارات</h3>
            </div>
            <div style="padding: 30px; text-align: center; color: #666;">
                لا توجد بيانات للانتقالات حالياً
            </div>
        </div>
        `;
    }
    
    let transfersHTML = '';
    
    transfers.forEach(transfer => {
        const fromTeam = appData.teams[transfer.fromTeam] || { name: transfer.fromTeam, logo: '' };
        const toTeam = appData.teams[transfer.toTeam] || { name: transfer.toTeam, logo: '' };
        
        transfersHTML += `
        <tr>
            <td class="hide-on-mobile">${formatDate(transfer.date, 'short')}</td>
            <td>
                <div class="transfer-player">
                    <img src="${transfer.playerImage}" alt="${transfer.playerName}"
                         onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                    <div>
                        <div style="font-weight: 600;">${transfer.playerName}</div>
                        <div style="font-size: 12px; color: #888;">${transfer.position}</div>
                    </div>
                </div>
            </td>
            <td>
                <div class="transfer-club">
                    <img src="${fromTeam.logo}" alt="${fromTeam.name}"
                         onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                    <span>${fromTeam.name}</span>
                </div>
            </td>
            <td>
                <div class="transfer-club">
                    <img src="${toTeam.logo}" alt="${toTeam.name}"
                         onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                    <span>${toTeam.name}</span>
                </div>
            </td>
            <td class="hide-on-mobile">
                <span class="transfer-type ${transfer.type}">${getTransferTypeText(transfer.type)}</span>
            </td>
        </tr>
        `;
    });
    
    return `
    <div class="app-section transfers-container">
        <div class="app-section-header">
            <h3 class="app-section-title">الانتقالات والإعارات</h3>
        </div>
        <div class="transfers-scroll">
            <table class="transfers-table">
                <thead>
                    <tr>
                        <th class="hide-on-mobile">التاريخ</th>
                        <th>اللاعب</th>
                        <th>من</th>
                        <th>إلى</th>
                        <th class="hide-on-mobile">النوع</th>
                    </tr>
                </thead>
                <tbody>
                    ${transfersHTML}
                </tbody>
            </table>
        </div>
    </div>
    `;
}

// تهيئة التفاعلات
function setupInteractions() {
    // تحميل المباريات الأولى
    loadMatches(appData.competition.currentRound);
}

// دالة تحميل المباريات
function loadMatches(roundNumber) {
    const matchesList = document.getElementById('matchesList');
    
    if (!matchesList) return;
    
    const matches = appData.matches?.teamMatches?.[currentTeam] || [];
    
    // تصفية المباريات حسب الجولة
    const roundMatches = matches.filter(match => match.round == roundNumber);
    
    if (roundMatches.length === 0) {
        matchesList.innerHTML = `
            <div style="padding: 40px; text-align: center; color: #666;">
                <p>لا توجد مباريات في الجولة ${roundNumber}</p>
            </div>
        `;
        return;
    }
    
    let matchesHTML = '';
    
    roundMatches.forEach(match => {
        const opponent = appData.teams[match.opponent];
        const isHome = match.isHome;
        const homeTeam = isHome ? currentTeamData : opponent;
        const awayTeam = isHome ? opponent : currentTeamData;
        const homeTeamName = isHome ? currentTeamData.name : opponent.name;
        const awayTeamName = isHome ? opponent.name : currentTeamData.name;
        
        // تنسيق التاريخ
        const matchDate = formatDate(match.date);
        
        matchesHTML += `
        <div class="match-row">
            <div class="match-date">
                ${matchDate}<br>
                ${match.time || '--:--'}
            </div>
            <div class="match-info">
                <div class="match-team home">
                    <img src="${homeTeam.logo}" alt="${homeTeam.name}"
                         onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                    <span>${homeTeamName}</span>
                </div>
                <div class="match-result">${match.score || '--:--'}</div>
                <div class="match-team away">
                    <img src="${awayTeam.logo}" alt="${awayTeam.name}"
                         onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                    <span>${awayTeamName}</span>
                </div>
            </div>
            <div class="match-venue">${match.venue || '--'}</div>
        </div>
        `;
    });
    
    matchesList.innerHTML = matchesHTML;
}

// تفعيل/إلغاء تفعيل بطاقة اللاعب
function togglePlayerCard(index) {
    const card = document.getElementById(`player-${index}`);
    const isActive = card.classList.contains('active');
    
    // إغلاق جميع البطاقات أولاً
    document.querySelectorAll('.player-card').forEach(c => {
        c.classList.remove('active');
    });
    
    // فتح البطاقة المحددة إذا لم تكن مفتوحة
    if (!isActive) {
        card.classList.add('active');
        
        // التمرير إلى البطاقة
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// تنسيق التاريخ
function formatDate(dateString, format = 'long') {
    if (!dateString) return '--/--/----';
    
    const date = new Date(dateString);
    
    if (format === 'short') {
        return date.toLocaleDateString('ar-EG');
    }
    
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    return date.toLocaleDateString('ar-EG', options);
}

// الحصول على نص نوع الانتقال
function getTransferTypeText(type) {
    const types = {
        'transfer': 'انتقال',
        'free': 'حر',
        'loan': 'إعارة',
        'return': 'عودة'
    };
    
    return types[type] || type;
}

// جعل الدوال متاحة عالمياً
window.loadMatches = loadMatches;
window.togglePlayerCard = togglePlayerCard;