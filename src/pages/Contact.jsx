import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-28 lg:pt-32 pb-20 min-h-[80vh] bg-slate-50 relative overflow-hidden">
            <SEO title="Contact Us" description="Get in Touch with IT Experts at Beta-Softnet" url="/contact" />
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-tight mb-6">
                            Let's Start a <span className="text-brand-blue">Conversation</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-xl">
                            Whether you need a complete digital transformation or a custom software solution, our team is ready to help you plan your next move.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100"
                    >
                        <h3 className="text-2xl font-bold text-brand-dark mb-8">Send us a message</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Subject</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="How can we help you?" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Message</label>
                                <textarea rows="5" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none" placeholder="Tell us about your project goals and scope..."></textarea>
                            </div>

                            <button className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 group">
                                Send Message
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Details Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                <Mail size={24} className="text-brand-blue" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-brand-dark mb-1">Email Us</h4>
                                <a href="mailto:burjtechconsultancy@gmail.com" className="text-brand-blue font-medium hover:underline">burjtechconsultancy@gmail.com</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                <Phone size={24} className="text-brand-blue" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-brand-dark mb-1">Call Us</h4>
                                <a href="tel:+919444369625" className="text-brand-blue font-medium hover:underline">+91 9444369625</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                <MapPin size={24} className="text-brand-blue" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-brand-dark mb-1">Visit Us</h4>
                                <address className="text-slate-700 font-medium not-italic leading-relaxed whitespace-pre-line">
                                    No.469 Pavalamalli St. Extn.
                                    Narasimhapuram, Kakkalur,
                                    Thiruvallur - 602 003.
                                </address>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
