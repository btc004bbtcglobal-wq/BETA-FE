import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code, Layers, Cloud, Sparkles } from 'lucide-react';

const techStack = [
    {
        category: 'Frontend',
        icon: <Code size={24} />,
        items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS']
    },
    {
        category: 'Backend',
        icon: <Server size={24} />,
        items: ['Node.js', 'Python', 'Java Spring', 'Go']
    },
    {
        category: 'Database',
        icon: <Layers size={24} />,
        items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
        category: 'Cloud & DevOps',
        icon: <Cloud size={24} />,
        items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines']
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
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
        opacity: 1, 
        scale: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
    }
};

const TechnologySection = () => {
    return (
        <section id="technology" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/5 text-brand-blue font-bold text-xs uppercase tracking-widest mb-6"
                    >
                        <Sparkles size={14} className="animate-pulse" />
                        Our Tech Ecosystem
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-2 mb-8"
                    >
                        Modern Tech for <span className="text-gradient">Modern Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="body-text text-brand-text-muted"
                    >
                        We leverage proven, scalable technologies to build robust applications that can handle millions of users and high data volumes.
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
                >
                    {techStack.map((stack, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.4 }
                            }}
                            className="card-modern group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 text-brand-blue flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm">
                                {stack.icon}
                            </div>
                            <h3 className="heading-3 mb-6 group-hover:text-brand-blue transition-colors">{stack.category}</h3>
                            <ul className="flex flex-col gap-4">
                                {stack.items.map((item, i) => (
                                    <motion.li 
                                        key={i} 
                                        whileHover={{ x: 5 }}
                                        className="text-brand-text-muted font-bold text-sm flex items-center gap-3 cursor-default"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-brand-blue group-hover:scale-150 transition-transform duration-300"></span>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechnologySection;
