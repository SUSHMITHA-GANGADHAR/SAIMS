import React from 'react';

const kpis = [
  { title: 'Total Students', value: '12,450', icon: '🎓', trend: '+12%', color: 'indigo' },
  { title: 'Faculty Members', value: '458', icon: '👨‍🏫', trend: '+3%', color: 'emerald' },
  { title: 'Assignment Flow', value: '8.2K', icon: '📝', trend: '+24%', color: 'purple' },
  { title: 'Placements', value: '92%', icon: '🚀', trend: '+5%', color: 'orange' },
];

function AdminDashboard() {
  return (
    <div className="p-8 space-y-12 animate-fadeIn bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center group">
        <div>
          <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-4 italic underline decoration-indigo-200 decoration-8 underline-offset-4">Executive Overview</h2>
          <p className="text-xl text-gray-400 font-medium max-w-xl italic">Institutional Health & Academic Performance Analytics.</p>
        </div>
        <div className="w-24 h-24 bg-indigo-50 rounded-[40px] flex items-center justify-center text-indigo-600 text-5xl group-hover:rotate-12 transition duration-500 shadow-2xl">🏛️</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {kpis.map((k) => (
          <div key={k.title} className="bg-white p-8 rounded-[40px] shadow-3xl border border-gray-100 hover:shadow-indigo-100 transition duration-500 transform hover:-translate-y-2 group">
             <div className="flex justify-between items-start mb-6">
                <span className="text-4xl group-hover:scale-125 transition duration-500">{k.icon}</span>
                <span className="text-[10px] font-black uppercase text-emerald-500 tracking-widest leading-none bg-emerald-50 px-3 py-1 rounded-full">
                   {k.trend}
                </span>
             </div>
             <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em] mb-2">{k.title}</p>
             <h3 className="text-5xl font-black text-gray-900 tracking-tighter italic">{k.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-white p-12 rounded-[50px] shadow-3xl border border-gray-100 group">
            <h3 className="text-2xl font-black mb-8 flex items-center space-x-2 text-indigo-600 italic"><span>📊</span><span>Departmental Performance</span></h3>
            <div className="space-y-8">
               {['Computer Science', 'Artificial Intelligence', 'Cyber Security'].map((dept, i) => (
                 <div key={dept} className="space-y-3">
                   <div className="flex justify-between items-center font-black text-xs uppercase tracking-widest text-gray-400">
                     <span>{dept}</span>
                     <span className="text-indigo-600">{90 - i * 5}%</span>
                   </div>
                   <div className="w-full h-3 bg-slate-50 rounded-full overflow-hidden shadow-inner">
                     <div className="h-full bg-indigo-600 rounded-full shadow-lg" style={{ width: `${90 - i * 5}%` }}></div>
                   </div>
                 </div>
               ))}
            </div>
         </div>
         <div className="bg-indigo-900 text-white p-12 rounded-[50px] shadow-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-24 -translate-y-24 blur-3xl group-hover:scale-125 transition duration-1000"></div>
            <h3 className="text-2xl font-black mb-8 italic z-10 relative">Operational Tasks</h3>
            <div className="space-y-6 z-10 relative">
               <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <p className="text-sm font-bold opacity-80">Server status: Optimal</p>
               </div>
               <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition">
                  <div className="w-3 h-3 bg-orange-400"></div>
                  <p className="text-sm font-bold opacity-80">4 Pending Faculty Reviews</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
