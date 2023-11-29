import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedClasses = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch("https://aura-flex-server.vercel.app/class");
                const result = await response.json();
                setData(result);
            } catch (error) {
               console.log(error);
            }
        };
        fetchData();
    }, [])



    return (
        <div className='max-w-7xl mx-auto my-24'>
            <h1 className="text-4xl lg:text-5xl text-center mb-10  font-bold">Featured Classes | AuraFlex</h1>
            <div className="grid mx-5 lg:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                        data.map((classes) => <div key={classes._id}>
                            <div className="card card-compact w-full shadow-md bg-slate-200">
                                <figure>
                                    <img className="w-full h-60" src={classes.classCover}></img>
                                </figure>
                                <div className="card-body text-center text-[#223843]">
                                    <h2 className="text-2xl font-bold">{classes.classTitle}</h2>
                                </div>
                                <div className="flex items-center justify-center flex-col  py-2 gap-2">
                                    <div className="badge p-4 badge-lg text-white badge-error">
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
    );
};

export default FeaturedClasses;