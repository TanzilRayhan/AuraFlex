import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import TrainerCard from '../components/trainerCard';

const Trainer = () => {
    const trainerData = useLoaderData();
    console.log(trainerData);

    return (
        <div>
            <Helmet>
                <title>Trainer | AuraFlex</title>
            </Helmet>
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
                            <img src="https://i.ibb.co/QjMqjPX/Aura-Flex-Logo-white.png" alt="logo" className="lg:w-96 py-5" />
                            <h1 className=" text-3xl lg:text-7xl font-extrabold py-5 text-white">| Trainers</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-5xl mx-auto'>
            <div className="grid lg:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {trainerData.map((trainers) => (
                    <TrainerCard key={trainers.id} trainers={trainers}>
                    </TrainerCard>
                ))}
            </div>
            </div>
            
        </div>
    );
};

export default Trainer;