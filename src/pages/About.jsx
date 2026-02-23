import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="pt-28 lg:pt-32 pb-20 min-h-[80vh] bg-white">
            {/* Header Section */}
            <section className="container mx-auto px-6 md:px-12 mb-20 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-brand-blue font-semibold text-sm mb-6">
                        About TechStart
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-tight mb-6">
                        Building the Future of <br className="hidden md:block" />
                        <span className="text-brand-blue">Digital Infrastructure</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        We are a team of passionate engineers, designers, and strategists dedicated to delivering innovative software solutions that empower modern startups to scale without limits.
                    </p>
                </motion.div>
            </section>

            {/* Mission & Vision grid */}
            <section className="bg-slate-50 py-24">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square md:aspect-[4/3] rounded-2xl bg-gradient-to-tr from-brand-blue to-indigo-400 p-8 flex flex-col justify-end overflow-hidden shadow-2xl shadow-blue-500/20">
                                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                                <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Our Mission</h3>
                                <p className="text-blue-50 text-lg relative z-10 leading-relaxed">
                                    To democratize enterprise-grade technology for fast-growing companies, ensuring that powerful, scalable, and secure software is accessible to innovators everywhere.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                    <Target size={28} className="text-brand-blue" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-brand-dark mb-2">Excellence in Execution</h4>
                                    <p className="text-slate-600 leading-relaxed">We don't just write code; we architect solutions. Every product we build is designed for maximum performance, security, and scalability from day one.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                                    <Lightbulb size={28} className="text-amber-500" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-brand-dark mb-2">Continuous Innovation</h4>
                                    <p className="text-slate-600 leading-relaxed">The technology landscape shifts daily. Our team is constantly adopting modern frameworks and methodologies to keep our clients ahead of the curve.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center container mx-auto px-6">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Ready to build something great?</h2>
                <Link to="/contact">
                    <button className="btn-primary group inline-flex items-center gap-2 text-lg px-8 py-4">
                        Let's Talk <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default About;
