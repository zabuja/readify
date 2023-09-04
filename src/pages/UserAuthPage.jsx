import React from "react";
import girlSVG from "../images/girlSVG.png";
import Facebook from "../svgs/Facebook";
import Twitter from "../svgs/Twitter";
import Google from "../svgs/Google";
import { Link } from 'react-router-dom';

const UserAuthPage = () => {
  return (
    <div className="container">
      <div className="left-side">
        <h1>Welcome Back!</h1>
        <br />
        <h2>
          Unlocking a World of Possibilities with Readify App. Get started for
          free.
        </h2>
        <form className="form-container">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Username"
          ></input>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          ></input>
          <br />
          <div className="forgot-pwd">Forgot Password?</div>
          <input type="submit" value="submit"></input>
        </form>
        <div className="design-container">
          <hr/>
          <div className="text">or continue with</div>
          <hr/>
        </div>
        <div className="icons">
          <Facebook />
          <Google />
          <Twitter />
        </div>
        
        <div className="end-text">Not a member?<a href="#"> Register now</a></div>
      </div>

      <div className="right-side">
        <img src={girlSVG} alt="girl illustration" className="image-girl" />
      </div>
    </div>
  );
};

export default UserAuthPage;
