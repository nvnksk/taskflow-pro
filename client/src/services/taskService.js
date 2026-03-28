import api from './api';

export const getTasks = () => api.get('/api/tasks');
export const getTaskById = (id) => api.get(`/api/tasks/${id}`);
export const addTask = (task) => api.post('/api/tasks', task);
export const updateTask = (id, task) => api.put(`/api/tasks/${id}`, task);
export const deleteTask = (id) => api.delete(`/api/tasks/${id}`);