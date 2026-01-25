import React from 'react';
import { Loader2 } from 'lucide-react';

export const Button = ({ children, variant = 'primary', size = 'md', loading, className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20",
        secondary: "bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50",
        ghost: "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100",
        danger: "bg-rose-600 text-white hover:bg-rose-700 shadow-lg shadow-rose-600/20"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={loading || props.disabled}
            {...props}
        >
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {children}
        </button>
    );
};

export const Input = ({ label, error, icon: Icon, className = '', ...props }) => {
    return (
        <div className={`space-y-1.5 ${className}`}>
            {label && <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">{label}</label>}
            <div className="relative group">
                {Icon && (
                    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-600 transition-colors" />
                )}
                <input
                    className={`w-full bg-neutral-50 border border-neutral-200 rounded-xl py-3.5 ${Icon ? 'pl-11' : 'pl-4'} pr-4 text-neutral-900 font-medium placeholder-neutral-400 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 focus:bg-white transition-all outline-none ${error ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' : ''}`}
                    {...props}
                />
            </div>
            {error && <p className="text-xs font-medium text-rose-500 ml-1">{error}</p>}
        </div>
    );
};

export const Card = ({ children, className = '' }) => (
    <div className={`bg-white border border-neutral-100 rounded-[2rem] shadow-sm p-8 ${className}`}>
        {children}
    </div>
);

export const LoadingSpinner = () => (
    <div className="flex justify-center items-center p-8">
        <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
    </div>
);
