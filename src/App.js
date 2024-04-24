/* eslint-disable no-undef */
import NavBar from './NavBar';
import HomePage from './HomePage';
import BelowHome from './BelowHome';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import Accordion from './Accordion';
import { accordionData } from './utils/content';
import Footer from './Footer';


function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <BelowHome />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <div className='flex justify-center items-center flex-col '>
        <h1 className='font-bold text-4xl my-16 text-center '>Frequently Asked Questions</h1>
        <div className='rounded-lg z-10 bg-gradient-to-r from-[#5F5656] to-[#5F5656] p-[0.5px] md:w-[70vw] w-[85vw]'>
          <div className='bg-[#111111]  accordion-gradient w-full px-10 py-7 rounded-lg'>
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </div>
        <h1 className='my-2 text-center'>For any other questions, feel free to reach out to us at support@linkwarden.app</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
