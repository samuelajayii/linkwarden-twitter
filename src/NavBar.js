/* eslint-disable no-unused-vars */
import React from 'react';
import logo from './img/logo.svg'
import { useState } from 'react';

const NavBar = () => {

    const [nav, setNav] = useState(false)

    return (
        <nav className='lg:px-48 lg:py-10 p-3'>
            <div className='flex items-center justify-between'>
                <img src={logo} alt='' className='lg:h-[2.4rem]' />

                <ul className='lg:flex items-center gap-5 text-[#C0C0C0] text-[18px] hidden transition-all'>
                    <a href='/' className='hover:text-white'><li>Features</li></a>
                    <a href='/' className='hover:text-white'><li>Pricing</li></a>
                    <a href='/' className='hover:text-white'><li>FAQs</li></a>
                    <a href='/' className='hover:text-white'><li>Docs</li></a>
                    <a href='/' className='hover:text-white'><li>Blog</li></a>
                </ul>

                <button className='border-[#828282] border-[2px] rounded-full py-2 px-6 text-[18px] hidden lg:flex hover:border-white transition-all'>Login</button>

                <i className='fa-solid fa-bars lg:hidden' onClick={() => setNav(!nav)}></i>
            </div>

            {nav && <ul className='flex flex-col text-right gap-2 active:underline  text-[#fff] text-[18px] absolute right-2 border rounded px-8 py-8 z-20 bg-black'>
                <a href='/'><li>Features</li></a>
                <a href='/'><li>Pricing</li></a>
                <a href='/'><li>FAQs</li></a>
                <a href='/'><li>Docs</li></a>
                <a href='/'><li>Blog</li></a>

                <a href='/' className='border px-2'>Login</a>
            </ul>}
        </nav>
    );
}

export default NavBar;