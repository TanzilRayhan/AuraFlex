import React from 'react';

const FeaturedCard = ({featuredData}) => {
    const {cover, title, shortDescription} = featuredData || {};
    return (
        <div>
            <div>
                <div className="card card-compact w-full bg-slate-300">
                    <figure>
                        <img className="w-full h-60" src={cover}></img>
                    </figure>
                    <div className="card-body  text-center text-[#223843]">
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <p >{shortDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;