import React from 'react';
const Card = (props) => {
    return (
        <div className='bg-[url("./img/frame.svg")] w-[18rem] h-[15rem] flex flex-col justify-center items-center bg-center bg-cover border border-[#38353D] rounded-2xl gap-4 text-center'>
            <img src={props.img} alt=''/>
            <h1>{props.text}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;