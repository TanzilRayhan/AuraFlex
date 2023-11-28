import React from 'react';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    return (
        <div>
            <Helmet>
                <title>Classes | AuraFlex</title>
            </Helmet>
            <div
                className="hero lg:min-h-fit"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/9Nr53PF/Fitness-Classes.jpg)"
                }}
            >
                <div className="hero-overlay p-20 lg:p-32 brightness-50"></div>
                <div className="hero-content text-neutral-content">
                    <div className=" ">
                        <div className="px-5 lg:px-0" >
                            <img src="https://i.ibb.co/QjMqjPX/Aura-Flex-Logo-white.png" alt="logo" className="lg:w-96 py-5" />
                            <h1 className=" text-3xl lg:text-7xl font-extrabold py-5 text-white">
                                | Fitness Classes
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;