import React from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const About = () => {
    useEffect(()=> {
        Aos.init();
      }, [])
    return (
        <div>
            <div className="hero min-h-screen bg-slate-300">
                <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"  className="hero-content lg:gap-20 flex-col lg:flex-row">
                    <img src="https://i.ibb.co/gw82jZx/fitness-5.jpg" className="lg:w-2/5 rounded-lg " />
                    <div>
                        <h1 className="text-5xl mt-5 lg:mt-0 font-bold">About AuraFlex</h1>
                        <p className="py-6">AuraFlex Fitness Tracker is your dedicated partner for achieving a healthier lifestyle. This sleek device seamlessly blends technology and wellness, offering comprehensive insights into your physical activities, sleep patterns, stress levels, and heart health. Receive personalized workout recommendations, real-time heart rate monitoring, and advanced sleep tracking, all in a slim and stylish design that you can wear comfortably all day. Stay connected with smart features, and enjoy long battery life for uninterrupted wellness tracking. Elevate your fitness journey with AuraFlex – where innovation meets well-being.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;