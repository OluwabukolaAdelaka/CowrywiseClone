import React, {useState} from 'react';
import {Navbar, NavbarToggler, Collapse, Nav, UncontrolledDropdown,
 DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
import Logo from '../assets/cowrywiselogo.png';
import {BsStack} from 'react-icons/bs';
import {BsFillLockFill} from 'react-icons/bs';
import {FaBitbucket} from 'react-icons/fa';
import {BsBox} from 'react-icons/bs';
import {GiStrongbox} from 'react-icons/gi';
import {FaBook} from 'react-icons/fa';
import {SiBookstack} from 'react-icons/si';
import '../styles/Nav.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen)}
  return (
    <div className='container container-fluid'>
        <Navbar
            color="light"
            expand="md"
            light
        >
            <NavbarBrand to="/">
                <img src={Logo} alt="logo" style={{width: "80%"}}/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav
                className="me-auto"
                navbar
            >
                <UncontrolledDropdown
                inNavbar
                nav
                >
                    <DropdownToggle
                        caret
                        nav
                        className='navitem'
                    >
                        Personal
                    </DropdownToggle>
                    <DropdownMenu className=''>
                    <div className="row">
                        <div className="col-md-8">
                        <DropdownItem>
                                <BsStack className='personalicon'/>
                                <h5 className='mydropdlinks-title'>Plans</h5>
                                <p className='mydropdlinks-text'>Access financial tools and guides</p>
                        </DropdownItem>
                        <DropdownItem>
                            <BsFillLockFill className='personalicon'/>
                            <h5 className='mydropdlinks-title'>Save</h5>
                            <p className='mydropdlinks-text'>Earn better interest than your bank</p>
                        </DropdownItem>
                        <DropdownItem>
                            <FaBitbucket className='personalicon'/>
                            <h5 className='mydropdlinks-title'>Invest</h5>
                            <p className='mydropdlinks-text'>Build a global portfolio in one app</p>
                        </DropdownItem>
                        <DropdownItem>
                            <BsBox className='personalicon'/>
                            <h5 className='mydropdlinks-title'>Get Stash</h5>
                            <p className='mydropdlinks-text'>A digital wallet for everything</p>
                        </DropdownItem>
                        </div>
                        <div className="col-6 col-md-4 divider">
                        <DropdownItem>
                            <h5 className='mydropdlinks-title'>Growth Tools</h5>
                            <p className='mydropdlinks-text'>Estimate your interests</p>
                            <p className='mydropdlinks-text'>Know your risk appetite</p>
                        </DropdownItem>

                        </div>
                    </div>
                        
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown
                inNavbar
                nav
                >
                    <DropdownToggle
                        caret
                        nav
                        className='navitem'
                    >
                        Business
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                        <GiStrongbox className='personalicon'/>
                            <h5 className='mydropdlinks-title'>Sprout 
                            <small className='sproutSoon'>COMING SOON</small></h5>
                            <p className='mydropdlinks-text'>Put your business idle cash to work</p>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown
                inNavbar
                nav
                >
                    <DropdownToggle
                        caret
                        nav
                        className='navitem'
                    >
                        Developer
                    </DropdownToggle>
                    <DropdownMenu>
                    <div className="row">
                        <div className="col-md-8">
                            <DropdownItem>
                                <SiBookstack className='personalicon'/>
                                <h5 className='mydropdlinks-title'>Embed</h5>
                                <p className='mydropdlinks-text'>Offer investment services in your app</p>
                            </DropdownItem>
                            <DropdownItem>
                                <FaBook className='personalicon'/>
                                <h5 className='mydropdlinks-title'>Docs</h5>
                                <p className='mydropdlinks-text'>Read how to integrate Embedded API</p>
                            </DropdownItem>
                            </div>
                            <div className="col-6 col-md-4 divider">
                            <DropdownItem>
                                <h5 className='mydropdlinks-title'>Connect</h5>
                                <p className='mydropdlinks-text'>Join Embed on Slack</p>
                            </DropdownItem>
                        </div>
                    </div>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown
                inNavbar
                nav
                >
                    <DropdownToggle
                        nav
                        className='navitem'
                    >
                       <Link to="/" className='mylinks'>Learn</Link>
                    </DropdownToggle>
                </UncontrolledDropdown>
            </Nav>
            <Link to="/login"><button className='login-btn'>Log In</button></Link>
            <Link to="/signup"><button className='signup-btn'>Sign Up For Free</button></Link>
            </Collapse>
        </Navbar>
    </div>
  );
};

export default Navigation;