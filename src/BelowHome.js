import React from 'react';
import google from './img/google.svg'
import amazon from './img/amazon.svg'
import bytedance from './img/bytedance.svg'

const BelowHome = () => {
    return (
        <div className='flex items-center justify-center mt-32 flex-col'>
            <h1 className='font-semibold text-2xl w-96 text-center'>Loved by thousands at the world's most innovative companies</h1>

            <div className='flex lg:gap-24 mt-14 items-center justify-center lg:ml-20 flex-col lg:flex-row gap-4'>
                <img src={google} alt='' className='h-[5rem]'/>
                <img src={amazon} alt='' className='h-[4rem]'/>
                <img src={bytedance} alt='' className='h-[9rem] w-[28rem] lg:-ml-36 -mt-12'/>
                
            </div>
        </div>
    );
}

export default BelowHome;