import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedCard from '../components/FeaturedCard';
import { Helmet } from 'react-helmet-async';
import InfiniteScroll from 'react-infinite-scroll-component';

const Gallery = () => {
   
    const [featuredData, setFeaturedData] = useState(useLoaderData());
    const [page, setPage] = useState(1);

    const fetchMoreData = async () => {
        const newData = await fetchNextData(page);
        setFeaturedData([...featuredData, ...newData]);
        setPage(page + 1);
    };

    const fetchNextData = async () => {
        const response = await fetch(`https://aura-flex-server.vercel.app/gallery`);
        const data = await response.json();
        return data;
    };

    return (
        <div>
            <Helmet>
                <title>Gallery | AuraFlex</title>
            </Helmet>
            <div
                className="hero lg:min-h-fit"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1651840403917-50e629a8f3e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
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
                <InfiniteScroll 
                    dataLength={featuredData.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<div className="flex justify-center items-center">
                        <span className="loading loading-infinity loading-lg"></span>
                    </div>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    refreshFunction={fetchMoreData}
                    pullDownToRefresh
                    pullDownToRefreshThreshold={50}
                    pullDownToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                    }
                >
                    <div className="grid mx-5 lg:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {featuredData.map((feature) => (
                            <FeaturedCard key={feature.id} featuredData={feature}></FeaturedCard>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default Gallery;
