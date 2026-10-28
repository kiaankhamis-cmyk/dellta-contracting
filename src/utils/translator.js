/**
 * سكريبت ترجمة مجاني 100% بدون اشتراكات أو بطاقة بنكية
 * يعتمد على محرك Google Translate المفتوح
 */
export async function autoTranslateText(text, targetLang) {
  if (!text || text.trim() === '') return '';
  
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const data = await response.json();
    
    // استخراج النص المترجم المدمج
    if (data && data[0]) {
      return data[0].map(item => item[0]).join('');
    }
    return text;
  } catch (error) {
    console.error(`خطأ في الترجمة إلى ${targetLang}:`, error);
    return text;
  }
}