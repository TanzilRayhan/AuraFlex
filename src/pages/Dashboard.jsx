import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdOutlineClass } from "react-icons/md";
import { FaPeopleRobbery } from "react-icons/fa6";
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    const [isAdmin] = useAdmin();

    const navLinks = (
        <>
            {
                isAdmin ? <>
                    <li><NavLink to="/dashboard/allUsers">All Users</NavLink></li>
                    <li><NavLink to="/dashboard/allMembers">All Members</NavLink></li>
                    <li><NavLink to="/dashboard/allSubscribers">All Subscribers</NavLink></li>
                    <li><NavLink to="/dashboard/allTrainers">All Trainers</NavLink></li>
                    <li><NavLink to="/dashboard/appliedTrainers">Applied Trainers</NavLink></li>
                    <li><NavLink to="/dashboard/balance">Balance</NavLink></li>
                </>
                    :
                    <>

                    </>
            }
            
            <div className='divider'></div>
            <li><NavLink className="font-bold text-slate-800" to="/"><FaHome/> Home</NavLink></li>
            <li><NavLink className="font-bold text-slate-800" to="/gallery"><GrGallery />Gallery</NavLink></li>
            <li><NavLink className="font-bold text-slate-800" to="/trainer"><FaPeopleRobbery />Trainer</NavLink></li>
            <li><NavLink className="font-bold text-slate-800" to="/classes"><MdOutlineClass />Classes</NavLink></li>
        </>
    )

    return (
        <div>
            <Helmet>
                <title>DashBoard | AuraFlex</title>
            </Helmet>
            <div className='flex'>
                {/*Dashboard Side Bar*/}
                <aside className='w-1/5 lg:px-5 lg:py-10 min-h-screen shadow-xl bg-slate-300'>

                    <div className=" invisible lg:visible">
                        <img src="https://i.ibb.co/tXHGPbH/Aura-Flex-Logo.png" className='lg:w-3/4 px-5' />
                        <div className='divider'></div>
                        <ul className='menu gap-1 lg:text-lg font-semibold'>
                            {navLinks}
                        </ul>
                    </div>
                    <div className="drawer lg:hidden z-50">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        </div>
                        <div className="drawer-side ">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul tabIndex={0} className="menu p-4 w-80 min-h-full  bg-slate-300 text-base-content">
                                <img src="https://i.ibb.co/tXHGPbH/Aura-Flex-Logo.png" className='lg:w-3/4 p-5' />
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                </aside>
                {/*Dashboard Content*/}
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;