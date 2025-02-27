import axios from "axios";

const API_BASE_URL = 'http://localhost:3000/'

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// CRUD Operations
export const getReview = async () => api.get('/reviews');
export const getReviewById = async (id) => api.get(`/reviews/${id}`);
export const createReview = async (data) => api.post('/reviews', data);
export const updateReview = async (id, data) => api.put(`/reviews/${id}`, data);
export const deleteReview = async (id) => api.delete(`/reviews/${id}`);

export default api;