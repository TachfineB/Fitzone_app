import { useState } from 'react';
import { close, menu, logo } from '../assets';
import { navLinks } from '../constants/index3';

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} className='w-[90px] h-[90px]' alt='Logo' />
      <span className='text-white flex-1 font-poppins font-semibold ss:text-[30px] text-[32px] title-color' style={{ fontWeight: 'bold' }}>FitZone</span>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => {
          let hrefValue = '';
          if (nav.id === 'home') {
            hrefValue = '/';
          } else if (nav.id === 'features') {
            hrefValue = '#features';
          } else if (nav.id === 'product') {
            hrefValue = '#product';
          } else if (nav.id === 'clients') {
            hrefValue = '#clients';
          }

          return (
            <li
              key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}
            >
              <a href={hrefValue}>
                {nav.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
