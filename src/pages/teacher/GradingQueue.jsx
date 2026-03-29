import React from 'react';

const submissions = [
  { id: 1, student: 'Alex Johnson', assignment: 'Network Security Lab', submitted: '2h ago', status: 'Pending' },
  { id: 2, student: 'Sarah Cooper', assignment: 'Full Stack Integration', submitted: '5h ago', status: 'Pending' },
  { id: 3, student: 'Jordan West', assignment: 'Cloud Infrastructure', submitted: 'Yesterday', status: 'Graded' },
];

function GradingQueue() {
  return (
    <div className="p-8 space-y-12 animate-fadeIn bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center bg-white p-12 rounded-[50px] shadow-3xl border border-gray-100 group">
        <div>
          <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-4 italic underline decoration-indigo-200 decoration-8 underline-offset-4">Grading Queue</h2>
          <p className="text-xl text-gray-400 font-medium max-w-xl italic">Review student submissions and provide official academic feedback.</p>
        </div>
        <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 text-5xl group-hover:rotate-12 transition duration-500">📝</div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {submissions.map((s) => (
          <div key={s.id} className="bg-white p-10 rounded-[40px] shadow-3xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between hover:shadow-indigo-100 transition duration-500 transform hover:-translate-y-1">
             <div className="flex items-center space-x-8">
                <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 text-3xl font-black shadow-inner">
                   {s.student.charAt(0)}
                </div>
                <div>
                   <h3 className="text-2xl font-black text-gray-900 tracking-tighter">{s.student}</h3>
                   <p className="text-xs font-black uppercase text-gray-400 tracking-[0.2em] mt-1">{s.assignment}</p>
                   <p className="text-xs font-bold text-indigo-600 mt-1 italic tracking-tight underline decoration-indigo-100 decoration-4">Submitted: {s.submitted}</p>
                </div>
             </div>
             
             <div className="mt-8 md:mt-0 flex items-center space-x-8 font-sans">
                <span className={`px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest leading-none ${
                    s.status === 'Pending' ? 'bg-orange-100 text-orange-600 border border-orange-200 shadow-lg shadow-orange-50 animate-pulse' : 'bg-emerald-100 text-emerald-600 border border-emerald-200 shadow-lg shadow-emerald-50'
                }`}>
                   {s.status}
                </span>
                <button className={`px-10 py-4 font-black rounded-2xl transition transform hover:scale-105 shadow-2xl uppercase tracking-widest text-[10px] ${
                    s.status === 'Pending' ? 'bg-indigo-600 text-white hover:bg-emerald-600 hover:shadow-emerald-100' : 'bg-slate-100 text-gray-400 cursor-not-allowed'
                }`}>
                   {s.status === 'Pending' ? 'Evaluate Submission' : 'Feedback Sent'}
                </button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GradingQueue;
