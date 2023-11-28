import React from 'react';
import Swal from 'sweetalert2';

const joinNow = () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Congratulations!!!",
        showConfirmButton: false,
        timer: 1500
      });
}

const TrainerBooked = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="grid m-5 lg:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/YbrTyDv/bronze.png" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Bronze Membership</h2>
                        <ul>
                            <li>Real-time Fitness Tracking features</li>
                            <li>Professional Fitness Classes</li>
                            <li>Personalized Training Programs</li>
                        </ul>
                        <div className="card-actions">
                            <button onClick={joinNow} className="btn btn-ghost mt-5 bg-red-400 text-white btn-outline">Join Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/GdHXG2s/silver.png" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Silver Membership</h2>
                        <ul>
                            <li>Real-time Fitness Tracking features</li>
                            <li>Professional Fitness Classes</li>
                            <li>Personalized Training Programs</li>
                        </ul>
                        <div className="card-actions">
                            <button onClick={joinNow} className="btn btn-ghost mt-5 bg-red-400 text-white btn-outline">Join Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/xFxdfMK/gold.png" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Gold Membership</h2>
                        <ul>
                            <li>Real-time Fitness Tracking features</li>
                            <li>Professional Fitness Classes</li>
                            <li>Personalized Training Programs</li>
                        </ul>
                        <div className="card-actions">
                            <button onClick={joinNow} className="btn btn-ghost mt-5 bg-red-400 text-white btn-outline">Join Now</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default TrainerBooked;