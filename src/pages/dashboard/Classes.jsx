import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

const Classes = () => {
    const loadClass = useLoaderData();
    console.log(loadClass);
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
            <div className='max-w-7xl mx-auto my-20'>
                <div className="grid mx-5 lg:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        loadClass.map((classes) => <div key={classes._id}>
                            <div className="card card-compact w-full shadow-md bg-slate-200">
                                <figure>
                                    <img className="w-full h-60" src={classes.classCover}></img>
                                </figure>
                                <div className="card-body text-center text-[#223843]">
                                    <h2 className="text-2xl font-bold">{classes.classTitle}</h2>
                                </div>
                                <div className="flex items-center justify-center flex-col  py-2 gap-2">
                                    <div className="badge p-4 badge-lg badge-error">
                                        Category: {classes.category}
                                    </div>
                                    <div className="badge p-4 badge-lg badge-primary text-sm badge-outline ">
                                        Total Class Time: {classes.classHour} hours
                                    </div>
                                </div>
                                <div className="card-actions justify-center">
                                    <Link to='/trainer'>
                                        <button className="btn themeColor my-3 w-40 btn-outline text-white">Join Class</button>
                                    </Link>

                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Classes;