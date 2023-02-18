import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import '../assets/css/common.css';

import Logo from '../assets/images/Logo.svg';

import { SidebarData } from '../data/data';

const Sidebar = (props) => {
    const [selected, setSelected] = useState(0);

  return (
    <div className="sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div key={index}>
              <NavLink
                to={item.to}
                className={selected === index ? "menuItem active" : "menuItem"}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.name}</span>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Sidebar