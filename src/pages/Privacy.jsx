import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
    return (
        <div className="pt-28 lg:pt-32 pb-20 min-h-[80vh] bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100"
                >
                    <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">Privacy Policy</h1>
                    <p className="text-slate-500 mb-10 font-medium">Last updated: October 2025</p>

                    <div className="text-slate-600 leading-relaxed space-y-8">
                        <section>
                            <p className="text-lg">
                                <strong className="text-brand-dark">Beta Softnet</strong> ("Company", "we", "our", or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy informs you about how we look after your personal data when you visit our website and tells you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">1.</span> The Data We Collect About You
                            </h3>
                            <p className="mb-4">
                                Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store, and transfer different kinds of personal data about you, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 marker:text-brand-blue text-slate-700 bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <li><strong className="text-brand-dark">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong className="text-brand-dark">Contact Data</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
                                <li><strong className="text-brand-dark">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                                <li><strong className="text-brand-dark">Usage Data</strong> includes information about how you use our website, products, and services.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">2.</span> How We Use Your Personal Data
                            </h3>
                            <p className="mb-4">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-brand-blue text-slate-700 bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., fulfilling an order).</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal obligation.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">3.</span> Data Security
                            </h3>
                            <p>
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">4.</span> Data Retention
                            </h3>
                            <p>
                                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">5.</span> Your Legal Rights
                            </h3>
                            <p>
                                Under certain circumstances, you have rights under data protection laws in relation to your personal data. These may include the right to request access, correction, erasure, restriction, transfer, or to object to processing.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">6.</span> Third-Party Links
                            </h3>
                            <p>
                                This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                            </p>
                        </section>

                        <div className="mt-12 p-8 bg-blue-50/50 rounded-2xl border border-blue-100">
                            <h3 className="text-xl font-bold text-brand-dark mb-4">7. Contact Details</h3>
                            <p className="mb-6">If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
                            <ul className="space-y-4">
                                <li className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                    <span className="font-semibold text-brand-dark w-24">Phone:</span>
                                    <a href="tel:+919444369625" className="text-brand-blue hover:underline font-medium">+91 9444369625</a>
                                </li>
                                <li className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                    <span className="font-semibold text-brand-dark w-24">Address:</span>
                                    <span className="leading-relaxed">No.469/ Pavalamalli St, Narasimhapuram,<br />Kakkalur, Tiruvallur - 602003</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;
