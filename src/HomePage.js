import React from 'react';
import dashboardImg from './img/homedash.svg'

const HomePage = () => {
    return (
        <div className='flex justify-center items-center lg:mt-48 mt-28 flex-col home-page px-10'>
            <div className='bg-[url("./img/pattern.svg")] absolute top-[70px] lg:top-[200px] w-full bg-cover h-[63rem]'></div>
            <h1 className='text-[50px] text-center lg:w-[50vw] font-bold -mt-9 z-10'>Webpage Management for Individuals and Teams</h1>
            <p className='text-[#CECECE] mt-5 text-[20px] lg:w-[60vw] text-center z-10'>Linkwarden is a fully self-hostable, open-source collaborative bookmark manager to collect, organize and archive webpages</p>
            
            <div className='flex lg:gap-10 gap-5 mt-5 z-10'>
                <button className='text-white bg-[#4B03CD] lg:px-10 lg:py-2 px-4 py-3 font-semibold rounded-full'>Start Free Trial </button>
                <button className='font-semibold border-[#828282] border lg:px-10 lg:py-2 px-4 py-3 rounded-full filter-button'>Star us on Github</button>
            </div>
            
            <img src={dashboardImg} alt='' className='w-[70vw] h-[90vh] z-10 lg:mt-32 -mt-24'/>
            
        </div>
    );
}

export default HomePage;