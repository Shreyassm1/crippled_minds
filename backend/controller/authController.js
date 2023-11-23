import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const registerUser = async (registrationData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, registrationData);

    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error during user registration:', error);
    return { success: false, error: 'Registration failed' };
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, loginData);

    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error during user Login:', error);
    return { success: false, error: 'Login failed' };
  }
};
