import React from 'react';
import logo from './img/logo.svg'
const NavBar = () => {
    return (
        <nav className='lg:px-48 lg:py-10 p-3'>
            <div className='flex items-center justify-between'>
                <img src={logo} alt='' className='lg:h-[2.4rem]'/>
                
                <ul className='lg:flex items-center gap-5 text-[#C0C0C0] text-[18px] hidden'>
                    <a href='/'><li>Features</li></a>
                    <a href='/'><li>Pricing</li></a>
                    <a href='/'><li>FAQs</li></a>
                    <a href='/'><li>Docs</li></a>
                    <a href='/'><li>Blog</li></a>
                </ul>
                
                <button className='border-[#828282] border-[2px] rounded-full py-2 px-6 text-[18px] hidden lg:flex hover:border-white transition-all'>Login</button>

                <i className='fa-solid fa-bars lg:hidden'></i>
            </div>
        </nav>
    );
}

export default NavBar;