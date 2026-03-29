import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import corpImg from '../../assets/corporate_hq.png';

function StaffRegister() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    role: 'teacher',
    staffId: '',
    email: '',
    department: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Mock registration
    setTimeout(() => {
      const allFilled = Object.values(form).every((v) => v.trim() !== '');
      if (!allFilled) {
        setError('Please complete all professional credentials.');
      } else {
        localStorage.setItem('token', 'demo-token');
        localStorage.setItem('role', form.role);
        navigate(`/${form.role}`);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Left side: New Corporate HQ Image for Staff & Admin */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden h-screen sticky top-0 group">
        <img 
          src={corpImg} 
          alt="Academy Administration" 
          className="absolute inset-0 w-full h-full object-cover grayscale transition duration-1000 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-indigo-900/10 transition duration-700"></div>
      </div>

      {/* Right side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-xl space-y-10 animate-fadeIn bg-white p-12 rounded-[50px] shadow-3xl border border-gray-100">
          <div>
            <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-1">Staff Authority</h2>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.4em]">Administration Infrastructure Gateway</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            {error && (
              <div className="col-span-full p-4 bg-orange-50 border-l-4 border-orange-500 text-orange-700 text-sm font-bold rounded">
                {error}
              </div>
            )}
            
            <div className="space-y-4 col-span-full">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1 opacity-80 underline decoration-indigo-200 decoration-4">Select Domain</label>
              <div className="grid grid-cols-2 gap-4">
                 <button 
                   type="button" 
                   onClick={() => setForm({...form, role: 'teacher'})}
                   className={`p-6 rounded-[24px] font-black text-xs uppercase tracking-widest transition-all duration-300 border-2 ${
                     form.role === 'teacher' ? 'bg-indigo-600 border-indigo-600 text-white shadow-2xl scale-105' : 'bg-white border-slate-100 text-gray-400 opacity-60'
                   }`}
                 >
                   Teacher
                 </button>
                 <button 
                   type="button" 
                   onClick={() => setForm({...form, role: 'admin'})}
                   className={`p-6 rounded-[24px] font-black text-xs uppercase tracking-widest transition-all duration-300 border-2 ${
                     form.role === 'admin' ? 'bg-indigo-600 border-indigo-600 text-white shadow-2xl scale-105' : 'bg-white border-slate-100 text-gray-400 opacity-60'
                   }`}
                 >
                   Admin
                 </button>
              </div>
            </div>

            <div className="space-y-2 col-span-full">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Official Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-bold"
                placeholder="Dr. Jordan West"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Employee ID</label>
              <input
                name="staffId"
                value={form.staffId}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-bold"
                placeholder="ETH-EMP-X"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Faculty Dept.</label>
              <input
                name="department"
                value={form.department}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-bold"
                placeholder="Computer Science"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Corporate Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-bold"
                placeholder="staff@ethnotech.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Gateway Auth</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-bold tracking-widest underline decoration-transparent focus:decoration-indigo-100"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full col-span-full py-6 bg-indigo-600 text-white font-black rounded-[30px] shadow-2xl shadow-indigo-100 hover:bg-emerald-600 hover:scale-[1.02] transform transition disabled:opacity-50 mt-4 uppercase tracking-[0.2em] text-[10px]"
            >
              {loading ? 'Authenticating Authority...' : 'Finalize Access Gateway 🗝️'}
            </button>
          </form>

          <footer className="pt-8 flex justify-center items-center">
             <Link to="/register" className="text-[10px] font-black text-indigo-400 hover:text-indigo-600 transition uppercase tracking-widest border-b-2 border-transparent hover:border-indigo-600 hover:-translate-y-1 transform">
               Back to Student Center
             </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default StaffRegister;
