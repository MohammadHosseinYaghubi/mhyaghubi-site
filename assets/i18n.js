/**
 * BILINGUAL I18N ENGINE (English & Persian / فارسی)
 * Handles instant language switching, RTL/LTR layout toggle, and persistent preference.
 */

const translations = {
  en: {
    // Navigation
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_products: "Products & Services",
    nav_contact: "Contact",
    nav_get_in_touch: "Get in Touch",
    lang_toggle_label: "فا | فارسی",

    // Hero Section
    hero_status: "AVAILABLE FOR ARCHITECTURE & HIGH-IMPACT BACKEND",
    hero_greeting: "Hey there!",
    hero_name: "I'm Mohammad Hossein Yaghubi",
    hero_title: "Creative Django Developer",
    hero_subtitle_role: "& Software Architect",
    hero_desc: "Specializing in scalable, high-throughput backend services, asynchronous task orchestrations, and clean domain-driven architecture. Bridging computational electrical rigor with modern Python craft to build ultra-resilient web ecosystems.",
    stat_stacks: "Enterprise Stacks",
    stat_solid: "SOLID & Clean Code",
    stat_latency: "ORM Query Latency",
    btn_explore_projects: "Explore Projects ↓",
    btn_contact_me: "Contact Me",
    email_copied_toast: "Email copied to clipboard!",
    
    // Terminal
    terminal_tab_title: "views.py — portfolio_core",
    terminal_badge: "Django 5.x",
    terminal_run_btn: "Run Check",
    terminal_copy_btn: "Copy Code",
    terminal_status_ok: "OK: 0 ISSUES",
    power_eng_title: "Power Engineering",
    power_eng_sub: "Analytical Rigor Applied to Software",
    terminal_running_msg: "Running python manage.py check --deploy...",
    terminal_success_msg: "System check identified no issues (0 silenced). Ready for deployment.",

    // Section 01: About
    sec1_tag: "01 // PROFILE OVERVIEW",
    sec1_title: "About & Core Foundation",
    sec1_subtitle: "Blending mathematical system discipline from electrical power engineering with modern, decoupled backend development.",
    philosophy_tag: "Philosophy & Standards",
    philosophy_title: "Clean Architecture & Systemic Engineering",
    philosophy_desc: "I craft backends that prioritize long-term maintainability, fault tolerance, and expressive domain modeling. Writing Python is more than just delivering functioning endpoints: it is about modular SOLID abstractions, predictable database concurrency, and clean API contracts that empower front-end and cross-platform teams.",
    feature_solid_title: "SOLID & DRY",
    feature_solid_desc: "Decoupled logic & testable modules",
    feature_agile_title: "Agile Flow",
    feature_agile_desc: "Rapid iterations, stable contracts",
    feature_e2e_title: "End-to-End",
    feature_e2e_desc: "From models to seamless deployments",
    academic_tag: "Academic Credentials",
    academic_degree: "Bachelor of Power Engineering",
    academic_uni: "Sadjad University of Technology",
    academic_desc: "Rigorous foundation in advanced mathematical modeling, transient system dynamics, and algorithmic problem solving. Translated daily into complex backend state machines and optimized data pipelines.",
    academic_verified: "Analytical Foundation Verified",

    // Section 02: Experience
    sec2_tag: "02 // JOURNEY & IMPACT",
    sec2_title: "Professional Experience",
    sec2_subtitle: "Proven track record building commercial software, real-world educational tools, and custom client platforms.",
    exp1_type: "Holding / Enterprise",
    exp1_role: "Core Team",
    exp1_company: "ATI Holding",
    exp1_title: "Backend & Django Architecture",
    exp1_desc: "Architected mission-critical backend micro-services, consolidated corporate databases, and designed resilient REST interfaces powering organizational tools.",
    exp1_b1: "Django REST API optimization & schema design",
    exp1_b2: "Relational normalization with PostgreSQL & caching",
    
    exp2_type: "EdTech Platform",
    exp2_role: "Software Dev",
    exp2_company: "Darsman",
    exp2_title: "Python & Web Development",
    exp2_desc: "Spearheaded interactive educational platform capabilities, automated learning management system modules, and built developer tutorials.",
    exp2_b1: "Interactive Python web features & modules",
    exp2_b2: "Curriculum technical tools & student portals",

    exp3_type: "Global Solutions",
    exp3_role: "Independent",
    exp3_company: "Freelancing",
    exp3_title: "Full-Stack Solutions & Custom Systems",
    exp3_desc: "Delivering bespoke web tools, robust financial algorithm indicators (PineScript), custom web scrapers, and cross-platform desktop UI tools.",
    exp3_b1: "End-to-end bespoke customer software platforms",
    exp3_b2: "Algorithmic trading scripts & data scrapers",

    // Section 03: Skills
    sec3_tag: "03 // TECHNICAL ARSENAL",
    sec3_title: "Categorized Skills & Stack",
    sec3_subtitle: "Pragmatically chosen technologies tested across high-concurrency production and interactive interfaces.",
    skill1_title: "Backend & Frameworks",
    skill1_desc: "High performance, DRY architectures and RESTful service design.",
    skill2_title: "Databases & Storage",
    skill2_desc: "ACID compliance, query plan optimization and flexible document stores.",
    skill3_title: "Frontend Interfaces",
    skill3_desc: "Responsive layouts, fluid ergonomics, and semantic markup.",
    skill4_title: "Cross Platform & Mobile",
    skill4_desc: "Native-feeling desktop GUI utilities and responsive mobile clients.",
    skill5_title: "Specialized & Analytics",
    skill5_desc: "High-speed content harvesting and technical financial indicators.",
    skill6_title: "Engineering Rigor",
    skill6_desc: "Sustainable codebases designed to evolve without technical debt.",

    // Section 04: Projects
    sec4_tag: "04 // SHIPPED SOLUTIONS",
    sec4_title: "Featured Projects",
    sec4_subtitle: "Production deployments crafted with clean Python patterns, integrated database models, and resilient runtime performance.",
    proj1_badge: "Live Production v1.8.4",
    proj1_sub: "FULL-STACK DJANGO APP",
    proj1_title: "Museum Garden",
    proj1_quote: "\"The best site for ever\" — A full-stack web destination showcasing gardens, curated botanical exhibitions, and cultural tours. Featuring custom administrative tooling, dynamic content indexing, and frictionless user interaction.",
    proj1_btn: "View Live Project ↗",
    proj1_host: "Hosted at mhyaghubi.pythonanywhere.com",
    
    proj2_badge: "Algorithmic & Scraper",
    proj2_sub: "TRADINGVIEW & AUTOMATION",
    proj2_title: "AlphaScript & Scraper Suite",
    proj2_quote: "Custom quantitative trading indicators formulated on PineScript coupled with automated Python scrapers collecting live market signals for asynchronous ingestion.",
    proj2_btn: "Order / Inquire Architecture →",

    // Section 05: Contact & Connect
    sec5_tag: "05 // LET'S BUILD TOGETHER",
    sec5_title: "Contact & Connect",
    sec5_subtitle: "Whether you need a high-scale Django backend, database tuning, automated pipelines, or end-to-end full-stack consulting, let's start a conversation.",
    direct_mailbox: "Direct Mailbox",
    btn_copy_email: "Copy Email",
    follow_me: "FOLLOW ME HERE",
    form_send_header: "Send a Message",
    form_response_time: "I typically respond within 24 hours.",
    lbl_your_name: "Your Name",
    lbl_your_email: "Your Email",
    lbl_project_scope: "Project Scope / Subject",
    lbl_message: "Message",
    ph_name: "e.g. Alex Mercer",
    ph_email: "e.g. alex@enterprise.com",
    ph_scope: "e.g. High-Throughput Django REST API Consultation",
    ph_message: "Describe your architecture requirements, timelines, or questions...",
    btn_send_message: "Send Message ↗",
    btn_send_telegram: "Order via Telegram ✈",

    // Telegram Ordering Card
    tg_card_title: "Direct Telegram Ordering & Instant Hire",
    tg_card_desc: "Need immediate sprint kickoff or architectural review? Launch a pre-configured inquiry directly in Telegram for immediate response.",
    tg_btn_action: "Launch Telegram Order",

    // Products Page Specific
    products_page_tag: "CATALOG & SERVICES",
    products_page_title: "Shipped Solutions & Engineering Packages",
    products_page_subtitle: "Explore ready-to-deploy platforms, specialized indicators, and customized Django backend architecture packages.",
    tab_all: "All Solutions",
    tab_django: "Django & Backend",
    tab_trading: "PineScript & Trading",
    tab_scraping: "Scraping & Automation",
    tab_crossplatform: "Cross-Platform & GUI",
    btn_order_solution: "Order / Customize via Telegram",
    btn_view_specs: "View Architecture Specs",

    // About Page Specific
    about_page_tag: "ARCHITECTURAL PROFILE",
    about_page_title: "Engineering Roots & System Discipline",
    about_page_subtitle: "A detailed look into the methodology, electrical engineering foundation, and backend architectural standards that govern my software delivery.",
    
    // Contact Page Specific
    contact_page_tag: "COLLABORATION & SPRINT INTAKE",
    contact_page_title: "Hire, Order & Consult",
    contact_page_subtitle: "Choose your preferred channel: structured Telegram project dispatch or direct email correspondence.",
    select_service_type: "Select Service Type",
    opt_django_backend: "Django Scalable Backend Architecture",
    opt_rest_api: "RESTful API Design & ORM Optimization",
    opt_pinescript: "Custom TradingView PineScript Indicator",
    opt_scraping: "Asynchronous Web Scraping & Telegram Bot",
    opt_fullstack: "End-to-End Full-Stack Web Platform",
    opt_consultation: "Code Review & Database Optimization",
    select_urgency: "Project Urgency / Timeline",
    opt_immediate: "Immediate Sprint Kickoff (High Priority)",
    opt_normal: "Standard Delivery (2-4 Weeks)",
    opt_flexible: "Flexible Consultation & Planning",
    
    // Footer
    footer_desc: "Architecting high-concurrency backend services, asynchronous pipelines, and reactive technical web platforms.",
    footer_django_rigor: "Designed & Engineered with Django Rigor",
    footer_copyright: "© 2025 Mohammad Hossein Yaghubi. All rights reserved."
  },

  fa: {
    // Navigation
    nav_about: "درباره من",
    nav_skills: "مهارت‌ها",
    nav_experience: "سوابق کاری",
    nav_projects: "پروژه‌ها",
    nav_products: "محصولات و خدمات",
    nav_contact: "ارتباط و سفارش",
    nav_get_in_touch: "ارتباط مستقیم",
    lang_toggle_label: "EN | English",

    // Hero Section
    hero_status: "آماده برای معماری بک‌اند و سیستم‌های مقیاس‌پذیر",
    hero_greeting: "درود!",
    hero_name: "من محمدحسین یعقوبی هستم",
    hero_title: "توسعه‌دهنده خلاق جنگو",
    hero_subtitle_role: "و معمار نرم‌افزار",
    hero_desc: "تخصص در توسعه سرویس‌های مقیاس‌پذیر بک‌اند با توان پردازش بالا، ارکستراسیون تسک‌های ناهمگام و معماری تمیز دامنه-محور. پیوند انضباط تحلیلی مهندسی برق قدرت با هنر مدرن پایتون برای ساخت سیستم‌های وب فوق‌العاده پایدار.",
    stat_stacks: "استک سازمانی تجاری",
    stat_solid: "کدنویسی تمیز و SOLID",
    stat_latency: "تاخیر کوئری‌های ORM",
    btn_explore_projects: "مشاهده پروژه‌ها ↓",
    btn_contact_me: "تماس با من",
    email_copied_toast: "آدرس ایمیل با موفقیت کپی شد!",

    // Terminal
    terminal_tab_title: "views.py — هسته_پورتفولیو",
    terminal_badge: "جنگو نسخه ۵",
    terminal_run_btn: "اجرای بررسی",
    terminal_copy_btn: "کپی کد",
    terminal_status_ok: "بدون خطا: ۰ مشکل",
    power_eng_title: "مهندسی برق قدرت",
    power_eng_sub: "دقت و انضباط تحلیلی در مهندسی نرم‌افزار",
    terminal_running_msg: "در حال بررسی وضعیت استقرار با python manage.py check --deploy...",
    terminal_success_msg: "بررسی سامانه هیچ مشکلی نیافت (۰ مورد نادیده گرفته شده). سیستم آماده بهره‌برداری است.",

    // Section 01: About
    sec1_tag: "۰۱ // معرفی و مبانی مهندسی",
    sec1_title: "درباره من و اصول معماری",
    sec1_subtitle: "تلفیق انضباط ریاضی سیستم‌های مهندسی برق قدرت با توسعه مدرن و ماژولار بک‌اند.",
    philosophy_tag: "فلسفه و استانداردهای توسعه",
    philosophy_title: "معماری تمیز و مهندسی سیستماتیک",
    philosophy_desc: "من سرویس‌های بک‌اندی را توسعه می‌دهم که نگهداری طولانی‌مدت، تحمل‌پذیری خطا (Fault Tolerance) و مدل‌سازی صریح دامنه کسب‌وکار را در اولویت قرار می‌دهند. کدنویسی پایتون برای من فراتر از ارائه چند اندپوینت است؛ ساخت انتزاع‌های ماژولار مبتنی بر SOLID، همزمانی پایدار دیتابیس و قراردادهای دقیق API است که تیم‌های فرانت‌اند را توانمند می‌سازد.",
    feature_solid_title: "اصول SOLID و DRY",
    feature_solid_desc: "منطق تفکیک‌شده و ماژول‌های کاملاً آزمون‌پذیر",
    feature_agile_title: "فرآیند چابک",
    feature_agile_desc: "تکرارهای سریع و قراردادهای پایدار API",
    feature_e2e_title: "سرتاسری (End-to-End)",
    feature_e2e_desc: "از طراحی مدل تا دپلویمنت روان و پایدار",
    academic_tag: "تحصیلات دانشگاهی",
    academic_degree: "کارشناسی مهندسی برق - قدرت",
    academic_uni: "دانشگاه صنعتی سجاد مشهد",
    academic_desc: "پایه‌ای قدرتمند در مدل‌سازی ریاضی پیشرفته، دینامیک سیستم‌های گذرا و حل الگوریتمی مسائل؛ مبانی که هر روزه در طراحی ماشین‌های حالت پیچیده بک‌اند و خطوط انتقال داده بهینه به کار گرفته می‌شوند.",
    academic_verified: "مبانی تحلیلی مهندسی تأیید شده",

    // Section 02: Experience
    sec2_tag: "۰۲ // مسیر شغلی و تجارب",
    sec2_title: "سوابق کاری حرفه‌ای",
    sec2_subtitle: "سابقه اثبات‌شده در توسعه نرم‌افزارهای تجاری، ابزارهای آموزشی واقعی و سامانه‌های سفارشی.",
    exp1_type: "هلدینگ / سازمان",
    exp1_role: "تیم اصلی",
    exp1_company: "هلدینگ آتی",
    exp1_title: "معماری بک‌اند و جنگو",
    exp1_desc: "معماری میکروسرویس‌های حساس بک‌اند، تجمیع پایگاه‌های داده سازمانی و طراحی رابط‌های پایدار REST برای ابزارهای سازمانی.",
    exp1_b1: "بهینه‌سازی جنگو REST API و طراحی اسکیما",
    exp1_b2: "نرمال‌سازی رابطه‌ای با PostgreSQL و کشینگ",

    exp2_type: "پلتفرم آموزشی",
    exp2_role: "توسعه‌دهنده نرم‌افزار",
    exp2_company: "درسمن (Darsman)",
    exp2_title: "توسعه وب و پایتون",
    exp2_desc: "راهبری امکانات تعاملی پلتفرم آموزشی، ماژول‌های خودکار سامانه مدیریت یادگیری (LMS) و تدوین آموزش‌های تخصصی برنامه‌نویسی.",
    exp2_b1: "قابلیت‌ها و ماژول‌های تعاملی پایتون برای وب",
    exp2_b2: "ابزارهای فنی سرفصل‌ها و پورتال دانشجویان",

    exp3_type: "راهکارهای بین‌المللی",
    exp3_role: "مستقل",
    exp3_company: "فریلنسری",
    exp3_title: "سامانه‌های سفارشی و فول‌استک",
    exp3_desc: "ارائه ابزارهای وب اختصاصی، اندیکاتورهای الگوریتمی پیشرفته بازارهای مالی (PineScript)، اسکریپت‌های اسکرپ داده و ابزارهای چندسکویی.",
    exp3_b1: "سامانه‌های سفارشی سرتاسری نرم‌افزار برای مشتریان",
    exp3_b2: "اسکریپت‌های معاملاتی الگوریتمی و اسکرپر داده",

    // Section 03: Skills
    sec3_tag: "۰۳ // پشته فنی و جعبه‌ابزار",
    sec3_title: "مهارت‌ها و فناوری‌های تفکیک‌شده",
    sec3_subtitle: "ابزارها و فناوری‌های عمل‌گرایانه، آزموده شده در محیط‌های تولیدی با همزمانی بالا.",
    skill1_title: "بک‌اند و فریم‌ورک‌ها",
    skill1_desc: "معماری با کارایی بالا، اصولی و طراحی تمیز سرویس‌های RESTful.",
    skill2_title: "پایگاه‌های داده و ذخیره‌سازی",
    skill2_desc: "پایبندی به اصول ACID، بهینه‌سازی پلن کوئری و مخازن داده منعطف.",
    skill3_title: "رابط‌های کاربری فرانت‌اند",
    skill3_desc: "چیدمان‌های واکنش‌گرا، ارگونومی روان و ساختار معنایی استاندارد.",
    skill4_title: "چندسکویی و موبایل",
    skill4_desc: "ابزارهای دسکتاپ بومی و اپلیکیشن‌های موبایل روان و واکنش‌گرا.",
    skill5_title: "تحلیل تخصصی و داده‌کاوی",
    skill5_desc: "جمع‌آوری داده‌ها با سرعت بالا و اندیکاتورهای فنی بازارهای مالی.",
    skill6_title: "انضباط مهندسی نرم‌افزار",
    skill6_desc: "کدبیس‌های پایدار که بدون انباشت بدهی فنی (Technical Debt) مقیاس می‌شوند.",

    // Section 04: Projects
    sec4_tag: "۰۴ // پروژه‌ها و خروجی‌ها",
    sec4_title: "پروژه‌های شاخص و برتر",
    sec4_subtitle: "استقرارهای تولیدی ساخته شده با الگوهای تمیز پایتون، مدل‌های دیتابیس یکپارچه و کارایی تاب‌آور.",
    proj1_badge: "سامانه فعال تولیدی نسخه ۱.۸.۴",
    proj1_sub: "اپلیکیشن فول‌استک جنگو",
    proj1_title: "باغ موزه (Museum Garden)",
    proj1_quote: "«بهترین سامانه تا ابد» — مقصدی آنلاین برای معرفی باغ‌ها، نمایشگاه‌های گیاه‌شناسی و تورهای فرهنگی. همراه با پنل اختصاصی مدیریت، شاخص‌گذاری پویای محتوا و تعامل بی‌نقص کاربر.",
    proj1_btn: "مشاهده وب‌سایت فعال ↗",
    proj1_host: "میزبانی در mhyaghubi.pythonanywhere.com",

    proj2_badge: "الگوریتمی و اسکرپر",
    proj2_sub: "تریدینگ‌ویو و اتوماسیون",
    proj2_title: "مجموعه AlphaScript و اسکرپر",
    proj2_quote: "اندیکاتورهای معاملاتی کمی پیشرفته توسعه‌یافته با PineScript به همراه اسکرپرهای خودکار پایتون جهت جمع‌آوری سیگنال‌های زنده بازار به صورت ناهمگام.",
    proj2_btn: "سفارش و بررسی معماری در تلگرام →",

    // Section 05: Contact & Connect
    sec5_tag: "۰۵ // بیایید با هم بسازیم",
    sec5_title: "ارتباط و همکاری",
    sec5_subtitle: "چه به بک‌اند پرسرعت جنگو، تیونینگ دیتابیس، پایپ‌لاین‌های خودکار یا مشاوره سرتاسری فول‌استک نیاز داشته باشید، آماده گفتگو هستم.",
    direct_mailbox: "صندوق پستی مستقیم",
    btn_copy_email: "کپی آدرس ایمیل",
    follow_me: "شبکه‌های اجتماعی و ارتباطی",
    form_send_header: "ارسال پیام مستقیم",
    form_response_time: "معمولاً ظرف کمتر از ۲۴ ساعت پاسخ می‌دهم.",
    lbl_your_name: "نام و نام خانوادگی",
    lbl_your_email: "پست الکترونیکی",
    lbl_project_scope: "موضوع یا دامنه پروژه",
    lbl_message: "متن پیام و جزئیات نیازمندی",
    ph_name: "مثلاً: علی رضایی",
    ph_email: "مثلاً: ali@company.ir",
    ph_scope: "مثلاً: مشاوره معماری بک‌اند مقیاس‌پذیر جنگو",
    ph_message: "مشخصات فنی پروژه، محدوده زمانی یا سوالات خود را بنویسید...",
    btn_send_message: "ارسال پیام ↗",
    btn_send_telegram: "ثبت سفارش فوری در تلگرام ✈",

    // Telegram Ordering Card
    tg_card_title: "سفارش مستقیم و استخدام فوری در تلگرام",
    tg_card_desc: "به شروع سریع پروژه یا بررسی تخصصی معماری نیاز دارید؟ سفارش خود را با یک کلیک در تلگرام با جزئیات آماده مطرح نمایید.",
    tg_btn_action: "ارسال سفارش به تلگرام",

    // Products Page Specific
    products_page_tag: "کاتالوگ و خدمات",
    products_page_title: "راهکارها و پکیج‌های مهندسی آماده",
    products_page_subtitle: "سامانه‌های آماده استقرار، اندیکاتورهای اختصاصی و بسته‌های سفارشی معماری بک‌اند جنگو را بررسی کنید.",
    tab_all: "همه راهکارها",
    tab_django: "جنگو و بک‌اند",
    tab_trading: "پاین‌اسکریپت و تریدینگ",
    tab_scraping: "اسکرپینگ و اتوماسیون",
    tab_crossplatform: "چندسکویی و رابط کاربری",
    btn_order_solution: "سفارش / شخصی‌سازی در تلگرام",
    btn_view_specs: "مشاهده مشخصات فنی و معماری",

    // About Page Specific
    about_page_tag: "پروفایل معماری و مهندسی",
    about_page_title: "ریشه‌های مهندسی و انضباط سیستمی",
    about_page_subtitle: "نگاهی عمیق به متدولوژی، پیشینه مهندسی برق قدرت در دانشگاه سجاد و استانداردهای طراحی نرم‌افزار که خط‌مشی کدهای من هستند.",

    // Contact Page Specific
    contact_page_tag: "همکاری و دریافت پروژه",
    contact_page_title: "سفارش، استخدام و مشاوره فنی",
    contact_page_subtitle: "کانال ارتباطی مطلوب خود را انتخاب کنید: ثبت مستقیم نیازمندی در تلگرام یا مکاتبه رسمی از طریق ایمیل.",
    select_service_type: "انتخاب نوع خدمات یا پروژه",
    opt_django_backend: "معماری مقیاس‌پذیر بک‌اند با جنگو و پایتون",
    opt_rest_api: "طراحی RESTful API و بهینه‌سازی کوئری‌های ORM",
    opt_pinescript: "اندیکاتور اختصاصی تریدینگ‌ویو (PineScript)",
    opt_scraping: "اسکرپر ناهمگام وب و ربات هوشمند تلگرام",
    opt_fullstack: "سامانه سرتاسری وب (فول‌استک مدرن)",
    opt_consultation: "بررسی کد، ریفکتورینگ و بهینه‌سازی دیتابیس",
    select_urgency: "فوریت زمانی پروژه",
    opt_immediate: "شروع فوری اسپرینت (اولویت بالا)",
    opt_normal: "زمان‌بندی استاندارد (۲ تا ۴ هفته)",
    opt_flexible: "مشاوره و برنامه‌ریزی منعطف",

    // Footer
    footer_desc: "معماری سرویس‌های بک‌اند با همزمانی بالا، پایپ‌لاین‌های ناهمگام و سامانه‌های فنی واکنش‌گرا.",
    footer_django_rigor: "طراحی و مهندسی شده با انضباط جنگو",
    footer_copyright: "© ۲۰۲۵ تمامی حقوق برای محمدحسین یعقوبی محفوظ است."
  }
};

