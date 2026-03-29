import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../../components/common/Card';

function AssignmentSubmission() {
  const { id } = useParams(); // assignment id (mock)
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSaveDraft = () => {
    // mock save draft
    alert('Draft saved (mock)');
  };

  const handleSubmit = () => {
    if (!file) {
      alert('Please select a file to submit');
      return;
    }
    setSaving(true);
    setTimeout(() => {
      setSubmitted(true);
      setSaving(false);
      alert('Assignment submitted!');
      navigate('/student/assignments');
    }, 1000);
  };

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        Assignment Submission (ID: {id})
      </h2>
      {submitted ? (
        <p className="text-green-600">Submitted successfully!</p>
      ) : (
        <div className="space-y-4">
          <Card
            title="Assignment Title"
            value="Sample Assignment"
            bgClass="bg-white"
            textClass="text-gray-800"
          />
          <div>
            <label className="block mb-1 font-medium">Upload File</label>
            <input type="file" onChange={handleFileChange} className="border p-2" />
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleSaveDraft}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
            >
              Save Draft
            </button>
            <button
              onClick={handleSubmit}
              disabled={saving}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {saving ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignmentSubmission;
