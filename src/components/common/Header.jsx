import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl sticky top-0 z-50 p-4 shadow-xl border-b border-indigo-50 dark:border-gray-700 flex justify-between items-center transition-all duration-500 hover:shadow-2xl">
      <Link to="/" className="flex items-center space-x-3 group">
        <div className="w-12 h-12 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-2xl group-hover:rotate-6 transition duration-300">E</div>
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-none italic">Ethnotech</span>
          <span className="text-[10px] md:text-xs text-gray-400 font-bold tracking-widest uppercase">Academy Solutions</span>
        </div>
      </Link>
      
      <nav className="hidden lg:flex items-center space-x-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center text-gray-600 hover:text-indigo-600 transition-all duration-300 transform hover:scale-105 ${isActive ? 'text-indigo-600 font-bold border-b-2 border-indigo-600' : ''}`
          }
        >
          <span>Home</span>
        </NavLink>
        <a
          href="/#about"
          className="flex items-center text-gray-600 hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
        >
          <span>About</span>
        </a>
        <a
          href="/#contact"
          className="flex items-center text-gray-600 hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
        >
          <span>Contact</span>
        </a>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex items-center space-x-2 border-r border-gray-100 pr-4">
           <Link to="/login" className="px-4 py-2 text-xs font-black uppercase text-gray-400 hover:text-indigo-600 transition duration-300 tracking-widest">Admin</Link>
           <Link to="/login" className="px-4 py-2 text-xs font-black uppercase text-gray-400 hover:text-indigo-600 transition duration-300 tracking-widest">Staff</Link>
        </div>
        <Link
          to="/login"
          className="px-6 py-2 bg-slate-100 text-indigo-600 rounded-full font-bold hover:bg-indigo-50 transition duration-300 shadow-sm"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition duration-300 hover:scale-105"
        >
          Register
        </Link>
      </div>
    </header>
  );
}

export default Header;
