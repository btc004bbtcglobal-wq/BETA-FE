import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
  const siteName = "Beta-Softnet";
  const defaultDescription = "Beta-Softnet - A Premium Product-Based Software Development Company & IT Solutions Provider in Tiruvallur.";
  const defaultKeywords = "product based company, software products, IT solutions, custom software development, tech consulting, software company in tiruvallur, IT company tiruvallur";
  
  // Use beta-softnet.com as placeholder domain. User will be instructed to change if different.
  const baseUrl = "https://beta-softnet.com";
  const fullUrl = `${baseUrl}${url || ''}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default SEO;