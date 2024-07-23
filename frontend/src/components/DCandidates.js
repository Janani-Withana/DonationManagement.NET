import React, { useState, useEffect } from 'react';
import { getDCandidates, deleteDCandidate } from '../api/DCandidatesApi';
import DCandidateForm from './DCandidateForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    refreshDCandidates();
  }, []);

  const refreshDCandidates = () => {
    getDCandidates()
      .then(res => {
        setCandidates(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const onDelete = id => {
    if (window.confirm('Are you sure to delete this candidate?')) {
      deleteDCandidate(id)
        .then(res => {
          toast.success('Candidate deleted successfully!');
          refreshDCandidates();
        })
        .catch(err => {
          toast.error('Failed to delete candidate.');
          console.error(err);
        });
    }
  };

  const onEdit = candidate => {
    setSelectedCandidate(candidate);
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <div className="flex flex-col md:flex-row md:justify-between mb-4">
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Form on the left */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="bg-white shadow-md rounded p-4 md:p-6">
            <DCandidateForm
              refreshDCandidates={refreshDCandidates}
              selectedCandidate={selectedCandidate}
              setSelectedCandidate={setSelectedCandidate}
            />
          </div>
        </div>

        {/* Candidate list centered */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <div className="bg-white shadow-md rounded p-4 md:p-6">
            <h2 className="text-xl font-semibold text-center mb-5">Candidates List</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Group</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {candidates.map(candidate => (
                  <tr key={candidate.id}>
                    <td className="px-4 py-2 whitespace-nowrap text-sm">{candidate.fullName}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm">{candidate.mobile}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm">{candidate.email}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm">{candidate.age}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm">{candidate.bloodGroup}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm">{candidate.address}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm">
                      <button
                        className="text-blue-600 hover:text-blue-900 mr-4 text-sm"
                        onClick={() => onEdit(candidate)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900 text-sm"
                        onClick={() => onDelete(candidate.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DCandidates;
