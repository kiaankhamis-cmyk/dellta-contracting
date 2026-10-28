import React, { useState, useEffect } from 'react';

// نصوص وبيانات الموقع باللغتين العربية والإنجليزية
const siteData = {
  ar: {
    dir: 'rtl',
    langName: 'EN',
    nextLang: 'en',
    brandName: 'دلتا',
    brandTag: 'للمقاولات والواجهات المعمارية',
    nav: [
      { name: 'الرئيسية', href: '#home' },
      { name: 'عن الشركة', href: '#about' },
      { name: 'خدماتنا', href: '#services' },
      { name: 'المشاريع', href: '#projects' },
      { name: 'اتصل بنا', href: '#contact' },
    ],
    ctaButton: 'طلب عرض سعر',
    giantText: 'DELTA CONTRACTING',
    reviewsCount: '+25 مشروعاً منجزاً',
    reviewsRating: '(معايير هندسية معتمدة)',
    reviewsDesc: 'تنفيذ وتطوير أرقى الواجهات الزجاجية والكلادينج لكبرى المستشفيات والمراكز بالمملكة.',
    cardTag: 'واجهات زجاج & كلادينج',
    cardTitle: 'مشاريع نوعية بمواصفات عالمية',
    cardLocation: 'خميس مشيط • أبها • جازان • مكة',
    introText: 'رواد تنفيذ حلول الواجهات المعمارية المتقدمة، الجدران الستائرية (Curtain Walls)، وألواح الألمنيوم المركبة بالمملكة العربية السعودية.',
    contactBtn: 'تواصل مع المهندس ↗',

    // قسم من نحن والشركات
    about: {
      partnersTag: 'COMPANY WE WORKED WITH',
      partners: [
        'وزارة المياه والكهرباء',
        'مستشفى خميس مشيط المدني',
        'فنادق بودل (Boudl)',
        'صيدليات الدواء',
        'مجمع شفاء الخميس',
        'شركة أضواء شبرا',
        'مركز العلياء التجاري'
      ],
      tag: 'عن شركة دلتا',
      mainHeading: 'نحن شركة دلتا الجديدة للمقاولات، خبرة هندسية تمتد لأكثر من 15 عاماً في صياغة وتنفيذ أرقى الواجهات المعمارية، الزجاج الإنشائي، والكلادينج في المملكة العربية السعودية.',
      subText: 'نمتلك تجهيزات ومصانع متقدمة لقص الليزر والهياكل المعدنية، ونلتزم بأعلى معايير كود البناء السعودي مع ضمان الجودة والمتانة لكل صرح معماري نشيده.',
      stats: [
        { num: '+25', label: 'مشروعاً نوعياً مكتملاً' },
        { num: '+10', label: 'مدن مغطاة بالمملكة' },
        { num: '100%', label: 'مطابقة هندسية للكود السعودي' },
        { num: '+15', label: 'عاماً من الريادة والخبرة' }
      ]
    },

    // قسم الخدمات
    services: {
      tag: 'حلولنا التخصصية',
      title: 'خدمات هندسية متكاملة للواجهات',
      items: [
        {
          num: '01',
          title: 'الواجهات الزجاجية (Curtain Wall)',
          desc: 'تصميم وتركيب أنظمة الزجاج الإنشائي والجدران الستائرية العازلة للصوت والحرارة للمباني والأبراج.'
        },
        {
          num: '02',
          title: 'واجهات الكلادينج (Aluminium Cladding)',
          desc: 'تركيب أجود ألواح الألمنيوم المركبة المقاومة للحريق مع ضمانات معتمدة وتشطيبات فائقة الدقة.'
        },
        {
          num: '03',
          title: 'الهياكل المعدنية (Structural Steel)',
          desc: 'تصنيع وتركيب الجملونات والمنشآت الفولاذية والمظلات الهندسية الضخمة للمستودعات والمجمعات.'
        },
        {
          num: '04',
          title: 'قص الليزر والزخارف (CNC Laser Work)',
          desc: 'أعمال القص الدقيق للحديد والألمنيوم بنقوش وزخارف معمارية فريدة للواجهات والديكورات.'
        },
        {
          num: '05',
          title: 'اللوحات الإعلانية والمجسمات (Signage)',
          desc: 'تصنيع وتركيب اللوحات الإعلانية الضخمة والهويات المعمارية للمراكز والشركات.'
        },
        {
          num: '06',
          title: 'التشطيبات والديكور (Interior & Exterior)',
          desc: 'حلول التصميم الهندسي والتنفيذ للمداخل والواجهات الداخلية والخارجية الفاخرة.'
        }
      ]
    },

    // قسم المشاريع
    projects: {
      tag: 'سجل الإنجازات',
      title: 'أبرز المشاريع التي قمنا بتنفيذها',
      all: 'الكل',
      health: 'طبي وصحي',
      commercial: 'تجاري وتسوق',
      items: [
        {
          title: 'مستشفى خميس مشيط المدني',
          location: 'خميس مشيط',
          category: 'health',
          tag: 'واجهات زجاجية وكرتن وول',
          img: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&auto=format&fit=crop'
        },
        {
          title: 'فندق بودل (Boudl Hotel)',
          location: 'خميس مشيط',
          category: 'commercial',
          tag: 'واجهات كلادينج وزجاج إنشائي',
          img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop'
        },
        {
          title: 'مجمع شفاء الخميس الطبي',
          location: 'خميس مشيط',
          category: 'health',
          tag: 'تطوير واجهات متكاملة',
          img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop'
        },
        {
          title: 'مركز العلياء التجاري',
          location: 'المظيلف - مكة',
          category: 'commercial',
          tag: 'كلادينج زجاجي وإضاءات معمارية',
          img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
        },
        {
          title: 'المركز الصحي بجازان',
          location: 'جازان (الكربوس)',
          category: 'health',
          tag: 'واجهات حديثة وقص ليزر',
          img: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
        },
        {
          title: 'مركز التحلية التجاري',
          location: 'القنفذة',
          category: 'commercial',
          tag: 'واجهات محلات تجارية وكلادينج',
          img: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=800&auto=format&fit=crop'
        }
      ]
    },

    // قسم التواصل
    contact: {
      tag: 'ابدأ مشروعك معنا',
      title: 'طلب مقايسة أو عرض سعر هندسي',
      desc: 'فريقنا الهندسي في شركة دلتا جاهز لدراسة مخططاتكم وتقديم دراسة كميات وعروض أسعار دقيقة.',
      phones: ['+966 555 750 061', '+966 532 401 401'],
      emails: ['info@ndeltaco.com', 'ndeltaksa@gmail.com'],
      address: 'طريق أبو بكر الصديق، خميس مشيط، المملكة العربية السعودية',
      formName: 'الاسم أو اسم المؤسسة',
      formPhone: 'رقم الجوال للتواصل',
      formService: 'نوع الخدمة المطلوبة',
      formMsg: 'تفاصيل المشروع والموقع',
      submitBtn: 'إرسال الطلب عبر واتساب ↗'
    },

    footer: {
      rights: 'جميع الحقوق محفوظة لشركة دلتا الجديدة للمقاولات © 2026',
      subtitle: 'رواد حلول الواجهات المعمارية والكلادينج بالمملكة'
    }
  },

  en: {
    dir: 'ltr',
    langName: 'عربي',
    nextLang: 'ar',
    brandName: 'DELTA',
    brandTag: 'Contracting & Architectural Facades',
    nav: [
      { name: 'Home', href: '#home' },
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    ctaButton: 'Get a Quote',
    giantText: 'DELTA CONTRACTING',
    reviewsCount: '25+ Completed Projects',
    reviewsRating: '(Engineered Quality)',
    reviewsDesc: 'Certified glass & cladding facade delivery for hospitals and malls across Saudi Arabia.',
    cardTag: 'Glass & Cladding Facades',
    cardTitle: 'World-Class Architectural Solutions',
    cardLocation: 'Khamis Mushayt • Abha • Jazan • Makkah',
    introText: 'Specialized in premium architectural aluminium, structural curtain walls, and composite cladding in the Kingdom of Saudi Arabia.',
    contactBtn: 'Contact Engineering Team ↗',

    about: {
      partnersTag: 'COMPANIES WE WORKED WITH',
      partners: [
        'Ministry of Water & Electricity',
        'Civil Hospital Khamis Mushayt',
        'Boudl Hotels & Resorts',
        'Al-Dawaa Pharmacies',
        'Shifa Al Khamis Medical Center',
        'Adwaa Shobra Trading Co.',
        'Al Olaiya Commercial Center'
      ],
      tag: 'ABOUT DELTA',
      mainHeading: 'We are New Delta Contracting Co., a premier facade engineering contractor with over 15 years of excellence in executing landmark architectural facades across Saudi Arabia.',
      subText: 'Equipped with precision CNC laser cutting and structural steel fabrication plants, fully aligned with the Saudi Building Code.',
      stats: [
        { num: '25+', label: 'Delivered Projects' },
        { num: '10+', label: 'Cities Across KSA' },
        { num: '100%', label: 'Saudi Building Code Compliant' },
        { num: '15+', label: 'Years of Experience' }
      ]
    },

    services: {
      tag: 'Core Specialties',
      title: 'Complete Facade Engineering Solutions',
      items: [
        {
          num: '01',
          title: 'Structural Glazing & Curtain Walls',
          desc: 'High-performance acoustic and thermal insulated facade systems for commercial towers and medical facilities.'
        },
        {
          num: '02',
          title: 'Aluminium Composite Cladding',
          desc: 'Fire-rated architectural aluminium composite panels (ACP) installed to the highest industry tolerances.'
        },
        {
          num: '03',
          title: 'Structural Steel & Trusses',
          desc: 'Heavy structural steel fabrication and erection for commercial sheds, malls, and industrial buildings.'
        },
        {
          num: '04',
          title: 'CNC Laser Cutting Work',
          desc: 'Precision architectural metal screening, bespoke panels, and geometric parametric patterns.'
        },
        {
          num: '05',
          title: 'Architectural Signage',
          desc: 'Large format outdoor building identities, corporate pylons, and illuminated branding.'
        },
        {
          num: '06',
          title: 'Interior & Exterior Fit-Out',
          desc: 'Turnkey architectural design, decorative metalwork, and premium building entrance treatments.'
        }
      ]
    },

    projects: {
      tag: 'Proven Portfolio',
      title: 'Selected Signature Facades',
      all: 'All',
      health: 'Healthcare',
      commercial: 'Commercial',
      items: [
        {
          title: 'Civil Hospital Khamis Mushayt',
          location: 'Khamis Mushayt',
          category: 'health',
          tag: 'Glass Curtain Walls',
          img: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&auto=format&fit=crop'
        },
        {
          title: 'Boudl Hotel Facades',
          location: 'Khamis Mushayt',
          category: 'commercial',
          tag: 'Cladding & Glazing',
          img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop'
        },
        {
          title: 'Shifa Al Khamis Medical Complex',
          location: 'Khamis Mushayt',
          category: 'health',
          tag: 'Complete Medical Facade',
          img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop'
        },
        {
          title: 'Al Olaiya Commercial Center',
          location: 'Mudailef - Makkah',
          category: 'commercial',
          tag: 'Modern Cladding & Lighting',
          img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
        },
        {
          title: 'Jazan Primary Health Center',
          location: 'Jazan (Karbos)',
          category: 'health',
          tag: 'CNC Laser Screen & Glass',
          img: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
        },
        {
          title: 'Tahlea Shopping Center',
          location: 'Qunfidah',
          category: 'commercial',
          tag: 'Retail Facades & Cladding',
          img: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=800&auto=format&fit=crop'
        }
      ]
    },

    contact: {
      tag: 'Start Your Project',
      title: 'Request a Technical Quote & BOQ Study',
      desc: 'Our engineering team is prepared to analyze your architectural drawings and provide detailed itemized quotations.',
      phones: ['+966 555 750 061', '+966 532 401 401'],
      emails: ['info@ndeltaco.com', 'ndeltaksa@gmail.com'],
      address: 'Abu Baker Alsiddique Road, Khamis Mushayt, Saudi Arabia',
      formName: 'Full Name / Company',
      formPhone: 'Contact Phone Number',
      formService: 'Scope of Work Required',
      formMsg: 'Project Location & Details',
      submitBtn: 'Send Inquiry via WhatsApp ↗'
    },

    footer: {
      rights: 'All Rights Reserved. New Delta Contracting Co. © 2026',
      subtitle: 'Specialists in Architectural Aluminium, Cladding & Glass Facades'
    }
  }
};

export default function App() {
  const [lang, setLang] = useState('ar');
  const [activeFilter, setActiveFilter] = useState('all');
  const t = siteData[lang];

  // مؤشر الفأرة التفاعلي
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // فلترة المشاريع
  const filteredProjects = activeFilter === 'all' 
    ? t.projects.items 
    : t.projects.items.filter(p => p.category === activeFilter);

  return (
    <div
      id="home"
      dir={t.dir}
      className={`min-h-screen bg-[#F4F3ED] text-[#070707] selection:bg-[#070707] selection:text-white relative overflow-x-hidden ${
        lang === 'ar' ? 'font-["Readex_Pro"]' : 'font-["Poppins"]'
      }`}
    >
      {/* 1. مؤشر الماوس التفاعلي */}
      <div
        className="fixed pointer-events-none z-50 rounded-full border-2 border-[#999999] transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: isHovered ? '65px' : '40px',
          height: isHovered ? '65px' : '40px',
          backgroundColor: isHovered ? 'rgba(232, 90, 42, 0.15)' : 'transparent',
          borderColor: isHovered ? '#E85A2A' : '#999999',
        }}
      />

      {/* 2. شريط التنقل العلوي (Navbar) */}
      <header className="sticky top-0 z-40 bg-[#F4F3ED]/90 backdrop-blur-md border-b border-stone-300/60">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          
          {/* الشعار */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#070707] text-[#F4F3ED] flex items-center justify-center font-bold text-xl font-['Oswald'] shadow-md">
              d
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight font-['Oswald'] block leading-none">
                {t.brandName}
              </span>
              <span className="text-[10px] text-stone-500 font-medium tracking-wider uppercase">
                {t.brandTag}
              </span>
            </div>
          </a>

          {/* روابط القائمة */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-stone-700">
            {t.nav.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-[#E85A2A] transition-colors duration-200"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* تبديل اللغة وزر الطلب */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(t.nextLang)}
              className="text-xs font-bold px-3 py-1.5 rounded-full border border-stone-400 hover:border-black transition-all flex items-center gap-1.5 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span>🌐</span>
              <span>{t.langName}</span>
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-block bg-[#070707] hover:bg-[#E85A2A] text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t.ctaButton} ↗
            </a>
          </div>
        </div>
      </header>

      {/* 3. الواجهة الرئيسية (Hero Section) */}
      <section className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pt-4 pb-12 min-h-[85vh] flex flex-col justify-center">
        {/* الطبقة 1: الكلمة السوداء المصمتة خلف الصورة مكبرة بنسبة 20% (10.2vw) */}
        <div className="absolute inset-x-0 top-[28%] -translate-y-1/2 flex justify-center items-center pointer-events-none select-none z-0 overflow-hidden">
          <h2 className="text-[10.2vw] font-bold font-['Oswald'] text-[#070707] tracking-tighter opacity-90 leading-none whitespace-nowrap uppercase">
            {t.giantText}
          </h2>
        </div>

        {/* الطبقة 2: الحروف المفرغة (Stroke) فوق الصورة مكبرة بنسبة 20% وتختفي عند الـ Hover */}
        <div 
          className={`absolute inset-x-0 top-[28%] -translate-y-1/2 flex justify-center items-center pointer-events-none select-none z-20 overflow-hidden transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h2 
            className="text-[10.2vw] font-bold font-['Oswald'] tracking-tighter leading-none whitespace-nowrap uppercase text-transparent"
            style={{
              WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.95)'
            }}
          >
            {t.giantText}
          </h2>
        </div>

        {/* توزيع الهيرو الثلاثي - مضبوط على أطراف الكلمة بالضبط (max-w-[980px]) مع تكبير 10% */}
        <div className="relative z-10 max-w-[980px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mt-4">
          
          {/* الجانب الأيمن: محاذي لحرف G تماماً مع تكبير النصوص 10% */}
          <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-start space-y-2 lg:self-end lg:pb-3">
            <div className="text-3xl font-bold font-['Oswald'] text-[#070707] leading-none">
              {t.reviewsCount}
            </div>
            
            {/* وسم المعايير الهندسية */}
            <span className="inline-block bg-stone-200/90 text-stone-800 text-xs font-bold px-3 py-1 rounded-full border border-stone-300">
              {lang === 'ar' ? 'معايير هندسية معتمدة' : 'Certified Engineering Standards'}
            </span>

            <p className="text-sm text-stone-600 mt-2 max-w-[250px] leading-relaxed font-normal">
              {t.reviewsDesc}
            </p>
          </div>

          {/* الكرت المائل التفاعلي في الوسط */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center py-2">
            <div
              className="relative w-[250px] sm:w-[290px] aspect-[3.2/4] rounded-[22px] overflow-hidden border-[3px] border-white shadow-2xl transition-all duration-500 ease-out cursor-pointer group"
              style={{ 
                transform: isHovered ? 'rotate(0deg) scale(1.09)' : 'rotate(8deg) scale(1)' 
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                alt="واجهات دلتا"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 right-6 left-6 text-white text-start">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-[#E85A2A] text-white px-3 py-1 rounded-full inline-block mb-2">
                  {t.cardTag}
                </span>
                <h3 className="text-base font-bold leading-tight font-['Oswald']">
                  {t.cardTitle}
                </h3>
                <p className="text-[11px] text-stone-300 mt-1">
                  {t.cardLocation}
                </p>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: محاذي لحرف D تماماً مع تكبير النصوص والزر 10% */}
          <div className="lg:col-span-3 order-3 flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 lg:self-end lg:pb-3">
            <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-medium max-w-[280px]">
              {t.introText}
            </p>
            <a
              href="https://wa.me/966555750061"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#070707] hover:bg-[#E85A2A] text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t.contactBtn}
            </a>
          </div>

        </div>
      </section>

      {/* 4. قسم الشركات المتعامل معها + عن دلتا (Nino Dark Section) */}
      <section id="about" className="bg-[#070707] text-white py-20 border-t border-stone-800 relative overflow-hidden">
        
        {/* أنيميشن حركة الشريط التلقائي */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* عنوان الشريط المتحرك */}
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-stone-400 font-['Oswald']">
              {t.about.partnersTag}
            </span>
          </div>

          {/* شريط الشركات المتحرك (Marquee) */}
          <div className="relative overflow-hidden w-full pb-16 border-b border-stone-800/80">
            <div className="animate-marquee items-center gap-16">
              {/* تكرار الأسماء مرتين ليتحرك الشريط بلا توقف */}
              {[...t.about.partners, ...t.about.partners].map((partner, index) => (
                <div
                  key={index}
                  className="text-stone-400 hover:text-white font-['Oswald'] text-lg sm:text-xl uppercase tracking-wider transition-colors duration-300 cursor-pointer flex items-center gap-4 whitespace-nowrap"
                >
                  <span>{partner}</span>
                  <span className="text-[#E85A2A] text-xs">✦</span>
                </div>
              ))}
            </div>
          </div>

          {/* محتوى عن الشركة على الخلفية السوداء مثل لقطة نينو */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-16">
            
            {/* العنوان الجانبي الصغير (About Delta) */}
            <div className="lg:col-span-3">
              <span className="text-sm font-bold text-stone-300 uppercase tracking-widest font-['Oswald']">
                {t.about.tag}
              </span>
            </div>

            {/* النص العريض الكبير وقصة الإنجازات */}
            <div className="lg:col-span-9 space-y-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug sm:leading-relaxed text-stone-100 font-sans">
                {t.about.mainHeading}
              </h3>
              
              <p className="text-sm sm:text-base text-stone-400 leading-relaxed max-w-3xl font-light">
                {t.about.subText}
              </p>

              {/* أرقام وإحصائيات الإنجاز */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-stone-800">
                {t.about.stats.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-bold font-['Oswald'] text-white">
                      {item.num}
                    </div>
                    <p className="text-xs text-stone-400 font-medium">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. قسم الخدمات الأساسية (Services Section) */}
      <section id="services" className="py-24 bg-[#F4F3ED] border-t border-stone-300/80">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E85A2A]">
              {t.services.tag}
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-['Oswald'] uppercase text-[#070707]">
              {t.services.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-stone-300/70 hover:border-[#E85A2A] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-stone-400 group-hover:text-[#E85A2A] transition-colors">
                    {srv.num}
                  </span>
                  <h4 className="text-lg font-bold font-['Oswald'] mt-4 mb-2 text-[#070707]">
                    {srv.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-100 flex justify-end">
                  <span className="text-xs font-bold text-[#070707] group-hover:text-[#E85A2A] transition-colors">
                    المواصفات الهندسية ↗
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. قسم المشاريع والأعمال المنجزة (Portfolio Section) */}
      <section id="projects" className="py-24 bg-white border-t border-stone-300/80">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E85A2A]">
                {t.projects.tag}
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold font-['Oswald'] uppercase text-[#070707] mt-1">
                {t.projects.title}
              </h3>
            </div>

            {/* أزرار الفلترة */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#070707] text-white'
                    : 'bg-[#F4F3ED] text-stone-700 hover:bg-stone-200'
                }`}
              >
                {t.projects.all}
              </button>
              <button
                onClick={() => setActiveFilter('health')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'health'
                    ? 'bg-[#070707] text-white'
                    : 'bg-[#F4F3ED] text-stone-700 hover:bg-stone-200'
                }`}
              >
                {t.projects.health}
              </button>
              <button
                onClick={() => setActiveFilter('commercial')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'commercial'
                    ? 'bg-[#070707] text-white'
                    : 'bg-[#F4F3ED] text-stone-700 hover:bg-stone-200'
                }`}
              >
                {t.projects.commercial}
              </button>
            </div>
          </div>

          {/* شبكة المشاريع */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-white flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#E85A2A] uppercase tracking-wider block mb-1">
                      {proj.tag}
                    </span>
                    <h4 className="text-base font-bold text-[#070707] font-['Oswald']">
                      {proj.title}
                    </h4>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span>📍 {proj.location}</span>
                    <span className="font-bold text-[#070707] group-hover:text-[#E85A2A] transition-colors">
                      مشروع مكتمل ✓
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. قسم طلب التسعيرة والتواصل (Contact Section) */}
      <section id="contact" className="py-24 bg-[#F4F3ED] border-t border-stone-300/80">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* معلومات التواصل والمقر */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E85A2A]">
                {t.contact.tag}
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold font-['Oswald'] text-[#070707] leading-tight">
                {t.contact.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {t.contact.desc}
              </p>

              <div className="space-y-4 pt-4 border-t border-stone-300">
                <div>
                  <span className="text-xs text-stone-500 block">الهواتف المباشرة:</span>
                  <div className="flex flex-wrap gap-4 mt-1 font-mono text-sm font-bold">
                    {t.contact.phones.map((phone, idx) => (
                      <a key={idx} href={`tel:${phone.replace(/\s+/g, '')}`} className="text-[#070707] hover:text-[#E85A2A]">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs text-stone-500 block">البريد الإلكتروني:</span>
                  <div className="flex flex-wrap gap-4 mt-1 text-sm font-medium">
                    {t.contact.emails.map((mail, idx) => (
                      <a key={idx} href={`mailto:${mail}`} className="text-[#070707] hover:text-[#E85A2A]">
                        {mail}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs text-stone-500 block">المقر الرئيسي:</span>
                  <p className="text-sm font-medium text-stone-800 mt-1">
                    📍 {t.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* نموذج إرسال الطلب عبر الواتساب */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-300/80 shadow-md">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  const name = form.name.value;
                  const phone = form.phone.value;
                  const service = form.service.value;
                  const msg = form.msg.value;
                  const whatsappUrl = `https://wa.me/966555750061?text=${encodeURIComponent(
                    `طلب تسعيرة واجهات:\nالاسم: ${name}\nالجوال: ${phone}\nالخدمة: ${service}\nالتفاصيل: ${msg}`
                  )}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-2">
                      {t.contact.formName}
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      className="w-full bg-[#F4F3ED] border border-stone-300 rounded-xl px-4 py-3 text-sm focus:border-black outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-2">
                      {t.contact.formPhone}
                    </label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      className="w-full bg-[#F4F3ED] border border-stone-300 rounded-xl px-4 py-3 text-sm focus:border-black outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-2">
                    {t.contact.formService}
                  </label>
                  <select
                    name="service"
                    className="w-full bg-[#F4F3ED] border border-stone-300 rounded-xl px-4 py-3 text-sm focus:border-black outline-none"
                  >
                    <option value="الواجهات الزجاجية (Curtain Wall)">الواجهات الزجاجية (Curtain Wall)</option>
                    <option value="واجهات الكلادينج (Aluminium Cladding)">واجهات الكلادينج (Aluminium Cladding)</option>
                    <option value="الهياكل المعدنية (Structural Steel)">الهياكل المعدنية (Structural Steel)</option>
                    <option value="قص الليزر والزخارف (CNC)">قص الليزر والزخارف (CNC)</option>
                    <option value="مشروع متكامل">مشروع واجهات متكامل</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-2">
                    {t.contact.formMsg}
                  </label>
                  <textarea
                    name="msg"
                    rows="4"
                    required
                    className="w-full bg-[#F4F3ED] border border-stone-300 rounded-xl px-4 py-3 text-sm focus:border-black outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#070707] hover:bg-[#E85A2A] text-white py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all shadow-lg cursor-pointer"
                >
                  {t.contact.submitBtn}
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* 8. تذييل الصفحة (Footer) */}
      <footer className="bg-[#070707] text-white py-12 border-t border-stone-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
          <div>
            <span className="text-xl font-bold font-['Oswald'] block">
              {t.brandName}
            </span>
            <p className="text-xs text-stone-400 mt-1">
              {t.footer.subtitle}
            </p>
          </div>

          <div className="text-xs text-stone-400">
            {t.footer.rights}
          </div>
        </div>
      </footer>

    </div>
  );
}