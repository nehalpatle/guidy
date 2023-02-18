import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/common.css";

import Profile from '../assets/images/Profile.svg'
import { UilSearch } from "@iconscout/react-unicons";
import { UilBell } from "@iconscout/react-unicons";

import { ProfileDD } from "../data/data";

const Navbar = () => {
  const [selected2, setSelected2] = useState();
  // const [logindata, setLoginData] = useState([]);

  // const history = useNavigate();

  //   const userName = () => {
  //     const getuser = localStorage.getItem("user_login");
  //     if (getuser && getuser.length) {
  //         const user = JSON.parse(getuser);

  //         setLoginData(user);
  //     }
  // }

  // useEffect(() => {
  //   userName();
  // }, [])

  // const userlogout = ()=>{
  //   localStorage.removeItem("user_login")
  //   history("/");
  // }

  return (
    <div className="navbar">
      {/* searchbar */}
      <div className="searchbar">
        <span>
          <UilSearch />
        </span>
        <input type="search" name="" id="" placeholder="Search" />
      </div>

      {/* notification */}
      <div className="notification">
        <span>
          <UilBell />
        </span>
      </div>

      {/* Profile dropdown */}
      <div className="profile dropdown">
        <button class="dropbtn">
          <span>
            Hello Sara
            {/* {logindata[0].name} */}
            <br />
            <span>Welcome Back!</span>
          </span>
          <img src={Profile} alt="" />
        </button>
        <div class="dropdown-content">
          {ProfileDD.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={item.to}
                  className={
                    selected2 === index ? "menuItem2 active" : "menuItem2"
                  }
                  onClick={() => setSelected2(index)}
                >
                  <item.icon />
                  <span>{item.name}</span>
                </NavLink>
              </div>
            );
          })}
          {/* <button onClick={userlogout}>LogOut</button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
