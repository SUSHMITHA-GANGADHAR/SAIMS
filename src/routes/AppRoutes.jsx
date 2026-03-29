import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/auth/Login';
import StudentRegister from '../pages/auth/StudentRegister';
import StaffRegister from '../pages/auth/StaffRegister';
import StudentDashboard from '../pages/student/StudentDashboard';
import Courses from '../pages/student/Courses';
import Assignments from '../pages/student/Assignments';
import AssignmentSubmission from '../pages/student/AssignmentSubmission';
import InternshipLogs from '../pages/student/InternshipLogs';
import Profile from '../pages/student/Profile';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import CourseManagement from '../pages/teacher/CourseManagement';
import CreateAssignment from '../pages/teacher/CreateAssignment';
import GradingQueue from '../pages/teacher/GradingQueue';
import InternshipReview from '../pages/teacher/InternshipReview';
import AdminDashboard from '../pages/admin/AdminDashboard';
import UserManagement from '../pages/admin/UserManagement';
import Reports from '../pages/admin/Reports';
import Settings from '../pages/admin/Settings';
import StudentLayout from '../layouts/StudentLayout';
import TeacherLayout from '../layouts/TeacherLayout';
import AdminLayout from '../layouts/AdminLayout';
import Landing from '../pages/Landing';

// Mock auth utilities – replace with real auth logic
const getUserRole = () => localStorage.getItem('role');
const isAuthenticated = () => !!localStorage.getItem('token');

const ProtectedRoute = ({ children, allowedRoles }) => {
  const role = getUserRole();
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  if (!allowedRoles.includes(role)) {
    // redirect to appropriate dashboard if role mismatch
    const redirectMap = {
      student: '/student',
      teacher: '/teacher',
      admin: '/admin',
    };
    return <Navigate to={redirectMap[role] || '/login'} replace />;
  }
  return children;
};

function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<StudentRegister />} />
      <Route path="/register/staff" element={<StaffRegister />} />

      {/* Student area */}
      <Route
        path="/student/*"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <StudentLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<StudentDashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="assignments/:id" element={<AssignmentSubmission />} />
        <Route path="internships" element={<InternshipLogs />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Teacher area */}
      <Route
        path="/teacher/*"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <TeacherLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<TeacherDashboard />} />
        <Route path="courses" element={<CourseManagement />} />
        <Route path="create-assignment" element={<CreateAssignment />} />
        <Route path="grade" element={<GradingQueue />} />
        <Route path="internship-review" element={<InternshipReview />} />
      </Route>

      {/* Admin area */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
