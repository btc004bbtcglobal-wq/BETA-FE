import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, ShieldCheck } from 'lucide-react';

const reasons = [
    {
        id: 1,
        title: 'Rapid Agile Delivery',
        desc: 'We use 2-week sprints to deliver working software quickly, ensuring your feedback is integrated constantly without long delays.',
        icon: <Clock size={32} className="text-white" />
    },
    {
        id: 2,
        title: 'Dedicated Expert Teams',
        desc: 'You get a committed team of senior engineers and product managers working exclusively on your project from day one.',
        icon: <Users size={32} className="text-white" />
    },
    {
        id: 3,
        title: 'Enterprise Security',
        desc: 'We build with security and compliance in mind from the start, protecting your critical business data at every layer.',
        icon: <ShieldCheck size={32} className="text-white" />
    }
];

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="section-padding bg-slate-50 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-5 gap-12 items-center">

                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-3"
                        >
                            Why Choose Us
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="heading-2 mb-6"
                        >
                            Partner with a Team That <span className="text-brand-blue">Understands Startups</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="body-text mb-8"
                        >
                            As a modern tech consultancy, we know that time-to-market is critical. We strip away the corporate bureaucracy to focus on pure engineering execution and product growth.
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="btn-primary"
                        >
                            Schedule a Consultation
                        </motion.button>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="grid gap-6">
                            {reasons.map((reason, i) => (
                                <motion.div
                                    key={reason.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6 hover:shadow-md transition-shadow"
                                >
                                    <div className="shrink-0 mt-1">
                                        <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center shadow-md">
                                            {reason.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-dark mb-3">{reason.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
