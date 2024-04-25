import React from 'react';
const Card = (props) => {
    return (
        <div className='bg-[url("./img/frame.svg")] lg:w-[23rem] lg:h-[15rem] h-[18rem] flex flex-col justify-center items-center bg-center bg-cover border border-[#38353d] rounded-2xl gap-4 text-center w-[85vw]'>
            <div className='flex flex-col justify-center items-center gap-1 w-full radial-bg h-full px-6'>
                <img src={props.img} alt='' className='rounded-xl bg-gradient-to-br from-[#673AB7] to-[#3A00A1] p-5 w-24'/>
                <h1 className='text-2xl font-semibold'>{props.text}</h1>
                <p className='text-[#C1CFD8] text-sm w-[rem]'>{props.description}</p>
            </div>
        </div>
    );
}

export default Card;