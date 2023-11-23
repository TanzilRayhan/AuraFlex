import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | AuraFlex</title>
            </Helmet>
            <Banner></Banner>
            
        </div>
    );
};

export default Home;