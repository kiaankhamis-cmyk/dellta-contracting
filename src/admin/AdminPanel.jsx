import React, { useState } from 'react';
import { X, Sparkles, Plus, Phone, Trash2, Check, Save } from 'lucide-react';
import { autoTranslateText } from '../utils/translator';

export default function AdminPanel({ isOpen, onClose, siteData, setSiteData }) {
  const [activeTab, setActiveTab] = useState('newProject');
  const [translating, setTranslating] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // حالة إضافة مشروع جديد
  const [newProject, setNewProject] = useState({
    nameAr: '',
    nameEn: '',
    nameHi: '',
    locAr: '',
    locEn: '',
    locHi: '',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1000&auto=format&fit=crop'
  });

  // حالة تعديل بيانات التواصل
  const [contactData, setContactData] = useState({
    phone1: siteData.contact.phones[0] || '',
    phone2: siteData.contact.phones[1] || '',
    email: siteData.contact.emails[0] || ''
  });

  if (!isOpen) return null;

  // زر الترجمة التلقائية المجانية بضغطة واحدة
  const handleAutoTranslate = async () => {
    if (!newProject.nameAr && !newProject.locAr) {
      alert('يرجى كتابة اسم المشروع أو المدينة بالعربي أولاً لترجمتها!');
      return;
    }
    setTranslating(true);
    try {
      const [nameEn, nameHi, locEn, locHi] = await Promise.all([
        autoTranslateText(newProject.nameAr, 'en'),
        autoTranslateText(newProject.nameAr, 'hi'),
        autoTranslateText(newProject.locAr, 'en'),
        autoTranslateText(newProject.locAr, 'hi')
      ]);

      setNewProject(prev => ({
        ...prev,
        nameEn: nameEn || prev.nameEn,
        nameHi: nameHi || prev.nameHi,
        locEn: locEn || prev.locEn,
        locHi: locHi || prev.locHi
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setTranslating(false);
    }
  };

  // حفظ المشروع الجديد إلى الموقع
  const handleAddProject = (e) => {
    e.preventDefault();
    const created = {
      id: Date.now(),
      name: {
        ar: newProject.nameAr,
        en: newProject.nameEn || newProject.nameAr,
        hi: newProject.nameHi || newProject.nameAr
      },
      location: {
        ar: newProject.locAr,
        en: newProject.locEn || newProject.locAr,
        hi: newProject.locHi || newProject.locAr
      },
      category: newProject.category,
      image: newProject.image
    };

    setSiteData(prev => ({
      ...prev,
      projectsList: [created, ...prev.projectsList]
    }));

    setSavedSuccess(true);
    setNewProject({
      nameAr: '', nameEn: '', nameHi: '',
      locAr: '', locEn: '', locHi: '',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1000&auto=format&fit=crop'
    });
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  // حفظ بيانات التواصل المعدلة
  const handleSaveContact = (e) => {
    e.preventDefault();
    setSiteData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        phones: [contactData.phone1, contactData.phone2].filter(Boolean),
        emails: [contactData.email].filter(Boolean)
      }
    }));
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  // حذف مشروع
  const handleDeleteProject = (id) => {
    if (confirm('هل أنت متأكد من حذف هذا المشروع من الموقع؟')) {
      setSiteData(prev => ({
        ...prev,
        projectsList: prev.projectsList.filter(p => p.id !== id)
      }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-delta-dark/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full my-auto shadow-2xl overflow-hidden border border-slate-200">
        
        {/* هيدر لوحة التحكم */}
        <div className="bg-delta-navy px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-delta-orange flex items-center justify-center font-black">
              d
            </div>
            <div>
              <h2 className="text-lg font-bold">لوحة تحكم إدارة شركة دلتا</h2>
              <span className="text-xs text-slate-300">تعديل المحتوى والمشاريع والترجمة التلقائية</span>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* أزرار التبويب */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-4">
          <button
            onClick={() => setActiveTab('newProject')}
            className={`py-4 px-2 font-bold text-sm border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'newProject' ? 'border-delta-orange text-delta-orange' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>إضافة وتعديل المشاريع</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`py-4 px-2 font-bold text-sm border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'contact' ? 'border-delta-orange text-delta-orange' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>تعديل أرقام التواصل</span>
          </button>
        </div>

        {savedSuccess && (
          <div className="mx-6 mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl font-bold text-xs flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>تم حفظ التعديلات بنجاح وظهرت في الموقع فوراً!</span>
          </div>
        )}

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {activeTab === 'newProject' ? (
            <div className="space-y-8">
              {/* نموذج إضافة مشروع جديد */}
              <form onSubmit={handleAddProject} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-delta-navy text-base">إضافة مشروع جديد</h4>
                  <button
                    type="button"
                    onClick={handleAutoTranslate}
                    disabled={translating}
                    className="inline-flex items-center gap-1.5 bg-delta-petrol hover:bg-delta-navy text-white text-xs px-3.5 py-2 rounded-xl font-bold shadow-sm transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-delta-orange" />
                    <span>{translating ? 'جاري الترجمة التلقائية...' : 'ترجمة تلقائية للإنجليزية والهندية'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">اسم المشروع (عربي)*</label>
                    <input
                      type="text"
                      required
                      value={newProject.nameAr}
                      onChange={(e) => setNewProject({ ...newProject, nameAr: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border text-sm"
                      placeholder="مثال: برج الأعمال الفاخر"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">الاسم بالإنجليزي (English)</label>
                    <input
                      type="text"
                      value={newProject.nameEn}
                      onChange={(e) => setNewProject({ ...newProject, nameEn: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border text-sm"
                      placeholder="Luxury Business Tower"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">الاسم بالهندي (हिन्दी)</label>
                    <input
                      type="text"
                      value={newProject.nameHi}
                      onChange={(e) => setNewProject({ ...newProject, nameHi: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border text-sm"
                      placeholder="लक्जरी बिजनेस टॉवर"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">المدينة والموقع (عربي)*</label>
                    <input
                      type="text"
                      required
                      value={newProject.locAr}
                      onChange={(e) => setNewProject({ ...newProject, locAr: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border text-sm"
                      placeholder="خميس مشيط"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">الموقع (English)</label>
                    <input
                      type="text"
                      value={newProject.locEn}
                      onChange={(e) => setNewProject({ ...newProject, locEn: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border text-sm"
                      placeholder="Khamis Mushayt"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">الموقع (हिन्दी)</label>
                    <input
                      type="text"
                      value={newProject.locHi}
                      onChange={(e) => setNewProject({ ...newProject, locHi: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border text-sm"
                      placeholder="खमीस मुशायत"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">التصنيف</label>
                    <select
                      value={newProject.category}
                      onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border text-sm bg-white"
                    >
                      <option value="commercial">تجاري ومولات</option>
                      <option value="medical">مستشفيات ومراكز صحية</option>
                      <option value="residential">فنادق وسكني</option>
                      <option value="government">حكومي</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">رابط صورة المشروع</label>
                    <input
                      type="url"
                      value={newProject.image}
                      onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border text-sm"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-delta-orange hover:bg-delta-orangeHover text-white py-3 rounded-xl font-bold text-sm shadow transition-all"
                >
                  حفظ ونشر المشروع بالموقع فوراً
                </button>
              </form>

              {/* قائمة المشاريع الحالية للحذف أو المراجعة */}
              <div>
                <h4 className="font-extrabold text-delta-navy text-sm mb-3">جميع المشاريع المعروضة بالموقع ({siteData.projectsList.length})</h4>
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
                  {siteData.projectsList.map((p) => (
                    <div key={p.id} className="p-3 flex items-center justify-between hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <img src={p.image} alt="" className="w-12 h-12 object-cover rounded-lg" />
                        <div>
                          <div className="font-bold text-sm text-delta-navy">{p.name.ar}</div>
                          <div className="text-xs text-slate-400">{p.location.ar} • {p.name.en}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteProject(p.id)}
                        className="text-slate-400 hover:text-rose-600 p-2 rounded-lg transition-colors"
                        title="حذف المشروع"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* نموذج تعديل بيانات التواصل */
            <form onSubmit={handleSaveContact} className="space-y-5 max-w-lg mx-auto py-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">رقم الهاتف الأول</label>
                <input
                  type="text"
                  value={contactData.phone1}
                  onChange={(e) => setContactData({ ...contactData, phone1: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">رقم الهاتف الثاني</label>
                <input
                  type="text"
                  value={contactData.phone2}
                  onChange={(e) => setContactData({ ...contactData, phone2: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">البريد الإلكتروني الرسمي</label>
                <input
                  type="email"
                  value={contactData.email}
                  onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-delta-navy hover:bg-delta-dark text-white py-3.5 rounded-xl font-bold text-sm shadow transition-all"
              >
                <Save className="w-4 h-4 text-delta-orange" />
                <span>حفظ بيانات التواصل الجديدة</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}