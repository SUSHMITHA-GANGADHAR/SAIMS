import React from 'react';

const stats = [
  { label: 'Avg Attendance', value: '94.2%', change: '+2.1%', icon: '📅' },
  { label: 'Internship Success', value: '88.5%', change: '+5.4%', icon: '🚀' },
  { label: 'Submission Rate', value: '76.1%', change: '-1.2%', icon: '📝' },
  { label: 'Teacher Activity', value: 'High', change: '+10%', icon: '⚡' },
];

function Reports() {
  return (
    <div className="p-8 space-y-12 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-none mb-2 italic underline decoration-indigo-200">Institutional Reports</h2>
          <p className="text-gray-400 font-medium">Real-time academic performance and corporate internship metrics.</p>
        </div>
        <div className="flex space-x-4">
           <button className="px-6 py-2 bg-indigo-50 text-indigo-600 font-black rounded-xl hover:bg-white border border-indigo-100 transition duration-300">
             Quarterly PDF
           </button>
           <button className="px-6 py-2 bg-gray-900 text-white font-black rounded-xl hover:bg-emerald-600 border border-gray-800 transition duration-300 shadow-xl">
             Generate Live Report
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-8 rounded-[40px] shadow-3xl border border-gray-100 hover:shadow-indigo-100 transition duration-500 transform hover:-translate-y-2 group">
             <div className="flex justify-between items-start mb-6">
                <span className="text-4xl group-hover:scale-125 transition duration-500">{s.icon}</span>
                <span className={`px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black tracking-widest leading-none ${s.change.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                   {s.change}
                </span>
             </div>
             <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em] mb-2">{s.label}</p>
             <h3 className="text-4xl font-black text-gray-900 tracking-tighter italic">{s.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-indigo-900 text-white p-12 rounded-[50px] shadow-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-24 -translate-y-24 blur-3xl group-hover:scale-125 transition duration-1000"></div>
            <h3 className="text-2xl font-black mb-6 flex items-center space-x-2 italic"><span>📊</span><span>Participation Flow</span></h3>
            <div className="h-64 bg-white/5 rounded-[40px] border border-white/10 flex items-center justify-center font-black tracking-widest text-indigo-200">
               DYNAMIC VISUALIZATION AREA
            </div>
         </div>
         <div className="bg-white p-12 rounded-[50px] shadow-3xl border border-gray-100 group">
            <h3 className="text-2xl font-black mb-6 flex items-center space-x-2 text-indigo-600 italic underline decoration-indigo-200 decoration-8 underline-offset-4"><span>📍</span><span>Corporate Leads</span></h3>
            <div className="space-y-6">
               <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-gray-400">
                  <span>Google Internship Leads</span><span className="text-indigo-600">88 Students</span>
               </div>
               <div className="w-full h-3 bg-slate-50 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[88%] shadow-2xl"></div>
               </div>
               <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-gray-400 mt-8">
                  <span>Microsoft Certifications</span><span className="text-indigo-600">64 Students</span>
               </div>
               <div className="w-full h-3 bg-slate-50 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 w-[64%] shadow-2xl"></div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

export default Reports;
