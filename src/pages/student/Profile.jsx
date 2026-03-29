import React from 'react';

function Profile() {
  const user = {
    name: 'Alex Johnson',
    email: 'alex.j@ethnotech.edu',
    studentId: 'ET-2026-X8',
    major: 'Computer Science & AI',
    semester: '6th',
    cgpa: '3.92',
    internship: 'Google (Product Team)',
    completedAssignments: 24,
    pendingAssignments: 3,
  };

  return (
    <div className="p-8 space-y-12 animate-fadeIn bg-slate-50 min-h-screen">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 relative z-10">
        <div className="relative group">
           <div className="absolute -inset-2 bg-indigo-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition group-hover:scale-110 duration-500"></div>
           <div className="w-48 h-48 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-7xl font-black shadow-2xl relative border-8 border-white group-hover:rotate-3 transition duration-500">
             {user.name.charAt(0)}
           </div>
           <div className="absolute bottom-4 right-4 bg-emerald-500 text-white p-3 rounded-full shadow-2xl border-4 border-white animate-bounce-slow flex items-center justify-center">
              <span>🚀</span>
           </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
           <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-600 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-4">
             Academic Scholar 🎓
           </div>
           <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-2 tracking-tighter">
             {user.name}
           </h2>
           <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-xl italic leading-relaxed">
             Full-stack enthusiast shaping next-gen experiences.
           </p>
           <p className="text-lg text-gray-500 mt-2 font-black uppercase tracking-widest text-sm opacity-50 underline decoration-indigo-400 decoration-4 underline-offset-8">
             {user.email}
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Academic Overview */}
        <div className="bg-white p-8 rounded-[40px] shadow-xl border border-indigo-50 hover:shadow-indigo-100 transition duration-500">
           <h3 className="text-2xl font-black mb-6 flex items-center space-x-2"><span>🏫</span><span>Academy Info</span></h3>
           <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-400">
                 <span>Student ID</span><span className="text-gray-900 font-black">{user.studentId}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-400">
                 <span>Major</span><span className="text-gray-900 font-black">{user.major}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-400">
                 <span>Semester</span><span className="text-indigo-600 font-black">{user.semester}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-400">
                 <span>Academic CGPA</span><span className="text-emerald-500 font-black text-xl">{user.cgpa}</span>
              </div>
           </div>
        </div>

        {/* Professional Overview */}
        <div className="bg-indigo-900 text-white p-8 rounded-[40px] shadow-xl hover:shadow-indigo-200 transition duration-500 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-12 -translate-y-12 blur-3xl group-hover:scale-125 transition duration-500"></div>
           <h3 className="text-2xl font-black mb-6 flex items-center space-x-2 relative z-10"><span>📍</span><span>Professional</span></h3>
           <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-indigo-300">
                 <span>Status</span><span className="bg-emerald-500 text-white px-3 py-1 rounded-full font-black tracking-tighter shadow-lg">Active Intern</span>
              </div>
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-indigo-300">
                 <span>Placement</span><span className="text-indigo-100 font-black text-right italic">{user.internship}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-indigo-300">
                 <span>Experience Type</span><span className="text-indigo-100 font-black">Industrial Exposure</span>
              </div>
           </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white p-8 rounded-[40px] shadow-xl border border-indigo-50 hover:shadow-indigo-100 transition duration-500">
           <h3 className="text-2xl font-black mb-6 flex items-center space-x-2 text-gray-900"><span>⚡</span><span>Quick Stats</span></h3>
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-6 rounded-3xl flex flex-col items-center">
                 <span className="text-3xl font-black text-indigo-600 leading-none">{user.completedAssignments}</span>
                 <span className="text-[10px] font-black uppercase text-gray-400 mt-2 tracking-widest leading-none">Finished</span>
              </div>
              <div className="bg-orange-50 p-6 rounded-3xl flex flex-col items-center">
                 <span className="text-3xl font-black text-orange-600 leading-none">{user.pendingAssignments}</span>
                 <span className="text-[10px] font-black uppercase text-gray-400 mt-2 tracking-widest leading-none">Pending</span>
              </div>
           </div>
           <button className="w-full mt-6 py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-emerald-600 transition shadow-2xl uppercase tracking-[0.2em] text-xs">
              View Analytics Report 📊
           </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
