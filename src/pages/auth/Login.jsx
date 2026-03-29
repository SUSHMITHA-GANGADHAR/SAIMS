import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import studImg from '../../assets/student_with_books.png';
import corpImg from '../../assets/corporate_hq.png';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loginMode, setLoginMode] = useState('scholar'); // 'scholar' or 'authority'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Mock authentication
    setTimeout(() => {
      if (email && password) {
        let role = 'student';
        if (loginMode === 'authority') {
           role = email.includes('admin') ? 'admin' : 'teacher';
        }

        localStorage.setItem('token', 'demo-token');
        localStorage.setItem('role', role);
        navigate(`/${role}`);
      } else {
        setError('Verification failed. Use official Ethnotech credentials.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Left Side: Smart Image Switcher */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden transition-all duration-1000">
        <img 
          src={loginMode === 'scholar' ? studImg : corpImg} 
          alt="Ethnotech Gateway" 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100 scale-105"
        />
        <div className={`absolute inset-0 ${loginMode === 'scholar' ? 'bg-indigo-900/10' : 'bg-gray-900/40'} backdrop-blur-[1px] transition-all duration-1000`}></div>
        <div className="absolute top-12 left-12 z-10 animate-slideUp">
           <div className="w-16 h-16 bg-white flex items-center justify-center rounded-2xl shadow-3xl skew-x-12">
              <span className="text-3xl font-black text-indigo-600 -skew-x-12">E</span>
           </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-10 animate-fadeIn">
          <div className="flex space-x-4 mb-2">
             <button 
               onClick={() => setLoginMode('scholar')}
               className={`flex-1 py-3 text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl transition duration-500 ${loginMode === 'scholar' ? 'bg-indigo-600 text-white shadow-2xl' : 'bg-slate-100 text-gray-400'}`}
             >
               Scholar Entrance
             </button>
             <button 
               onClick={() => setLoginMode('authority')}
               className={`flex-1 py-3 text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl transition duration-500 ${loginMode === 'authority' ? 'bg-gray-900 text-white shadow-2xl skew-y-1' : 'bg-slate-100 text-gray-400'}`}
             >
               Staff Authority
             </button>
          </div>

          <div>
             <h2 className={`text-5xl font-black tracking-tight leading-none uppercase italic underline decoration-indigo-200 transition-all duration-700 ${loginMode === 'scholar' ? 'text-gray-900' : 'text-indigo-900'}`}>
                {loginMode === 'scholar' ? 'Sign In' : 'Authenticate'}
             </h2>
             <p className="mt-4 text-gray-400 font-bold uppercase text-[10px] tracking-[0.4em] transition-all duration-500">
                Ethnotech Academy - {loginMode === 'scholar' ? 'Student Center' : 'Institutional Command'}
             </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-bold rounded">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1 leading-none italic decoration-indigo-200">Official Gateway</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-gray-100 p-5 rounded-[24px] focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-bold"
                placeholder="connect@ethnotech.edu"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1 leading-none italic decoration-indigo-200">Security Passphrase</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border border-gray-100 p-5 rounded-[24px] focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-bold tracking-widest"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition"
                >
                  {showPassword ? '🫣' : '👁️'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-5 text-white font-black rounded-3xl shadow-2xl transition-all transform hover:scale-[1.02] disabled:opacity-50 uppercase tracking-[0.2em] text-[10px] duration-500 ${loginMode === 'scholar' ? 'bg-indigo-600 shadow-indigo-100 hover:bg-emerald-600' : 'bg-gray-900 shadow-gray-200 hover:bg-indigo-900'}`}
            >
              {loading ? 'Authenticating Identity...' : 'Unseal Dashboard ⚡'}
            </button>
          </form>

          <footer className="pt-8 border-t border-gray-100 flex flex-col items-center space-y-4">
             <p className="text-center text-[10px] font-black uppercase tracking-widest text-gray-400 overflow-hidden">
                New to Ethnotech? 
                <Link to="/register" className="ml-2 text-indigo-600 border-b-2 border-indigo-200 hover:border-indigo-600 transition duration-300 italic">Provision Account</Link>
             </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Login;
