import axios from "axios";

// Automatically detect environment
const API_URL = import.meta.env.MODE === 'development' 
  ? "http://localhost:9000"  // Local development
  : "https://shayribackend-ff04.onrender.com"; // Production

console.log('Current mode:', import.meta.env.MODE);
console.log('API_URL being used:', API_URL);

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;