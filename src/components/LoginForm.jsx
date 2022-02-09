import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo2 from '../assets/cowrywiselogowhite.png';
import {FiArrowUpRight} from 'react-icons/fi'
import '../styles/LoginForm.css';

class LoginForm extends Component {
  state = { 
    data: {email: "", password: ""},
    error: {},
    eIcon: {errorIcon: ""}
   } 

  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    const data = {...this.state.data};
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState(this.data)
  }
  render() { 
    return (
      <React.Fragment>
        <div className='row rowCon'>
          <div className="col col-md-4 reportPart">
            <div className='logoCon'>
            <Link to="/" className="logo">
              <img src={Logo2} alt="logo" style={{width: "25%"}}/>
            </Link>
            </div>
            <h1 className='reportHero'>Your year in review.</h1>
            <p className='reportText'>A report on your money moves on Cowrywise in 2021</p>
            <button className='reportbtn'> 
            GET IT NOW <FiArrowUpRight className='reportIcon'/></button>
          </div>
          <div className="col-md-8 formPart">
            <h1 className='formHero'>Welcome back</h1>
            <h4 className='formText'>Sign in to continue</h4>
            <div className='formDetails'>
              <form onSubmit={this.handleFormSubmit}>
                <input type="email" name='email' placeholder='Email Address' className='signUpInput' 
                value={this.state.email} onChange={this.handleChange}/>
                <div className='errorMsg'>{this.errorIcon}{this.error}</div>
                <input type="password" name='password' placeholder='Password' className='signUpInput' 
                value={this.state.password} onChange={this.handleChange}/>
                <div className='errorMsg'>{this.errorIcon}{this.error}</div>
              </form>
              <Link to="" className='formLink'>Got an invite code?</Link>
              <div className='acc-part'>
                  <p className='accPartText'>Got an account?<Link to="/login" className='formLink'>Log In</Link></p>
                  <button type="submit" className='signup-btn'>Create Free Account</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default LoginForm;