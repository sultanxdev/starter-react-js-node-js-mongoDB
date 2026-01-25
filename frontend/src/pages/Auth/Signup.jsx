import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';
import axiosInstance from '../../api/axiosInstance';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../components/common/Logo';

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const { data } = await axiosInstance.post('/auth/register', formData);
            login(data.user, data.token);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            const mockGoogleData = {
                name: 'Google User',
                email: 'google@example.com',
                googleId: '123456789'
            };
            const { data } = await axiosInstance.post('/auth/google', mockGoogleData);
            login(data.user, data.token);
            navigate('/dashboard');
        } catch (err) {
            setError('Google authentication failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-base flex flex-col justify-center items-center px-6 py-12">
            <Link to="/" className="mb-12">
                <Logo className="w-12 h-12" />
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white rounded-[2.5rem] border border-neutral-border p-10 shadow-xl"
            >
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-black text-neutral-900 mb-3 tracking-tight italic uppercase">Start Building</h1>
                    <p className="text-neutral-500 font-medium italic">Join a community of ambitious founders.</p>
                </div>

                {error && (
                    <div className="bg-rose-50 border border-rose-100 text-rose-600 px-4 py-3 rounded-xl mb-6 text-sm font-bold text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-neutral-400 ml-1">Full Name</label>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-600 transition-colors" />
                            <input
                                type="text"
                                required
                                className="w-full bg-neutral-base border border-neutral-border rounded-xl py-4 pl-12 pr-4 text-neutral-900 font-medium focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all outline-none"
                                placeholder="Alex Mercer"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-neutral-400 ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-600 transition-colors" />
                            <input
                                type="email"
                                required
                                className="w-full bg-neutral-base border border-neutral-border rounded-xl py-4 pl-12 pr-4 text-neutral-900 font-medium focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all outline-none"
                                placeholder="alex@startup.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-neutral-400 ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-600 transition-colors" />
                            <input
                                type="password"
                                required
                                className="w-full bg-neutral-base border border-neutral-border rounded-xl py-4 pl-12 pr-4 text-neutral-900 font-medium focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all outline-none"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary-600 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-700 transition-all active:scale-[0.98] shadow-lg shadow-primary-600/20 disabled:opacity-50"
                    >
                        {loading ? 'Creating Account...' : 'Get Started Free'}
                        {!loading && <ArrowRight className="w-5 h-5" />}
                    </button>
                </form>

                <div className="mt-8">
                    <div className="relative flex items-center justify-center">
                        <div className="border-t border-neutral-border w-full"></div>
                        <span className="bg-white px-4 text-xs font-black text-neutral-400 uppercase tracking-widest absolute">Or register with</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <button
                            onClick={handleGoogleLogin}
                            disabled={loading}
                            className="flex items-center justify-center gap-2 bg-white border border-neutral-border py-3 rounded-xl hover:bg-neutral-50 transition-all font-bold text-sm text-neutral-700"
                        >
                            <Chrome className="w-4 h-4" /> Google
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white border border-neutral-border py-3 rounded-xl hover:bg-neutral-50 transition-all font-bold text-sm text-neutral-700">
                            <Github className="w-4 h-4" /> GitHub
                        </button>
                    </div>
                </div>

                <p className="mt-10 text-center text-neutral-500 font-medium italic">
                    Already using SaaSStarter? <Link to="/login" className="text-primary-600 font-black hover:underline underline-offset-4 ml-1">Sign in</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Signup;
