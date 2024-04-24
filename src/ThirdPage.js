/* eslint-disable no-unused-vars */
import React from 'react';
import Card from './Card';
import box from './img/box.svg'
import two from './img/Vector.svg'
import three from './img/Vector (1).svg'
import four from './img/Vector (2).svg'
import five from './img/Vector (3).svg'
import six from './img/Vector (4).svg'
import seven from './img/Vector (5).svg'
import eight from './img/Vector (6).svg'
import nine from './img/Vector (7).svg'
import ten from './img/Vector (8).svg'
import eleven from './img/Vector (9).svg'
import twelve from './img/Vector (10).svg'


const ThirdPage = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-32 '>
            <h1 className='text-3xl font-semibold mb-20'>Hold on, there's more!</h1>
            <div className='flex flex-wrap justify-center items-center gap-6 px-6'>
                <Card img={box} text={'Open source, self hostable'} description={'Our source code is on github for easy deployment on your machine'}/>
                <Card img={two} text={'Responsive Design'} description={'Responsive design for all screens, from widescreen to smartphones.'}/>
                <Card img={three} text={'Powerful Search'} description={'Effortlessly search and filter curated content across all collections.'}/>
                <Card img={four} text={'Pin your favourite pages'} description={'Pin your favorite web pages to the dashboard for easy access anytime.'}/>
                <Card img={five} text={'Privacy Friendly'} description={`Privacy is a fundamental human right. We won't sell your data to third parties.`}/>
                <Card img={six} text={'Import & Export your data'} description={'You can import and export your data easily from the settings.'}/>
                <Card img={seven} text={'Dark & Light mode Supported'} description={'Easily toggle between dark and light mode, whichever you prefer.'}/>
                <Card img={eight} text={'Browser Extension'} description={'Collect webpages directly from your browser with our open-source extension.'}/>
                <Card img={nine} text={'Bulk Actions'} description={'Edit or delete multiple items at once.'}/>
                <Card img={ten} text={'Secure API Integration'} description={'Connect and secure your integrations using access tokens to create custom solutions and automate with ease.'}/>
                <Card img={eleven} text={'Installable PWA for Mobile'} description={'Enable seamless app-like experience across devices with PWA support, ensuring optimal performance and accessibility for all users.'}/>
                <Card img={twelve} text={'And Many More Features...'} description={`We're constantly improving and got tons of updates planned, some are outlined in our public roadmap.`}/>
            </div>
        </div>
    );
}

export default ThirdPage;