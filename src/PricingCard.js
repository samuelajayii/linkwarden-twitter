import React from 'react';
import { StyledPricingCards } from './PricingCard.styles';


const PricingCard = (props) => {
    return (
        <StyledPricingCards>
            <h1 className='text-[#79C5FC] text-xl'>{props.type}</h1>
            <h1 className='text-4xl font-semibold'>{props.mode}</h1>
            <button className=' cursor-pointer px-9 py-0.5 border rounded-full border-[#ffffff7d] z-10 font-semibold'>Get started now</button>
        </StyledPricingCards>
    );
}

export default PricingCard;