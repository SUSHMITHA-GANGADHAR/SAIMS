import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import heroImg from '../../assets/student_with_books.png';

function StudentRegister() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    studentId: '',
    email: '',
    password: '',
    department: '',
    semester: '',
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
        setError('Please complete all academic requirements.');
      } else {
        localStorage.setItem('token', 'demo-token');
        localStorage.setItem('role', 'student');
        navigate('/student');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Left side: New Student with Books & Bag Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden h-screen sticky top-0">
        <img 
          src={heroImg} 
          alt="Academy life" 
          className="absolute inset-0 w-full h-full object-cover transition duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-indigo-900/10 backdrop-blur-[1px]"></div>
      </div>

      {/* Right side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-xl space-y-8 animate-fadeIn">
          <div>
            <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-none italic underline decoration-indigo-200">Scholar Enrollment</h2>
            <p className="mt-4 text-gray-400 font-bold uppercase text-[10px] tracking-[0.4em]">Integrated Academic Portal</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {error && (
              <div className="col-span-full p-4 bg-orange-50 border-l-4 border-orange-500 text-orange-700 text-sm font-bold rounded">
                {error}
              </div>
            )}
            
            <div className="space-y-1 col-span-full">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1 leading-none">Full Academic Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-bold"
                placeholder="Alex Johnson"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1 leading-none">Institutional ID</label>
              <input
                name="studentId"
                value={form.studentId}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-bold"
                placeholder="ET-2026-X"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1 leading-none">Academic Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-bold"
                placeholder="alex.j@ethnotech.edu"
                required
              />
            </div>

            <div className="space-y-1">
               <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1 leading-none">Primary Department</label>
               <input
                name="department"
                value={form.department}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-bold"
                placeholder="Computer Science"
                required
              />
            </div>

            <div className="space-y-1">
               <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1 leading-none">Current Semester</label>
               <input
                name="semester"
                value={form.semester}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-bold"
                placeholder="6th"
                required
              />
            </div>

            <div className="space-y-1 col-span-full">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1 leading-none">Security Passphrase</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-bold tracking-widest placeholder:tracking-normal"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full col-span-full py-6 bg-indigo-600 text-white font-black rounded-[30px] shadow-2xl shadow-indigo-100 hover:bg-emerald-600 hover:scale-[1.02] transform transition disabled:opacity-50 mt-6 uppercase tracking-[0.2em] text-[10px]"
            >
              {loading ? 'Processing Academy Admission...' : 'Confirm Enrollment 🚀'}
            </button>
          </form>

          <footer className="pt-8 flex flex-col items-center space-y-4 font-sans">
             <p className="text-center text-gray-500 font-bold mb-2">
               Already a Scholar? 
               <Link to="/login" className="ml-2 text-indigo-600 font-black hover:underline underline-offset-8 decoration-2 italic transition">Sign In</Link>
             </p>
             <p className="text-center text-[10px] font-black text-gray-300 uppercase tracking-widest leading-none">
                Not a Student? 
                <Link to="/register/staff" className="ml-2 text-indigo-400 transition hover:text-indigo-600">Faculty Gateway</Link>
             </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default StudentRegister;
