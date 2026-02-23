import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <div className="pt-28 lg:pt-32 pb-20 min-h-[80vh] bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100"
                >
                    <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">Terms and Conditions</h1>
                    <p className="text-slate-500 mb-10 font-medium">Last updated: October 2025</p>

                    <div className="text-slate-600 leading-relaxed space-y-8">
                        <section>
                            <p className="text-lg">
                                These Terms and Conditions ("Agreement") constitute a legally binding agreement between <strong className="text-brand-dark">Beta Softnet</strong> ("Company", "we", "our", or "us") and you ("User", "Customer", or "you") governing your access to and use of our website and related services (collectively, the "Service"). By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by this Agreement.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">1.</span> Scope of Services
                            </h3>
                            <p>
                                We provide online retail and e-commerce services that allow customers to browse, purchase, and manage various products. All product details, pricing, and availability are displayed on our website and are subject to change without prior notice. We reserve the right to modify or discontinue any portion of the Service at any time without liability.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">2.</span> Product Information
                            </h3>
                            <p>
                                We make every effort to display accurate product information, descriptions, and prices. However, typographical or pricing errors may occur. In such cases, we reserve the right to correct errors or cancel orders placed under incorrect pricing or information.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">3.</span> User Responsibilities
                            </h3>
                            <p className="mb-4">By using our Service, you agree to provide accurate and up-to-date personal, billing, and contact information. You are responsible for maintaining the confidentiality of your account credentials and all activities occurring under your account.</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-brand-blue text-slate-700 bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <li>Use the Service only for lawful purposes.</li>
                                <li>Refrain from engaging in fraudulent or misleading activities.</li>
                                <li>Not upload or transmit viruses, malware, or harmful code to the Service.</li>
                                <li>Notify us immediately in case of unauthorized account use or security breaches.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">4.</span> Payment and Billing Terms
                            </h3>
                            <p className="mb-4">
                                All payments must be made in Indian Rupees (INR) and are securely processed via Cashfree Payments India Pvt. Ltd. or other authorized payment gateways. We do not store sensitive financial data such as credit card numbers or CVV details.
                            </p>
                            <p>
                                Once an order is placed, payment is required to confirm the purchase. You agree to pay all applicable fees, taxes, and shipping charges. Refunds or cancellations will be handled as per our Refund & Cancellation Policy.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">5.</span> Usage Restrictions
                            </h3>
                            <p className="mb-4">You agree not to use the Service for any unlawful or prohibited activity, including but not limited to:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-brand-blue text-slate-700 bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <li>Attempting to gain unauthorized access to our systems or networks.</li>
                                <li>Impersonating another person or entity.</li>
                                <li>Using automated systems or bots to interact with the Service without permission.</li>
                                <li>Engaging in activities that disrupt or interfere with the performance of the Service.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">6.</span> Intellectual Property Ownership
                            </h3>
                            <p>
                                All materials on this website, including text, graphics, images, software, trademarks, and logos, are the intellectual property of Beta Softnet or its licensors. You may not copy, reproduce, distribute, modify, or create derivative works based on our content without prior written consent.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">7.</span> Limitation of Liability
                            </h3>
                            <p>
                                To the maximum extent permitted by law, Beta Softnet shall not be liable for any indirect, incidental, consequential, or special damages arising out of or in connection with your use or inability to use the Service, products, or third-party payment gateways. Our total liability shall not exceed the total amount paid by you for the product or service.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">8.</span> Indemnification
                            </h3>
                            <p>
                                You agree to indemnify, defend, and hold harmless Beta Softnet, its directors, officers, employees, and affiliates from any claims, damages, or expenses arising out of your use of the Service, violation of these Terms, or infringement of third-party rights.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">9.</span> Termination
                            </h3>
                            <p>
                                We reserve the right to suspend or terminate your access to the Service at any time without prior notice if you breach these Terms or engage in any activity that may harm the Company or other users.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">10.</span> Force Majeure
                            </h3>
                            <p>
                                We shall not be held liable for any delay or failure in performance caused by circumstances beyond our reasonable control, including but not limited to natural disasters, war, acts of terrorism, labor disputes, power failures, or internet outages.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">11.</span> Dispute Resolution
                            </h3>
                            <p>
                                Any dispute arising out of or related to these Terms shall first be resolved amicably through mutual discussion within 15 business days. If unresolved, it shall be referred to arbitration under the Arbitration and Conciliation Act, 1996. The arbitration shall be held in Tiruvallur, Tamilnadu, India. The courts of Tiruvallur, Tamilnadu shall have exclusive jurisdiction.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">12.</span> Governing Law
                            </h3>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">13.</span> Privacy Policy
                            </h3>
                            <p>
                                Your use of the Service is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 drop-shadow-sm flex items-center gap-3">
                                <span className="text-brand-blue/30 font-black text-2xl">14.</span> Amendments
                            </h3>
                            <p>
                                We may modify or update these Terms at any time, with or without notice. Updated versions will be posted on this page, and your continued use of the Service constitutes acceptance of the revised Terms.
                            </p>
                        </section>

                        <div className="mt-12 p-8 bg-blue-50/50 rounded-2xl border border-blue-100">
                            <h3 className="text-xl font-bold text-brand-dark mb-4">15. Contact Information</h3>
                            <p className="mb-6">For any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
                            <ul className="space-y-4">
                                <li className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                    <span className="font-semibold text-brand-dark w-24">Online:</span>
                                    <a href="/contact" className="text-brand-blue hover:underline font-medium">Click here to contact us</a>
                                </li>
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

export default Terms;
