/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
const accordionData = {
    title: 'Why use the paid plan when I can already self host it?',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.
      `
};

const { title, content } = accordionData;

const Accordion = () => {

    const [isActive, setIsActive] = useState(false);
    return (
        <div className='flex justify-center items-center transition-all'>
            <div className="rounded-lg bg-gradient-to-r from-[#5F5656] to-[#5F5656] p-[1px] lg:w-[70vw]">
                <div>
                    <div className="accordion-item bg-[#111111] w-full px-10 py-7 rounded-lg">
                        <div className="flex gap-3 lg:text-xl items-center" onClick={() => setIsActive(!isActive)}>
                            <div>{isActive ? '-' : '+'}</div>
                            <div className='cursor-pointer'>{title}</div>
                        </div>
                        {isActive && <div className="accordion-content">{content}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;