import React from 'react';
import Workhome from "../images/Workhome.jpg";
import Facebook from "../svgs/Facebook";
import Twitter from "../svgs/Twitter";
import Google from "../svgs/Google";
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className="containers">
      <div className="leftside">
      <img src={Workhome} alt="girl illustration" className="signupimg" />
      </div>



      <div className="rightside">
        <h1>Create account</h1>
        <br />
        
        <form className="form-container-su">
          <input
            type="User text"
            id="User Name"
            name="User Name"
            placeholder="User Name"
          ></input>
          
          
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          ></input>

          <br />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          ></input>

<br />

          <input
            type="confirm password"
            id="confirm password"
            name="confirm password"
            placeholder="confirm password"
          ></input>

          <br />

          <input type="submit" value="Create account"></input>

          <br />
          
          {/* <input type="checkbox" name="remember"></input> */}
          
        

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




        <div className="end-text">Already a member?<a href="#"> Log in</a></div>

      </div>
    </div>
  )
}

export default Signup;
