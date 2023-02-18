import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/css/common.css";

import Mainlogo from "./Mainlogo";

const Login = () => {

    const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  console.log(inpval);

  const getdata = (e) => {

    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("userData");
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === "") {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres ('@' is missing)");
    }else if (!email.includes(".com")) {
      alert("plz enter valid email addres ('.com' is missing)");
    } else if (password === "") {
      alert("password field is requred");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          // alert("user login succesfulyy");
          localStorage.setItem("user_login", JSON.stringify(userlogin));
          history("/userdashboard");
        }
      }
    }
  };

  return (
    <div className="login">
      <Mainlogo />
      {/* login form */}
      <div className="login-form">
      <form action="" >
        <h1>Login</h1>
        <div className="details">
          <input
            type="email"
            name="email"
            onChange={getdata}
            placeholder="E-mail"
          />
          <input
            type="password"
            name="password"
            onChange={getdata}
            placeholder="password"
          />
          
            <NavLink to={"/*"} className="navforgotpass">
              Forgot Password
            </NavLink>
        
          <button type="submit" onClick={addData}>
            LogIn
          </button>
        </div>
        <div className="login-navigation">
          <span>
            Don't have an account ?{" "}
            <NavLink to={"/signup"} className="navsignup">
              SignUp
            </NavLink>
          </span>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
