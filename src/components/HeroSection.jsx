import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Zap, Globe } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Decorative Blur Orbs */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] opacity-60"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-brand-blue font-semibold text-sm mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-50"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                            </span>
                            Top IT Consulting & Software Agency
                        </div>

                        <h1 className="heading-1 mb-6 text-slate-900 leading-[1.1]">
                            Accelerating Your <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Transformation</span>
                        </h1>

                        <p className="body-text mb-10 max-w-lg text-slate-600 text-lg sm:text-xl">
                            We engineer scalable software solutions, modern web applications, and robust IT infrastructure tailored for fast-growing businesses and enterprises worldwide.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
                            <button className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 group px-8 py-4 text-lg shadow-blue-500/30 shadow-lg hover:shadow-blue-500/40">
                                Start Your Project
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="w-full sm:w-auto btn-secondary px-8 py-4 text-lg bg-white">
                                Book a Consultation
                            </button>
                        </div>

                        <div className="flex items-center gap-6 text-sm font-medium text-slate-700">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md border border-slate-100 shadow-sm">
                                <Zap size={18} className="text-amber-500" />
                                Agile Delivery
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md border border-slate-100 shadow-sm">
                                <Shield size={18} className="text-green-500" />
                                Secure Systems
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Floating Dashboard UI replacing the generic illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative lg:ml-10"
                    >
                        {/* Background decorative blob */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-[2.5rem] transform rotate-3 scale-105 opacity-10 blur-xl"></div>

                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-slate-100 aspect-square sm:aspect-[4/3] flex flex-col transform transition-transform hover:-translate-y-2 duration-500">
                            {/* Window Header */}
                            <div className="h-12 bg-slate-50/80 backdrop-blur-sm border-b border-slate-100 flex items-center px-6 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                <div className="mx-auto text-xs font-semibold text-slate-400 bg-slate-200/50 px-4 py-1 rounded-full">techstart-infrastructure.io</div>
                            </div>

                            {/* Fake UI Dashboard */}
                            <div className="p-6 md:p-8 flex-1 flex flex-col gap-6 bg-slate-50/30">
                                {/* Header Row */}
                                <div className="flex justify-between items-center mb-2">
                                    <div>
                                        <div className="h-4 w-32 bg-slate-200 rounded-full mb-2"></div>
                                        <div className="h-3 w-48 bg-slate-100 rounded-full"></div>
                                    </div>
                                    <div className="h-10 w-24 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100">
                                        <div className="h-2 w-12 bg-blue-300 rounded-full"></div>
                                    </div>
                                </div>

                                {/* KPI Cards */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 group hover:border-blue-200 transition-colors">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="h-8 w-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                                                <CheckCircle2 size={16} className="text-indigo-600" />
                                            </div>
                                            <div className="h-2 w-16 bg-green-100 rounded-full"></div>
                                        </div>
                                        <div className="text-2xl font-bold text-slate-800 mb-1">99.9%</div>
                                        <div className="h-2 w-24 bg-slate-100 rounded-full"></div>
                                    </div>
                                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 group hover:border-blue-200 transition-colors">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                                <Zap size={16} className="text-blue-600" />
                                            </div>
                                            <div className="h-2 w-10 bg-amber-100 rounded-full"></div>
                                        </div>
                                        <div className="text-2xl font-bold text-slate-800 mb-1">&lt;10ms</div>
                                        <div className="h-2 w-20 bg-slate-100 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Chart Area */}
                                <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col justify-end gap-3 relative overflow-hidden">
                                    <div className="absolute top-5 left-6 h-3 w-32 bg-slate-100 rounded-full mb-6"></div>
                                    <div className="flex items-end gap-2 sm:gap-4 h-32 mt-8">
                                        {[30, 45, 35, 60, 50, 85, 95].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}% ` }}
                                                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                className="flex-1 bg-gradient-to-t from-blue-500 to-indigo-400 rounded-t-md opacity-90 hover:opacity-100 cursor-pointer"
                                            ></motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 z-20"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                                ))}
                            </div>
                            <div>
                                <div className="text-sm font-bold text-slate-800">50+ Experts</div>
                                <div className="text-xs text-slate-500">Ready to deploy</div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
