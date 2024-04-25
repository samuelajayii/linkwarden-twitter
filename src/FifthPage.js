// import gradBgOne from './img/gradientbgone.svg'
import PricingCard from './PricingCard';

const FifthPage = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-4'>
            <div className='flex border border-[#43484B] w-fit gap-3 rounded-full p-1'>
                <button className='bg-[#4A46FC] rounded-xl md:px-16 px-6 '>Monthly</button>
                <button className='md:px-16 px-6 rounded-xl'>Yearly</button>
            </div>

            <h1 className='text-5xl mt-7 font-bold text-center mb-10'>Pick the right plan for you</h1>

            <PricingCard type={`Self-hosted`} mode={`Free`}/>

            {/* <img src={gradBgOne} alt='' className='absolute lg:top-[4050px] w-[50rem] top-[7860px] left-0'/> */}
        </div>
    );
}

export default FifthPage;