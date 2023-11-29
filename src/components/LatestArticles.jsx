import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LatestArticles = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div  data-aos="fade-in"
        data-aos-easing="linear"
        data-aos-duration="1000" className='max-w-7xl mx-5 lg:mx-auto my-20'>
            <div className="card lg:card-side shadow-md lg:gap-20 bg-slate-300">
                <div className="lg:w-4/5 card-body text-center items-center justify-center">
                        <header className="footer-title text-2xl lg:text-4xl">Latest Articles</header>
                        <h4>Stay in the loop with our Latest Articles and unlock a world of wellness! Watch articles for exclusive fitness tips, exciting updates, and special offers. Your journey to a healthier lifestyle begins with a single click. Join our community today!</h4>
                        <div className="card-actions mt-5 justify-center">
                                    <Link to='/forum'>
                                        <button className="btn themeColor my-3 w-40 btn-outline text-white">Read Articles</button>
                                    </Link>

                                </div>
                </div>
                <figure className='lg:w-4/5'><img src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Album" /></figure>
            </div>
            
        </div>
    );
};

export default LatestArticles;