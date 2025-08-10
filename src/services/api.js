import axios from 'axios';

const stripTrailingSlash = (url) => (url ? url.replace(/\/$/, '') : url);

// Use CRA dev proxy in development by default (relative /api). If REACT_APP_API_URL is set, use it.
const isDev = process.env.NODE_ENV !== 'production';
export const API_BASE_URL = isDev && !process.env.REACT_APP_API_URL
  ? 'http://localhost:8000'
  : stripTrailingSlash(process.env.REACT_APP_API_URL) || 'http://localhost:8000';

export const httpClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getApiBaseLabel = () => {
  return API_BASE_URL === '' ? 'dev proxy (/api → localhost:8000)' : `${API_BASE_URL}/api`;
};

const safeRequest = async (promise) => {
  try {
    const response = await promise;
    return [response.data, null];
  } catch (error) {
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
};

export default api;


