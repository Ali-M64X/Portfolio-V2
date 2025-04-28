// Language switching functionality for portfolio website

// Language data
const translations = {
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_about: "نبذة عني",
        nav_skills: "المهارات",
        nav_experience: "الخبرات",
        nav_projects: "المشاريع",
        nav_youtube: "قناة اليوتيوب",
        nav_contact: "تواصل معي",
        
        // Hero Section
        hero_greeting: "مرحباً، أنا",
        hero_profession: "مطور ويب ومنشئ محتوى",
        hero_description: "أوثق رحلتي في تطوير مهاراتي وأشارك خبراتي مع الآخرين",
        hero_contact_btn: "تواصل معي",
        hero_cv_btn: "تحميل السيرة الذاتية",
        
        // About Section
        about_title: "نبذة عني",
        about_p1: "مرحباً! أنا علي ماهر، شغوف بتطوير الويب وإنشاء المحتوى. أسعى دائماً لتطوير مهاراتي وتوثيق رحلتي لمساعدة الآخرين.",
        about_p2: "لدي خبرة متنوعة تشمل العمل في مركز اتصال، والتسويق بالعمولة عبر الإنترنت، وإدارة مطعم للمأكولات الشرقية. هذه التجارب أكسبتني مهارات قيمة في التواصل، وخدمة العملاء، والإدارة.",
        about_p3: "أنا مهتم بشكل خاص بالطبخ والمشويات، وأستمتع بمشاركة معرفتي في هذا المجال. أؤمن بأن التعلم المستمر هو مفتاح النجاح، وأسعى دائماً لاكتساب مهارات جديدة.",
        about_name: "الاسم:",
        about_email: "البريد الإلكتروني:",
        about_phone: "الهاتف:",
        about_location: "الموقع:",
        about_location_value: "مصر",
        
        // Skills Section
        skills_title: "المهارات",
        skills_technical: "المهارات التقنية",
        skills_soft: "المهارات الشخصية",
        skill_customer_service: "خدمة العملاء",
        skill_communication: "التواصل",
        skill_management: "الإدارة",
        skill_cooking: "الطبخ والمشويات",
        
        // Experience Section
        experience_title: "الخبرات",
        exp1_title: "مدير مطعم",
        exp1_date: "2020 - 2022",
        exp1_desc: "إدارة مطعم للكبدة والكفتة والمشويات. كنت مسؤولاً عن جميع جوانب التشغيل، بما في ذلك إدارة الموظفين، وخدمة العملاء، وإعداد الطعام، والمشتريات.",
        exp2_title: "مسوق بالعمولة",
        exp2_date: "2018 - 2020",
        exp2_desc: "عملت في التسويق بالعمولة عبر الإنترنت لفترة طويلة، حيث قمت بالترويج لمنتجات مختلفة وتحقيق مبيعات من خلال استراتيجيات تسويقية متنوعة.",
        exp3_title: "موظف مركز اتصال",
        exp3_date: "2017 - 2018",
        exp3_desc: "عملت في مركز اتصال لمطعم، حيث كنت مسؤولاً عن استقبال طلبات العملاء، والرد على استفساراتهم، وحل المشكلات التي قد تواجههم.",
        
        // Projects Section
        projects_title: "المشاريع",
        project1_title: "موقع البورتفوليو الشخصي",
        project1_desc: "موقع بورتفوليو شخصي تم تطويره باستخدام HTML و CSS و JavaScript، مع دعم للغتين العربية والإنجليزية.",
        project2_title: "قناة ويكا على يوتيوب",
        project2_desc: "قناة يوتيوب لمشاركة رحلتي في تطوير المهارات وتقديم محتوى تعليمي متنوع.",
        project_live: "معاينة",
        project_code: "الكود",
        project_channel: "زيارة القناة",
        
        // YouTube Section
        youtube_title: "قناة ويكا على يوتيوب",
        youtube_desc: "قناة مخصصة لتوثيق رحلتي في تطوير المهارات ومشاركة خبراتي في مجالات متنوعة مثل البرمجة، والطبخ، والإدارة، والتسويق.",
        youtube_subscribe: "اشترك في القناة",
        youtube_featured: "الفيديو المميز",
        
        // Contact Section
        contact_title: "تواصل معي",
        contact_email: "البريد الإلكتروني",
        contact_phone: "الهاتف",
        contact_location: "الموقع",
        contact_location_value: "مصر",
        contact_name: "الاسم",
        contact_email_address: "البريد الإلكتروني",
        contact_subject: "الموضوع",
        contact_message: "الرسالة",
        contact_send: "إرسال الرسالة",
        
        // CV Modal
        cv_download_title: "تحميل السيرة الذاتية",
        cv_download_desc: "اختر اللغة المفضلة لتحميل السيرة الذاتية:",
        cv_arabic: "السيرة الذاتية بالعربية",
        cv_english: "السيرة الذاتية بالإنجليزية",
        
        // Footer
        footer_rights: "جميع الحقوق محفوظة",
        footer_made: "تم التطوير بواسطة"
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_youtube: "YouTube",
        nav_contact: "Contact",
        
        // Hero Section
        hero_greeting: "Hello, I'm",
        hero_profession: "Web Developer & Content Creator",
        hero_description: "I document my journey in skill development and share my experiences with others",
        hero_contact_btn: "Contact Me",
        hero_cv_btn: "Download CV",
        
        // About Section
        about_title: "About Me",
        about_p1: "Hello! I'm Ali Maher, passionate about web development and content creation. I'm always looking to improve my skills and document my journey to help others.",
        about_p2: "I have diverse experience including working in a call center, affiliate marketing online, and managing a restaurant for oriental food. These experiences have given me valuable skills in communication, customer service, and management.",
        about_p3: "I'm particularly interested in cooking and grilling, and enjoy sharing my knowledge in this field. I believe that continuous learning is the key to success, and I'm always seeking to acquire new skills.",
        about_name: "Name:",
        about_email: "Email:",
        about_phone: "Phone:",
        about_location: "Location:",
        about_location_value: "Egypt",
        
        // Skills Section
        skills_title: "Skills",
        skills_technical: "Technical Skills",
        skills_soft: "Soft Skills",
        skill_customer_service: "Customer Service",
        skill_communication: "Communication",
        skill_management: "Management",
        skill_cooking: "Cooking & Grilling",
        
        // Experience Section
        experience_title: "Experience",
        exp1_title: "Restaurant Manager",
        exp1_date: "2020 - 2022",
        exp1_desc: "Managed a restaurant for liver, kofta, and grilled food. I was responsible for all aspects of operations, including staff management, customer service, food preparation, and purchasing.",
        exp2_title: "Affiliate Marketer",
        exp2_date: "2018 - 2020",
        exp2_desc: "Worked in affiliate marketing online for an extended period, promoting various products and generating sales through diverse marketing strategies.",
        exp3_title: "Call Center Agent",
        exp3_date: "2017 - 2018",
        exp3_desc: "Worked in a restaurant call center, responsible for receiving customer orders, answering inquiries, and resolving issues they might face.",
        
        // Projects Section
        projects_title: "Projects",
        project1_title: "Personal Portfolio Website",
        project1_desc: "A personal portfolio website developed using HTML, CSS, and JavaScript, with support for both Arabic and English languages.",
        project2_title: "Weka YouTube Channel",
        project2_desc: "A YouTube channel for sharing my journey in skill development and providing diverse educational content.",
        project_live: "Live Demo",
        project_code: "Code",
        project_channel: "Visit Channel",
        
        // YouTube Section
        youtube_title: "Weka YouTube Channel",
        youtube_desc: "A channel dedicated to documenting my journey in skill development and sharing my experiences in various fields such as programming, cooking, management, and marketing.",
        youtube_subscribe: "Subscribe to Channel",
        youtube_featured: "Featured Video",
        
        // Contact Section
        contact_title: "Contact Me",
        contact_email: "Email",
        contact_phone: "Phone",
        contact_location: "Location",
        contact_location_value: "Egypt",
        contact_name: "Name",
        contact_email_address: "Email Address",
        contact_subject: "Subject",
        contact_message: "Message",
        contact_send: "Send Message",
        
        // CV Modal
        cv_download_title: "Download CV",
        cv_download_desc: "Choose your preferred language to download the CV:",
        cv_arabic: "Arabic CV",
        cv_english: "English CV",
        
        // Footer
        footer_rights: "All Rights Reserved",
        footer_made: "Developed by"
    }
};

// Initialize language functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get language toggle button
    const langToggle = document.getElementById('lang-toggle');
    
    // Set default language based on browser settings or default to Arabic
    let currentLang = localStorage.getItem('language') || 'ar';
    
    // Initialize page with saved language
    setLanguage(currentLang);
    
    // Add event listener to language toggle button
    langToggle.addEventListener('click', function() {
        // Toggle between languages
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        
        // Save language preference
        localStorage.setItem('language', currentLang);
        
        // Update UI
        setLanguage(currentLang);
    });
    
    // Function to set language
    function setLanguage(lang) {
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update HTML dir attribute (RTL for Arabic, LTR for English)
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update language toggle button text
        langToggle.textContent = lang === 'ar' ? 'EN' : 'عربي';
        
        // Update all elements with data-lang-key attribute
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Add animation class to body
        document.body.classList.add('language-switch-animation');
        
        // Remove animation class after animation completes
        setTimeout(() => {
            document.body.classList.remove('language-switch-animation');
        }, 500);
    }
});
