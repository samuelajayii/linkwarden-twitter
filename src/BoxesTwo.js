import React from 'react';

const BoxesTwo = (props) => {
    return (
        <div className='flex gap-5 lg:w-[34rem] w-[90vw]'>
            <div className='border-2 border-[#38353d] rounded-full md:rounded-full md:p-4 lg:p-6 p-5 h-fit flex justify-center items-center'>
                <img src={props.img} alt='' className='w-10 '/>
            </div>
            <div className='w-[23rem]'>
                <h1 className='font-semibold  text-xl'>{props.heading}</h1>
                <p className='text-sm text-[#C1CFD8]'>{props.description}</p>
            </div>
        </div>
    );
}

export default BoxesTwo;