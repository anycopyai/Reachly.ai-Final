import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://copybackend.onrender.com/api/', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the Bearer token before each request
apiService.interceptors.request.use(
  (config) => {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZ2Fyd2Vic2VjQGdtYWlsLmNvbSIsImlhdCI6MTcwNTIzNjg0NH0.VFNuqajZFY9P1Ez-47zWscjJXbW71Pv2aJrOkygXDyk`;
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiService;