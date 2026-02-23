import React from 'react';
import { motion } from 'framer-motion';
import { Code2, LayoutDashboard, Server, Smartphone, MonitorSmartphone, CloudCog } from 'lucide-react';

const services = [
    {
        id: 1,
        title: 'Custom Software Development',
        desc: 'Bespoke web and mobile applications engineered to scale with your growing business needs.',
        icon: <Code2 size={28} className="text-brand-blue" />,
        delay: 0
    },
    {
        id: 2,
        title: 'IT Consulting & Strategy',
        desc: 'Expert guidance to navigate complex technology landscapes and optimize your infrastructure.',
        icon: <LayoutDashboard size={28} className="text-brand-blue" />,
        delay: 0.1
    },
    {
        id: 3,
        title: 'Cloud Solutions',
        desc: 'Seamless migration, deployment, and management on AWS, Google Cloud, and Azure.',
        icon: <CloudCog size={28} className="text-brand-blue" />,
        delay: 0.2
    },
    {
        id: 4,
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
        icon: <Smartphone size={28} className="text-brand-blue" />,
        delay: 0.3
    },
    {
        id: 5,
        title: 'UI/UX Design',
        desc: 'Intuitive, accessible, and beautiful interfaces designed for maximum user engagement.',
        icon: <MonitorSmartphone size={28} className="text-brand-blue" />,
        delay: 0.4
    },
    {
        id: 6,
        title: 'DevOps & Maintenance',
        desc: 'CI/CD pipeline automation, 24/7 monitoring, and ongoing technical support.',
        icon: <Server size={28} className="text-brand-blue" />,
        delay: 0.5
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className="section-padding bg-white relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-3"
                    >
                        Our Expertise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="heading-2 mb-6"
                    >
                        Comprehensive IT Services <br className="hidden md:block" /> for Modern Businesses
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="body-text"
                    >
                        We deliver end-to-end technology solutions to help startups and enterprises accelerate their digital transformation.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: service.delay, duration: 0.5 }}
                            className="card-hover p-8 group cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                                <div className="group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
