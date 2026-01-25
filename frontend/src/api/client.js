import axios from 'axios';
import toast from 'react-hot-toast';

const client = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor: Attach Token
client.interceptors.request.use(
    (config) => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            const { token } = JSON.parse(userInfo);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor: Error Handling
client.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error.response?.data?.message || error.message || 'Something went wrong';

        if (error.response?.status === 401) {
            localStorage.removeItem('userInfo');
            toast.error('Session expired. Please login again.');
            window.location.href = '/login';
        } else if (error.response?.status === 500) {
            toast.error('Server error. Please try again later.');
        } else {
            // For 400 errors (validation), usually handled by component, but we can toast if generic
            if (!error.config.skipErrorToast) {
                // toast.error(message); // Optional: global toast for everything specific handling needed?
            }
        }
        return Promise.reject(error);
    }
);

export default client;
