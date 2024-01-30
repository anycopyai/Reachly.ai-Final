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
    const token = localStorage.getItem("accessToken");
    // Replace with your actual Bearer token
    console.log(token)
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