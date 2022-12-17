import React from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {
  FaHome,
  FaInfoCircle,
  FaLaptopCode,
  FaUserTie,
  FaRegEnvelope,
} from 'react-icons/fa';


import { images } from '../../constants';

import './Navbar.scss';

const navItems = [
  { name: 'home', icon: <FaHome /> },
  { name: 'about', icon: <FaInfoCircle />},
  { name: 'work', icon: <FaLaptopCode />},
  { name: 'expierence', icon: <FaUserTie />},
 { name:  'contact', icon: <FaRegEnvelope />},
];

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item.name}`}>
            <div/>
            <a href={`#${item.name}`}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.name}`}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
      </div>
    </nav>
  )
}

export default Navbar