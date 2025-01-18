import React, { useState } from 'react';
import { RiMenu2Line, RiCloseLine } from '@remixicon/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [menu, openmenu] = useState(false);
  const [showmenu, setshowmenu] = useState(true);

  return (
    <nav className='flex flex-wrap justify-between items-center text-white px-10 pt-6 md:px-20'>
      <div className='flex items-center space-x-4'>
        {/* Logo */}
        <span className='text-3xl md:text-5xl font-bold tracking-wide'>JK's Portfolio</span>

        {/* Social Icons */}
        <div className='flex space-x-4'>
          <a href="mailto:jk.karunadu01@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className='text-white hover:text-gray-400 duration-300' size={25} />
          </a>
          <a href="https://www.linkedin.com/in/jashwanth-jk-071725310/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-white hover:text-gray-400 duration-300' size={25} />
          </a>
          <a href="https://github.com/Jashwanth-rit" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-white hover:text-gray-400 duration-300' size={25} />
          </a>
          <a href="https://x.com/JkKarunadu01" target="_blank" rel="noopener noreferrer">
            <FaTwitter className='text-white hover:text-gray-400 duration-300' size={25} />
          </a>
          <a href="https://www.instagram.com/jk_karunadu/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='text-white hover:text-gray-400 duration-300' size={25} />
          </a>
        </div>
      </div>

      <ul className={` ${menu ? 'block' : 'hidden'} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <a href="#About">
          <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li>
        </a>
        <a href="#Experience">
          <li className='text-md transition-all duration-300 p-1 md:p-0'>Experience</li>
        </a>
        <a href="#Projects">
          <li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li>
        </a>
        <a href="#Footer">
          <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
        </a>
      </ul>

      {/* Menu icon toggling */}
      {showmenu ? (
        <RiMenu2Line
          size={30}
          className='md:hidden absolute right-10 top-6 transition-all duration-300'
          onClick={() => {
            openmenu(!menu);
            setshowmenu(!showmenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className='md:hidden absolute right-10 top-6 transition-all duration-300'
          onClick={() => {
            openmenu(!menu);
            setshowmenu(!showmenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
