import React from 'react';
import { 
  Boxes, Layers, LayoutGrid, Building2, Home, Sparkles, Compass, Cpu, ArrowUpRight 
} from 'lucide-react';

const iconMap = {
  Boxes: Boxes,
  Layers: Layers,
  LayoutGrid: LayoutGrid,
  Building2: Building2,
  Home: Home,
  Sparkles: Sparkles,
  Compass: Compass,
  Cpu: Cpu
};

export default function Services({ currentLang, t, siteData }) {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ترويسة القسم */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-delta-orange font-bold text-sm tracking-wider uppercase">
            {currentLang === 'ar' ? 'ماذا نقدم' : 'Capabilities'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-delta-navy">
            {t.services.title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {t.services.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-delta-orange mx-auto rounded-full mt-4" />
        </div>

        {/* شبكة كروت الخدمات الـ 8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.servicesList.map((service) => {
            const IconComponent = iconMap[service.icon] || Building2;

            return (
              <div 
                key={service.id}
                className="card-hover bg-slate-50/70 hover:bg-white rounded-2xl p-7 border border-slate-200/70 hover:border-delta-orange/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-delta-navy group-hover:bg-delta-navy group-hover:text-delta-orange transition-all mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-extrabold text-delta-navy mb-3 group-hover:text-delta-orange transition-colors">
                    {service.title[currentLang] || service.title.en}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.desc[currentLang] || service.desc.en}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-delta-navy group-hover:text-delta-orange">
                  <span>{currentLang === 'ar' ? 'طلب الخدمة' : 'Inquire Service'}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}