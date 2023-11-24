import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import About from '../components/About';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | AuraFlex</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            
        </div>
    );
};

export default Home;