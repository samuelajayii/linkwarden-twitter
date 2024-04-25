import React from 'react';
import logo from './img/logo.svg'

const Footer = () => {
    return (
        <div className='flex justify-center items-center flex-col mt-14'>
            <h1 className='text-center text-5xl font-bold'>Start your bookmarking journey</h1>
            <p className='text-lg font-semibold my-6'>14-day free trial. Cancel anytime</p>

            <div className='flex lg:gap-5 gap-5 mt-5 z-10'>
                <button className='text-white bg-[#4B03CD] lg:px-12 lg:py-2 px-4 py-3 font-semibold rounded-full'>Start Free Trial </button>
                <button className='font-semibold border-[#828282] border lg:px-12 lg:py-2 px-4 py-3 rounded-full filter-button'>Star us on Github</button>
            </div>

            <div className='mt-40 flex gap-20 justify-center mb-10 flex-col lg:flex-row'>
                <div className='flex flex-col'>
                    <img src={logo} alt='' className='w-[10rem] mb-4' />
                    <h1 className='text-md text-[#cecece] w-[16rem]'>Linkwarden is a fully self-hostable, open-source collaborative bookmark manager.</h1>
                </div>
                <div>
                    <h1 className='mb-4 text-lg font-semibold'>Useful Links</h1>
                    <ul className='text-[#c0c0c0] flex flex-col gap-2'>
                        <li className='hover:underline cursor-pointer'>Features</li>
                        <li className='hover:underline cursor-pointer'>Pricing</li>
                        <li className='hover:underline cursor-pointer'>FAQs</li>
                        <li className='hover:underline cursor-pointer'>Docs</li>
                        <li className='hover:underline cursor-pointer'>Blogs</li>
                        <li className='hover:underline cursor-pointer'>Terms of Service</li>
                        <li className='hover:underline'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-semibold'>Contact us</h1>
                    <a href='/' className='underline font-light'>support@linkwarden.app</a>
                    <div className='flex gap-3 mt-2'>
                        <i className='fa-brands fa-discord'></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>

                </div>
            </div>

            <div className='bg-black text-white w-full py-1 text-center flex flex-col'>
                <h1>Design by <a href='https://x.com/AmenaiSabuwala' target='_blank' rel="noreferrer" className='underline'>@amenaisabuwula</a></h1>
                <a href="https://www.figma.com/file/CWFE222KgPWIM171dc3iBd/Linkwarden-Twitter?type=design&node-id=1-2&mode=design&t=IlHRXQEF1BYSbkng-0" target='_blank' rel="noreferrer" className='underline'>Link to figma design</a>
            </div>
        </div>
    );
}

export default Footer;