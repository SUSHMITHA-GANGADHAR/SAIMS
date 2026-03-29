import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';

function TeacherLayout() {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Sidebar role="teacher" />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default TeacherLayout;
