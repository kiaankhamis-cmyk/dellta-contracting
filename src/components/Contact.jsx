import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact({ currentLang, t, siteData }) {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ترويسة التواصل */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-delta-orange font-bold text-sm tracking-wider uppercase">
            {currentLang === 'ar' ? 'تواصل فوري' : 'Get in Touch'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-delta-navy">
            {t.contact.title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {t.contact.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-delta-orange mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* كروت بيانات الاتصال الرسمية */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-delta-navy rounded-3xl p-8 text-white space-y-8 shadow-xl">
              <div>
                <h3 className="text-2xl font-black mb-2">
                  {currentLang === 'ar' ? 'مستعدون لبدء مشروعك؟' : 'Ready to start your project?'}
                </h3>
                <p className="text-slate-300 text-sm">
                  {currentLang === 'ar' ? 'تواصل مباشرة مع فريقنا الهندسي لاستشارة مجانية.' : 'Contact our engineering team directly for inquiries.'}
                </p>
              </div>

              {/* أرقام الهواتف */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-delta-orange shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-300 mb-1">{t.contact.callUs}</h4>
                  {siteData.contact.phones.map((phone, i) => (
                    <a key={i} href={`tel:${phone}`} className="block font-bold text-base hover:text-delta-orange transition-colors" dir="ltr">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* البريد الإلكتروني */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-delta-orange shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-300 mb-1">{t.contact.emailUs}</h4>
                  {siteData.contact.emails.map((email, i) => (
                    <a key={i} href={`mailto:${email}`} className="block font-medium text-sm hover:text-delta-orange transition-colors">
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              {/* العنوان */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-delta-orange shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-300 mb-1">{t.contact.visitUs}</h4>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {siteData.contact.address[currentLang] || siteData.contact.address.en}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* نموذج إرسال طلب عرض سعر */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-md">
            <h3 className="text-2xl font-black text-delta-navy mb-6">
              {currentLang === 'ar' ? 'طلب عرض سعر مباشر' : 'Request a Direct Quote'}
            </h3>

            {formSent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 font-bold">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <span>{currentLang === 'ar' ? 'تم استلام طلبك بنجاح! سيتواصل معك مهندسنا قريباً.' : 'Thank you! Your inquiry has been received.'}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">{t.contact.formName}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-delta-orange/50 focus:border-delta-orange bg-white text-sm"
                    placeholder={currentLang === 'ar' ? 'مثال: شركة التطوير العقاري' : 'Your name or company'}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">{t.contact.formPhone}</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-delta-orange/50 focus:border-delta-orange bg-white text-sm"
                    placeholder="05xxxxxxxx"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">{t.contact.formMsg}</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-delta-orange/50 focus:border-delta-orange bg-white text-sm"
                    placeholder={currentLang === 'ar' ? 'نوع الواجهة المطلوبة، المدينة، المساحة التقريبية...' : 'Project details...'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-delta-orange hover:bg-delta-orangeHover text-white py-4 rounded-xl font-bold shadow-lg shadow-delta-orange/25 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-5 h-5" />
                  <span>{t.contact.sendBtn}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}