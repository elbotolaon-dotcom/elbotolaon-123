const botolaData = {
    // ============================================
    // 1. تعريف الفرق (الشعارات والأسماء من الكود 0)
    // ============================================
    "teams_config": {
        "wac": { 
            id: "wac", name: "الوداد الرياضي", founded: "1937", stadium: "مركب محمد الخامس", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png" 
        },
        "far": { 
            id: "far", name: "الجيش الملكي", founded: "1958", stadium: "المجمع الرياضي مولاي عبد الله", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png" 
        },
        "rca": { 
            id: "rca", name: "الرجاء الرياضي", founded: "1949", stadium: "مركب محمد الخامس", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png" 
        },
        "rsb": { 
            id: "rsb", name: "نهضة بركان", founded: "1938", stadium: "الملعب البلدي ببركان", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png" 
        },
        "mas": { 
            id: "mas", name: "المغرب الفاسي", founded: "1946", stadium: "ملعب فاس الكبير", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-igka8JGdMxooELJ6fdG65ds3byXt37bQtGDJ8QRhXwoYR4ieyN0sh1v_FjPevP17byg9akoq9isvyjwdzGlMRBcREzFxILSb3BIvqnPDi0TcYYS6ChwnkwHLC5uatbAHU4WsxLEPltKZ8Bc87cJvFrDeuQZyB085AZsluC47LZTWNwOMQxPCY3sxVhY/s1600/fes%20elbotolaon.png" 
        },
        "fus": { 
            id: "fus", name: "الفتح الرباطي", founded: "1946", stadium: "ملعب مولاي الحسن", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY8Xl-VjUnPns3iQjGGnQxc4wFdtX-iG3iUPNh2KbWXx4gWo4D7Ai30h-xheqe28GmiHtCugMptmzCZJJgbS0R8SMLDRjD7wNXHY2hVgbXPEA2uDk2LTGlrlXaksyK4HdJQI6JXkJRISNL_J_BxJbazT33HJfOzcJuhCRmjY1QeIpLHpdlRxzG6-_Phng/s1600/fath%20raba%20elbotolaon.png" 
        },
        "ocs": { 
            id: "ocs", name: "أولمبيك آسفي", founded: "1921", stadium: "ملعب المسيرة", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhennOIbFknnlYOmS4wwizF1GIxzDbqFnDXCeEdaGpoKpbzrFfbPExst5Gfd1S2u4hQgaOu_uohsHRYyjBdrnm8PurL_6UlyyM-KbvlKVF2tf_uBAgPnD5dW68wtKunRoLqk8HhO4IPM62oHtonupb2Inp2VsoZK7b1Ecf5MuzgZQMX_CtBx4EEnWjzuH8/s1600/assfi%20elbotolaon.png" 
        },
        "uts": { 
            id: "uts", name: "اتحاد تواركة", founded: "1969", stadium: "ملعب مولاي الحسن", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhybz1aXcm8HM4tMmsZ2FsE17Mdz-yYEj8ZhpBAf0dxRUrpmcXkuPmVE5NiHFZbOCCzPsbDHvS0Lh169sEUwe2KfgV-njTNqPtzDRmyT7JWYgqef5k6TKzs_8mdd_Hc3ucpb7Lh9KtJBhZ08cP-7TsikV-JI7d8jedtYvuoPeX676STgHE3xzgnagU98P8/s1600/tihad%20twarka%20elbotolaon.png" 
        },
        "husa": { 
            id: "husa", name: "حسنية أكادير", founded: "1946", stadium: "ملعب أدرار", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png" 
        },
        "mat": { 
            id: "mat", name: "المغرب التطواني", founded: "1922", stadium: "ملعب سانية الرمل", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipHw-b1h9y3e1r9M9gJb8P4t2W0rK5y7X6V1q3L8z9N4A0B2C5D8E1F3G4H7I9J0K/s1600/mat%20elbotolaon.png" 
        },
        "sccm": { 
            id: "sccm", name: "شباب المحمدية", founded: "1948", stadium: "ملعب البشير", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipHw-b1h9y3e1r9M9gJb8P4t2W0rK5y7X6V1q3L8z9N4A0B2C5D8E1F3G4H7I9J0K/s1600/sccm%20elbotolaon.png" 
        },
        "rcz": { 
            id: "rcz", name: "نهضة الزمامرة", founded: "1977", stadium: "ملعب أحمد شكري", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png" 
        },
        "codm": { 
            id: "codm", name: "النادي المكناسي", founded: "1962", stadium: "الملعب الشرفي", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png" 
        },
        "irt": { 
            id: "irt", name: "اتحاد طنجة", founded: "1983", stadium: "ملعب ابن بطوطة", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png" 
        },
        "dhj": { 
            id: "dhj", name: "الدفاع الجديدي", founded: "1956", stadium: "ملعب العبدي", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi604V7G-TMAR-7ry4jbAw39AkcufYfEQt6mDoiQjJVMiHo7-qL4Avgf7Gl-8n-tUFGuTVLYBR5vL5ecjeOwBjEQi8CQ-5bHwMtlsy8iA3Q8iVFrmmn624fNS_hsbShF1hsE_MWXSNtN3ycw2bt9I28qumLlFeMlj_B0dqmSliogS2HviI0qYz72pCMsdU/s1600/difa3%20jdidi%20elbotolaon.png" 
        },
        "jss": { 
            id: "jss", name: "شباب السوالم", founded: "1984", stadium: "ملعب الرازي", 
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmrVmfIV4Sw3-szIWCIUkCby9GQSq2ubjRgHaOBgxuYsR2mOgi7UTcY4nER3n_vvAHQQMyEpQQTk1_sbKtiyOHz12F29hGDttaYRDE77cztljM3wHrwRqRVmzvekXyw9zBV6kz8uhfxnwJAWgU4YVl0raMMc8lKB1OxgjWFvXwwH_fithNhvUTgGF9u7s/s1600/jss%20logo.png" 
        },
        "cayb": {
            id: "cayb", name: "يوسفية برشيد", founded: "1927", stadium: "البلدي ببرشيد",
            logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipHw-b1h9y3e1r9M9gJb8P4t2W0rK5y7X6V1q3L8z9N4A0B2C5D8E1F3G4H7I9J0K/s1600/cayb%20elbotolaon.png"
        }
    },
    // ============================================
    // 2. جدول الترتيب (متوافق تماماً مع teams_config)
    // ============================================
    "standings": [
        { id: "far", p: 5, w: 4, d: 1, l: 0, pts: 13, gf: 10, ga: 2 },
        { id: "rca", p: 5, w: 3, d: 2, l: 0, pts: 11, gf: 8, ga: 3 },
        { id: "wac", p: 5, w: 3, d: 1, l: 1, pts: 10, gf: 7, ga: 4 },
        { id: "rsb", p: 5, w: 3, d: 0, l: 2, pts: 9, gf: 6, ga: 5 },
        { id: "fus", p: 5, w: 2, d: 2, l: 1, pts: 8, gf: 5, ga: 4 },
        { id: "mas", p: 5, w: 2, d: 1, l: 2, pts: 7, gf: 4, ga: 5 },
        { id: "ocs", p: 5, w: 1, d: 3, l: 1, pts: 6, gf: 3, ga: 3 },
        { id: "uts", p: 5, w: 1, d: 2, l: 2, pts: 5, gf: 5, ga: 6 },
        { id: "husa", p: 5, w: 1, d: 2, l: 2, pts: 5, gf: 4, ga: 5 },
        { id: "mat", p: 5, w: 1, d: 1, l: 3, pts: 4, gf: 3, ga: 7 },
        { id: "sccm", p: 5, w: 1, d: 1, l: 3, pts: 4, gf: 2, ga: 6 },
        { id: "cayb", p: 5, w: 0, d: 3, l: 2, pts: 3, gf: 2, ga: 5 },
        { id: "rcz", p: 5, w: 0, d: 3, l: 2, pts: 3, gf: 3, ga: 6 },
        { id: "codm", p: 5, w: 0, d: 2, l: 3, pts: 2, gf: 2, ga: 5 },
        { id: "irt", p: 5, w: 0, d: 2, l: 3, pts: 2, gf: 1, ga: 4 },
        { id: "dhj", p: 5, w: 0, d: 1, l: 4, pts: 1, gf: 1, ga: 8 }
    ],
    // ============================================
    // 3. قوائم اللاعبين (الوداد جاهز والباقي فارغ)
    // ============================================
    "squads": {
        "wac": [
            { n: "يوسف المطيع", p: "حارس مرمى", num: 32, m: 5, g: 0, y: 1, r: 0, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png" },
            { n: "جمال حركاس", p: "مدافع", num: 5, m: 4, g: 1, y: 2, r: 0, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png" },
            { n: "نبيل مرموق", p: "مدافع", num: 15, m: 3, g: 0, y: 0, r: 0, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-igka8JGdMxooELJ6fdG65ds3byXt37bQtGDJ8QRhXwoYR4ieyN0sh1v_FjPevP17byg9akoq9isvyjwdzGlMRBcREzFxILSb3BIvqnPDi0TcYYS6ChwnkwHLC5uatbAHU4WsxLEPltKZ8Bc87cJvFrDeuQZyB085AZsluC47LZTWNwOMQxPCY3sxVhY/s1600/fes%20elbotolaon.png" },
            { n: "سيدي بونا عمار", p: "مهاجم", num: 10, m: 5, g: 2, y: 0, r: 0, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png" },
            { n: "مباي نيانغ", p: "مهاجم", num: 9, m: 2, g: 1, y: 0, r: 0, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png" },
            { n: "عبد العالي المحمدي", p: "حارس مرمى", num: 1, m: 1, g: 0, y: 0, r: 0, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png" },
            { n: "جوزيف غيدي", p: "مهاجم", num: 11, m: 5, g: 2, y: 1, r: 0, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmrVmfIV4Sw3-szIWCIUkCby9GQSq2ubjRgHaOBgxuYsR2mOgi7UTcY4nER3n_vvAHQQMyEpQQTk1_sbKtiyOHz12F29hGDttaYRDE77cztljM3wHrwRqRVmzvekXyw9zBV6kz8uhfxnwJAWgU4YVl0raMMc8lKB1OxgjWFvXwwH_fithNhvUTgGF9u7s/s1600/%D8%AC%D9%88%D8%B2%D9%8A%D9%81%20%D8%A8%D8%A7%D9%83%D8%A7%D8%B3%D9%88.png" },
            { n: "أمين أبو الفتح", p: "مدافع", num: 4, m: 4, g: 0, y: 1, r: 0, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjE-DZux1wLeqWSGoS24ZaGXD1Qy43uqdNGmlUM5wllZUphLdk61M2OgUYTeqOBuSjGUuh4q8zRuU6JLh8O3HBHPoF31coPMMSXzF7jv0VCr-eLNOpPzoXByKE9sGItgpceDzj5RpRZNktwpULyuMDxdm0zNDaNj36wLxMUqtV99NjSP3PIBDOApdWTAeY/s1600/%D8%A7%D9%94%D9%85%D9%8A%D9%86%20%D8%A7%D9%94%D8%A8%D9%88%20%D8%A7%D9%84%D9%81%D8%AA%D8%AD.png" },
            { n: "وليد الصبار", p: "وسط ميدان", num: 8, m: 3, g: 0, y: 0, r: 0, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN7511w-g5owduK1dR3JVqKONVgcIsO4NJoO6h_AmeqIIzFnUYDvNmaWeZLBQ04s7KsRQOw18Yt47-oLB3Ahh17JFfl0TivmkSgW3R6uFQBJlrgGxtbGssAZWngDtqYcjMojLmVlWGFDT359vWCZIZDAaaSsytuAt-ONMVtbCDSny5T0rFyuReerh2VW0/s1600/%D9%88%D9%84%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%B1.png" },
            { n: "محمد بوشواري", p: "مدافع", num: 2, m: 5, g: 0, y: 1, r: 0, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBZUKZEWdGj3dbvm2ym0kxAIt9Gkh8FDQnCr39WN0TVkHKavE1_yDOpqPtHgGLmi-qtaDolkd0RIzeWo2opdGR_9-zp6ZB31iXGepyaJeFfT8T3kqRYtm3vJrGDEYSkgqaUzHUmKJup_NsLA37WUgR2LiWPx89sq26cNzCj0zPORN2_5eAgFek8C6hUKo/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D8%A8%D9%88%D8%B4%D9%88%D8%A7%D8%B1%D9%8A.png" }
        ],
        // الفرق الأخرى جاهزة للتعبئة
        "rca": [], "far": [], "rsb": [], "mas": [], "fus": [], "ocs": [], "uts": [], 
        "husa": [], "mat": [], "sccm": [], "rcz": [], "codm": [], "irt": [], "dhj": [], "jss": [], "cayb": []
    },
    // ============================================
    // 4. الانتقالات والمباريات
    // ============================================
    "transfers": [
        // هنا يمكنك إضافة الانتقالات بنفس النمط لاحقاً
        { n: "مباي نيانغ", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png", date: "08-09-2024", from: "إمبولي", to: "wac", type: "حر" },
        { n: "أيوب العملود", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png", date: "15-08-2024", from: "wac", to: "بيرسبوليس", type: "حر" }
    ],

    "matches": [
        // أمثلة لمباريات (سيتم تفعيل الفلترة عليها تلقائياً)
        { round: 1, date: "30-08", time: "21:00", home: "wac", away: "mas", score: "1-0", stadium: "الحسن الثاني" },
        { round: 2, date: "05-09", time: "18:00", home: "mat", away: "wac", score: "1-1", stadium: "سانية الرمل" }
    ]
};
