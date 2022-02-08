import React from 'react';
import {Link} from 'react-router-dom';
import { GoGlobe } from 'react-icons/go';
import Logo from '../assets/cowrywiselogo.png';

const SignupForm = () => {
  return (
    <div className='container'>
      <div className="logoCon">
        <Link to="/home" className="logo">
          <img src={Logo} alt="logo" style={{width: "25%"}}/>
        </Link>
      </div>
  
    <div className='row'>
      <div className='col'>
        <h1>Get your money working.</h1>
        <h6>No Stree, zero hassle.</h6>
      </div>
      <div className='col'>
        <form>
          <input type="email" name='email' placeholder='Email Address'/>
        </form>
        <Link to="/">Got an invite code?</Link>
        <div>
            <p>Got an account?</p>
            <Link to="/"><button type="submit" className='signup-btn'>Create Free Account</button></Link>
          </div>
      </div>
    </div>


     <div className="row">
        <div className='col'>
          <p><GoGlobe/>Trusted by over 500k users like <span>you</span> </p>
        </div>
        <div className='col'>
          <p>Project by Oluwabukola.A</p>
          <p>Need Help? <Link to="/">Contact Support</Link></p>
        </div>
      </div> 
   </div>
  );
};

export default SignupForm;
