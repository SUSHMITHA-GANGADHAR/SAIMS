import React from 'react';

const reviews = [
  { id: 1, student: 'Alex Johnson', company: 'Google', logType: 'Daily Recap', status: 'Pending' },
  { id: 2, student: 'Sarah Cooper', company: 'Microsoft', logType: 'Weekly Summary', status: 'Pending' },
  { id: 3, student: 'Jordan West', company: 'Amazon', logType: 'Final Review', status: 'In Review' },
];

function InternshipReview() {
  return (
    <div className="p-8 space-y-12 animate-fadeIn bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center bg-white p-12 rounded-[50px] shadow-3xl border border-gray-100 group">
        <div>
          <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-4 italic underline decoration-emerald-200 decoration-8 underline-offset-4">Internship Review</h2>
          <p className="text-xl text-gray-400 font-medium max-w-xl italic underline decoration-emerald-100 decoration-4">Validate student corporate logs and internship progress with elite industry partners.</p>
        </div>
        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 text-5xl group-hover:rotate-12 transition duration-500 shadow-2xl">📁</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((r) => (
          <div key={r.id} className="bg-white p-10 rounded-[40px] shadow-3xl border border-gray-50 flex flex-col items-center text-center space-y-6 hover:shadow-emerald-50 transition duration-500 transform hover:-translate-y-2 group">
             <div className="w-24 h-24 bg-emerald-50 rounded-[35px] flex items-center justify-center text-emerald-600 text-3xl font-black shadow-inner group-hover:rotate-6 transition duration-300">
                {r.student.charAt(0)}
             </div>
             <div>
                <h3 className="text-2xl font-black text-gray-900 tracking-tighter leading-none mb-2">{r.student}</h3>
                <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em] leading-none mb-2">Corporation: <span className="text-emerald-500">{r.company}</span></p>
                <p className="text-xs font-bold text-gray-300 italic tracking-widest">{r.logType}</p>
             </div>
             
             <div className="flex flex-col space-y-4 w-full pt-6">
                <span className={`px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest leading-none ${
                    r.status === 'Pending' ? 'bg-orange-100 text-orange-600 border border-orange-200' : 'bg-blue-100 text-blue-600 border border-blue-200 shadow-lg shadow-blue-50'
                }`}>
                   {r.status}
                </span>
                <button className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-emerald-600 hover:shadow-2xl transition transform hover:scale-105 uppercase tracking-widest text-[10px]">
                   Audit Weekly Log 📑
                </button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InternshipReview;