/**
 * Translation Helper Functions
 */
function getCurrentLang() {
  const saved = localStorage.getItem('mhy_lang');
  if (saved && (saved === 'en' || saved === 'fa')) {
    return saved;
  }
  // Auto-detect browser language or default to en
  const browserLang = navigator.language || navigator.userLanguage || '';
  if (browserLang.startsWith('fa')) {
    return 'fa';
  }
  return 'en';
}

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'fa') return;
  localStorage.setItem('mhy_lang', lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const isFa = (lang === 'fa');
  document.documentElement.lang = lang;
  document.documentElement.dir = isFa ? 'rtl' : 'ltr';

  // Toggle body class for font switching
  if (isFa) {
    document.body.classList.add('persian-mode');
    document.body.classList.remove('english-mode');
  } else {
    document.body.classList.add('english-mode');
    document.body.classList.remove('persian-mode');
  }

  // Update all elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Update placeholders
  const placeholderEls = document.querySelectorAll('[data-i18n-ph]');
  placeholderEls.forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update switcher button label
  const switcherBtns = document.querySelectorAll('.lang-toggle-btn');
  switcherBtns.forEach(btn => {
    const textSpan = btn.querySelector('.lang-btn-text');
    if (textSpan) {
      textSpan.textContent = isFa ? 'EN | English' : 'فا | فارسی';
    }
  });

  // Update page title if applicable
  const pageTitleKey = document.body.getAttribute('data-page-title-key');
  if (pageTitleKey && translations[lang] && translations[lang][pageTitleKey]) {
    document.title = `${translations[lang][pageTitleKey]} | Mohammad Hossein Yaghubi`;
  }
}

// Export to window
window.i18n = {
  translations,
  getCurrentLang,
  setLanguage,
  applyLanguage,
  toggleLanguage: function() {
    const current = getCurrentLang();
    const next = current === 'en' ? 'fa' : 'en';
    setLanguage(next);
  }
};
