import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/css/common.css";

import Mainlogo from "./Mainlogo";

const Signup = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const getdata = (e) => {
    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const [data] = useState([]);

  const addData = (e) => {
    e.preventDefault();
    console.log(inpval);

    const { firstname, lastname, email, password, repassword } = inpval;

    if (firstname === "") {
      alert("First Name field is requred!");
    } else if (lastname === "") {
      alert("Last Name field is requred");
    } else if (email === "") {
      alert("Email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres ('@' is missing)");
    } else if (!email.includes(".com")) {
      alert("plz enter valid email addres ('.com' is missing)");
    } else if (password === "") {
      alert("password field is requred");
    } else if (password.length < 5) {
      alert("password length greater than five");
    } else if (repassword === "") {
      alert("Re-Enter password field is requred");
    } else if (repassword !== password) {
      alert("Re-Enter password is not matching");
    } else {
      alert("SignUp Succesfull !!");
      history("/");
      localStorage.setItem("userData", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <div className="signup">
      <Mainlogo />
      {/* signup form */}
      <div className="signup-form">
        <form action="" className="details">
          <h1>Signup</h1>
          <input
            type="text"
            name="firstname"
            onChange={getdata}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastname"
            onChange={getdata}
            placeholder="Last Name"
          />
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
          <input
            type="password"
            name="repassword"
            onChange={getdata}
            placeholder="Re-enter password"
          />
          <button type="submit" onClick={addData}>
            Sign up
          </button>
          <div className="signup-navigation">
            <span>
              Already have an account ?{" "}
              <NavLink to={"/"} className="navlogin">
                LogIn
              </NavLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
