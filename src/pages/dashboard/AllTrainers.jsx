import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllTrainers = () => {
    const trainers = useLoaderData();
    console.log(trainers);
    return (
        <div>
            <h1 className='text-5xl bg-slate-400 text-center py-10 font-semibold'>Total Trainers: {trainers.length}</h1>
            <div className="overflow-x-auto p-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Trainer Info</th>
                            <th>Available Time slot</th>
                            <th>Experience:</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trainers.map((trainer, index) =>  <tr key={trainer._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-5">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={trainer.trainerImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div className='px-2'>
                                            <div className="font-bold ">{trainer.trainerName}</div>
                                            <div className="text-sm opacity-50 ">Age: {trainer.trainerAge}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {trainer.dayTime} hours per day
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{trainer.weekTime} hours per week</span>
                                </td>
                                <td>{trainer.experience} years</td>
                                <th>
                                    <button className="btn btn-ghost btn-outline ">Pay</button>
                                    <br />
                                    <span className="badge my-2 badge-ghost badge-sm">pending</span>
                                </th>
                            </tr> )
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTrainers;