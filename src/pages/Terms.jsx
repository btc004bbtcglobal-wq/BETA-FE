import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { FileText, Shield, User, CreditCard, AlertCircle, Ban, Scale, RefreshCw, Mail, MapPin, ChevronRight, ArrowRight } from 'lucide-react';

const EFFECTIVE_DATE = 'April 17, 2026';
const COMPANY_NAME = 'Beta-Softnet (OPC) Pvt Ltd';
const SUPPORT_EMAIL = 'support@beta-softnet.com';
const COMPANY_ADDRESS = 'No.2 PH Road, Manavalanagar, Tiruvallur – 602002';

const sections = [
    { id: 'use', title: '1. Use of Services', icon: <User size={20} /> },
    { id: 'ip', title: '2. Intellectual Property', icon: <FileText size={20} /> },
    { id: 'accounts', title: '3. User Accounts', icon: <User size={20} /> },
    { id: 'payments', title: '4. Payments & Billing', icon: <CreditCard size={20} /> },
    { id: 'disclaimer', title: '5. Product Disclaimer', icon: <AlertCircle size={20} /> },
    { id: 'liability', title: '6. Limitation of Liability', icon: <Shield size={20} /> },
    { id: 'termination', title: '7. Termination', icon: <Ban size={20} /> },
    { id: 'law', title: '8. Governing Law', icon: <Scale size={20} /> },
    { id: 'changes', title: '9. Changes to Terms', icon: <RefreshCw size={20} /> },
    { id: 'contact', title: '10. Contact Information', icon: <Mail size={20} /> },
];

const GlassCard = ({ children, className = "" }) => (
    <div className={`backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[2rem] overflow-hidden ${className}`}>
        {children}
    </div>
);

const SectionWrapper = ({ id, title, icon, children }) => (
    <motion.section
        id={id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 last:mb-0 scroll-mt-32"
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                {icon}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h2>
        </div>
        <div className="pl-14 text-slate-600 leading-relaxed space-y-4">
            {children}
        </div>
    </motion.section>
);

const ListItems = ({ items }) => (
    <ul className="grid gap-3 mt-4">
        {items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start group">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue/40 group-hover:bg-brand-blue transition-colors shrink-0" />
                <span className="text-slate-600 group-hover:text-slate-900 transition-colors">{item}</span>
            </li>
        ))}
    </ul>
);

