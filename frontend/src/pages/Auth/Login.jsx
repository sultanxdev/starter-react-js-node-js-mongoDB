import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Chrome, Github } from 'lucide-react';
import client from '../../api/client';
import { useAuth } from '../../context/AuthContext';
import { Button, Input, Card } from '../../components/ui';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await client.post('/auth/login', formData);
            login(data.user, data.token);
            navigate('/dashboard');
        } catch (err) {
            // Error handled by interceptor/toast
            console.error(err);
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
            const { data } = await client.post('/auth/google', mockGoogleData);
            login(data.user, data.token);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="rounded-[2.5rem] border border-neutral-200 p-10 shadow-xl bg-white">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-black text-neutral-900 mb-3 tracking-tight">Welcome Back</h1>
                <p className="text-neutral-500 font-medium">Continue your SaaS journey.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                    label="Email Address"
                    type="email"
                    icon={Mail}
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />

                <Input
                    label="Password"
                    type="password"
                    icon={Lock}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                />

                <Button
                    type="submit"
                    loading={loading}
                    className="w-full py-4 rounded-xl text-base shadow-xl shadow-primary-600/20 hover:shadow-2xl hover:shadow-primary-600/30 transition-all"
                >
                    {!loading && <span className="flex items-center gap-2">Sign In Now <ArrowRight className="w-5 h-5" /></span>}
                    {loading && 'Authenticating...'}
                </Button>
            </form>

            <div className="mt-8">
                <div className="relative flex items-center justify-center">
                    <div className="border-t border-neutral-200 w-full"></div>
                    <span className="bg-white px-4 text-xs font-black text-neutral-400 uppercase tracking-widest absolute">Or continue with</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Button variant="secondary" onClick={handleGoogleLogin} disabled={loading} className="gap-2">
                        <Chrome className="w-4 h-4" /> Google
                    </Button>
                    <Button variant="secondary" className="gap-2">
                        <Github className="w-4 h-4" /> GitHub
                    </Button>
                </div>
            </div>

            <p className="mt-10 text-center text-neutral-500 font-medium">
                Don't have an account? <Link to="/signup" className="text-primary-600 font-black hover:underline underline-offset-4 ml-1">Create one</Link>
            </p>
        </Card>
    );
};

export default Login;
