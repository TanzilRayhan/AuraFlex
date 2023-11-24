import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import About from '../components/About';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | AuraFlex</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <Newsletter></Newsletter>
            <About></About>
            
        </div>
    );
};

export default Home;