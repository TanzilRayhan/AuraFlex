import React from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Swal from 'sweetalert2';


const Newsletter = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    const subscriber = e => {
        e.preventDefault();
        const form = e.target;

        const subscriberName = form.subscriberName.value;
        const subscriberEmail = form.subscriberEmail.value;
        const subscriberInfo = {
            subscriberName, subscriberEmail
        }
        console.log(subscriberInfo);

           //send data to the server
           fetch("http://localhost:5001/subscriber", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(subscriberInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congrats!!!",
                        text: "Subscription Completed !!!",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                }
            });


    }

    return (
        <div data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000" className='max-w-7xl mx-5 lg:mx-auto my-20'>
            <div className="card lg:card-side lg:gap-20 bg-slate-300">
                <figure className='lg:w-4/5'><img src="https://i.ibb.co/8Myv06M/newsletter.jpg" alt="Album" /></figure>
                <div className="lg:w-4/5 card-body items-center justify-center">
                    <form onSubmit={subscriber}>
                        <header className="footer-title text-2xl lg:text-4xl">Newsletter</header>
                        <h4>Stay in the loop with our newsletter and unlock a world of wellness! Subscribe now for exclusive fitness tips, exciting updates, and special offers. Your journey to a healthier lifestyle begins with a single click. Join our community today!</h4>
                        <fieldset className="form-control py-5 ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <div className="join">
                                <input type="text" name="subscriberName" placeholder="full name" className="w-full input input-bordered" autoComplete='off' required />
                            </div>
                            <label className="label">
                                <span className="label-text">Email address</span>
                            </label>
                            <div className="join">
                                <input type="text" name="subscriberEmail" placeholder="name@site.com" className="w-full input input-bordered join-item" autoComplete='off' required />
                                <button className="btn btn-outline join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;