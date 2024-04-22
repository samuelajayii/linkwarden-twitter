import React from 'react';
import Card from './Card';
import box from './img/box.svg'

const ThirdPage = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-32 '>
            <h1 className='text-3xl font-semibold mb-20'>Hold on, there's more!</h1>
            <div>
                <Card img={box} text={'Open source, self hostable'} description={'Our source code is on github for easy deployment on your machine'}/>
            </div>
        </div>
    );
}

export default ThirdPage;