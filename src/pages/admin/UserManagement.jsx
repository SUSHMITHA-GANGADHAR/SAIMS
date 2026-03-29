import React from 'react';

const users = [
  { id: 1, name: 'Alex Johnson', role: 'Student', dept: 'CS - AI', status: 'Active' },
  { id: 2, name: 'Dr. Sarah Smith', role: 'Teacher', dept: 'Information Security', status: 'Active' },
  { id: 3, name: 'Jordan West', role: 'Student', dept: 'Full Stack Dev', status: 'Pending' },
  { id: 4, name: 'Admin Root', role: 'Admin', dept: 'IT Operations', status: 'Active' },
];

function UserManagement() {
  return (
    <div className="p-8 space-y-8 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-none mb-2">User Management</h2>
          <p className="text-gray-400 font-medium">Provision and manage institutional access for all roles.</p>
        </div>
        <button className="px-8 py-3 bg-indigo-600 text-white font-black rounded-2xl hover:bg-emerald-600 shadow-2xl transition duration-300">
           Add New User ➕
        </button>
      </div>

      <div className="bg-white rounded-[40px] shadow-3xl border border-gray-100 overflow-hidden overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-gray-100">
            <tr>
              <th className="px-8 py-6 text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">User</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">Role</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">Department</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">Status</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 uppercase font-bold text-xs">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-indigo-50/30 transition duration-300 transform">
                <td className="px-8 py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 font-black">{u.name.charAt(0)}</div>
                    <span className="text-gray-900">{u.name}</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className={`px-3 py-1 rounded-lg ${u.role === 'Admin' ? 'bg-purple-100 text-purple-600' : u.role === 'Teacher' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-8 py-6 text-gray-500">{u.dept}</td>
                <td className="px-8 py-6">
                   <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${u.status === 'Active' ? 'bg-emerald-500' : 'bg-orange-400 animate-pulse'}`}></div>
                      <span className={u.status === 'Active' ? 'text-emerald-600' : 'text-orange-500'}>{u.status}</span>
                   </div>
                </td>
                <td className="px-8 py-6 text-right">
                   <button className="text-indigo-600 hover:underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagement;
