import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const registerService = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || 'Failed to register');
  }
};

export const loginService = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || 'Failed to login');
  }
};





