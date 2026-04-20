import React from 'react';
import SEO from '../components/SEO';
import TechnologySection from '../components/TechnologySection';

const Technology = () => {
    return (
        <div className="pt-28 lg:pt-32 min-h-[80vh]">
            <SEO title="Our Technology" description="Technologies driving Beta-Softnet's innovative solutions" url="/technology" />
            <TechnologySection />
        </div>
    );
};

export default Technology;
