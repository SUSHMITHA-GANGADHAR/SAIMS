import React from 'react';

const logs = [
  { id: 1, title: 'Weekly Recap: Mobile App Performance Optimization', date: '2026-03-20', company: 'Google', status: 'Approved' },
  { id: 2, title: 'Full Stack Integration Workflow', date: '2026-03-27', company: 'Google', status: 'Pending' },
  { id: 3, title: 'Cloud Infrastructure Setup & Security', date: '2026-04-03', company: 'Google', status: 'Pending' },
];

function InternshipLogs() {
  return (
    <div className="p-8 space-y-8 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-black text-gray-900 leading-tight">Internship Logs</h2>
          <p className="text-gray-500 font-medium tracking-tight">Track your professional experiences with Ethnotech Academy Partners.</p>
        </div>
        <div className="flex flex-col items-end">
           <span className="text-xs font-black uppercase text-gray-400 mb-1">Company Partner</span>
           <span className="text-xl font-black text-emerald-600 tracking-tighter hover:rotate-2 transition group flex items-center space-x-2">
             <span>GOOGLE</span> 
             <span>🚀</span>
           </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-8">
        {logs.map((log) => (
          <div key={log.id} className="bg-white p-8 rounded-3xl shadow-xl border border-indigo-50 flex flex-col md:flex-row md:items-center justify-between hover:shadow-indigo-100 transition duration-500 transform hover:-translate-x-2 group">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 text-3xl group-hover:rotate-6 transition duration-300">
                📁
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-800 leading-tight">{log.title}</h3>
                <div className="flex space-x-4 mt-1 text-sm text-gray-400 font-bold uppercase tracking-widest leading-none">
                  <span>Log Date: {log.date}</span>
                  <span>•</span>
                  <span>{log.company} Intern</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter ${
                log.status === 'Approved' ? 'bg-emerald-100 text-emerald-600' : 'bg-orange-100 text-orange-600'
              }`}>
                {log.status}
              </span>
              <button className="px-6 py-2 bg-gray-900 text-white rounded-xl font-black text-sm hover:bg-emerald-600 hover:shadow-lg transition">
                View Log
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-8 bg-indigo-600 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-20 -translate-y-20 blur-3xl group-hover:scale-125 transition duration-1000"></div>
         <div className="relative z-10 flex flex-col space-y-2 max-w-xl text-center md:text-left">
           <h3 className="text-2xl font-black italic tracking-tight">Need to Log New Activity?</h3>
           <p className="text-indigo-100 font-medium">Record your daily contributions at Google directly into the SAIMS portal. Submit before Sunday!</p>
         </div>
         <button className="relative z-10 px-10 py-4 bg-white text-indigo-700 font-black rounded-2xl hover:bg-emerald-100 hover:scale-105 transition transform shadow-2xl mt-6 md:mt-0">
           Submit Daily Log 📝
         </button>
      </div>
    </div>
  );
}

export default InternshipLogs;
