import React, { useState, useEffect } from 'react';

export default function NinoDeltaHero() {
  // كود حركة مؤشر الماوس الدائري مثل قالب نينو تماماً
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div dir="rtl" className="relative min-h-screen bg-[#F5F4EE] text-[#111111] overflow-hidden font-sans selection:bg-black selection:text-white">
      
      {/* 1. مؤشر الماوس الدائري التفاعلي (Nino Cursor) */}
      <div
        className="fixed pointer-events-none z-50 rounded-full border border-black/40 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: isHovered ? '60px' : '36px',
          height: isHovered ? '60px' : '36px',
          backgroundColor: isHovered ? 'rgba(0,0,0,0.05)' : 'transparent',
        }}
      />

      {/* 2. شريط التنقل العلوي النظيف (Navbar) */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-black tracking-tight">DELTA™</span>
          <span className="w-2 h-2 rounded-full bg-orange-600 mb-2"></span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase">
          <a href="#home" className="hover:opacity-60 transition-opacity">الرئيسية</a>
          <a href="#about" className="hover:opacity-60 transition-opacity">من نحن</a>
          <a href="#services" className="hover:opacity-60 transition-opacity">الخدمات</a>
          <a href="#projects" className="hover:opacity-60 transition-opacity">المشاريع</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">تواصل معنا</a>
        </div>

        <a
          href="https://wa.me/966555750061"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-bold tracking-wider uppercase border-b-2 border-black pb-1 hover:text-orange-600 hover:border-orange-600 transition-colors"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          طلب تسعيرة ↗
        </a>
      </nav>

      {/* 3. القسم الرئيسي (Hero Section) */}
      <main className="max-w-7xl mx-auto px-6 pt-6 pb-20 relative min-h-[80vh] flex flex-col justify-center">

        {/* الكلمة الضخمة الممتدة في الخلفية (NINO Style Giant Background Text) */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center items-center pointer-events-none select-none z-0 overflow-hidden">
          <h1 className="text-[13vw] font-black tracking-tighter text-[#111111] leading-none whitespace-nowrap uppercase opacity-95">
            DELTA FACADES
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 mt-6">
          
          {/* الجانب الأيمن (في العربي): تقييمات العملاء والثقة */}
          <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-right space-y-4">
            <div className="flex -space-x-3 space-x-reverse overflow-hidden p-1">
              <img className="inline-block h-12 w-12 rounded-full ring-2 ring-[#F5F4EE] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="عميل" />
              <img className="inline-block h-12 w-12 rounded-full ring-2 ring-[#F5F4EE] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="عميل" />
              <img className="inline-block h-12 w-12 rounded-full ring-2 ring-[#F5F4EE] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="عميل" />
            </div>

            <div>
              <div className="text-2xl font-black text-[#111111] flex items-center justify-center lg:justify-start gap-1">
                <span>+25 مشروعاً</span>
                <span className="text-sm font-semibold text-slate-500">(بأعلى تصنيف)</span>
              </div>
              <p className="text-xs text-slate-600 mt-1 max-w-[200px] leading-relaxed">
                واجهات نفذت بأعلى معايير الجودة والمواصفات المعتمدة لكبرى المشاريع بالمملكة.
              </p>
            </div>
          </div>

          {/* المنتصف: الكرت المائل الأيقوني (The Iconic Tilted Card) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div
              className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-out transform -rotate-3 hover:rotate-0 hover:scale-[1.02] cursor-pointer group border-4 border-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop"
                alt="واجهات زجاجية وكلادينج دلتا"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute bottom-6 right-6 left-6 text-white text-right">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-orange-600 text-white px-2.5 py-1 rounded-full inline-block mb-2">
                  واجهات زجاج & كلادينج
                </span>
                <h3 className="text-lg font-black leading-snug">شركة دلتا الجديدة للمقاولات</h3>
                <p className="text-xs text-slate-200 mt-1">خميس مشيط • أبها • جازان • جدة</p>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر (في العربي): التعريف وزر اتخاذ القرار */}
          <div className="lg:col-span-3 order-3 flex flex-col items-center lg:items-start text-center lg:text-right space-y-6">
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
              نصنع هوية المباني عبر حلول <span className="font-extrabold text-[#111111]">الواجهات الزجاجية الإنشائية</span> والكلادينج وقص الليزر الحديث.
            </p>

            <a
              href="tel:+966555750061"
              className="inline-flex items-center justify-center bg-[#111111] hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl active:scale-95"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              تواصل معنا الآن
            </a>
          </div>

        </div>
      </main>

    </div>
  );
}