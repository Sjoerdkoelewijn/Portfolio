import React from 'react';

const LinkResolver = (doc) => {

    // Pretty URLs for known types
    if (doc.type === 'portfolio_item') return `/portfolio/${doc.uid}`
    if (doc.type === 'pages') return `/${doc._meta.uid}`
    if (doc.type === 'categories') return `/${doc.uid}`
    if (doc.type === 'services_item') return `/services/${doc.uid}`
    if (doc.type === 'about') return `/${doc.uid}`
    if (doc.type === 'home') return `/`
    // Fallback for other types, in case new custom types get created
    return `/${doc.uid}`               
        
  
}; 

export default LinkResolver; 