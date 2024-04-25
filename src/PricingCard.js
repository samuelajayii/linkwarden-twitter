import React from 'react';
import { StyledPricingCards } from './PricingCard.styles';


const PricingCard = (props) => {
    return (
        <StyledPricingCards bg={props.bg}>
            <h1 className='text-[#79C5FC] text-xl'>{props.type}</h1>
            <h1 className='text-4xl font-semibold'>{props.mode}</h1>

            {props.bg === 'gradient' ? (<><h1>Per User</h1></>) : ''}

            <button className={`cursor-pointer px-11 py-1.5 border-[0.1px] rounded-full border-[#ffffff7d] z-10 font-semibold ${props.bg === 'gradient' ? `bg-gradient-to-r from-[#3A00A1] to-[#9763F4] border-none` : 'shadow-[0_0_1px_#fff,inset_0_0_1px_#3818b8,0_0_1px_#3818b8,0_0_1px_#3818b8,0_0_50px_#3818b8] bg-gradient-to-tr from-[#48454a87] via-[#000000] to-[#414040a0]'} `}>Get started now</button>

            

            <div className='flex flex-col justify-center items-left gap-3 mt-3'>
                {props.perks}
            </div>

            <h1 className='mt-2 text-sm'>{props.info}</h1>

        </StyledPricingCards>
    );
}

export default PricingCard;