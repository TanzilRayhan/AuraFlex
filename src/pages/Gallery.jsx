import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedCard from '../components/FeaturedCard';

const Gallery = () => {
    const featuredData = useLoaderData();
    console.log(featuredData);
    return (
        <div>
            <div
                className="hero lg:min-h-fit"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/zmrFjxm/gym-1.jpg)"
                }}
            >
                <div className="hero-overlay p-20 lg:p-32 brightness-50"></div>
                <div className="hero-content text-neutral-content">
                    <div className=" ">
                        <div className="px-5 lg:px-0" >
                            <h1 className=" text-3xl lg:text-7xl font-extrabold py-5 text-white">
                                <img src="https://i.ibb.co/QjMqjPX/Aura-Flex-Logo-white.png" alt="logo" className="lg:w-96 py-5" />| Gallery
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto my-20'>
                <div className="grid mx-5 lg:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {featuredData.map((feature) => (
                        <FeaturedCard key={feature.id} featuredData={feature}></FeaturedCard>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Gallery;