import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield,
    Zap,
    BarChart3,
    ChevronRight,
    CheckCircle2,
    Star,
    ArrowRight,
    Globe,
    Lock,
    Cpu,
    Plus,
    Minus,
    MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        { q: "What is SaaSStarter?", a: "SaaSStarter is a comprehensive boilerplate designed to help developers launch their SaaS products in record time using React, Node.js, and MongoDB." },
        { q: "Do I need to be an expert in React?", a: "Not at all! SaaSStarter is built with clean, modular code that is easy to understand and extend even for intermediate developers." },
        { q: "Is the payment integration ready?", a: "Yes, it comes with full Razorpay integration including order creation, signature verification, and webhooks." },
        { q: "Can I use it for commercial projects?", a: "Absolutely! The kit is designed for commercial use, helping you build and scale your business." },
    ];

    const testimonials = [
        { name: "Alex Rivera", role: "Founder @ TechFlow", content: "This starter kit saved me at least 3 weeks of work. The UI is clean and the modular structure is exactly what I needed.", avatar: "A" },
        { name: "Sarah Chen", role: "Indie Hacker", content: "The best React starter I've used. No unnecessary bloat, just pure performance and great design.", avatar: "S" },
        { name: "James Wilson", role: "CTO @ GrowthSync", content: "Google Gemini integration was a breeze. We launched our AI feature in days.", avatar: "J" },
    ];

    return (
        <div className="bg-neutral-base text-neutral-text selection:bg-primary-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-40 px-6 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-100/50 blur-[150px] -z-10 rounded-full"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-border text-primary-600 text-xs font-bold uppercase tracking-widest mb-10 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-primary-600 animate-pulse"></span>
                            The 2026 Edition with Roboto
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] text-neutral-900">
                            BUILD AND SCALE <br />
                            <span className="bg-gradient-to-r from-primary-600 to-accent-400 bg-clip-text text-transparent">WITH CONFIDENCE.</span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-neutral-500 mb-14 leading-relaxed">
                            The most sophisticated boilerplate for ambitious founders.
                            Move from <span className="text-primary-600 font-bold">idea</span> to <span className="text-primary-600 font-bold">production</span> in hours.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                            <Link to="/signup" className="w-full sm:w-auto bg-primary-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-primary-700 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-primary-600/20">
                                Launch My SaaS
                                <ArrowRight className="w-6 h-6" />
                            </Link>
                            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-xl text-neutral-700 border border-neutral-border hover:bg-white transition-all bg-transparent backdrop-blur-sm">
                                Live Demo
                            </button>
                        </div>

                        {/* Social Proof (Top) */}
                        <div className="flex flex-col items-center gap-6">
                            <p className="text-neutral-400 text-xs font-bold uppercase tracking-[0.3em]">Trusted by 5,000+ indie hackers</p>
                            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                                <span className="text-2xl font-bold text-neutral-900">Apex</span>
                                <span className="text-2xl font-black text-neutral-900 tracking-tighter">ZENITH</span>
                                <span className="text-2xl font-light italic text-neutral-900">Quantum</span>
                                <span className="text-2xl font-mono uppercase underline decoration-primary-600 underline-offset-4 text-neutral-900">Pulse</span>
                                <span className="text-2xl font-black uppercase tracking-tight text-neutral-900">Vortex</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bento Feature Grid */}
            <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 mb-20 justify-between items-end">
                    <div className="max-w-2xl text-left">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-neutral-900 uppercase">Engineered for <br /><span className="text-primary-600">Performance.</span></h2>
                        <p className="text-xl text-neutral-500 font-medium">Every component is meticulously crafted for speed and modularity.</p>
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-neutral-border shadow-sm flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-primary-100 flex items-center justify-center font-bold text-xs text-primary-600">{i}</div>)}
                        </div>
                        <p className="text-sm font-bold text-neutral-600">Join 12k developers</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-20">
                    <div className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-white border border-neutral-border p-12 transition-all hover:border-primary-300 shadow-sm hover:shadow-xl">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700 text-primary-600">
                            <Globe className="w-48 h-48" />
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="text-left">
                                <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary-600/20">
                                    <Cpu className="text-white w-7 h-7" />
                                </div>
                                <h3 className="text-4xl font-black mb-6 text-neutral-900">Built with Google Gemini</h3>
                                <p className="text-xl text-neutral-500 leading-relaxed max-w-md font-medium">
                                    Seamlessly integrated AI features. Ready to handle logic, generation, and assistant tasks out of the box.
                                </p>
                            </div>
                            <div className="mt-12 flex items-center gap-2 text-primary-600 font-black uppercase tracking-widest text-sm cursor-pointer group/link text-left">
                                Learn about AI modules <ChevronRight className="group-hover/link:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 rounded-[2.5rem] bg-white border border-neutral-border p-10 flex flex-col justify-between hover:border-primary-300 transition-all shadow-sm hover:shadow-xl text-left">
                        <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                            <Lock className="text-primary-600 w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-4 text-neutral-900">Bulletproof Auth</h4>
                            <p className="text-neutral-500 font-medium">JWT + Bcrypt implementation ready for production.</p>
                        </div>
                    </div>

                    <div className="md:col-span-4 rounded-[2.5rem] bg-white border border-neutral-border p-10 flex flex-col justify-between hover:border-primary-300 transition-all shadow-sm hover:shadow-xl text-left">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary-600">
                            <CreditCard className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-4 text-neutral-900">Global Payments</h4>
                            <p className="text-neutral-500 font-medium">Razorpay integrated with UPI and NetBanking support.</p>
                        </div>
                    </div>

                    <div className="md:col-span-8 rounded-[2.5rem] bg-gradient-to-br from-white to-primary-50/30 border border-neutral-border p-12 transition-all hover:border-primary-300 shadow-sm hover:shadow-xl">
                        <div className="grid md:grid-cols-2 h-full items-center gap-12">
                            <div className="text-left">
                                <h4 className="text-3xl font-black mb-6 tracking-tight text-neutral-900 uppercase">MODULAR AT ITS CORE</h4>
                                <p className="text-neutral-500 leading-relaxed mb-6 font-medium text-lg">
                                    No spaghetti code. Clean folder structure using industry-standard modularity principles.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['Controllers', 'Models', 'Context', 'Hooks'].map(tag => (
                                        <span key={tag} className="px-3 py-1.5 rounded-lg bg-primary-50 border border-primary-100 text-xs font-bold text-primary-600 uppercase tracking-tighter">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-neutral-border shadow-xl">
                                <div className="space-y-4">
                                    <div className="h-2 w-1/2 bg-primary-200 rounded"></div>
                                    <div className="h-2 w-full bg-neutral-100 rounded"></div>
                                    <div className="h-2 w-2/3 bg-neutral-100 rounded"></div>
                                    <div className="pt-4 border-t border-neutral-border flex gap-2">
                                        <div className="w-8 h-8 rounded bg-neutral-100"></div>
                                        <div className="w-8 h-8 rounded bg-neutral-100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dashboard Preview Section */}
            <section id="workflow" className="py-32 bg-white border-y border-neutral-border px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase text-neutral-900 italic">A DASHBOARD THAT <br />WORKS FOR <span className="text-primary-600 underline decoration-8 decoration-primary-100 underline-offset-8">YOU.</span></h2>
                        <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-medium">Everything you need to manage your users, data, and AI interactions in one place.</p>
                    </div>

                    <div className="relative group perspective-1000">
                        <motion.div
                            whileInView={{ rotateX: 5 }}
                            className="relative bg-white border border-neutral-border rounded-[4rem] p-4 shadow-2xl overflow-hidden"
                        >
                            <div className="bg-neutral-50 rounded-[3.5rem] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
                                    alt="SaaS Template Preview"
                                    className="w-full h-[500px] object-cover opacity-80"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center cursor-pointer shadow-2xl shadow-primary-600/40 group-hover:scale-110 transition-transform">
                                        <Zap className="text-white w-10 h-10 fill-current" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Stats */}
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-neutral-border p-6 rounded-3xl shadow-2xl hidden lg:block text-left">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center"><BarChart3 className="text-primary-600 w-6 h-6" /></div>
                                <div>
                                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Growth</p>
                                    <p className="text-2xl font-black text-neutral-900">+284%</p>
                                </div>
                            </div>
                            <div className="h-1.5 w-32 bg-neutral-100 rounded-full overflow-hidden">
                                <div className="h-full bg-primary-600 w-[70%]"></div>
                            </div>
                        </div>

                        <div className="absolute -right-12 bottom-1/4 bg-white/90 backdrop-blur-md border border-neutral-border p-6 rounded-3xl shadow-2xl hidden lg:block text-left">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border-2 border-primary-100 p-1">
                                    <img src="https://i.pravatar.cc/100?u=1" className="rounded-full w-full h-full" alt="User" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-neutral-900">New User</p>
                                    <p className="text-xs text-neutral-500">Subscribed to Pro Plan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-neutral-400 uppercase tracking-[0.5em] mb-20">HEAR FROM FOUNDERS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="p-10 rounded-3xl bg-white border border-neutral-border shadow-sm relative group hover:shadow-xl transition-all text-left">
                                <div className="flex items-center gap-1 mb-8">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-primary-500 fill-current" />)}
                                </div>
                                <p className="text-xl text-neutral-600 leading-relaxed mb-10 italic font-medium">"{t.content}"</p>
                                <div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
                                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-black text-xl italic">{t.avatar}</div>
                                    <div>
                                        <h4 className="font-bold text-neutral-900">{t.name}</h4>
                                        <p className="text-neutral-400 text-sm font-medium">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-32 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-neutral-900 uppercase underline decoration-8 decoration-primary-100 underline-offset-8">Fair Pricing.</h2>
                    <p className="text-xl text-neutral-500 font-medium">No hidden fees. Just everything you need to build your empire.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {[
                        { name: "Starter", price: "0", features: ["Single Project", "Basic AI Access", "Email Support", "Open Source Core"] },
                        { name: "Founder Pro", price: "199", features: ["Unlimited Projects", "Premium AI Token Pool", "Payment Gateway Integrated", "White Label Options", "Priority Discord Access"], popular: true },
                        { name: "Enterprise", price: "Custom", features: ["Full Source Ownership", "24/7 Dedicated Support", "Custom API Limits", "SLA Agreements"] }
                    ].map((plan, i) => (
                        <div key={i} className={`p-10 rounded-[3.5rem] border ${plan.popular ? 'bg-primary-600 text-white border-primary-600 shadow-2xl shadow-primary-600/30' : 'bg-white text-neutral-900 border-neutral-border'} flex flex-col justify-between relative text-left`}>
                            {plan.popular && <div className="absolute top-8 right-8 bg-white text-primary-600 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">POPULAR</div>}
                            <div>
                                <h3 className={`text-sm font-black ${plan.popular ? 'text-primary-100' : 'text-neutral-400'} uppercase tracking-widest mb-10`}>{plan.name}</h3>
                                <div className="text-6xl font-black mb-10 tracking-tighter">₹{plan.price}</div>
                                <ul className="space-y-6 mb-12">
                                    {plan.features.map(f => (
                                        <li key={f} className={`flex items-center gap-4 ${plan.popular ? 'text-white font-bold' : 'text-neutral-500 font-medium'}`}>
                                            <CheckCircle2 className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-primary-600'}`} /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95 ${plan.popular ? 'bg-white text-primary-600 hover:bg-neutral-50' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}>
                                {plan.price === "Custom" ? "Contact Team" : "Get Started"}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32 px-6 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-20 leading-tight text-neutral-900 uppercase underline decoration-8 decoration-primary-100 underline-offset-8">Frequently Asked.</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-neutral-border rounded-[2rem] overflow-hidden bg-white hover:border-primary-200 transition-all text-left">
                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-8 flex items-center justify-between text-left transition-colors font-bold text-neutral-900">
                                <span className="text-xl">{faq.q}</span>
                                {openFaq === i ? <Minus className="text-primary-600" /> : <Plus className="text-neutral-400" />}
                            </button>
                            <AnimatePresence>
                                {openFaq === i && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                        <div className="p-8 pt-0 text-neutral-500 text-lg leading-relaxed font-medium">{faq.a}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

const CreditCard = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" />
    </svg>
);

export default LandingPage;
