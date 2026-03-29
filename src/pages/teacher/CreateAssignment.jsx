import React, { useState } from 'react';

function CreateAssignment() {
  const [form, setForm] = useState({
    title: '',
    course: '',
    description: '',
    deadline: '',
    marks: '',
    lateSubmission: false,
    resubmission: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock submit – replace with API call
    setTimeout(() => {
      alert('Assignment created (mock)');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create Assignment</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div>
          <label className="block mb-1">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Course</label>
          <input
            name="course"
            value={form.course}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows={4}
          />
        </div>
        <div>
          <label className="block mb-1">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Marks</label>
          <input
            type="number"
            name="marks"
            value={form.marks}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="lateSubmission"
              checked={form.lateSubmission}
              onChange={handleChange}
              className="mr-2"
            />
            Allow Late Submission
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="resubmission"
              checked={form.resubmission}
              onChange={handleChange}
              className="mr-2"
            />
            Allow Resubmission
          </label>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
        >
          {loading ? 'Creating...' : 'Create Assignment'}
        </button>
      </form>
    </div>
  );
}

export default CreateAssignment;
