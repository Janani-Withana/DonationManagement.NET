import axios from 'axios';

const API_URL = 'http://localhost:5070/api/DCandidates'; // ASP.NET Core backend URL

export const getDCandidates = () => axios.get(API_URL);
export const getDCandidate = id => axios.get(`${API_URL}/${id}`);
export const createDCandidate = candidate => axios.post(API_URL, candidate);
export const updateDCandidate = (id, candidate) => axios.put(`${API_URL}/${id}`, candidate);
export const deleteDCandidate = id => axios.delete(`${API_URL}/${id}`);
