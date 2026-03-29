import React from 'react';

function Settings() {
  return (
    <div className="p-8 space-y-12 animate-fadeIn bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center bg-white p-12 rounded-[50px] shadow-3xl border border-gray-100 group">
        <div>
          <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-4 italic underline decoration-indigo-200 decoration-8 underline-offset-4">Portal Settings</h2>
          <p className="text-xl text-gray-400 font-medium max-w-xl italic">Institutional configuration for Ethnotech Academy Solutions.</p>
        </div>
        <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 text-5xl group-hover:rotate-12 transition duration-500">⚙️</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-12 rounded-[50px] shadow-3xl border border-indigo-50 hover:shadow-indigo-100 transition duration-500 transform hover:-translate-x-2">
           <h3 className="text-2xl font-black mb-8 flex items-center space-x-2 text-indigo-600 uppercase tracking-widest text-xs tracking-tighter">System Configuration</h3>
           <div className="space-y-10">
              <div className="flex flex-col space-y-3">
                 <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em] leading-none">University Name</label>
                 <input className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-black placeholder:font-medium" placeholder="Ethnotech Academy Solutions" />
              </div>
              <div className="flex flex-col space-y-3">
                 <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em] leading-none">Global Contact Email</label>
                 <input className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-black placeholder:font-medium" placeholder="support@ethnotech.edu" />
              </div>
           </div>
        </div>

        <div className="bg-indigo-900 text-white p-12 rounded-[50px] shadow-3xl group relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-32 -translate-y-32 blur-3xl group-hover:scale-125 transition duration-1000"></div>
           <h3 className="text-2xl font-black mb-8 flex items-center space-x-2 text-indigo-200 uppercase tracking-widest text-xs tracking-tighter z-10 relative">Academic Rules</h3>
           <div className="space-y-8 z-10 relative">
              <div className="flex justify-between items-center">
                 <span className="text-sm font-black uppercase tracking-widest text-indigo-300">Allow Late Submissions</span>
                 <div className="w-16 h-8 bg-emerald-500 rounded-full flex items-center px-1 shadow-2xl transition duration-500 transform hover:scale-105">
                    <div className="w-6 h-6 bg-white rounded-full ml-auto shadow-xl"></div>
                 </div>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-sm font-black uppercase tracking-widest text-indigo-300">Enable AI Grading Assistant</span>
                 <div className="w-16 h-8 bg-indigo-700/50 rounded-full flex items-center px-1 shadow-2xl border border-indigo-100/10 opacity-50">
                    <div className="w-6 h-6 bg-white rounded-full mr-auto shadow-xl"></div>
                 </div>
              </div>
              <button className="w-full py-5 bg-white text-indigo-700 font-black rounded-[24px] hover:bg-emerald-50 transition transform hover:-translate-y-1 shadow-2xl uppercase tracking-widest text-xs">
                 Save Global Rules ⚡
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
