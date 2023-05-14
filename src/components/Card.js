import React from 'react';
import profile from '../images/tyler.jpeg';

function Card() {
    return(
        <div className='w-full'>
            <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5'>
                <div className=''>
                <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={profile} alt="profile face" />
                </div>
            </div>
        </div>
    )
}

export default Card;
