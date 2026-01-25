import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../components/common/Logo';

export const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col justify-center items-center px-6 py-12">
            <div className="mb-10 animate-fade-in-up">
                <Logo className="w-12 h-12" />
            </div>
            <div className="w-full max-w-md animate-fade-in-up delay-100">
                <Outlet />
            </div>
        </div>
    );
};

export const DashboardLayout = ({ children }) => {
    // This is a placeholder since the Sidebar logic is currently inside Dashboard.jsx
    // Ideally, we lift the Sidebar out to here, but for now we'll just wrap.
    return (
        <div className="flex h-screen bg-[#F9FAFB] font-sans overflow-hidden">
            {/* Sidebar logic would go here in a full refactor */}
            <Outlet />
        </div>
    );
};
