import React, { useState } from 'react';
import { Globe, Menu, X, Lock, PhoneCall } from 'lucide-react';

export default function Navbar({ currentLang, setLang, t, siteData, onOpenAdmin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* الشعار والهوية */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-delta-navy flex items-center justify-center text-white font-black text-2xl shadow-md group-hover:bg-delta-orange transition-colors">
              <span className="text-delta-orange group-hover:text-white transition-colors">d</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-delta-navy tracking-tight">
                {currentLang === 'ar' ? 'دلتا للمقاولات' : 'NEW DELTA'}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {currentLang === 'ar' ? 'واجهات زجاج وألمنيوم' : 'Aluminium & Glass Facade'}
              </span>
            </div>
          </a>

          {/* روابط القائمة للشاشات الكبيرة */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-700">
            <a href="#about" className="hover:text-delta-orange transition-colors">{t.nav.about}</a>
            <a href="#services" className="hover:text-delta-orange transition-colors">{t.nav.services}</a>
            <a href="#projects" className="hover:text-delta-orange transition-colors">{t.nav.projects}</a>
            <a href="#contact" className="hover:text-delta-orange transition-colors">{t.nav.contact}</a>
          </nav>

          {/* أدوات الزاوية: مبدل اللغات + زر الاتصال + زر الإدارة */}
          <div className="hidden lg:flex items-center gap-4">
            {/* اختيار اللغة */}
            <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
              <Globe className="w-4 h-4 text-slate-500 mx-1.5" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLang(lang.code)}
                  className={`px-2.5 py-1 text-xs rounded-md font-bold transition-all ${
                    currentLang === lang.code 
                      ? 'bg-delta-navy text-white shadow-sm' 
                      : 'text-slate-600 hover:text-delta-orange'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* زر الاتصال السريع */}
            <a 
              href={`tel:${siteData.contact.phones[0]}`}
              className="flex items-center gap-2 bg-delta-orange hover:bg-delta-orangeHover text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-delta-orange/20 transition-all hover:scale-105"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.contact.callUs}</span>
            </a>

            {/* زر لوحة تحكم العميل */}
            <button 
              onClick={onOpenAdmin}
              title={t.nav.adminLogin}
              className="p-2.5 rounded-xl text-slate-400 hover:text-delta-navy hover:bg-slate-100 transition-all"
            >
              <Lock className="w-4 h-4" />
            </button>
          </div>

          {/* زر القائمة للشاشات الصغيرة */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* قائمة الجوال المنسدلة */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 font-semibold text-slate-700">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-delta-orange">{t.nav.about}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-delta-orange">{t.nav.services}</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-delta-orange">{t.nav.projects}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-delta-orange">{t.nav.contact}</a>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { setLang(lang.code); setMobileMenuOpen(false); }}
                  className={`px-3 py-1.5 text-xs rounded font-bold ${
                    currentLang === lang.code ? 'bg-delta-navy text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <button 
              onClick={() => { onOpenAdmin(); setMobileMenuOpen(false); }} 
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 p-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{t.nav.adminLogin}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}