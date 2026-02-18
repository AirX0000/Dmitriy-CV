// ═══════ PROFILE DATA — 3 LANGUAGES ═══════

const PROFILE = {
    en: {
        name: "Dmitriy Bogdanyuk",
        fullName: "Bogdanyuk Dmitriy Fedorovich",
        title: "Aircraft Maintenance Specialist",
        dob: "28.10.1985",
        location: "Tashkent, Uzbekistan",
        email: "",
        phone: "+998 33 158 22 72",
        badge: "Available for Opportunities",
        heroSubtitle: "18+ Years of Excellence in Aircraft Maintenance",
        bio: [
            { text: "I'm **Dmitriy Bogdanyuk**, an aviation maintenance engineer born on October 28, 1985, in Uzbekistan. My career in aircraft maintenance spans **over 18 years**, primarily at **Uzbekistan Airways** and its technical subsidiary, **Uzbekistan Airways Technics**.", strong: false },
            { text: "Starting as an electrician in 2004, I have steadily advanced through the ranks — from aircraft technician and engine specialist to a **6th-grade Fitter-Repairman**, the highest qualification level. My expertise covers base maintenance, engine overhaul, ground equipment servicing, and production preparation for complex aircraft systems.", strong: false },
            { text: "I hold a diploma in **Mechanical Processing Equipment & CNC Machine Adjustment** from the Tashkent Air Construction Professional College, combining theoretical knowledge with decades of practical, hands-on experience.", strong: false },
        ],
        cvSummary: "Highly skilled aviation maintenance engineer with over 18 years of progressive experience at Uzbekistan Airways and Uzbekistan Airways Technics. Proven track record spanning from entry-level electrician to the highest specialist grade (6th) in aircraft maintenance. Expertise in airframe systems, engine diagnostics, ground support equipment, CNC machine adjustment, and base maintenance operations.",
        stats: [
            { value: "18+", label: "Years Experience" },
            { value: "6th", label: "Specialist Grade" },
            { value: "✈️", label: "Uzbekistan Airways" }
        ],
        bento: [
            { icon: "⏱️", value: "18+", label: "Years of Experience" },
            { icon: "⭐", value: "Grade 6", label: "Highest Specialist Level" },
            { icon: "✈️", value: "UZB Airways", label: "National Aviation Company" },
            { icon: "🎓", value: "Certified", label: "CNC & Assembly Master" },
            { icon: "🔧", value: "Full-Cycle Maintenance", label: "From electrical systems and engine diagnostics to base maintenance operations", featured: true },
        ],
        sectionLabels: {
            about: "About Me",
            aboutTitle: "Precision. Safety. Excellence.",
            experience: "Career Journey",
            experienceTitle: "Professional Experience",
            experienceSubtitle: "A progressive career in aviation maintenance — from apprentice to top-grade specialist.",
            skills: "Expertise",
            skillsTitle: "Technical Skills",
            skillsSubtitle: "Core competencies developed over 18 years in aviation maintenance.",
            education: "Education",
            educationTitle: "Qualifications & Certifications",
            contact: "Get in Touch",
            contactTitle: "Let's Connect",
            contactSubtitle: "Interested in collaboration or have a question? Feel free to reach out.",
            downloadCV: "Download CV",
            learnMore: "Learn More",
            sendMessage: "Send Message",
            contactDetails: "Contact Details",
            yourName: "Your Name",
            yourEmail: "Your Email",
            yourMessage: "Your Message",
            messageSent: "Message Sent!",
            generating: "Generating your CV...",
        },
        experience: [
            {
                year: "2020 — 2022",
                position: "Fitter-Repairman, Grade 6",
                company: "Uzbekistan Airways Technics",
                department: "Base Maintenance Complex, Production Preparation",
                description: "Senior specialist in base maintenance. Responsible for complex aircraft system repairs, component overhaul, and production preparation. Highest Grade 6 qualification.",
                badge: "Grade 6 — Highest Level"
            },
            {
                year: "2017 — 2020",
                position: "Fitter-Repairman, Grade 6",
                company: "Uzbekistan Airways Technics / State Assets Management",
                department: "Western MRO Facility",
                description: "Awarded 6th grade — highest qualification. Performed heavy maintenance, structural repairs, and complex system overhauls.",
                badge: "Grade 6 Awarded"
            },
            {
                year: "2014 — 2017",
                position: "Fitter-Repairman, Grade 5",
                company: "Uzbekistan Airways Technics",
                department: "Aircraft Technical Operations",
                description: "Advanced to Grade 5. Handled aircraft system troubleshooting, component replacement, and scheduled maintenance across multiple aircraft types.",
                badge: "Grade 5"
            },
            {
                year: "2012 — 2014",
                position: "Fitter-Repairman, Grade 4",
                company: "Uzbekistan Airways Technics",
                department: "Aircraft Technical Operations, Western SZP",
                description: "Transitioned to fitter-repairman role. Maintenance, diagnostics, and repair of aircraft mechanical and hydraulic systems.",
                badge: "Grade 4"
            },
            {
                year: "2011 — 2012",
                position: "Ground Equipment Fitter, Grade 3",
                company: "Uzbekistan Airways Technics",
                department: "Ground Equipment Maintenance",
                description: "Maintained and repaired ground support equipment. Ensured operational readiness of towing vehicles, power units, and service platforms.",
                badge: null
            },
            {
                year: "2008 — 2011",
                position: "Aircraft Technician & Engine Specialist",
                company: "Uzbekistan Airways Technics",
                department: "Western MRO, Base Maintenance",
                description: "Engine diagnostics, overhaul procedures, and aircraft line maintenance at the technical maintenance division.",
                badge: "Engine Specialist"
            },
            {
                year: "2007 — 2008",
                position: "Aircraft Technician",
                company: "Uzbekistan Airways Technics",
                department: "Technical Maintenance Division",
                description: "Pre-flight inspections, routine maintenance, and safety compliance checks on the commercial fleet.",
                badge: null
            },
            {
                year: "2004 — 2007",
                position: "Electrician, Grade 4",
                company: "NAC Uzbekistan Airways — Aircraft Maintenance Base",
                department: "Production Preparation Workshop, Section 5",
                description: "First role in aviation. Electrical system inspections, wiring repairs, and component testing at the Aircraft Maintenance Base.",
                badge: "Career Start"
            }
        ],
        skills: [
            { icon: "✈️", name: "Aircraft Maintenance", desc: "Base maintenance, line checks, A/B/C/D checks on commercial fleet", level: 95 },
            { icon: "⚙️", name: "Engine Diagnostics", desc: "Turbofan engine inspection, overhaul, and repair", level: 90 },
            { icon: "🔧", name: "Mechanical Repair", desc: "Grade 6 fitter-repairman: hydraulic, pneumatic, structural", level: 95 },
            { icon: "🔌", name: "Electrical Systems", desc: "Aircraft wiring, avionics, power distribution, testing", level: 85 },
            { icon: "🖥️", name: "CNC Operations", desc: "Adjuster of instrumentation and numerical control machines", level: 80 },
            { icon: "📋", name: "Technical Documentation", desc: "Maintenance logs, compliance reports, airworthiness docs", level: 88 },
            { icon: "🛠️", name: "Ground Equipment", desc: "Service vehicles, power units, towing equipment", level: 85 },
            { icon: "🛡️", name: "Safety & Compliance", desc: "ICAO standards, safety protocols, QA procedures", level: 92 },
            { icon: "👥", name: "Teamwork", desc: "Cross-functional collaboration with engineering, QA, logistics", level: 90 },
        ],
        education: [
            {
                icon: "🎓",
                degree: "Diploma in Mechanical Processing Equipment",
                school: "Tashkent Air Construction Professional College",
                year: "2001 — 2004",
                details: "Diploma K № 054629. Qualified as Adjuster of Instrumentation and Programmed Numerical Control Machines. Profession: Master of Assembly Working."
            },
            {
                icon: "⭐",
                degree: "Grade 6 — Fitter-Repairman (Highest)",
                school: "Uzbekistan Airways Technics",
                year: "Awarded 2017",
                details: "Highest professional qualification. Mastery of complex aircraft system repair, structural maintenance, and overhaul operations."
            },
            {
                icon: "🔧",
                degree: "Grade 5 — Fitter-Repairman",
                school: "Uzbekistan Airways Technics",
                year: "Awarded 2014",
                details: "Advanced qualification in aircraft mechanical systems, component replacement, and scheduled maintenance."
            },
            {
                icon: "📜",
                degree: "Grade 4 — Fitter-Repairman",
                school: "Uzbekistan Airways Technics",
                year: "Awarded 2013",
                details: "Professional grade certifying competence in aircraft maintenance operations and repair protocols."
            }
        ]
    },

    ru: {
        name: "Дмитрий Богданюк",
        fullName: "Богданюк Дмитрий Фёдорович",
        title: "Специалист по техническому обслуживанию ВС",
        dob: "28.10.1985",
        location: "Ташкент, Узбекистан",
        email: "",
        phone: "+998 33 158 22 72",
        badge: "Открыт к предложениям",
        heroSubtitle: "18+ лет совершенства в обслуживании авиатехники",
        bio: [
            { text: "Я — **Дмитрий Богданюк**, инженер по техническому обслуживанию авиатехники, родился 28 октября 1985 года в Узбекистане. Мой стаж в авиационном обслуживании составляет **более 18 лет**, преимущественно в **НАК «Узбекистон хаво йўллари»** и её дочерней компании **Uzbekistan Airways Technics**.", strong: false },
            { text: "Начав карьеру электриком в 2004 году, я последовательно продвигался — от авиатехника и специалиста по двигателям до **слесаря-ремонтника 6-го разряда**, наивысшего квалификационного уровня. Мой опыт охватывает базовое обслуживание, капитальный ремонт двигателей, обслуживание наземного оборудования и подготовку производства.", strong: false },
            { text: "Имею диплом по специальности **«Механическая обработка оборудования и наладка станков с ЧПУ»** Ташкентского авиастроительного профессионального колледжа, сочетаю теоретические знания с многолетним практическим опытом.", strong: false },
        ],
        cvSummary: "Высококвалифицированный специалист по техническому обслуживанию ВС с более чем 18-летним прогрессивным опытом работы в НАК «Узбекистон хаво йўллари» и Uzbekistan Airways Technics. Подтверждённый карьерный рост от электрика до слесаря-ремонтника наивысшего 6-го разряда. Экспертиза в области авиационных систем, диагностики двигателей, наземного оборудования, наладки станков с ЧПУ и базового обслуживания.",
        stats: [
            { value: "18+", label: "Лет опыта" },
            { value: "6-й", label: "Разряд" },
            { value: "✈️", label: "Узбекистон хаво йўллари" }
        ],
        bento: [
            { icon: "⏱️", value: "18+", label: "Лет опыта" },
            { icon: "⭐", value: "6 разряд", label: "Наивысший уровень" },
            { icon: "✈️", value: "НАК УзА", label: "Национальная Авиакомпания" },
            { icon: "🎓", value: "Диплом", label: "Наладчик ЧПУ и мастер" },
            { icon: "🔧", value: "Полный цикл ТО", label: "От электросистем и диагностики двигателей до базового обслуживания", featured: true },
        ],
        sectionLabels: {
            about: "Обо мне",
            aboutTitle: "Точность. Безопасность. Совершенство.",
            experience: "Карьера",
            experienceTitle: "Профессиональный опыт",
            experienceSubtitle: "Прогрессивная карьера в авиатехническом обслуживании — от ученика до специалиста высшего разряда.",
            skills: "Компетенции",
            skillsTitle: "Технические навыки",
            skillsSubtitle: "Ключевые компетенции, развитые за 18 лет в авиационном обслуживании.",
            education: "Образование",
            educationTitle: "Квалификации и сертификаты",
            contact: "Связаться",
            contactTitle: "Давайте свяжемся",
            contactSubtitle: "Заинтересованы в сотрудничестве или есть вопрос? Свяжитесь со мной.",
            downloadCV: "Скачать резюме",
            learnMore: "Подробнее",
            sendMessage: "Отправить",
            contactDetails: "Контактные данные",
            yourName: "Ваше имя",
            yourEmail: "Ваш email",
            yourMessage: "Ваше сообщение",
            messageSent: "Отправлено!",
            generating: "Генерация резюме...",
        },
        experience: [
            {
                year: "2020 — 2022",
                position: "Слесарь-ремонтник, 6-й разряд",
                company: "Uzbekistan Airways Technics",
                department: "Комплекс базового обслуживания, подготовка производства",
                description: "Старший специалист базового обслуживания. Сложный ремонт авиасистем, капитальный ремонт компонентов. Наивысший 6-й разряд.",
                badge: "6-й разряд — высший"
            },
            {
                year: "2017 — 2020",
                position: "Слесарь-ремонтник, 6-й разряд",
                company: "Uzbekistan Airways Technics / Управление госактивами",
                department: "Западное ТО",
                description: "Присвоен 6-й разряд — наивысшая квалификация. Тяжёлое обслуживание, структурный ремонт, капитальный ремонт систем.",
                badge: "6-й разряд присвоен"
            },
            {
                year: "2014 — 2017",
                position: "Слесарь-ремонтник, 5-й разряд",
                company: "Uzbekistan Airways Technics",
                department: "Авиатехнические операции",
                description: "5-й разряд. Диагностика авиасистем, замена компонентов, плановое ТО различных типов ВС.",
                badge: "5-й разряд"
            },
            {
                year: "2012 — 2014",
                position: "Слесарь-ремонтник, 4-й разряд",
                company: "Uzbekistan Airways Technics",
                department: "АТО, Западное СЗП",
                description: "Переход на должность слесаря-ремонтника. ТО, диагностика и ремонт механических и гидравлических систем ВС.",
                badge: "4-й разряд"
            },
            {
                year: "2011 — 2012",
                position: "Слесарь наземного оборудования, 3-й разряд",
                company: "Uzbekistan Airways Technics",
                department: "Цех наземного оборудования",
                description: "Обслуживание и ремонт наземного оборудования. Буксировочные машины, энергоустановки, платформы.",
                badge: null
            },
            {
                year: "2008 — 2011",
                position: "Авиатехник-двигателист",
                company: "Uzbekistan Airways Technics",
                department: "Западное УТО, базовое обслуживание",
                description: "Диагностика двигателей, капитальный ремонт, линейное ТО воздушных судов.",
                badge: "Двигателист"
            },
            {
                year: "2007 — 2008",
                position: "Авиатехник",
                company: "Uzbekistan Airways Technics",
                department: "Отдел технического обслуживания",
                description: "Предполётные осмотры, плановое обслуживание, проверки безопасности коммерческих ВС.",
                badge: null
            },
            {
                year: "2004 — 2007",
                position: "Электрик, 4-й разряд",
                company: "НАК «Узбекистон хаво йўллари» — АТБ",
                department: "Цех подготовки производства, участок 5",
                description: "Первая должность в авиации. Осмотр электросистем, ремонт проводки, тестирование компонентов.",
                badge: "Начало карьеры"
            }
        ],
        skills: [
            { icon: "✈️", name: "Обслуживание ВС", desc: "Базовое ТО, линейные проверки, A/B/C/D чеки", level: 95 },
            { icon: "⚙️", name: "Диагностика двигателей", desc: "Осмотр, капремонт турбовентиляторных двигателей", level: 90 },
            { icon: "🔧", name: "Механический ремонт", desc: "6-й разряд: гидравлика, пневматика, структуры", level: 95 },
            { icon: "🔌", name: "Электросистемы", desc: "Проводка ВС, авионика, электроснабжение", level: 85 },
            { icon: "🖥️", name: "Станки с ЧПУ", desc: "Наладчик станков с числовым программным управлением", level: 80 },
            { icon: "📋", name: "Техдокументация", desc: "Журналы ТО, отчёты, документация лётной годности", level: 88 },
            { icon: "🛠️", name: "Наземное оборудование", desc: "Спецтранспорт, энергоустановки, буксировщики", level: 85 },
            { icon: "🛡️", name: "Безопасность", desc: "Стандарты ИКАО, протоколы безопасности, контроль качества", level: 92 },
            { icon: "👥", name: "Командная работа", desc: "Взаимодействие с инженерами, ОТК, логистикой", level: 90 },
        ],
        education: [
            {
                icon: "🎓",
                degree: "Диплом — Механическая обработка оборудования",
                school: "Ташкентский авиастроительный профессиональный колледж",
                year: "2001 — 2004",
                details: "Диплом K № 054629. Квалификация: наладчик КИП и станков с ЧПУ. Профессия: мастер сборочных работ."
            },
            {
                icon: "⭐",
                degree: "6-й разряд — Слесарь-ремонтник (высший)",
                school: "Uzbekistan Airways Technics",
                year: "Присвоен 2017",
                details: "Наивысшая профессиональная квалификация. Мастерство сложного ремонта авиасистем, структурного обслуживания."
            },
            {
                icon: "🔧",
                degree: "5-й разряд — Слесарь-ремонтник",
                school: "Uzbekistan Airways Technics",
                year: "Присвоен 2014",
                details: "Продвинутая квалификация в механических системах ВС, замене компонентов и плановом обслуживании."
            },
            {
                icon: "📜",
                degree: "4-й разряд — Слесарь-ремонтник",
                school: "Uzbekistan Airways Technics",
                year: "Присвоен 2013",
                details: "Профессиональный разряд, подтверждающий компетенцию в обслуживании и ремонте ВС."
            }
        ]
    },

    uz: {
        name: "Dmitriy Bogdanyuk",
        fullName: "Bogdanyuk Dmitriy Fyodorovich",
        title: "Havo kemalarini texnik xizmat ko'rsatish mutaxassisi",
        dob: "28.10.1985",
        location: "Toshkent, O'zbekiston",
        email: "",
        phone: "+998 33 158 22 72",
        badge: "Takliflar uchun ochiq",
        heroSubtitle: "Aviatsiya texnik xizmatida 18+ yillik tajriba",
        bio: [
            { text: "Men — **Dmitriy Bogdanyuk**, O'zbekistonda 1985-yil 28-oktabrda tug'ilgan aviatsiya texnik xizmati muhandisiman. Mening kasbiy tajribam **18 yildan ortiq** bo'lib, asosan **O'zbekiston Havo Yo'llari** milliy aviakompaniyasi va uning sho'ba korxonasi **Uzbekistan Airways Technics**da ishlagan.", strong: false },
            { text: "2004-yilda elektrik sifatida boshlagan kareramda aviatsiya texnigi va dvigatel mutaxassisidan to **6-razryadli chilangar-ta'mirchi**gacha — eng yuqori malaka darajasigacha ko'tarildim. Tajribam bazaviy texnik xizmat, dvigatellarni ta'mirlash, yer uskunalarini xizmat ko'rsatish va murakkab aviatsiya tizimlarini ishlab chiqarishni tayyorlashni qamrab oladi.", strong: false },
            { text: "Toshkent aviaqurilish kasb-hunar kollejida **mexanik ishlov berish uskunalari va raqamli boshqaruvli dastgohlarni sozlash** bo'yicha diplomga egaman.", strong: false },
        ],
        cvSummary: "O'zbekiston Havo Yo'llari va Uzbekistan Airways Technics'da 18 yildan ortiq tajribaga ega yuqori malakali aviatsiya texnik xizmati muhandisi. Elektrikdan chilangar-ta'mirchining eng yuqori 6-razryadigacha tasdiqlangan karera o'sishi. Aviatsiya tizimlari, dvigatel diagnostikasi, yer uskunalari, raqamli boshqaruvli dastgohlar va bazaviy texnik xizmat sohasida ekspert.",
        stats: [
            { value: "18+", label: "Yillik tajriba" },
            { value: "6-chi", label: "Razryad" },
            { value: "✈️", label: "O'zbekiston HY" }
        ],
        bento: [
            { icon: "⏱️", value: "18+", label: "Yillik tajriba" },
            { icon: "⭐", value: "6-razryad", label: "Eng yuqori daraja" },
            { icon: "✈️", value: "O'zHY", label: "Milliy Aviakompaniya" },
            { icon: "🎓", value: "Diplom", label: "CNC va yig'ish ustasi" },
            { icon: "🔧", value: "To'liq texnik xizmat", label: "Elektr tizimlar va dvigatel diagnostikasidan bazaviy xizmatgacha", featured: true },
        ],
        sectionLabels: {
            about: "Men haqimda",
            aboutTitle: "Aniqlik. Xavfsizlik. Mukammallik.",
            experience: "Karera yo'li",
            experienceTitle: "Kasbiy tajriba",
            experienceSubtitle: "Aviatsiya texnik xizmatida progressiv karera — shogirddan oliy razryad mutaxassisigacha.",
            skills: "Malakalar",
            skillsTitle: "Texnik ko'nikmalar",
            skillsSubtitle: "Aviatsiya texnik xizmatida 18 yil davomida shakllangan asosiy kompetentsiyalar.",
            education: "Ta'lim",
            educationTitle: "Malaka va sertifikatlar",
            contact: "Bog'lanish",
            contactTitle: "Bog'lanaylik",
            contactSubtitle: "Hamkorlik yoki savolingiz bormi? Menga yozing.",
            downloadCV: "Rezyumeni yuklab olish",
            learnMore: "Batafsil",
            sendMessage: "Yuborish",
            contactDetails: "Kontakt ma'lumotlari",
            yourName: "Ismingiz",
            yourEmail: "Emailingiz",
            yourMessage: "Xabaringiz",
            messageSent: "Yuborildi!",
            generating: "Rezyume tayyorlanmoqda...",
        },
        experience: [
            {
                year: "2020 — 2022",
                position: "Chilangar-ta'mirchi, 6-razryad",
                company: "Uzbekistan Airways Technics",
                department: "Bazaviy xizmat ko'rsatish kompleksi",
                description: "Bazaviy texnik xizmatda katta mutaxassis. Murakkab aviatsiya tizimlarini ta'mirlash, komponentlarni kapital ta'mirlash. Eng yuqori 6-razryad.",
                badge: "6-razryad — eng yuqori"
            },
            {
                year: "2017 — 2020",
                position: "Chilangar-ta'mirchi, 6-razryad",
                company: "Uzbekistan Airways Technics / Davlat aktivlarini boshqarish",
                department: "G'arbiy TXM",
                description: "6-razryad berildi — eng yuqori malaka. Og'ir ta'mirlash, strukturaviy ta'mir, murakkab tizimlarni kapital ta'mirlash.",
                badge: "6-razryad berildi"
            },
            {
                year: "2014 — 2017",
                position: "Chilangar-ta'mirchi, 5-razryad",
                company: "Uzbekistan Airways Technics",
                department: "Aviatsiya texnik operatsiyalari",
                description: "5-razryad. Aviatsiya tizimlarini diagnostika qilish, komponent almashtirish, rejali texnik xizmat.",
                badge: "5-razryad"
            },
            {
                year: "2012 — 2014",
                position: "Chilangar-ta'mirchi, 4-razryad",
                company: "Uzbekistan Airways Technics",
                department: "ATO, G'arbiy SZP",
                description: "Chilangar-ta'mirchi lavozimiga o'tish. Mexanik va gidravlik tizimlarni ta'mirlash va diagnostika.",
                badge: "4-razryad"
            },
            {
                year: "2011 — 2012",
                position: "Yer uskunalari chilangari, 3-razryad",
                company: "Uzbekistan Airways Technics",
                department: "Yer uskunalari sexi",
                description: "Yer uskunalarini ta'mirlash va xizmat ko'rsatish. Tortish mashinalari, energiya qurilmalari.",
                badge: null
            },
            {
                year: "2008 — 2011",
                position: "Aviatsiya texnigi — dvigatelchi",
                company: "Uzbekistan Airways Technics",
                department: "G'arbiy UTO, bazaviy xizmat",
                description: "Dvigatel diagnostikasi, kapital ta'mirlash, havo kemalarini liniyaviy texnik xizmati.",
                badge: "Dvigatel mutaxassisi"
            },
            {
                year: "2007 — 2008",
                position: "Aviatsiya texnigi",
                company: "Uzbekistan Airways Technics",
                department: "Texnik xizmat bo'limi",
                description: "Parvoz oldi ko'riklari, rejali texnik xizmat, tijorat havo kemalari xavfsizlik tekshiruvlari.",
                badge: null
            },
            {
                year: "2004 — 2007",
                position: "Elektrik, 4-razryad",
                company: "MAK «O'zbekiston havo yo'llari» — ATB",
                department: "Ishlab chiqarishni tayyorlash sexi, 5-uchastka",
                description: "Aviatsiyada birinchi ish. Elektr tizimlarni tekshirish, simlarni ta'mirlash, komponentlarni sinovdan o'tkazish.",
                badge: "Karera boshlanishi"
            }
        ],
        skills: [
            { icon: "✈️", name: "HK texnik xizmati", desc: "Bazaviy TX, liniyaviy tekshiruvlar, A/B/C/D cheklar", level: 95 },
            { icon: "⚙️", name: "Dvigatel diagnostikasi", desc: "Turboventilyator dvigatellarni tekshirish va ta'mirlash", level: 90 },
            { icon: "🔧", name: "Mexanik ta'mirlash", desc: "6-razryad: gidravlika, pnevmatika, strukturalar", level: 95 },
            { icon: "🔌", name: "Elektr tizimlar", desc: "HK simlari, avionika, elektr ta'minoti", level: 85 },
            { icon: "🖥️", name: "CNC dastgohlari", desc: "Raqamli boshqaruvli dastgohlar sozlovchisi", level: 80 },
            { icon: "📋", name: "Texnik hujjatlar", desc: "TX jurnallari, hisobotlar, parvozga yaroqlilik hujjatlari", level: 88 },
            { icon: "🛠️", name: "Yer uskunalari", desc: "Maxsus transport, energiya qurilmalari, tortish mashinalari", level: 85 },
            { icon: "🛡️", name: "Xavfsizlik", desc: "ICAO standartlari, xavfsizlik protokollari, sifat nazorati", level: 92 },
            { icon: "👥", name: "Jamoaviy ish", desc: "Muhandislar, STN, logistika bilan hamkorlik", level: 90 },
        ],
        education: [
            {
                icon: "🎓",
                degree: "Diplom — Mexanik ishlov berish uskunalari",
                school: "Toshkent aviaqurilish kasb-hunar kolleji",
                year: "2001 — 2004",
                details: "Diplom K № 054629. Malaka: KIA va RBD dastgohlar sozlovchisi. Kasb: yig'ish ishlari ustasi."
            },
            {
                icon: "⭐",
                degree: "6-razryad — Chilangar-ta'mirchi (eng yuqori)",
                school: "Uzbekistan Airways Technics",
                year: "2017-yilda berilgan",
                details: "Eng yuqori kasbiy malaka. Murakkab aviatsiya tizimlarini ta'mirlash va kapital ta'mirlash mahorati."
            },
            {
                icon: "🔧",
                degree: "5-razryad — Chilangar-ta'mirchi",
                school: "Uzbekistan Airways Technics",
                year: "2014-yilda berilgan",
                details: "Havo kemalari mexanik tizimlarida ilg'or malaka."
            },
            {
                icon: "📜",
                degree: "4-razryad — Chilangar-ta'mirchi",
                school: "Uzbekistan Airways Technics",
                year: "2013-yilda berilgan",
                details: "Aviatsiya texnik xizmati va ta'mirlash protokollarida kompetentsiyani tasdiqlovchi razryad."
            }
        ]
    }
};

export default PROFILE;
