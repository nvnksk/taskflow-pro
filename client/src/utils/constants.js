export const API_URL = process.env.REACT_APP_API_URL || '/api';

export const TASK_PRIORITIES = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
};

export const TASK_STATUS = {
  ACTIVE: 'active',
  COMPLETED: 'completed',
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  TASKS: '/tasks',
  DASHBOARD: '/dashboard',
};

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
};
