import React from 'react';
import { Link } from 'react-router-dom';

const assignments = [
  { id: 1, title: 'Network Security Fundamentals', dueDate: '2026-04-15', status: 'Pending', type: 'Lab' },
  { id: 2, title: 'Full Stack Development Project', dueDate: '2026-04-20', status: 'In Progress', type: 'Project' },
  { id: 3, title: 'Cloud Computing Case Study', dueDate: '2026-04-10', status: 'Submitted', type: 'Assignment' },
];

function Assignments() {
  return (
    <div className="p-8 space-y-8 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-black text-gray-900 leading-tight">Assignments</h2>
          <p className="text-gray-500 font-medium">Manage your academic deliverables for this semester.</p>
        </div>
        <div className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold shadow-lg shadow-indigo-200">
          Semester 6
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-8">
        {assignments.map((a) => (
          <div key={a.id} className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 text-2xl">
                {a.type === 'Lab' ? '🧪' : a.type === 'Project' ? '🚀' : '📚'}
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-800">{a.title}</h3>
                <div className="flex space-x-4 mt-1 text-sm text-gray-400 font-bold uppercase tracking-widest">
                  <span>Due: {a.dueDate}</span>
                  <span>•</span>
                  <span>{a.type}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter ${
                a.status === 'Pending' ? 'bg-orange-100 text-orange-600' : 
                a.status === 'Submitted' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'
              }`}>
                {a.status}
              </span>
              <Link 
                to={`/student/assignments/${a.id}`} 
                className="px-6 py-2 bg-gray-900 text-white rounded-xl font-black text-sm hover:bg-indigo-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignments;
