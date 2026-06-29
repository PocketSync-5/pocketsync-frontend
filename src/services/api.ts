    import axios from 'axios';

    const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    });

    // Attach token to every request automatically
    api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    });

    // ── Auth ──
    export const loginUser = async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
    };

    export const registerUser = async (fullname: string, email: string, password: string) => {
    const response = await api.post('/auth/register', { fullname, email, password });
    return response.data;
    };

    export const getAuthenticatedUser = async () => {
    const response = await api.get('/auth/me');
    return response.data;
    };

    // ── Profile ──
    export const createProfile = async (
    dateOfBirth: string,
    phoneNumber: string,
    nin: string,
    bvn: string
    ) => {
    const response = await api.post('/profile', { dateOfBirth, phoneNumber, nin, bvn });
    return response.data;
    };

    export const getProfile = async () => {
    const response = await api.get('/profile');
    return response.data;
    };

    export const updateProfile = async (
    dateOfBirth: string,
    phoneNumber: string,
    nin: string,
    bvn: string
    ) => {
    const response = await api.patch('/profile', { dateOfBirth, phoneNumber, nin, bvn });
    return response.data;
    };

    export default api;