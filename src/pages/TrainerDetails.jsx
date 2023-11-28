import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

const TrainerDetails = () => {
    const trainer = useLoaderData();
    const { trainerName, trainerAge, trainerImage, weekTime, dayTime, experience } = trainer;
    return (
        <div>
            <Helmet>
                <title>Trainer Details| AuraFlex</title>
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
                            <h1 className=" text-3xl lg:text-7xl font-extrabold py-5 text-white">| Trainer Details</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-4xl  mx-auto'>
                <div className="card justify-center my-5 bg-slate-200 shadow-xl">
                    <div className="avatar mt-5 justify-center items-center">
                        <div className="w-40 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                            <img src={trainerImage} />
                        </div>
                    </div>
                    <div className="card-body">
                        <div>

                            <h2 className="text-center text-2xl lg:text-4xl my-3 font-bold">Name: {trainerName}</h2>
                            <h2 className="text-center text-2xl lg:text-3xl my-3 font-semibold">Age: {trainerAge}</h2>
                            <h2 className="text-center text-xxl  my-3 font-semibold">Skills: patience, communication, flexible </h2>
                  

                            <div className="flex flex-col lg:items-center  py-2 gap-2">
                                <div className="badge p-4 badge-lg badge-error text-white">
                                    Experience: {experience} Years
                                </div>
                                <div className="badge p-4 badge-lg badge-primary text-sm badge-outline ">
                                    Available Day Time: {dayTime} hours
                                </div>
                                <div className="badge p-4 badge-lg badge-error text-sm badge-outline ">
                                    Available Week Hour: {weekTime} hours
                                </div>
                                <div>
                                    <Link to="/trainerBooked">
                                        <button className="btn w-60 mt-5 text-xl btn-primary">Available Slots: {dayTime}</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-10 p-10 bg-slate-300 justify-center">
                <div>
                    <Link to="/beTrainer">
                        <button className="btn w-80 btn-outline themeColor text-white">Become a Trainer</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default TrainerDetails;