import React from 'react';
import Card from '../../components/common/Card';

function AssignmentManagement() {
  const assignments = [
    { id: 1, title: 'Math Homework', submissions: 10 },
    { id: 2, title: 'History Essay', submissions: 8 },
    { id: 3, title: 'Science Project', submissions: 5 },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Assignment Management</h2>
      <div className="space-y-4">
        {assignments.map((a) => (
          <Card
            key={a.id}
            title={a.title}
            value={`${a.submissions} submissions`}
            bgClass="bg-white"
            textClass="text-gray-800"
          />
        ))}
      </div>
    </div>
  );
}

export default AssignmentManagement;
