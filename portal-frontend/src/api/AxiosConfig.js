import axios from "axios";
import { oktaAuth } from "../config/OktaAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach access token dynamically
axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = await oktaAuth.getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;