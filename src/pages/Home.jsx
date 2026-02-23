import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsSection from '../components/StatsSection';

const CallToAction = () => (
    <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Let's discuss how our custom software solutions and strategic IT consulting can help you achieve your goals faster.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button className="bg-white text-brand-blue font-bold py-4 px-8 rounded-md hover:bg-slate-50 transition-colors shadow-lg w-full sm:w-auto">
                    Contact Our Team
                </button>
                <button className="bg-transparent text-white font-medium py-4 px-8 rounded-md border border-white/30 hover:bg-white/10 transition-colors w-full sm:w-auto">
                    Explore Our Work
                </button>
            </div>
        </div>
    </section>
);

const Home = () => {
    return (
        <div>
            {/* Enhanced Hero Section */}
            <HeroSection />

            {/* Pulling in core sections to make home page substantial */}
            <div className="bg-slate-50 pb-10">
                <ServicesSection />
            </div>

            <StatsSection />

            <WhyChooseUs />

            <CallToAction />
        </div>
    );
};

export default Home;
