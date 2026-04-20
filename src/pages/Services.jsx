import React from 'react';
import SEO from '../components/SEO';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
    return (
        <div className="pt-24 min-h-[80vh]">
            <SEO title="Our Services" description="Premium IT and Software Development Services by Beta-Softnet" url="/services" />
            <ServicesSection />
        </div>
    );
};

export default Services;
