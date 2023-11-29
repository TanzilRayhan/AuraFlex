import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TeamSection = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch("https://aura-flex-server.vercel.app/trainer");
                const result = await response.json();
                setData(result);
            } catch (error) {
               console.log(error);
            }
        };
        fetchData();
    }, [])

    const specificIds = ['65667402b84036261fbe4d97', '65667553b84036261fbe4d99', '656674f5b84036261fbe4d98'];
    const filteredData = data.filter(item => specificIds.includes(item._id));

    return (
        <div className='max-w-7xl mx-auto my-24'>
        <h1 className="text-4xl lg:text-5xl text-center mb-10 font-bold">Trainers Team | AuraFlex</h1>
        <div className="grid mx-5 lg:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
                    filteredData.map((trainer) => <div key={trainer._id}>
                        <div className="card w-full my-5 bg-slate-200 shadow-md">
                <div className="avatar mt-5 justify-center items-center">
                    <div className="w-40 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                        <img src={trainer.trainerImage} />
                    </div>
                </div>
                <div className="card-body">
                    <div>
                        <h2 className="text-center text-2xl lg:text-4xl font-bold">{trainer.trainerName}</h2>
                       

                        <div className="flex flex-col items-center justify-center  py-2 gap-2">
                            <div className="badge p-4 badge-lg text-white badge-error">
                                Experience: {trainer.experience} Years
                            </div>
                        </div>
                    </div>
                    <div className=" flex my-4 items-center justify-center gap-3">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>

                    <div className="card-actions justify-center">
                        <Link to='/trainer'>
                            <button className="btn w-40 btn-outline btn-ghost">Know More</button>
                        </Link>

                    </div>
                </div>
            </div>
                    </div>)
                }
        </div>
    </div>
    );
};

export default TeamSection;