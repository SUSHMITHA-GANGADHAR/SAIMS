import React, { useState } from 'react';

const initialCourses = [
  { id: 1, title: 'Network Security Fundamentals', students: 45, status: 'Active' },
  { id: 2, title: 'Full Stack Development (Node.js)', students: 32, status: 'Active' },
  { id: 3, title: 'Cloud Infrastructure & DevOps', students: 28, status: 'Completed' },
];

function CourseManagement() {
  const [courses, setCourses] = useState(initialCourses);
  const [newCourse, setNewCourse] = useState({ title: '', students: 0, status: 'Active' });
  const [showAdd, setShowAdd] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    if (newCourse.title) {
      setCourses([{ id: Date.now(), ...newCourse }, ...courses]);
      setNewCourse({ title: '', students: 0, status: 'Active' });
      setShowAdd(false);
    }
  };

  return (
    <div className="p-8 space-y-12 animate-fadeIn bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center group">
        <div>
          <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-4 italic underline decoration-indigo-200 decoration-8 underline-offset-4">Course Management</h2>
          <p className="text-xl text-gray-400 font-medium max-w-xl italic">Manage and deploy your academic curriculum modules.</p>
        </div>
        <button 
          onClick={() => setShowAdd(!showAdd)}
          className="px-8 py-4 bg-indigo-600 text-white font-black rounded-3xl hover:bg-emerald-600 shadow-2xl transition duration-500 transform hover:scale-105"
        >
          {showAdd ? 'Close Form' : 'Provision New Course 📚'}
        </button>
      </div>

      {showAdd && (
        <form onSubmit={handleAdd} className="bg-white p-12 rounded-[50px] shadow-3xl border border-indigo-100 animate-slideUp space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                 <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Course Title</label>
                 <input 
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                    placeholder="e.g. Artificial Intelligence Mastery"
                    className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-black"
                 />
              </div>
              <div className="space-y-3">
                 <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Initial Capacity</label>
                 <input 
                    type="number"
                    value={newCourse.students}
                    onChange={(e) => setNewCourse({...newCourse, students: e.target.value})}
                    className="w-full bg-slate-50 border border-transparent p-5 rounded-[24px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition shadow-inner font-black"
                 />
              </div>
           </div>
           <button type="submit" className="w-full py-5 bg-gray-900 text-white font-black rounded-[24px] hover:bg-indigo-600 transition shadow-2xl uppercase tracking-widest text-xs">
              Confirm and Deploy Course 🚀
           </button>
        </form>
      )}

      <div className="grid grid-cols-1 gap-8">
        {courses.map((c) => (
          <div key={c.id} className="bg-white p-10 rounded-[50px] shadow-3xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between hover:shadow-indigo-100 transition duration-500 hover:-translate-y-1 group">
             <div className="flex items-center space-x-10">
                <div className="w-24 h-24 bg-indigo-50 rounded-[35px] flex items-center justify-center text-indigo-600 text-4xl shadow-inner group-hover:rotate-6 transition duration-300">
                   📘
                </div>
                <div>
                   <h3 className="text-3xl font-black text-gray-900 tracking-tighter mb-1">{c.title}</h3>
                   <div className="flex items-center space-x-6 text-[10px] font-black uppercase text-gray-400 tracking-widest leading-none underline decoration-indigo-100">
                      <span>{c.students} Students Enrolled</span>
                      <span>•</span>
                      <span className={c.status === 'Active' ? 'text-emerald-500' : 'text-orange-500'}>{c.status}</span>
                   </div>
                </div>
             </div>
             <div className="mt-8 md:mt-0 flex items-center space-x-6">
                <button className="px-6 py-2 border-2 border-slate-100 text-gray-400 font-extrabold rounded-2xl hover:text-indigo-600 hover:border-indigo-100 transition">View Details</button>
                <button className="px-10 py-5 bg-gray-900 text-white font-black rounded-3xl hover:bg-indigo-600 shadow-2xl transition transform hover:scale-105 uppercase tracking-widest text-[10px]">
                   Edit Content 🛠️
                </button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseManagement;
