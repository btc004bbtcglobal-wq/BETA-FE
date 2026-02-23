import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code, Layers, Cloud } from 'lucide-react';

const techStack = [
    {
        category: 'Frontend',
        icon: <Code size={24} className="text-brand-blue" />,
        items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS']
    },
    {
        category: 'Backend',
        icon: <Server size={24} className="text-brand-blue" />,
        items: ['Node.js', 'Python', 'Java Spring', 'Go']
    },
    {
        category: 'Database',
        icon: <Layers size={24} className="text-brand-blue" />,
        items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
        category: 'Cloud & DevOps',
        icon: <Cloud size={24} className="text-brand-blue" />,
        items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines']
    }
];

const TechnologySection = () => {
    return (
        <section id="technology" className="section-padding bg-white relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-3"
                    >
                        Technology Stack
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-2 mb-6"
                    >
                        Modern Tech for <span className="text-brand-blue">Modern Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="body-text"
                    >
                        We leverage proven, scalable technologies to build robust applications that can handle millions of users and high data volumes.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {techStack.map((stack, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-xl border border-slate-100 bg-slate-50 hover:border-brand-blue/30 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 shadow-sm">
                                {stack.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-4">{stack.category}</h3>
                            <ul className="flex flex-col gap-3">
                                {stack.items.map((item, i) => (
                                    <li key={i} className="text-slate-600 font-medium flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue opacity-70"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
