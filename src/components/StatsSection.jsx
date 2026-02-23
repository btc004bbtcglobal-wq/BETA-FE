import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
    return (
        <section className="py-20 relative z-10 bg-brand-blue">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto divide-x divide-white/20">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center px-4"
                    >
                        <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                            100+
                        </div>
                        <div className="text-blue-100 font-medium text-sm md:text-base">
                            Features Planned
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-center px-4"
                    >
                        <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                            24/7
                        </div>
                        <div className="text-blue-100 font-medium text-sm md:text-base">
                            System Uptime Target
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center px-4"
                    >
                        <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                            0$
                        </div>
                        <div className="text-blue-100 font-medium text-sm md:text-base">
                            Initial Setup Fees
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center px-4"
                    >
                        <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                            100%
                        </div>
                        <div className="text-blue-100 font-medium text-sm md:text-base">
                            Commitment to Code
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default StatsSection;
