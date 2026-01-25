import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BarChart3,
    Users,
    Settings,
    LogOut,
    MessageSquare,
    Zap,
    Search,
    Bell,
    ChevronRight,
    TrendingUp,
    Cpu,
    LayoutDashboard,
    Wallet
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../api/axiosInstance';
import Logo from '../components/common/Logo';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const [aiPrompt, setAiPrompt] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const stats = [
        { label: 'Revenue', value: '₹45,231', icon: <Wallet className="text-primary-600" />, trend: '+12%' },
        { label: 'Users', value: '2,842', icon: <Users className="text-primary-600" />, trend: '+3%' },
        { label: 'AI Ops', value: '15.4k', icon: <Cpu className="text-primary-600" />, trend: '+28%' },
    ];

    const handleGenerateAI = async () => {
        if (!aiPrompt) return;
        setIsGenerating(true);
        try {
            const { data } = await axiosInstance.post('/ai/generate', { prompt: aiPrompt });
            setAiResponse(data.content);
        } catch (err) {
            console.error(err);
            setAiResponse('Failed to generate content. Please check your API configuration.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="flex h-screen bg-[#F9FAFB] font-sans overflow-hidden">
            {/* Sidebar - Sleek & Narrower */}
            <aside className="w-64 bg-white border-r border-neutral-border flex flex-col z-20">
                <div className="p-8 pb-12">
                    <Logo className="w-8 h-8" />
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {[
                        { name: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, active: true },
                        { name: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
                        { name: 'Customers', icon: <Users className="w-5 h-5" /> },
                        { name: 'AI Studio', icon: <MessageSquare className="w-5 h-5" /> },
                        { name: 'Billing', icon: <Zap className="w-5 h-5" /> },
                        { name: 'Settings', icon: <Settings className="w-5 h-5" /> },
                    ].map((item) => (
                        <button
                            key={item.name}
                            className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 ${item.active
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                                    : 'text-neutral-400 hover:text-neutral-900 hover:bg-neutral-50'
                                }`}
                        >
                            {item.icon}
                            {item.name}
                        </button>
                    ))}
                </nav>

                <div className="p-6">
                    <button
                        onClick={logout}
                        className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold text-sm text-neutral-400 hover:text-rose-600 hover:bg-rose-50 transition-all duration-200"
                    >
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {/* Top Navigation Bar */}
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-neutral-border flex items-center justify-between px-10 sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-black text-neutral-900 tracking-tight">Overview</h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                            <input
                                type="text"
                                placeholder="Search global..."
                                className="bg-neutral-base border-none rounded-2xl py-2.5 pl-11 pr-4 text-sm font-medium focus:ring-2 focus:ring-primary-600/10 outline-none w-64"
                            />
                        </div>

                        <button className="p-2.5 rounded-xl text-neutral-400 hover:bg-neutral-50 relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary-600 rounded-full border-2 border-white"></span>
                        </button>

                        <div className="flex items-center gap-3 pl-6 border-l border-neutral-border">
                            <div className="w-10 h-10 bg-primary-100 rounded-2xl flex items-center justify-center font-black text-primary-600 italic">
                                {user?.name?.charAt(0) || 'U'}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="flex-1 overflow-y-auto p-10 space-y-10">
                    {/* Welcome Card */}
                    <div className="bg-primary-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-primary-600/20">
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative z-10 max-w-xl text-left"
                        >
                            <h1 className="text-4xl font-black mb-4 tracking-tight uppercase italic">Welcome back, {user?.name.split(' ')[0]}!</h1>
                            <p className="text-primary-100 text-lg font-medium mb-8">
                                Your projects are performing 15% better this week.
                                Ready to explore some AI-driven insights?
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-white text-primary-600 px-6 py-3 rounded-2xl font-black text-sm hover:bg-neutral-50 transition-all active:scale-95 shadow-xl">
                                    View Analytics
                                </button>
                                <button className="border border-white/30 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-white/10 transition-all">
                                    Project Settings
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-white border border-neutral-border p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 text-left cursor-default group">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-4 bg-primary-50 rounded-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                        {stat.icon}
                                    </div>
                                    <span className="text-primary-600 text-[10px] font-black bg-primary-50 px-3 py-1.5 rounded-full uppercase tracking-widest">{stat.trend}</span>
                                </div>
                                <p className="text-neutral-400 text-xs font-black uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                                <h3 className="text-3xl font-black text-neutral-900 tracking-tight">{stat.value}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
                        {/* AI Assistant Card - Refined */}
                        <div className="lg:col-span-8 bg-white border border-neutral-border rounded-[3rem] p-10 shadow-sm relative overflow-hidden min-h-[450px]">
                            <div className="flex items-center gap-3 mb-10 text-left">
                                <div className="p-3 bg-primary-600 rounded-2xl shadow-lg shadow-primary-600/30">
                                    <Cpu className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-neutral-900 uppercase italic tracking-tight">AI Assistant Studio</h3>
                                    <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mt-1">Powered by Google Gemini</p>
                                </div>
                            </div>

                            <div className="space-y-6 text-left">
                                <div className="relative group">
                                    <textarea
                                        value={aiPrompt}
                                        onChange={(e) => setAiPrompt(e.target.value)}
                                        placeholder="What would you like to build or analyze today?"
                                        className="w-full bg-neutral-base border border-transparent rounded-[2rem] p-8 text-neutral-900 placeholder-neutral-400 focus:ring-4 focus:ring-primary-600/5 focus:bg-white focus:border-neutral-border outline-none transition-all h-40 resize-none font-medium text-lg leading-relaxed shadow-inner"
                                    ></textarea>
                                    <div className="absolute right-6 bottom-6">
                                        <button
                                            onClick={handleGenerateAI}
                                            disabled={isGenerating}
                                            className="bg-primary-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-primary-700 transition-all flex items-center gap-3 active:scale-95 disabled:opacity-50 shadow-xl shadow-primary-600/30"
                                        >
                                            {isGenerating ? 'Generating...' : 'Magic Generate'}
                                            <Zap className="w-5 h-5 fill-current" />
                                        </button>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {aiResponse && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-8 p-10 bg-primary-50 border border-primary-100 rounded-[2.5rem] font-medium text-primary-900 leading-relaxed text-lg italic shadow-sm"
                                        >
                                            <div className="flex items-start gap-4">
                                                <MessageSquare className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                                                <p>{aiResponse}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Right Column Utilities */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-white border border-neutral-border rounded-[3rem] p-8 shadow-sm text-left">
                                <h4 className="text-sm font-black text-neutral-900 mb-8 uppercase tracking-[0.2em] italic">Resource Usage</h4>
                                <div className="space-y-8">
                                    {[
                                        { name: 'AI Tokens', progress: 68, color: 'bg-primary-600' },
                                        { name: 'Storage', progress: 42, color: 'bg-primary-400' },
                                        { name: 'Data Transfer', progress: 91, color: 'bg-primary-800' },
                                    ].map(p => (
                                        <div key={p.name} className="space-y-3">
                                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-neutral-400">
                                                <span>{p.name}</span>
                                                <span>{p.progress}%</span>
                                            </div>
                                            <div className="h-2 bg-neutral-base rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${p.progress}%` }}
                                                    className={`h-full ${p.color} rounded-full`}
                                                ></motion.div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full mt-10 py-4 rounded-2xl border border-neutral-border font-bold text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-primary-600 hover:border-primary-600 transition-all">
                                    Manage Resources
                                </button>
                            </div>

                            <div className="bg-neutral-900 rounded-[3rem] p-10 text-white text-left shadow-2xl relative group overflow-hidden">
                                <TrendingUp className="absolute right-6 top-6 w-12 h-12 text-primary-600 opacity-20 group-hover:scale-110 transition-transform duration-500" />
                                <p className="text-primary-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Pro Tip</p>
                                <h4 className="text-xl font-black italic mb-4">Leverage AI Insights</h4>
                                <p className="text-neutral-400 text-sm font-medium mb-8 leading-relaxed">
                                    Users who use AI assistant studio launch their products 40% faster on average.
                                </p>
                                <button className="flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest group/btn">
                                    Get Started <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
