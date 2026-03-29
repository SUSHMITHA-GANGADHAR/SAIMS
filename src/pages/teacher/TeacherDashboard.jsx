import React from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { title: 'Pending Grades', value: '18', icon: '📝', color: 'indigo', link: '/teacher/grade' },
  { title: 'Student Pass Rate', value: '94%', icon: '🎓', color: 'emerald', link: '/teacher/courses' },
  { title: 'Active Courses', value: '4', icon: '📚', color: 'purple', link: '/teacher/courses' },
  { title: 'Internship Leads', value: '12', icon: '💼', color: 'orange', link: '/teacher/internship-review' },
];

function TeacherDashboard() {
  return (
    <div className="p-8 space-y-12 animate-fadeIn bg-slate-50 min-h-screen font-sans">
      <div className="flex justify-between items-center group">
        <div>
          <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-4 italic underline decoration-indigo-200 decoration-8 underline-offset-4">Staff Command</h2>
          <p className="text-xl text-gray-400 font-medium max-w-xl italic">Manage Student Performance & Academic Deliverables.</p>
        </div>
        <div className="w-24 h-24 bg-indigo-50 rounded-[40px] flex items-center justify-center text-indigo-600 text-5xl group-hover:rotate-12 transition duration-500 shadow-2xl">👨‍🏫</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <Link to={s.link} key={s.title} className="bg-white p-10 rounded-[40px] shadow-3xl border border-gray-100 hover:shadow-indigo-100 transition duration-500 transform hover:-translate-y-2 group">
             <div className="flex justify-between items-start mb-6">
                <span className="text-4xl group-hover:scale-125 transition duration-500">{s.icon}</span>
                <span className="w-6 h-6 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 text-[8px] font-black group-hover:rotate-12 transition duration-300 shadow-2xl">⚡</span>
             </div>
             <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em] mb-2">{s.title}</p>
             <h3 className="text-5xl font-black text-gray-900 tracking-tighter italic">{s.value}</h3>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-white p-12 rounded-[50px] shadow-3xl border border-gray-100 group">
            <h3 className="text-2xl font-black mb-8 flex items-center space-x-2 text-indigo-600 italic"><span>📌</span><span>Recent Activity</span></h3>
            <div className="space-y-6 font-bold text-xs uppercase tracking-widest text-gray-400">
               <Link to="/teacher/grade" className="flex justify-between items-center bg-slate-50 p-6 rounded-3xl hover:bg-white border border-transparent hover:border-indigo-100 transition shadow-inner">
                 <span>New Assignment Submissions</span><span className="text-indigo-600">+12 Today</span>
               </Link>
               <Link to="/teacher/internship-review" className="flex justify-between items-center bg-slate-50 p-6 rounded-3xl hover:bg-white border border-transparent hover:border-indigo-100 transition shadow-inner">
                 <span>Internship Reviews Pending</span><span className="text-orange-500">3 Students</span>
               </Link>
               <div className="flex justify-between items-center bg-indigo-900 p-6 rounded-3xl text-white shadow-2xl">
                 <span>Upcoming Faculty Meeting</span><span>14:30 PM</span>
               </div>
            </div>
         </div>
         <div className="bg-white p-12 rounded-[50px] shadow-3xl border border-gray-100 group relative overflow-hidden">
            <h3 className="text-2xl font-black mb-10 flex items-center space-x-2 text-gray-900 italic"><span>📈</span><span>Student Attendance Trend</span></h3>
            <div className="h-48 bg-slate-50/50 rounded-[40px] border-2 border-dashed border-indigo-100 flex items-center justify-center text-indigo-300 font-extrabold tracking-widest text-xs uppercase">
               Visualization Flow Active
            </div>
            <div className="mt-8 flex justify-center space-x-4">
               <div className="w-10 h-10 bg-indigo-100 rounded-xl hover:scale-110 transition shadow-lg"></div>
               <div className="w-10 h-10 bg-emerald-100 rounded-xl hover:scale-110 transition shadow-lg"></div>
               <div className="w-10 h-10 bg-orange-100 rounded-xl hover:scale-110 transition shadow-lg"></div>
            </div>
         </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
