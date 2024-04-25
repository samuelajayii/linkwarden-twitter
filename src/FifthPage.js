import gradBgOne from './img/gradientbgone.svg'
import PricingCard from './PricingCard';
import { useState } from 'react';

const freePerks = [
    'Hosted by yourself.',
    'Unlimited Links.',
    'Unlimited Collections.',
    'Unlimited Tags.',
    'All the premium features.'
]

const cloudPerks = [
    'Hosted by us.',
    'Unlimited Links.',
    'Unlimited Collections.',
    'Unlimited Tags.',
    'All the premium features.',
    'Priority support.',
    'Fully custom insurance.'
]

const customPerks = [
    'Hosted by us.',
    'Unlimited Links.',
    'Unlimited Collections.',
    'Unlimited Tags.',
    'All the premium features.',
    'Priority support.',
    'Fully custom insurance.'
]

const FifthPage = () => {

    const [rate, setRate] = useState(3)
    const [time, setTime] = useState(`/mo`)

    const handleClick = () => {
        setRate(30)
        setTime(`/yr`)
    }

    const reverseClick = () => {
        setRate(3)
        setTime(`/mo`)
    }

    return (
        <div className='flex justify-center items-center flex-col gap-4'>
            <div className='flex border border-[#43484B] w-fit gap-3 rounded-full p-1'>
                <button className='bg-[#4A46FC] rounded-xl md:px-16 px-6' onClick={reverseClick}>Monthly</button>
                <button className='bg-[#4A46FC] md:px-16 px-6 rounded-xl' onClick={handleClick}>Yearly</button>
            </div>

            <h1 className='text-5xl mt-7 font-bold text-center mb-10'>Pick the right plan for you</h1>


            <div className='flex gap-20 items-center w-full justify-center flex-wrap'>
                <PricingCard type={`Self-hosted`} mode={`Free`} perks={
                    freePerks.map((perk) =>
                    (<div className=''>
                        <h1 className='text-left'>
                            <i class="fa-solid fa-check text-blue-600"></i> {perk}
                        </h1>

                    </div>)
                    )
                } />
                <PricingCard type={`Cloud`} mode={<h1 className='text-[#ffffff94] font-light'><span className='font-semibold text-6xl text-white'>${rate}</span>{time}</h1>} bg={`gradient`} perks={
                    cloudPerks.map((perk) =>
                    (<div className=''>
                        <h1 className='text-left'>
                            <i class="fa-solid fa-check text-blue-600"></i> {perk}
                        </h1>

                    </div>)
                    )
                } info={`14-day free trial, cancel anytime.`}/> 
                <PricingCard type={`Enterprise`} mode={`Custom`} perks={
                    customPerks.map((perk) =>
                    (<div className=''>
                        <h1 className='text-left'>
                            <i class="fa-solid fa-check text-blue-600"></i> {perk}
                        </h1>

                    </div>)
                    )
                }/>
            </div>

            <img src={gradBgOne} alt='' className='absolute lg:top-[4700px] w-[50rem] top-[8480px] left-0' />
        </div>
    );
}

export default FifthPage;