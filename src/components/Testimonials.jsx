/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Parallax, Pagination } from 'swiper/modules';

import './styles.css';

const Testimonials = () => {
    return (
        <div className='max-w-7xl lg:mx-auto mx-5 mb-20'>
            <h1 className="text-4xl lg:text-5xl text-center mb-10  font-bold">Testimonials | AuraFlex</h1>
            <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Parallax, Pagination]}
        className="mySwiper rounded-xl"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://i.ibb.co/n7gGKb2/barbell-bar.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Stephen Pecevich
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          Joined the AuraFlex community in 2020
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            As a fitness enthusiast, AuraFlex has been a game-changer for me. The personalized fitness classes and expert trainers have transformed my workout routine. The variety of fitness equipment available makes every session challenging and enjoyable. It's more than just a fitness tracker; it's a comprehensive fitness solution.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Jason Richard
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          Joined the AuraFlex community in 2020
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            I've tried various fitness websites, but AuraFlex stands out with its top-notch trainers and diverse fitness classes. The website's user-friendly interface and the ability to track my progress seamlessly have motivated me to stay consistent with my workouts. AuraFlex is a true partner in my fitness journey.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Alpha Stein
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          Joined the AuraFlex community in 2020
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            AuraFlex has exceeded my expectations for a fitness tracker website. The detailed insights into my workouts, along with access to skilled trainers and a wide range of fitness classes, have made my fitness goals more achievable. It's not just a platform; it's my go-to fitness companion, helping me stay fit and healthy.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Testimonials;