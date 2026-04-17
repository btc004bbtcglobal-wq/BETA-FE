import React from 'react';
import { Twitter, Linkedin, Facebook, MapPin, Mail, Phone, Code2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Company Info & Minimal Contact */}
                    <div className="col-span-2 lg:col-span-4 pr-0 lg:pr-8">
                        <a href="#" className="flex items-center gap-2 group mb-6">
                            <div className="w-8 h-8 rounded bg-brand-blue flex items-center justify-center shrink-0">
                                <Code2 size={18} className="text-white" />
                            </div>
                            <span className="font-bold text-xl text-white tracking-tight">Beta Softnet</span>
                        </a>
                        <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                            Building the future of digital infrastructure. We engineer scalable software solutions for fast-growing businesses.
                        </p>
                        <div className="space-y-3 mb-8">
                            <a href="mailto:support@beta-softnet.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                                <Mail size={16} className="text-brand-blue" />
                                support@beta-softnet.com
                            </a>
                            <a href="tel:+919444369625" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                                <Phone size={16} className="text-brand-blue" />
                                +91 9444369625
                            </a>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blue transition-colors">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blue transition-colors">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blue transition-colors">
                                <Facebook size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Products Links */}
                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="font-semibold text-white mb-6">Products</h4>
                        <ul className="flex flex-col gap-3 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Nexus Auth</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Nexus DB</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Nexus Shield</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Nexus Analytics</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">All Products</a></li>
                        </ul>
                    </div>

                    {/* Solutions Links */}
                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="font-semibold text-white mb-6">Solutions</h4>
                        <ul className="flex flex-col gap-3 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-brand-blue transition-colors">For Startups</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">For Enterprise</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Financial Services</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Healthcare</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">E-commerce</a></li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="font-semibold text-white mb-6">Resources</h4>
                        <ul className="flex flex-col gap-3 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Community Forum</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">System Status</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="font-semibold text-white mb-6">Company</h4>
                        <ul className="flex flex-col gap-3 text-sm text-slate-400">
                            <li><a href="/about" className="hover:text-brand-blue transition-colors">About Us</a></li>
                            <li><a href="/contact" className="hover:text-brand-blue transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Security</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Partners</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Beta Softnet. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
                        <a href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
