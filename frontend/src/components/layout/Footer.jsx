import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Facebook } from 'lucide-react';
import Logo from '../common/Logo';

const Footer = () => {
    return (
        <footer className="py-24 px-8 border-t border-neutral-border mt-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20 text-center md:text-left">
                    <div className="md:col-span-4 max-w-xs mx-auto md:mx-0">
                        <Link to="/" className="inline-block mb-8">
                            <Logo className="w-8 h-8" />
                        </Link>
                        <p className="text-neutral-500 font-medium leading-relaxed mb-10">
                            The ultimate foundation for your next SaaS venture.
                            Built with Roboto and the power of blue.
                        </p>
                        <div className="flex justify-center md:justify-start items-center gap-6 text-neutral-400">
                            <Twitter className="w-5 h-5 hover:text-primary-600 cursor-pointer transition-colors" />
                            <Linkedin className="w-5 h-5 hover:text-primary-600 cursor-pointer transition-colors" />
                            <Github className="w-5 h-5 hover:text-primary-600 cursor-pointer transition-colors" />
                            <Facebook className="w-5 h-5 hover:text-primary-600 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-sm font-bold">
                        <div className="space-y-6">
                            <h4 className="text-neutral-900 uppercase tracking-widest text-xs">Product</h4>
                            <ul className="space-y-4 text-neutral-500 font-medium">
                                <li><a href="#" className="hover:text-primary-600 transition-all">Features</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition-all">Pricing</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition-all">Templates</a></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-neutral-900 uppercase tracking-widest text-xs">Resources</h4>
                            <ul className="space-y-4 text-neutral-500 font-medium">
                                <li><a href="#" className="hover:text-primary-600 transition-all">Documentation</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition-all">API Guide</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition-all">Blog</a></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-neutral-900 uppercase tracking-widest text-xs">Company</h4>
                            <ul className="space-y-4 text-neutral-500 font-medium">
                                <li><Link to="/about" className="hover:text-primary-600 transition-all">About Us</Link></li>
                                <li><a href="#" className="hover:text-primary-600 transition-all">Legal</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition-all">Privacy</a></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-neutral-900 uppercase tracking-widest text-xs">Support</h4>
                            <ul className="space-y-4 text-neutral-500 font-medium">
                                <li><a href="#" className="hover:text-primary-600 transition-all">Help Center</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition-all">Contact</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition-all">Status</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-neutral-border flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                    <p>© 2026 SaaSStarter. All rights reserved.</p>
                    <div className="flex gap-10">
                        <a href="#" className="hover:text-neutral-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-neutral-600 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-neutral-600 transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
