import React from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Newsletter = () => {
    useEffect(()=> {
        Aos.init();
      }, [])
    return (
        <div data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000" className='max-w-7xl mx-5 lg:mx-auto my-20'>
            <div className="card lg:card-side lg:gap-20 bg-slate-300">
                <figure  className='lg:w-4/5'><img src="https://i.ibb.co/8Myv06M/newsletter.jpg" alt="Album" /></figure>
                <div className="lg:w-4/5 card-body items-center justify-center">
                    <form>
                        <header className="footer-title text-2xl lg:text-4xl">Newsletter</header>
                        <h4>Stay in the loop with our newsletter and unlock a world of wellness! Subscribe now for exclusive fitness tips, exciting updates, and special offers. Your journey to a healthier lifestyle begins with a single click. Join our community today!</h4>
                        <fieldset className="form-control py-5 ">
                        <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <div className="join">
                                <input type="text" name="newsletterName" placeholder="full name" className="w-full input input-bordered" autoComplete='off' required/>
                            </div>
                            <label className="label">
                                <span className="label-text">Email address</span>
                            </label>
                            <div className="join">
                                <input type="text" name="newsletterEmail" placeholder="name@site.com" className="w-full input input-bordered join-item" autoComplete='off' required/>
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