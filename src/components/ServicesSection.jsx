import React from 'react';
import { motion } from 'framer-motion';
import { Code2, LayoutDashboard, Server, Smartphone, MonitorSmartphone, CloudCog, ArrowRight } from 'lucide-react';

const services = [
    {
        id: 1,
        title: 'Custom Software Development',
        desc: 'Bespoke web and mobile applications engineered to scale with your growing business needs.',
        icon: <Code2 size={28} />,
    },
    {
        id: 2,
        title: 'IT Consulting & Strategy',
        desc: 'Expert guidance to navigate complex technology landscapes and optimize your infrastructure.',
        icon: <LayoutDashboard size={28} />,
    },
    {
        id: 3,
        title: 'Cloud Solutions',
        desc: 'Seamless migration, deployment, and management on AWS, Google Cloud, and Azure.',
        icon: <CloudCog size={28} />,
    },
    {
        id: 4,
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
        icon: <Smartphone size={28} />,
    },
    {
        id: 5,
        title: 'UI/UX Design',
        desc: 'Intuitive, accessible, and beautiful interfaces designed for maximum user engagement.',
        icon: <MonitorSmartphone size={28} />,
    },
    {
        id: 6,
        title: 'DevOps & Maintenance',
        desc: 'CI/CD pipeline automation, 24/7 monitoring, and ongoing technical support.',
        icon: <Server size={28} />,
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
    }
};

const ServicesSection = () => {
    return (
        <section id="services" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4"
                        >
                            Our Expertise
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="heading-2"
                        >
                            Comprehensive IT Services <br /> for <span className="text-gradient">Modern Businesses</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="body-text max-w-md text-brand-text-muted"
                    >
                        We deliver end-to-end technology solutions to help startups and enterprises accelerate their digital transformation.
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="card-modern group flex flex-col h-full"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm">
                                <div className="text-brand-blue group-hover:text-white transition-colors duration-500">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="heading-3 mb-4 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                            <p className="text-brand-text-muted leading-relaxed mb-8 flex-grow">
                                {service.desc}
                            </p>
                            <div className="pt-4 flex items-center gap-2 text-brand-blue font-bold text-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                Learn More <ArrowRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
