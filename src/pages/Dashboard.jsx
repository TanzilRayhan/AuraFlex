import React from 'react';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>DashBoard | AuraFlex</title>
            </Helmet>
            <div
                className="hero lg:min-h-fit"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundPosition:""
                }}
            >
                <div className="hero-overlay p-20 lg:p-32 brightness-50"></div>
                <div className="hero-content text-neutral-content">
                    <div className=" ">
                        <div className="px-5 lg:px-0" >
                            <img src="https://i.ibb.co/QjMqjPX/Aura-Flex-Logo-white.png" alt="logo" className="lg:w-96 py-5" />
                            <h1 className=" text-3xl lg:text-7xl font-extrabold py-5 text-white">| Dashboard</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;