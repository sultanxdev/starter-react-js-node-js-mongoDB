import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const { user } = useAuth();

    return (
        <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto backdrop-blur-xl bg-neutral-base/80 sticky top-0 z-[100] border-b border-neutral-border">
            <Link to="/">
                <Logo className="w-10 h-10" />
            </Link>

            <div className="hidden lg:flex items-center gap-10 text-neutral-600 font-bold text-sm uppercase tracking-widest text-left">
                <a href="#features" className="hover:text-primary-600 transition-all">Features</a>
                <a href="#workflow" className="hover:text-primary-600 transition-all">Workflow</a>
                <a href="#pricing" className="hover:text-primary-600 transition-all">Pricing</a>
                <Link to="/about" className="hover:text-primary-600 transition-all">Our Story</Link>
            </div>

            <div className="flex items-center gap-6">
                {user ? (
                    <Link to="/dashboard">
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-7 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-primary-600/20">
                            Dashboard
                        </button>
                    </Link>
                ) : (
                    <>
                        <Link to="/login" className="hidden sm:block text-neutral-600 hover:text-primary-600 font-bold transition-colors">Sign In</Link>
                        <Link to="/signup">
                            <button className="bg-primary-600 hover:bg-primary-700 text-white px-7 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-primary-600/20">
                                Get Started
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
