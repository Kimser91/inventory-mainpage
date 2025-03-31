import axios from 'axios';

const API_URL = 'https://api.inventoryadministrator.com/api/auth';

export const register = async (userData) => {
    return axios.post(`${API_URL}/register`, userData);
};

export const login = async (userData) => {
    return axios.post(`${API_URL}/login`, userData);
};

export const getUser = async (token) => {
    return axios.get(`${API_URL}/user`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
