import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Target, Users, Code2, Heart, Globe, ArrowRight, Star } from 'lucide-react';
import Footer from '../components/layout/Footer';
import Logo from '../components/common/Logo';

const About = () => {
    const values = [
        { icon: <Target className="w-8 h-8 text-primary-600" />, title: "Precision Design", desc: "We believe in interfaces that are as functional as they are beautiful." },
        { icon: <Globe className="w-8 h-8 text-blue-500" />, title: "Ready for Scale", desc: "Built to handle your first 1,000 or 1,000,000 users from day one." },
        { icon: <Code2 className="w-8 h-8 text-primary-500" />, title: "Clean Code", desc: "Every line of code is written with readability and modularity in mind." },
        { icon: <Heart className="w-8 h-8 text-rose-500" />, title: "Founder Focused", desc: "We provide the high-quality boilerplate so you can focus on building." }
    ];

    return (
        <div className="bg-neutral-base text-neutral-text min-h-screen selection:bg-primary-100">
            {/* Navbar Minimal */}
            <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto sticky top-0 bg-neutral-base/80 backdrop-blur-md z-50 border-b border-neutral-border">
                <Link to="/">
                    <Logo className="w-8 h-8" />
                </Link>
                <Link to="/" className="text-sm font-bold text-neutral-500 hover:text-primary-600 transition-colors uppercase tracking-widest">Back Home</Link>
            </nav>

            <section className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
                {/* Story Hero */}
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-border text-xs font-black uppercase tracking-widest text-primary-600 mb-10 shadow-sm"
                    >
                        Our Manifesto
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-black mb-12 leading-tight tracking-tighter uppercase text-neutral-900 italic">
                        BEYOND JUST <br />
                        <span className="text-primary-600 underline decoration-8 decoration-primary-100 underline-offset-8">CODE.</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-neutral-500 font-medium leading-relaxed">
                        Founders shouldn't spend weeks setting up authentication and payment flows.
                        SaaSStarter is a pure, modular, and aesthetic core that respects your time and vision.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
                    {values.map((v, i) => (
                        <div key={i} className="p-10 rounded-[3rem] bg-white border border-neutral-border hover:border-primary-200 hover:shadow-xl transition-all group text-left">
                            <div className="mb-8 p-5 bg-primary-50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                                {v.icon}
                            </div>
                            <h3 className="text-3xl font-black mb-6 uppercase tracking-tight italic text-neutral-900">{v.title}</h3>
                            <p className="text-lg text-neutral-500 font-medium leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Vision Statement */}
                <div className="relative p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-white to-primary-50 border border-neutral-border overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-1000 text-primary-600">
                        <Star className="w-64 h-64 fill-current" />
                    </div>

                    <div className="relative z-10 max-w-2xl text-left">
                        <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight italic uppercase text-neutral-900">THE FUTURE IS <br /><span className="text-primary-600 underline decoration-8 decoration-primary-100 underline-offset-8">NOW.</span></h2>
                        <p className="text-xl text-neutral-600 font-medium mb-12 italic leading-relaxed">
                            Our vision is to provide the world's most elegant foundation for any entrepreneur
                            looking to launch their next big idea. Speed and quality, in perfect harmony.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link to="/signup" className="px-8 py-4 bg-primary-600 text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-primary-700 transition-all active:scale-95 shadow-lg shadow-primary-600/20">
                                Build With Us <ArrowRight className="w-5 h-5" />
                            </Link>
                            <button className="px-8 py-4 border border-neutral-border rounded-2xl font-bold bg-white text-neutral-700 shadow-sm hover:bg-neutral-50 transition-all">Our GitHub</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Quote */}
            <section className="py-32 bg-white px-6 border-y border-neutral-border">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border-4 border-primary-100 mb-8 p-1">
                        <img src="https://i.pravatar.cc/200?u=sultan" className="rounded-full w-full h-full grayscale hover:grayscale-0 transition-all" alt="Founder" />
                    </div>
                    <p className="text-2xl md:text-3xl font-medium text-neutral-700 italic mb-10 leading-relaxed font-serif">
                        "Speed is the only competitive advantage that small teams have over giants.
                        SaaSStarter is the engine that drives that advantage."
                    </p>
                    <h4 className="text-xl font-black italic tracking-wide text-neutral-900">Sultan Dev</h4>
                    <p className="text-sm font-bold text-primary-600 uppercase tracking-widest mt-2">Lead Architect</p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
