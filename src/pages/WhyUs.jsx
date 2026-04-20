import React from 'react';
import SEO from '../components/SEO';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsSection from '../components/StatsSection';

const WhyUs = () => {
    return (
        <div className="pt-28 lg:pt-32 min-h-[80vh]">
            <SEO title="Why Choose Us" description="Why Beta-Softnet is the preferred IT partner" url="/why-us" />
            <WhyChooseUs />
            <StatsSection />
        </div>
    );
};

export default WhyUs;
