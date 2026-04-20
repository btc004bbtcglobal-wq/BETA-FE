import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronRight, Mail, MapPin, ExternalLink, ArrowRight, UserCheck, Lock, Eye, FileText } from 'lucide-react';

const EFFECTIVE_DATE = 'April 17, 2026';
const COMPANY_NAME = 'Beta-Softnet (OPC) Pvt Ltd';
const SUPPORT_EMAIL = 'support@beta-softnet.com';
const COMPANY_ADDRESS = 'No.2 PH Road, Manavalanagar, Tiruvallur – 602002';

const sections = [
    { id: 'collect', title: 'Information We Collect', icon: <Eye size={20} /> },
    { id: 'use', title: 'How We Use Your Information', icon: <UserCheck size={20} /> },
    { id: 'legal', title: 'Legal Basis (India – DPDP)', icon: <Shield size={20} /> },
    { id: 'sharing', title: 'Sharing of Information', icon: <ExternalLink size={20} /> },
    { id: 'security', title: 'Data Security', icon: <Lock size={20} /> },
    { id: 'retention', title: 'Data Retention', icon: <FileText size={20} /> },
    { id: 'rights', title: 'Your Rights', icon: <ArrowRight size={20} /> },
    { id: 'cookies', title: 'Cookies Policy', icon: <ChevronRight size={20} /> },
    { id: 'third-party', title: 'Third-Party Services', icon: <ExternalLink size={20} /> },
    { id: 'children', title: "Children's Privacy", icon: <UserCheck size={20} /> },
    { id: 'changes', title: 'Changes to This Policy', icon: <Shield size={20} /> },
    { id: 'contact', title: 'Contact Us', icon: <Mail size={20} /> },
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

const Privacy = () => {
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
            <SEO title="Privacy Policy" description="Privacy Policy and Data Protection at Beta-Softnet" url="/privacy" />
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
                        <Shield size={14} />
                        Data Protection Commitment
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6"
                    >
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-indigo-600">Policy</span>
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
                                    Welcome to <strong className="text-slate-900">{COMPANY_NAME}</strong>. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
                                </p>

                                <SectionWrapper id="collect" title="1. Information We Collect" icon={<Eye size={20} />}>
                                    <p>We may collect the following information:</p>
                                    <ListItems items={[
                                        <><strong className="text-slate-900">Personal Information:</strong> Name, email address, phone number, billing/shipping address</>,
                                        <><strong className="text-slate-900">Account Data:</strong> Username, password, profile details</>,
                                        <><strong className="text-slate-900">Transaction Data:</strong> Payment details (processed securely via third-party gateways)</>,
                                        <><strong className="text-slate-900">Usage Data:</strong> IP address, browser type, device info, pages visited</>,
                                        "Cookies & Tracking Technologies"
                                    ]} />
                                </SectionWrapper>

                                <SectionWrapper id="use" title="2. How We Use Your Information" icon={<UserCheck size={20} />}>
                                    <p>We use your data to:</p>
                                    <ListItems items={[
                                        "Provide, operate, and maintain our products and services",
                                        "Process transactions and send confirmations",
                                        "Improve user experience and platform performance",
                                        "Send important updates, notifications, and promotional content",
                                        "Prevent fraud and ensure security"
                                    ]} />
                                </SectionWrapper>

                                <SectionWrapper id="legal" title="3. Legal Basis (India – DPDP Act Compliance)" icon={<Shield size={20} />}>
                                    <p>We process personal data based on:</p>
                                    <ListItems items={["Your consent", "Contractual necessity", "Legal obligations"]} />
                                </SectionWrapper>

                                <SectionWrapper id="sharing" title="4. Sharing of Information" icon={<ExternalLink size={20} />}>
                                    <p>We do <strong className="text-slate-900 underline decoration-brand-blue/30 underline-offset-4">not sell your personal data</strong>. We may share data with:</p>
                                    <ListItems items={[
                                        "Payment processors and hosting providers",
                                        "Analytics services",
                                        "Legal authorities when required",
                                        "In case of merger, acquisition, or business transfer"
                                    ]} />
                                </SectionWrapper>

                                <SectionWrapper id="security" title="5. Data Security" icon={<Lock size={20} />}>
                                    <p>We implement appropriate technical and organizational measures to safeguard your data. This includes encryption, secure servers, and regular audits of our digital infrastructure.</p>
                                </SectionWrapper>

                                <SectionWrapper id="retention" title="6. Data Retention" icon={<FileText size={20} />}>
                                    <p>We retain your data only as long as necessary for:</p>
                                    <ListItems items={["Providing services", "Legal compliance", "Resolving disputes"]} />
                                </SectionWrapper>

                                <SectionWrapper id="rights" title="7. Your Rights" icon={<ArrowRight size={20} />}>
                                    <p>You have the right to:</p>
                                    <ListItems items={["Access your personal data", "Correct or update your data", "Request deletion of your data", "Withdraw consent at any time"]} />
                                </SectionWrapper>

                                <SectionWrapper id="cookies" title="8. Cookies Policy" icon={<ChevronRight size={20} />}>
                                    <p>We use cookies to enhance user experience and analyze website traffic. You can manage cookie preferences through your browser settings.</p>
                                </SectionWrapper>

                                <SectionWrapper id="third-party" title="9. Third-Party Services" icon={<ExternalLink size={20} />}>
                                    <p>Our platform may contain links or integrations with third-party services. We are not responsible for their privacy practices.</p>
                                </SectionWrapper>

                                <SectionWrapper id="children" title="10. Children's Privacy" icon={<UserCheck size={20} />}>
                                    <p>Our services are not intended for individuals under the age of 18.</p>
                                </SectionWrapper>

                                <SectionWrapper id="changes" title="11. Changes to This Policy" icon={<Shield size={20} />}>
                                    <p>We may update this Privacy Policy periodically. Updates will be posted on this page with the revised date.</p>
                                </SectionWrapper>

                                <SectionWrapper id="contact" title="12. Contact Us" icon={<Mail size={20} />}>
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

export default Privacy;
