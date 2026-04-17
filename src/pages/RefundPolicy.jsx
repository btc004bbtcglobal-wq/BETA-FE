import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Shield, Mail, MapPin, CheckCircle, XCircle, AlertTriangle, Globe, ChevronRight, FileText, Smartphone } from 'lucide-react';

const EFFECTIVE_DATE = 'April 17, 2026';
const COMPANY_NAME = 'Beta-Softnet (OPC) Pvt Ltd';
const SUPPORT_EMAIL = 'support@beta-softnet.com';
const COMPANY_ADDRESS = 'No.2 PH Road, Manavalanagar, Tiruvallur – 602002';

const sections = [
    { id: 'general', title: '1. General Policy', icon: <FileText size={20} /> },
    { id: 'digital', title: '2. Digital Products & Services', icon: <Smartphone size={20} /> },
    { id: 'non-refundable', title: '3. Non-Refundable Situations', icon: <XCircle size={20} /> },
    { id: 'subscription', title: '4. Subscription Cancellation', icon: <RotateCcw size={20} /> },
    { id: 'process', title: '5. Refund Request Process', icon: <Mail size={20} /> },
    { id: 'approval', title: '6. Refund Approval', icon: <CheckCircle size={20} /> },
    { id: 'chargebacks', title: '7. Chargebacks', icon: <AlertTriangle size={20} /> },
    { id: 'international', title: '8. International Payments', icon: <Globe size={20} /> },
    { id: 'changes', title: '9. Changes to This Policy', icon: <Shield size={20} /> },
    { id: 'contact', title: '10. Contact Us', icon: <Mail size={20} /> },
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

const ListItems = ({ items, accent = 'blue' }) => {
    const accents = {
        blue: 'bg-brand-blue/40',
        green: 'bg-emerald-500/60',
        red: 'bg-rose-500/60',
    };
    return (
        <ul className="grid gap-3 mt-4">
            {items.map((item, i) => (
                <li key={i} className="flex gap-3 items-start group">
                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${accents[accent]} group-hover:scale-125 transition-transform shrink-0`} />
                    <span className="text-slate-600 group-hover:text-slate-900 transition-colors">{item}</span>
                </li>
            ))}
        </ul>
    );
};

const RefundPolicy = () => {
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
                        <RotateCcw size={14} />
                        Refund Governance
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6"
                    >
                        Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-indigo-600">Policy</span>
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
                                    Our goal is to ensure complete satisfaction. This Refund & Cancellation Policy outlines the terms under which <strong className="text-slate-900">{COMPANY_NAME}</strong> provides refunds for its products and services globally.
                                </p>

                                <SectionWrapper id="general" title="1. General Policy" icon={<FileText size={20} />}>
                                    <p>All purchases made through our platform are subject to this Refund Policy. By purchasing our products or services, you agree to the terms outlined below.</p>
                                </SectionWrapper>

                                <SectionWrapper id="digital" title="2. Digital Products & Services" icon={<Smartphone size={20} />}>
                                    <p>Since our offerings may include <strong className="text-slate-900">software products, SaaS platforms, and digital services</strong>, refunds are generally limited due to the nature of digital delivery.</p>
                                    <div className="p-6 rounded-3xl bg-emerald-50/50 border border-emerald-100 mt-6">
                                        <div className="flex items-center gap-2 text-emerald-700 font-bold mb-3">
                                            <CheckCircle size={18} />
                                            Refunds may be granted only if:
                                        </div>
                                        <ListItems accent="green" items={[
                                            "The product/service was not delivered as promised",
                                            "There is a major technical issue that we are unable to resolve",
                                            "You were charged incorrectly due to a billing error"
                                        ]} />
                                    </div>
                                </SectionWrapper>

                                <SectionWrapper id="non-refundable" title="3. Non-Refundable Situations" icon={<XCircle size={20} />}>
                                    <div className="p-6 rounded-3xl bg-rose-50/50 border border-rose-100 italic">
                                        <div className="flex items-center gap-2 text-rose-700 font-bold mb-3">
                                            <XCircle size={18} />
                                            Refunds will NOT be provided in the following cases:
                                        </div>
                                        <ListItems accent="red" items={[
                                            "Change of mind after purchase",
                                            "Lack of usage or dissatisfaction without valid reason",
                                            "Failure to cancel a subscription before renewal",
                                            "Issues caused by third-party services or user environment",
                                            "Violation of our Terms & Conditions"
                                        ]} />
                                    </div>
                                </SectionWrapper>

                                <SectionWrapper id="subscription" title="4. Subscription Cancellation" icon={<RotateCcw size={20} />}>
                                    <p>For subscription-based services:</p>
                                    <ListItems items={[
                                        "You may cancel your subscription at any time",
                                        "Cancellation will stop future billing only",
                                        "No refunds for the current billing cycle unless required by law"
                                    ]} />
                                </SectionWrapper>

                                <SectionWrapper id="process" title="5. Refund Request Process" icon={<Mail size={20} />}>
                                    <p>To request a refund, please contact us at <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand-blue font-bold hover:underline">{SUPPORT_EMAIL}</a> with:</p>
                                    <ListItems items={[
                                        "Your full name",
                                        "Registered email address",
                                        "Transaction ID",
                                        "Detailed reason for refund"
                                    ]} />
                                    <p className="mt-4 text-sm font-medium text-slate-500">We will review your request within <strong className="text-slate-900 font-bold">5–7 business days</strong>.</p>
                                </SectionWrapper>

                                <SectionWrapper id="approval" title="6. Refund Approval" icon={<CheckCircle size={20} />}>
                                    <p>If your refund is approved:</p>
                                    <ListItems accent="green" items={[
                                        "Refunds will be processed to the original payment method",
                                        "Processing time may take 7–10 business days depending on your bank provider"
                                    ]} />
                                </SectionWrapper>

                                <SectionWrapper id="chargebacks" title="7. Chargebacks" icon={<AlertTriangle size={20} />}>
                                    <div className="p-6 rounded-3xl bg-amber-50 border border-amber-100 flex gap-4">
                                        <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={20} />
                                        <p className="text-slate-700 text-sm leading-relaxed">
                                            Initiating a chargeback without contacting us first may result in <strong className="text-slate-900">immediate account suspension</strong> and permanent restriction from our services. We encourage users to contact us to resolve issues before initiating disputes.
                                        </p>
                                    </div>
                                </SectionWrapper>

                                <SectionWrapper id="international" title="8. International Payments" icon={<Globe size={20} />}>
                                    <div className="flex items-center gap-3 text-slate-700 border-l-2 border-brand-blue/20 pl-4 py-1">
                                        <Globe size={18} className="text-brand-blue opacity-50" />
                                        <span>For international transactions: Currency conversion differences may apply and bank/payment gateway fees are non-refundable.</span>
                                    </div>
                                </SectionWrapper>

                                <SectionWrapper id="changes" title="9. Changes to This Policy" icon={<Shield size={20} />}>
                                    <p>We reserve the right to update or modify this Refund Policy at any time. Changes will be posted on this page with the revised date.</p>
                                </SectionWrapper>

                                <SectionWrapper id="contact" title="10. Contact Us" icon={<Mail size={20} />}>
                                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                                        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-brand-blue/30 transition-all duration-300">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-blue shadow-sm mb-4">
                                                <Mail size={18} />
                                            </div>
                                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Support Email</div>
                                            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-lg font-bold text-slate-900 hover:text-brand-blue transition-colors">
                                                {SUPPORT_EMAIL}
                                            </a>
                                        </div>
                                        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-brand-blue/30 transition-all duration-300">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-blue shadow-sm mb-4">
                                                <MapPin size={18} />
                                            </div>
                                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Corporate Address</div>
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

export default RefundPolicy;
