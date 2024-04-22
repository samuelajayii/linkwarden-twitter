import React from 'react';
import serviceImg from './img/serviceimg.svg'

const SecondPage = () => {
    return (
        <div className='flex justify-center items-center mt-14 mb-12 flex-col lg:px-20 px-12'>
            <div>
                <button className='border-2 border-white rounded-full px-5 py-1 button-gradient'>Collect & Organise</button>
            </div>

            <div className='bg-[url("./img/pattern2.svg")] absolute top-[1600px] lg:top-[1620px] w-full bg-contain bg-no-repeat lg:h-[30rem] h-[40rem]'></div>

            <div className='flex justify-center flex-col gap-8 lg:gap-0 lg:flex-row mt-10 z-10'>
                <div className='lg:mt-14'>
                    <h1 className='font-bold text-5xl mb-6 text-center lg:text-left'>Collect and Organize Webpages</h1>
                    <p> <i class="fa-solid fa-check text-blue-600 mb-1"></i> Collect webpages and bookmarks from any browser</p>
                    <p> <i class="fa-solid fa-check text-blue-600 mb-1"></i> Organize your Links with Collections and Tags</p>
                    <p> <i class="fa-solid fa-check text-blue-600 mb-1"></i> Create new Collections to group related Links</p>
                </div>

                <div>
                    <img src={serviceImg} alt="" className='w-[35rem] z-10' />
                </div>

            </div>
        </div>
    );
}

export default SecondPage;