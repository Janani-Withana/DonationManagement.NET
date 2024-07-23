import React, { useState, useEffect } from 'react';
import { createDCandidate, updateDCandidate } from '../api/DCandidatesApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DCandidateForm = ({ refreshDCandidates, selectedCandidate, setSelectedCandidate }) => {
  const initialFormState = { fullName: '', mobile: '', email: '', age: '', bloodGroup: '', address: '' };
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (selectedCandidate) {
      setFormData(selectedCandidate);
    } else {
      setFormData(initialFormState);
    }
  }, [selectedCandidate]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (selectedCandidate) {
      updateDCandidate(selectedCandidate.id, formData)
        .then(res => {
          toast.success('Candidate updated successfully!');
          setFormData(initialFormState);
          setSelectedCandidate(null);
          refreshDCandidates();
        })
        .catch(err => {
          toast.error('Failed to update candidate.');
          console.error(err);
        });
    } else {
      createDCandidate(formData)
        .then(res => {
          toast.success('Candidate created successfully!');
          setFormData(initialFormState);
          refreshDCandidates();
        })
        .catch(err => {
          toast.error('Failed to create candidate.');
          console.error(err);
        });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-5">
        {selectedCandidate ? 'Edit Candidate' : 'Add New Candidate'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Blood Group</label>
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700">
            {selectedCandidate ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DCandidateForm;
