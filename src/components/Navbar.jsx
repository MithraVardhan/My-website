import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
// import { navlinks } from '../constants';
import { navLinks } from '../constants';
import { close, menu } from '../assets';
import { logo  } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState(' ')
  const [toggle, setToggle] = useState(false)
  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'> 
      {/* // refer tailwind css documentation for any queries */}

      <Link
      to='/'
      className='flex items-center gap-2'
      onClick={()=>{     
        setActive("");  // this is to keep track of where we are on the page
        window.scrollTo(0,0); //this is going to scroll to the top of the page
      }}>
        <img src = { logo } alt='logo' className='w-9 h-9 object-contain'></img>
        <p className='text-white text-[18px] font-bold cursor-pointer flex'> Mithra &nbsp;<span className='sm:block hidden'>|  Vardhan </span></p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map((Link) => (
          <li
            key={Link.id}
            className={`${
              active === Link.title
                ? "text-white"
                : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer `}
            onClick={() => setActive(Link.title)}
          >
            <a href={`#${Link.id}`} > {Link.title} </a>
          </li>
        ))}
      </ul>
      {/* creationg a mobile navigation bar */}
      <div className='sm:hidden flex flex-1 justify-end items-center'> 
            <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
        {navLinks.map((Link) => (
          <li
            key={Link.id}
            className={`${
              active === Link.title
                ? "text-white"
                : "text-secondary"
            } font-poppins font-medium cursor-pointer text-16px `}
            onClick={() => {
              setToggle(!toggle);
              setActive(Link.title);
            }}
          >
            <a href={`#${Link.id}`} > {Link.title} </a>
          </li>
        ))}
      </ul>
            </div>
      </div>

      </div>
      
    </nav>
  )
}

export default Navbar