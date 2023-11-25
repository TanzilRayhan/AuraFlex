import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const TrainerDetails = () => {
    const trainer = useLoaderData();
    const { trainerName, trainerImage, weekTime, dayTime, experience } = trainer;
    return (
        <div>
            <div className="card w-full my-5 bg-slate-200 shadow-xl">
                <div className="avatar mt-5 justify-center items-center">
                    <div className="w-40 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                        <img src={trainerImage} />
                    </div>
                </div>
                <div className="card-body">
                    <div>
                        <h2 className="text-center text-2xl lg:text-4xl font-bold">{trainerName}</h2>

                        <div className="flex flex-col lg:items-center  py-2 gap-2">
                            <div className="badge p-4 badge-lg badge-accent">
                                Experience: {experience} Years
                            </div>
                            <div className="badge p-4 badge-lg badge-primary text-sm badge-outline ">
                                Available Day Time: {dayTime} AM/PM
                            </div>
                            <div className="badge p-4 badge-lg badge-error text-sm badge-outline ">
                                Available Week Hour: {weekTime} hours
                            </div>
                        </div>

                        <p className="mr-20 font-semibold text-lg"></p>
                    </div>

                    <div className="card-actions justify-center">
                        <Link >
                            <button className="btn w-40 btn-outline btn-ghost">Know More</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerDetails;