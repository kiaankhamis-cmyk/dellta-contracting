import React from 'react';
import { Lock } from 'lucide-react';

export default function Footer({ currentLang, t, siteData, onOpenAdmin }) {
  return (
    <footer className="bg-delta-dark text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-start">
          
          {/* الشعار والحقوق */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-delta-orange flex items-center justify-center text-white font-black text-xl">
              d
            </div>
            <div>
              <span className="font-extrabold text-white text-lg">
                {currentLang === 'ar' ? 'شركة دلتا الجديدة للمقاولات' : 'New Delta Contracting Co.'}
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                {t.footer.rights}
              </p>
            </div>
          </div>

          {/* روابط سريعة */}
          <div className="flex items-center gap-6 text-sm font-semibold text-slate-300">
            <a href="#about" className="hover:text-delta-orange transition-colors">{t.nav.about}</a>
            <a href="#services" className="hover:text-delta-orange transition-colors">{t.nav.services}</a>
            <a href="#projects" className="hover:text-delta-orange transition-colors">{t.nav.projects}</a>
            <a href="#contact" className="hover:text-delta-orange transition-colors">{t.nav.contact}</a>
          </div>

          {/* رابط لوحة تحكم العميل */}
          <button
            onClick={onOpenAdmin}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-delta-orange py-1 px-3 rounded-lg hover:bg-white/5 transition-all"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>{t.nav.adminLogin}</span>
          </button>

        </div>
      </div>
    </footer>
  );
}