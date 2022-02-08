import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { GoGlobe } from 'react-icons/go';
import Logo from '../assets/cowrywiselogo.png';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/Signup.css';

const SignupForm = () => {
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }
  const handleSubmit = () => {
    toast.success("Your account has been created!");
  }
  return (
    <div className='container'>
      <div className='logoCon'>
        <Link to="/home" className="logo">
          <img src={Logo} alt="logo" style={{width: "25%"}}/>
        </Link>
      </div>
  
      <div className='row'>
        <div className='col'>
          <h1 className="hero-text">Get your money working.</h1>
          <p className='sub-text'>No Stress, zero hassle.</p>
        </div>
        <div className='col acc-details'>
          <form onSubmit={handleFormSubmit}>
            <input type="email" name='email' placeholder='Email Address' className='signUpInput' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </form>
          <Link to="/" className='formLink'>Got an invite code?</Link>
          <div className='acc-part'>
              <p className='accPartText'>Got an account?<Link to="/login" className='formLink'>Log In</Link></p>
              <button onClick={handleSubmit} type="submit" className='signup-btn'>Create Free Account</button>
            </div>
        </div>
      </div>


     <div className="row testimonial">
        <div className='col-md-6'>
          <div className="trusted">
            <p><GoGlobe className='trustedIcon'/>Trusted by over <b className='users'>500k users </b> like <span>you!</span> </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className='support'>
            <p>Project by Oluwabukola.A</p>
            <p>Need Help? <Link to="/" className='formLink'>Contact Support</Link></p>
          </div>
        </div>
      </div> 
      <ToastContainer />
   </div>
  );
};

export default SignupForm;
