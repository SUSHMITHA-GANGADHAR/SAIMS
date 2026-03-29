import React from 'react';

const courses = [
  { id: 1, title: 'Network Security Fundamentals', progress: '65%', status: 'Active', bg: 'bg-indigo-600' },
  { id: 2, title: 'Full Stack Development', progress: '32%', status: 'Active', bg: 'bg-emerald-600' },
  { id: 3, title: 'Cloud Computing & DevOps', progress: '100%', status: 'Completed', bg: 'bg-orange-600' },
];

function StudentCourses() {
  return (
    <div className="p-8 space-y-12 animate-fadeIn bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center group">
        <div>
          <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-4 italic underline decoration-indigo-200 decoration-8 underline-offset-4">Your Courses</h2>
          <p className="text-xl text-gray-400 font-medium max-w-xl italic">Manage your enrolled academic curriculum and learning progress.</p>
        </div>
        <div className="w-24 h-24 bg-indigo-50 rounded-[40px] flex items-center justify-center text-indigo-600 text-5xl group-hover:rotate-12 transition duration-500 shadow-2xl">🎓</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((c) => (
          <div key={c.id} className="bg-white p-10 rounded-[50px] shadow-3xl border border-gray-100 flex flex-col justify-between hover:shadow-indigo-100 transition duration-500 transform hover:-translate-y-2 group">
             <div className="space-y-6">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-indigo-600 text-3xl font-black shadow-inner group-hover:rotate-6 transition duration-300">
                   📘
                </div>
                <div>
                   <h3 className="text-2xl font-black text-gray-900 tracking-tighter leading-none mb-2">{c.title}</h3>
                   <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest leading-none ${
                     c.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'
                   }`}>
                      {c.status}
                   </span>
                </div>
             </div>
             
             <div className="mt-8 pt-8 border-t border-gray-50 flex flex-col space-y-6">
                <div className="space-y-2">
                   <div className="flex justify-between items-center text-[10px] font-black uppercase text-gray-400 tracking-widest leading-none">
                      <span>Curriculum Progress</span>
                      <span className="text-indigo-600 font-black">{c.progress}</span>
                   </div>
                   <div className="w-full h-3 bg-slate-50 rounded-full overflow-hidden shadow-inner">
                      <div className={`h-full ${c.bg} rounded-full transition shadow-2xl`} style={{ width: c.progress }}></div>
                   </div>
                </div>
                <button className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-emerald-600 hover:shadow-2xl transition transform hover:scale-105 uppercase tracking-widest text-[10px]">
                   Resume Learning 📝
                </button>
             </div>
          </div>
        ))}
        {/* Empty placeholder for "Provisioning" new courses */}
        <div className="bg-slate-50 border-4 border-dashed border-gray-100 rounded-[50px] flex flex-col items-center justify-center p-12 text-center opacity-40 hover:opacity-100 transition duration-500 group">
           <span className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition font-black">💡</span>
           <p className="text-sm font-black text-gray-400 uppercase tracking-widest leading-none">New Curriculum Incoming</p>
           <p className="text-xs font-bold text-gray-300 mt-2 italic">Faculty is provisioning more courses for this semester.</p>
        </div>
      </div>
    </div>
  );
}

export default StudentCourses;
