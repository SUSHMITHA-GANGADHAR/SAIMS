import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const navItems = {
  student: [
    { to: '/student', label: 'Dashboard', icon: '📊' },
    { to: '/student/courses', label: 'My Courses', icon: '📚' },
    { to: '/student/assignments', label: 'Assignments', icon: '📝' },
    { to: '/student/internships', label: 'Internships', icon: '📁' },
    { to: '/student/profile', label: 'Profile', icon: '👤' },
  ],
  teacher: [
    { to: '/teacher', label: 'Dashboard', icon: '📊' },
    { to: '/teacher/courses', label: 'Course Management', icon: '📗' },
    { to: '/teacher/create-assignment', label: 'Create Assignment', icon: '➕' },
    { to: '/teacher/grade', label: 'Grading Queue', icon: '📝' },
    { to: '/teacher/internship-review', label: 'Internship Review', icon: '📁' },
  ],
  admin: [
    { to: '/admin', label: 'Dashboard', icon: '📊' },
    { to: '/admin/users', label: 'User Management', icon: '👥' },
    { to: '/admin/reports', label: 'Reports', icon: '📈' },
    { to: '/admin/settings', label: 'Settings', icon: '⚙️' },
  ],
};

function Sidebar({ role }) {
  const items = navItems[role] || [];
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <aside className="w-72 bg-white dark:bg-gray-900 h-screen sticky top-0 border-r border-gray-100 dark:border-gray-800 p-6 flex flex-col shadow-2xl overflow-y-auto">
      <Link to="/" className="mb-10 px-4 group">
        <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.4em] mb-1 group-hover:text-indigo-600 transition tracking-tighter italic">Ethnotech</h2>
        <p className="text-lg font-black text-indigo-600 capitalize italic leading-none">{role} Panel</p>
      </Link>
      
      <nav className="flex-1 space-y-3">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center space-x-3 py-4 px-5 rounded-3xl transition-all duration-500 group ${
                isActive 
                  ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-100 scale-105' 
                  : 'text-gray-400 hover:bg-slate-50 hover:text-indigo-600'
              }`
            }
          >
            <span className="text-2xl group-hover:scale-125 transition duration-500">{item.icon}</span>
            <span className="font-black uppercase tracking-widest text-[10px]">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="pt-6 border-t border-gray-50 dark:border-gray-800 flex flex-col space-y-4">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 py-4 px-5 rounded-3xl text-red-500 hover:bg-red-50 transition transform hover:scale-105"
        >
          <span className="text-2xl">🚪</span>
          <span className="font-black uppercase tracking-widest text-[10px]">Logout Portal</span>
        </button>
      </div>
    </aside>
  );
}

// Fixed import for Link
import { Link } from 'react-router-dom';

export default Sidebar;
