// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DCandidateList from './components/DCandidateList';
// import AddDCandidate from './components/AddDCandidate';
// import DCandidate from './components/DCandidate';
// import './styles/DCandidateList.css'

// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <h2 className="title">Donation Management System</h2>
//         <Routes>
//           <Route path="/" element={<DCandidateList />} />
//           <Route path="/dcandidates" element={<DCandidateList />} />
//           <Route path="/add" element={<AddDCandidate />} />
//           <Route path="/dcandidates/:id" element={<DCandidate />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import DCandidates from './components/DCandidates';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-8">Donation Candidates Management</h1>
      <DCandidates />
    </div>
  );
}

export default App;
