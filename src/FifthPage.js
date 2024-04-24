import gradBgOne from './img/gradientbgone.svg'


const FifthPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex border border-[#43484B] w-fit gap-3 rounded-full p-1'>
                <button className='bg-[#4A46FC] rounded-xl md:px-16 px-6 '>Monthly</button>
                <button className='md:px-16 px-6 rounded-xl'>Yearly</button>
            </div>

            <img src={gradBgOne} alt='' className='absolute top-[4050px] w-[50rem] left-0'/>
        </div>
    );
}

export default FifthPage;