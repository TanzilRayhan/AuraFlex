import React from 'react';

const Balance = () => {
    return (
        <div>
            <h1 className='text-5xl bg-slate-400 text-center py-10 font-semibold'>Total Balance</h1>
            <div className=''>
            <div className="stats w-full p-10 themeColor rounded-none text-primary-content">
                <div className="stat ">
                    <div className="stat-title text-white">Account balance</div>
                    <div className="stat-value">$89,400</div>
                    <div className="stat-actions">
                        <button className="btn btn-sm btn-success">Add funds</button>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-title text-white">Current balance</div>
                    <div className="stat-value">$89,400</div>
                    <div className="stat-actions">
                        <button className="btn btn-sm mr-3">Withdrawal</button>
                        <button className="btn btn-sm">deposit</button>
                    </div>
                </div>

            </div>
            </div>
            
        </div>
    );
};

export default Balance;