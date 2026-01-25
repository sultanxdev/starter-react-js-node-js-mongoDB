import React, { createContext, useState, useEffect, useContext } from 'react';
import client from '../api/client';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const userInfo = localStorage.getItem('userInfo');
            if (userInfo) {
                try {
                    const { token } = JSON.parse(userInfo);
                    // Verify token with backend
                    const { data } = await client.get('/auth/profile');
                    setUser(data);
                } catch (e) {
                    console.error('Auth verification failed', e);
                    localStorage.removeItem('userInfo');
                    setUser(null);
                }
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = (userData, token) => {
        setUser(userData);
        localStorage.setItem('userInfo', JSON.stringify({ user: userData, token }));
        toast.success(`Welcome back, ${userData.name}!`);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('userInfo');
        toast.success('Successfully logged out');
        window.location.href = '/login';
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