const Terms = () => {
    const [activeSection, setActiveSection] = useState(sections[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.2, rootMargin: "-10% 0px -70% 0px" }
        );

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFEFF] selection:bg-brand-blue/10 selection:text-brand-blue relative">
            <SEO title="Terms & Conditions" description="Terms and Conditions of Beta-Softnet services" url="/terms" />
            {/* Animated Background Mesh */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/40 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-indigo-50/50 blur-[100px] rounded-full" />
                <div className="absolute top-[40%] left-[60%] w-[25%] h-[25%] bg-blue-50/60 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10">
                {/* Hero Header */}
                <header className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue text-xs font-semibold mb-6"
                    >
                        <Scale size={14} />
                        Legal Agreement
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6"
                    >
                        Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-indigo-600">Conditions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 font-medium"
                    >
                        Effective Date: {EFFECTIVE_DATE} • {COMPANY_NAME}
                    </motion.p>
                </header>

                <main className="max-w-7xl mx-auto px-6 pb-32 flex flex-col lg:flex-row gap-12">
                    {/* Left Sidebar Nav */}
                    <aside className="hidden lg:block w-72 shrink-0">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 ml-4">Table of Contents</h3>
                            <nav className="flex flex-col gap-1">
                                {sections.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className={`group flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                                            activeSection === s.id
                                                ? 'bg-white shadow-xl shadow-blue-500/5 text-brand-blue border border-slate-100'
                                                : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                                        }`}
                                    >
                                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeSection === s.id ? 'bg-brand-blue scale-125' : 'bg-slate-300 group-hover:bg-slate-400'}`} />
                                        <span className="text-sm font-semibold">{s.title}</span>
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Content Section */}
                    <div className="flex-1 min-w-0">
                        <GlassCard className="p-8 md:p-12 lg:p-16">
                            <div className="prose prose-slate max-w-none">
                                <p className="text-xl text-slate-600 leading-relaxed mb-16 italic border-l-4 border-brand-blue/20 pl-6">
                                    By accessing or using our services, you agree to be bound by these Terms and Conditions. Please read them carefully to understand your rights and responsibilities.
                                </p>

                                <SectionWrapper id="use" title="1. Use of Services" icon={<User size={20} />}>
                                    <p>You agree to:</p>
                                    <ListItems items={[
                                        "Use services only for lawful purposes",
                                        "Not misuse, duplicate, or exploit our platform",
                                        "Provide accurate and up-to-date information"
                                    ]} />
                                </SectionWrapper>

                                <SectionWrapper id="ip" title="2. Intellectual Property" icon={<FileText size={20} />}>
                                    <p>All content, including software, designs, logos, text, and graphics, are the exclusive property of <strong className="text-slate-900">{COMPANY_NAME}</strong> and are protected by applicable laws.</p>
                                    <p className="mt-4 font-semibold text-slate-900">Unauthorized use is strictly prohibited.</p>
                                </SectionWrapper>

                                <SectionWrapper id="accounts" title="3. User Accounts" icon={<User size={20} />}>
                                    <p>If you create an account:</p>
                                    <ListItems items={[
                                        "You are responsible for maintaining confidentiality of your credentials",
                                        "You are liable for all activities under your account",
                                        "Notify us immediately in case of unauthorized access"
                                    ]} />
                                </SectionWrapper>

                                <SectionWrapper id="payments" title="4. Payments & Billing" icon={<CreditCard size={20} />}>
                                    <ListItems items={[
                                        "All payments must be made as per pricing displayed",
                                        "We reserve the right to modify pricing with prior notice",
                                        "Refunds (if applicable) must follow our refund policy"
                                    ]} />
                                </SectionWrapper>

                                <SectionWrapper id="disclaimer" title="5. Product Disclaimer" icon={<AlertCircle size={20} />}>
                                    <p>Our products and services are provided on an <strong className="text-slate-900">"as is"</strong> and <strong className="text-slate-900">"as available"</strong> basis.</p>
                                    <p className="mt-4">We do not guarantee uninterrupted service or error-free functionality.</p>
                                </SectionWrapper>

                                <SectionWrapper id="liability" title="6. Limitation of Liability" icon={<Shield size={20} />}>
                                    <p>To the maximum extent permitted by law, <strong className="text-slate-900">{COMPANY_NAME}</strong> shall not be liable for:</p>
                                    <ListItems items={[
                                        "Indirect or incidental damages",
                                        "Loss of profits or data",
                                        "Service interruptions"
                                    ]} />
                                </SectionWrapper>

                                <SectionWrapper id="termination" title="7. Termination" icon={<Ban size={20} />}>
                                    <p>We reserve the right to:</p>
                                    <ListItems items={[
                                        "Suspend or terminate user accounts",
                                        "Restrict access for violations of these Terms"
                                    ]} />
                                </SectionWrapper>

                                <SectionWrapper id="law" title="8. Governing Law" icon={<Scale size={20} />}>
                                    <p>These Terms shall be governed by the laws of <strong className="text-slate-900">India</strong>. Any disputes will be subject to the exclusive jurisdiction of the courts of Tiruvallur, Tamil Nadu.</p>
                                </SectionWrapper>

                                <SectionWrapper id="changes" title="9. Changes to Terms" icon={<RefreshCw size={20} />}>
                                    <p>We may update these Terms at any time. Continued use of services indicates acceptance of updated Terms.</p>
                                </SectionWrapper>

                                <SectionWrapper id="contact" title="10. Contact Information" icon={<Mail size={20} />}>
                                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                                        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-brand-blue/30 transition-all duration-300">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-blue shadow-sm mb-4">
                                                <Mail size={18} />
                                            </div>
                                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</div>
                                            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-lg font-bold text-slate-900 hover:text-brand-blue transition-colors">
                                                {SUPPORT_EMAIL}
                                            </a>
                                        </div>
                                        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-brand-blue/30 transition-all duration-300">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-blue shadow-sm mb-4">
                                                <MapPin size={18} />
                                            </div>
                                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Address</div>
                                            <p className="text-lg font-bold text-slate-900 leading-tight">
                                                {COMPANY_ADDRESS}
                                            </p>
                                        </div>
                                    </div>
                                </SectionWrapper>
                            </div>
                        </GlassCard>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Terms;
