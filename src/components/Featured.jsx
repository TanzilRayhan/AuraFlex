import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
    const featuredData = useLoaderData();
    console.log(featuredData);
    return (
        <div className='max-w-7xl mx-auto my-24'>
            <h1 className="text-4xl lg:text-5xl text-center mb-10  font-bold">Features | AuraFlex</h1>
            <div className="grid mx-5 lg:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {featuredData.map((feature) => (
                    <FeaturedCard key={feature.id} featuredData={feature}></FeaturedCard>
                ))}
            </div>
        </div>
    );
};

export default Featured;