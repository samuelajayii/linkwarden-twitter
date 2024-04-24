import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-center items-center flex-col mt-14'>
            <h1 className='text-center text-5xl font-bold'>Start your bookmarking journey</h1>
            <p className='text-lg font-semibold my-6'>14-day free trial. Cancel anytime</p>

            <div className='flex lg:gap-10 gap-5 mt-5 z-10'>
                <button className='text-white bg-[#4B03CD] lg:px-12 lg:py-2 px-4 py-3 font-semibold rounded-full'>Start Free Trial </button>
                <button className='font-semibold border-[#828282] border lg:px-12 lg:py-2 px-4 py-3 rounded-full filter-button'>Star us on Github</button>
            </div>
        </div>
    );
}

export default Footer;