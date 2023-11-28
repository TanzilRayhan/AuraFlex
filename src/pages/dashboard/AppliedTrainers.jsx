/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEye } from "react-icons/fa";

const AppliedTrainers = () => {
    const trainers = useLoaderData();
    console.log(trainers);

    const handleConfirm= id => {
        console.log(id);
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Accept",
            denyButtonText: `Reject`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Accepted", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Rejected", "", "info");
            }
          });
        
    }

    return (
        <div>
            <h1 className='text-5xl bg-slate-400 text-center py-10 font-semibold'>Applied Trainers: {trainers.length}</h1>
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
                            <th>Confirmation</th>
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
                                    <button onClick={handleConfirm} className="btn btn-ghost btn-outline btn-sm"><FaEye></FaEye></button>
                                
                                </th>
                            </tr> )
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedTrainers;