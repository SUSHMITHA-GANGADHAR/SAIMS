import React from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { title: 'Pending Tasks', value: '3', bgClass: 'bg-indigo-600', icon: '📝', link: '/student/assignments' },
  { title: 'Active Courses', value: '4', bgClass: 'bg-emerald-600', icon: '📚', link: '/student/courses' },
  { title: 'Academic CGPA', value: '3.92', bgClass: 'bg-purple-600', icon: '🎓', link: '/student/profile' },
  { title: 'Internship Logs', value: '1', bgClass: 'bg-orange-600', icon: '📁', link: '/student/internships' },
];

function StudentDashboard() {
  return (
    <div className="p-8 space-y-12 animate-fadeIn bg-slate-50 min-h-screen font-sans">
      <div className="flex justify-between items-end group">
        <div>
          <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-4 italic underline decoration-indigo-200 decoration-8 underline-offset-4 tracking-tighter">My Dashboard</h2>
          <p className="text-xl text-gray-400 font-medium max-w-xl italic">Welcome back to Ethnotech Academy Solutions.</p>
        </div>
        <div className="bg-white p-4 rounded-[30px] shadow-3xl border border-indigo-50 flex flex-col items-center group-hover:rotate-3 transition duration-500">
           <span className="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em]">Semester</span>
           <p className="text-2xl font-black text-indigo-600">6TH</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <Link to={s.link} key={s.title} className={`${s.bgClass} p-10 rounded-[40px] shadow-3xl text-white hover:scale-105 transition duration-500 transform group relative overflow-hidden`}>
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-12 -translate-y-12 blur-2xl group-hover:scale-125 transition duration-1000"></div>
             <div className="flex justify-between items-start mb-6">
                <span className="text-4xl group-hover:rotate-12 transition duration-500">{s.icon}</span>
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-[10px] font-black shadow-2xl">⚡</span>
             </div>
             <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-80">{s.title}</p>
             <h3 className="text-5xl font-black tracking-tighter italic leading-none">{s.value}</h3>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Deadlines Section */}
        <div className="bg-white p-12 rounded-[50px] shadow-2xl border border-indigo-50 transition hover:shadow-indigo-100 group">
          <h3 className="text-2xl font-black text-gray-900 mb-10 flex items-center space-x-3 italic underline decoration-indigo-100 decoration-8 underline-offset-4">
            <span>🔥</span>
            <span>Academic Deadlines</span>
          </h3>
          <div className="bg-slate-50 p-8 rounded-[40px] border border-gray-100 group-hover:bg-white transition duration-500">
            <p className="text-gray-400 font-medium text-center italic">"No assignments due in the next 48 hours. Focus on your internship logs!" 🍹</p>
          </div>
          <div className="mt-8 flex justify-center">
             <Link to="/student/assignments" className="text-indigo-600 font-extrabold uppercase tracking-widest text-[10px] hover:underline underline-offset-8">View Calendar 📅</Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-900 p-12 rounded-[50px] shadow-2xl text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full translate-x-24 -translate-y-24 blur-3xl group-hover:scale-125 transition duration-1000"></div>
          <h3 className="text-2xl font-black mb-10 relative z-10 italic">🚀 Executive Actions</h3>
          <div className="grid grid-cols-1 gap-6 relative z-10 font-sans">
            <Link to="/student/assignments" className="bg-white/5 hover:bg-white/10 p-6 rounded-3xl text-left font-black transition flex items-center justify-between border border-white/5 uppercase tracking-widest text-[10px]">
              Submit Assignment <span className="text-lg">➡️</span>
            </Link>
            <Link to="/student/internships" className="bg-white/5 hover:bg-white/10 p-6 rounded-3xl text-left font-black transition flex items-center justify-between border border-white/5 uppercase tracking-widest text-[10px]">
              Daily Internship Recap <span className="text-lg">➡️</span>
            </Link>
            <Link to="/student/profile" className="bg-white/5 hover:bg-white/10 p-6 rounded-3xl text-left font-black transition flex items-center justify-between border border-white/5 uppercase tracking-widest text-[10px]">
              Review Academic Stats <span className="text-lg">➡️</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
