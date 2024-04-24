/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';


const Accordion = ({ title, content }) => {

    const [isActive, setIsActive] = useState(false);
    return (
        <div className='py-3'>
            <div className='mb-3'>
                <div className="flex gap-4 lg:text-xl ml-4  items-center cursor-pointer" onClick={() => setIsActive(!isActive)}>
                    <div className='w-2'>{isActive ? '-' : '+'}</div>
                    <div>{title}</div>
                </div>
                {isActive && <div className="mt-5 ml-4">{content}</div>}
            </div>
            <div className='line-gradient'></div>
        </div>
    );
}

export default Accordion;

// bg-[#111111] w-full px-10 py-7 rounded-lg
// rounded-lg bg-gradient-to-r from-[#5F5656] to-[#5F5656] p-[0.5px] md:w-[70vw] w-[85vw]