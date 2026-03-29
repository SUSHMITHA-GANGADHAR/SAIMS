import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };
  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 shadow">
      <h1 className="text-2xl font-bold">SAIMS</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </header>
  );
}

export default Navbar;
