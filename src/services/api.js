import axios from 'axios';

const stripTrailingSlash = (url) => (url ? url.replace(/\/$/, '') : url);

// Determine the correct API base URL based on environment
const getApiBaseUrl = () => {
  // Check for environment variable first
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  
  // Check if we're in development mode
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8000';
  }
  
  // Check if we're running on the main domain
  if (window.location.hostname === 'www.catalystcareers.in' || window.location.hostname === 'catalystcareers.in') {
    return 'https://catalyst-career-ai-backend.onrender.com';
  }
  
  // Production fallback
  return 'https://catalyst-career-ai-backend.onrender.com';
};

export const API_BASE_URL = getApiBaseUrl();

export const httpClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Debug logging
console.log('🔧 Frontend API Configuration:', {
  NODE_ENV: process.env.NODE_ENV,
  REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  hostname: window.location.hostname,
  API_BASE_URL,
  finalBaseURL: `${API_BASE_URL}/api`
});

export const TOKEN_STORAGE_KEY = 'auth_token';
export const getToken = () => {
  try { return localStorage.getItem(TOKEN_STORAGE_KEY); } catch { return null; }
};
export const setToken = (token) => {
  try { token ? localStorage.setItem(TOKEN_STORAGE_KEY, token) : localStorage.removeItem(TOKEN_STORAGE_KEY); } catch {}
};
export const clearToken = () => {
  try { localStorage.removeItem(TOKEN_STORAGE_KEY); } catch {}
};

httpClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  // Debug logging for requests
  console.log('🚀 API Request:', config.method?.toUpperCase(), config.url, 'Base URL:', config.baseURL);
  return config;
});

// Add response interceptor for debugging
httpClient.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('❌ API Error:', error.response?.status, error.config?.url, error.message);
    return Promise.reject(error);
  }
);

export const getApiBaseLabel = () => {
  return API_BASE_URL === '' ? 'dev proxy (/api → localhost:8000)' : `${API_BASE_URL}/api`;
};

const safeRequest = async (promise) => {
  try {
    console.log('🌐 Making API request...');
    const response = await promise;
    console.log('✅ API response successful:', response.data);
    return [response.data, null];
  } catch (error) {
    console.error('❌ API request failed:', {
      message: error?.message,
      status: error?.response?.status,
      statusText: error?.response?.statusText,
      data: error?.response?.data,
      config: {
        url: error?.config?.url,
        method: error?.config?.method,
        baseURL: error?.config?.baseURL,
        headers: error?.config?.headers
      }
    });
    
    const message = error?.response?.data?.detail || error?.message || 'Request failed';
    return [null, { message, status: error?.response?.status }];
  }
};

const api = {
  // GET /api/health
  getHealth: () => safeRequest(httpClient.get('/health')),

  // GET /api/conversation-starters
  getConversationStarters: () => safeRequest(httpClient.get('/conversation-starters')),

  // GET /api/agent-info
  getAgentInfo: () => safeRequest(httpClient.get('/agent-info')),

  // GET /api/system-status
  getSystemStatus: () => safeRequest(httpClient.get('/system-status')),

  // GET /api/status (from main app)
  getApiStatus: () => safeRequest(axios.get(`${API_BASE_URL}/api/status`)),

  // POST /api/chat
  chat: (messageText, userId = 'web_user') =>
    safeRequest(
      httpClient.post('/chat', {
        message: messageText,
        user_id: userId,
      })
    ),

  // POST /api/chat/comprehensive
  comprehensiveChat: (messageText, userId = 'web_user') =>
    safeRequest(
      httpClient.post('/chat/comprehensive', {
        message: messageText,
        user_id: userId,
      })
    ),

  // POST /api/upload-document
  uploadDocument: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return safeRequest(
      httpClient.post('/upload-document', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
    );
  },

  // POST /api/auth/login
  login: (email, password) =>
    safeRequest(
      httpClient.post('/auth/login', {
        email: email,
        password: password,
      })
    ),

  // POST /api/auth/signup
  signup: (name, email, password) =>
    safeRequest(
      httpClient.post('/auth/signup', {
        name: name,
        email: email,
        password: password,
      })
    ),

  // GET /api/auth/me
  getCurrentUser: () => safeRequest(httpClient.get('/auth/me')),

  // Admin endpoints
  // GET /api/admin/users
  getUsers: () => safeRequest(httpClient.get('/admin/users')),

  // GET /api/admin/activity
  getActivity: (limit = 100) => safeRequest(httpClient.get(`/admin/activity?limit=${limit}`)),

  // GET /api/admin/users/{user_id}/summary
  getUserSummary: (userId) => safeRequest(httpClient.get(`/admin/users/${userId}/summary`)),

  // Blog endpoints
  // GET /api/blog-posts (public)
  getBlogPosts: () => safeRequest(httpClient.get('/blog-posts')),

  // GET /api/blog-posts/{post_id} (public)
  getBlogPost: (postId) => safeRequest(httpClient.get(`/blog-posts/${postId}`)),

  // Contact endpoints
  // POST /api/contact
  submitContact: (contactData) => safeRequest(httpClient.post('/contact', contactData)),

  // Auth endpoints (duplicate - keeping for compatibility)
  // Expecting responses: { token, user } for login/signup; { user } for me
  getMe: () => safeRequest(httpClient.get('/auth/me')),
};

export default api;


