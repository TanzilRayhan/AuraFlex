import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const AllSubscribers = () => {
    const subscribers = useLoaderData();
    console.log(subscribers);
    return (
        <div>
            <h1 className='text-5xl bg-slate-400 text-center py-10 font-semibold'>Newsletter Subscribers: {subscribers.length}</h1>
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
                            <th>Subscriber Name</th>
                            <th>Subscriber Email</th>
                            <th>Unsubscribe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subscribers.map((subscriber, index) =>  <tr key={subscriber._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-5">
                                        <div className='px-2'>
                                            <div className="font-bold ">{subscriber.subscriberName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                {subscriber.subscriberEmail}
                                    
                                </td>
                                <th>
                                <button  className='btn bg-red-400 btn-ghost'>
                                        <FaTrash></FaTrash>
                                    </button>
                                </th>
                            </tr> )
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSubscribers;