import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import About from '../components/About';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import FeaturedClasses from '../components/featuredClasses';
import LatestArticles from '../components/LatestArticles';
import TeamSection from '../components/TeamSection';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | AuraFlex</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <FeaturedClasses></FeaturedClasses>
            <TeamSection></TeamSection>
            <Testimonials></Testimonials>
            <Newsletter></Newsletter>
            <LatestArticles></LatestArticles>
            <About></About>
            
        </div>
    );
};

export default Home;