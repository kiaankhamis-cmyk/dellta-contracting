import React, { useState } from 'react';
import { X, Lock, KeyRound } from 'lucide-react';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    // كلمة المرور الافتراضية للوحة التحكم (يمكنك تغييرها متى أردت)
    if (password === 'delta123' || password === 'admin') {
      setError(false);
      setPassword('');
      onLoginSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-delta-dark/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-delta-navy text-delta-orange flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-black text-delta-navy">دخول لوحة التحكم</h3>
          <p className="text-xs text-slate-500">خاص بإدارة شركة دلتا للتعديل على الموقع</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">كلمة المرور الإدارية</label>
            <div className="relative">
              <KeyRound className="w-5 h-5 text-slate-400 absolute top-3.5 right-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                className="w-full pr-11 pl-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-delta-orange/50 focus:border-delta-orange text-sm font-sans"
                placeholder="أدخل كلمة المرور (delta123)"
              />
            </div>
            {error && (
              <p className="text-xs font-bold text-rose-500 mt-2">كلمة المرور غير صحيحة، جرب: delta123</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-delta-navy hover:bg-delta-dark text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-delta-navy/20 transition-all"
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
}