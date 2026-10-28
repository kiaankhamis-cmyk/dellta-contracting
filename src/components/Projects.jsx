import React, { useState } from 'react';
import { MapPin, ExternalLink, X } from 'lucide-react';

export default function Projects({ currentLang, t, siteData }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: { ar: 'جميع المشاريع', en: 'All Projects', hi: 'सभी परियोजनाएं' } },
    { id: 'medical', label: { ar: 'مستشفيات ومراكز صحية', en: 'Medical & Healthcare', hi: 'चिकित्सा एवं स्वास्थ्य' } },
    { id: 'commercial', label: { ar: 'مراكز تجارية وأسواق', en: 'Commercial & Malls', hi: 'वाणिज्यिक और मॉल' } },
    { id: 'residential', label: { ar: 'مشاريع فندقية وسكنية', en: 'Residential & Hotels', hi: 'आवासीय एवं होटल' } },
    { id: 'government', label: { ar: 'مبانٍ حكومية', en: 'Government Buildings', hi: 'सरकारी भवन' } }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? siteData.projectsList 
    : siteData.projectsList.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* عنوان القسم */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-delta-orange font-bold text-sm tracking-wider uppercase">
            {currentLang === 'ar' ? 'سجل الإنجازات' : 'Portfolio'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-delta-navy">
            {t.projects.title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {t.projects.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-delta-orange mx-auto rounded-full" />
        </div>

        {/* أزرار الفلترة والتصنيف */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm ${
                activeCategory === cat.id
                  ? 'bg-delta-navy text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-delta-orange hover:bg-slate-100'
              }`}
            >
              {cat.label[currentLang] || cat.label.en}
            </button>
          ))}
        </div>

        {/* شبكة عرض كروت المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.name[currentLang] || project.name.en}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-delta-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-white font-bold bg-delta-orange px-3 py-1.5 rounded-lg shadow">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{currentLang === 'ar' ? 'عرض تفاصيل المشروع' : 'View Details'}</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-bold text-delta-orange mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{project.location[currentLang] || project.location.en}</span>
                </div>
                <h3 className="text-lg font-bold text-delta-navy group-hover:text-delta-orange transition-colors line-clamp-1">
                  {project.name[currentLang] || project.name.en}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* نافذة تكبير المشروع المنبثقة (Lightbox Modal) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-delta-dark/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-80 sm:h-96 w-full overflow-hidden bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.name[currentLang] || selectedProject.name.en}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-delta-orange">
                <MapPin className="w-4 h-4" />
                <span>{selectedProject.location[currentLang] || selectedProject.location.en}</span>
              </div>
              <h3 className="text-2xl font-black text-delta-navy">
                {selectedProject.name[currentLang] || selectedProject.name.en}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {currentLang === 'ar' 
                  ? 'تم تنفيذ المشروع بواسطة شركة دلتا الجديدة للمقاولات بأحدث تقنيات الزجاج والكلادينج والأعمال المعمارية المتطورة.'
                  : 'Executed by New Delta Contracting Co. utilizing the highest standards of architectural glass and facade systems.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}