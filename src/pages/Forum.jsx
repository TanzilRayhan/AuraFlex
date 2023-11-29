import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const Forum = () => {
    const forums = useLoaderData();
    console.log(forums);
    return (
        <div>
            <Helmet>
                <title>Classes | AuraFlex</title>
            </Helmet>
            <div
                className="hero lg:min-h-fit"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1521575107034-e0fa0b594529?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                }}
            >
                <div className="hero-overlay p-20 lg:p-32 brightness-50"></div>
                <div className="hero-content text-neutral-content">
                    <div className=" ">
                        <div className="px-5 lg:px-0" >
                            <img src="https://i.ibb.co/QjMqjPX/Aura-Flex-Logo-white.png" alt="logo" className="lg:w-96 py-5" />
                            <h1 className=" text-3xl lg:text-7xl font-extrabold py-5 text-white">
                                | Community / Forums
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-5xl mx-auto my-10'>
                    <h1  className='flex justify-evenly text-5xl text-center py-10 font-bold'>Total Posts: {forums.length}</h1>
                    <div className="grid mx-5 lg:mx-0 grid-cols-1 lg:grid-cols-2  gap-5">
                    {
                        forums.map((forum)=> <div key={forum._id} className="card w-full shadow-lg bg-slate-300 ">
                        <div className="card-body">
                          <h2 className="text-2xl font-bold">{forum.postTitle}</h2>
                          <div className='flex  gap-2'>
                          <h2 className="badge badge-outline p-3 ">Admin</h2>
                          <h2 className="badge badge-outline badge-error p-3 ">Trainer</h2>
                          </div>
                         
                          <h2 className="lg:card-title badge themeColor text-white p-4 ">Category: {forum.category}</h2>

                          <p>{forum.description}</p>
                         
                        </div>
                      </div> )
                    }
                    </div>
                    
            </div>

        </div>
    );
};

export default Forum;