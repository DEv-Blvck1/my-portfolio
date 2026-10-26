import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-30 bg-flashWhite/95 backdrop-blur-md sm:opacity-[0.98] h-[72px] sm:h-[80px] shadow-sm`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[42px] h-[42px] object-contain"
          />

          <img
            src={logotext}
            alt="logo"
            className="sm:w-[90px] sm:h-[90px] w-[80px] h-[80px] -ml-[0.6rem] object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <div
              className="p-6 bg-flashWhite fixed inset-0 w-full h-screen z-50 flex flex-col justify-between menu menu-open">
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[26px] h-[26px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul className="list-none flex flex-col gap-4 items-start justify-center flex-1 pl-4">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[44px] xs:text-[56px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer hover:text-taupe transition-colors`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
              <div className="pb-8 pl-4">
                <p className="text-taupe text-sm font-poppins">© {new Date().getFullYear()} Ogueri Joachim Kevin</p>
              </div>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[32px] h-[32px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
