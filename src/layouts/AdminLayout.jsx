import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';

function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar role="admin" />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
