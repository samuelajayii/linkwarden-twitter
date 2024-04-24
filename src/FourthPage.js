import React from 'react';
import Boxes from './Boxes';
import iconOne from './img/icon1.svg'
import iconTwo from './img/icon2.svg'
import iconThree from './img/icon3.svg'
import iconFour from './img/icon4.svg'
import BoxesTwo from './BoxesTwo'
import iconFive from './img/box2 (1).svg'
import profile from './img/profile.svg'
import download from './img/download.svg'
import search from './img/search.svg'

const FourthPage = () => {
    return (
        <div className='mt-24 flex justify-center items-center flex-col'>
            <h1 className='text-3xl font-bold text-center'>Exploring the Use Cases</h1>
            <div className='my-14 flex gap-8 flex-wrap items-center justify-center'>
                <Boxes icon={iconOne} name={`Personal Use`} bg={`gradient`} />
                <Boxes icon={iconTwo} name={`Design Inspirations`} />
                <Boxes icon={iconThree} name={`Research & Reference`} />
                <Boxes icon={iconFour} name={`Project Collaboration`} />
            </div>
            <div className='flex flex-row flex-wrap justify-center items-center gap-10 mb-56 w-[]'>
                <BoxesTwo img={iconFive} heading={`Bookmark Organisation`} description={`Store and categorize links to articles, blog posts, and online content for easy retrieval.`} />
                <BoxesTwo img={profile} heading={`Seamless Collaboration`} description={`Share essential links and references among your friend or even publicly.`} />
                <BoxesTwo img={download} heading={`Content Preservataion`} description={`Keep a permanent snapshot of links regardless of any changes to the original content.`} />
                <BoxesTwo img={search} heading={`Easy Access`} description={`Conveniently revisit favorite or important online materials at any time.`} />
            </div>
        </div>
    );
}

export default FourthPage;