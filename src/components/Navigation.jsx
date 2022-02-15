import React, {useState} from 'react';
import {Navbar, NavbarToggler, Collapse, Nav, UncontrolledDropdown,
 DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import {BsStack} from 'react-icons/bs';
import {BsFillLockFill} from 'react-icons/bs';
import {FaBitbucket} from 'react-icons/fa';
import {BsBox} from 'react-icons/bs';
import {BsStarFill} from 'react-icons/bs';
import {BsStarHalf} from 'react-icons/bs';
import {GiStrongbox} from 'react-icons/gi';
import {FaBook} from 'react-icons/fa';
import {SiBookstack} from 'react-icons/si';
import {RiArrowRightSLine} from 'react-icons/ri';
import {RiCheckboxMultipleBlankFill} from 'react-icons/ri';
import Wura from '../assets/wura.jpg';
//import Mayokun from '../assets/mayokun.jpg';
//import Wande from '../assets/wande.jpg';
import WuraThumbnail from '../assets/wura-thumbnail.jpg';
import MayokunThumbnail from '../assets/mayokun-thumbnail.jpg';
import WandeThumbnail from '../assets/wande-thumbnail.jpg';
import Savings from '../assets/savings.png';
import Mutual from '../assets/mutual.svg';
import Stash from '../assets/stash.svg';
import Circles from '../assets/circles.svg';
import Emergency from '../assets/emergency.svg';
import Stock from '../assets/stocks.svg';
import MobileMockUp from '../assets/mobileMockUp2.png';
import '../styles/Nav.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen)}

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        toast("Welcome to the Investment world!");
    }
    
  return (
    <React.Fragment>
    <div className='container container-fluid'>
        <Navbar
            className='navigation'
            expand="md"
            light
            sticky="true"
        >
            <NavbarBrand to="/">
                <svg xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabIndex="-1" className="cw-logo"><path d="M14.896.5H6.828l-.016.028L5.7 2.571h9.197c6.812 0 12.338 5.564 12.338 12.427 0 6.863-5.524 12.426-12.338 12.426-6.815 0-12.34-5.564-12.34-12.426 0-1.299.202-2.589.599-3.824H5.51c-1.67 4.156-.448 8.923 3.01 11.746a10.067 10.067 0 0012.034.533c3.692-2.506 5.325-7.146 4.024-11.434-1.301-4.287-5.23-7.216-9.682-7.216H4.483l-1.129 2.07h11.542c3.625 0 6.805 2.437 7.772 5.956.967 3.52-.516 7.256-3.625 9.134a8.023 8.023 0 01-9.708-1.08 8.166 8.166 0 01-1.558-9.71h2.669a5.924 5.924 0 00-.207 7.381 5.824 5.824 0 007.113 1.787c2.494-1.16 3.85-3.912 3.26-6.614-.591-2.702-2.97-4.626-5.716-4.624H2.138L1.01 11.174a14.62 14.62 0 00-.51 3.824c0 8.006 6.445 14.497 14.396 14.497 7.95 0 14.395-6.49 14.395-14.497S22.845.5 14.896.5zm0 10.674c2.096 0 3.796 1.712 3.796 3.824 0 2.111-1.7 3.823-3.796 3.823-2.097 0-3.797-1.712-3.797-3.823 0-2.112 1.7-3.824 3.797-3.824zm20.723 4.13c0-4.028 2.683-6.858 6.707-6.858 2.48 0 4.505 1.096 5.568 2.932l-2.328 1.657c-.735-1.173-1.848-1.734-3.164-1.734-2.176 0-3.62 1.557-3.62 4.003 0 2.421 1.443 4.002 3.62 4.002 1.317 0 2.43-.587 3.164-1.76l2.328 1.658c-1.063 1.86-3.088 2.931-5.568 2.931-4.024 0-6.707-2.83-6.707-6.831zm12.713 0c0-3.773 2.658-6.858 6.783-6.858 4.151 0 6.784 3.085 6.784 6.858 0 3.747-2.634 6.831-6.784 6.831-4.123 0-6.783-3.084-6.783-6.831zm10.403 0c0-2.37-1.393-4.028-3.62-4.028-2.226 0-3.62 1.657-3.62 4.028 0 2.345 1.393 4.002 3.62 4.002 2.228 0 3.62-1.657 3.62-4.002zm23.433-6.502l-3.95 12.975h-3.335l-2.792-9.151-2.817 9.151h-3.34L62.007 8.802h3.064l2.668 9.355 2.866-9.355h2.965l2.866 9.355 2.643-9.355zm43.39 0l-3.953 12.975h-3.336l-2.792-9.151-2.816 9.151h-3.333L105.4 8.805h3.063l2.669 9.355 2.863-9.358h2.965l2.866 9.355 2.644-9.355zM91.41 8.753v2.905a9.407 9.407 0 00-1.418-.127c-2.253 0-3.442 1.147-3.442 3.849v6.4h-3.087V8.802h3.035v2.168c.633-1.504 2.024-2.396 3.796-2.396a3.18 3.18 0 011.115.179zm12.81.05v11.674c0 4.36-2.404 6.755-6.657 6.755-2.201 0-4.226-.663-5.441-1.81l1.392-2.269c1.087.865 2.506 1.3 3.873 1.3 2.379 0 3.796-1.35 3.796-3.978v-1.119c-.734 1.428-2.303 2.294-4.202 2.294-2.733 0-4.454-1.733-4.454-4.894V8.802h3.088v7.164c0 1.989.81 2.855 2.43 2.855 1.873 0 3.113-1.146 3.113-3.033V8.802h3.063zM126.37 4.7c0-1.122.785-1.938 1.975-1.938 1.164 0 1.946.816 1.946 1.938 0 1.121-.784 1.937-1.946 1.937-1.19 0-1.974-.816-1.974-1.937zm.431 4.103h3.088v12.975h-3.088V8.803zm4.642 10.86l1.67-1.964c1.012 1.122 2.582 1.785 4.227 1.785 1.468 0 2.278-.56 2.278-1.376 0-.689-.506-1.122-1.797-1.428l-2.1-.484c-2.684-.637-3.823-1.887-3.823-3.671 0-2.396 1.974-4.079 5.316-4.079 2.278 0 4.176.79 5.29 2.066l-1.646 2.013c-1.113-.969-2.379-1.428-3.72-1.428-1.444 0-2.152.536-2.152 1.326 0 .612.43.994 1.797 1.3l2.227.536c2.708.611 3.696 1.86 3.696 3.644 0 2.575-1.975 4.232-5.391 4.232-2.557 0-4.708-.968-5.872-2.473zm24.976-3.442h-9.594c.33 2.09 1.696 3.212 3.797 3.212 1.442 0 2.657-.535 3.594-1.632l1.848 1.836c-1.215 1.58-3.164 2.498-5.544 2.498-4.1 0-6.834-2.702-6.834-6.78 0-4.028 2.634-6.909 6.531-6.909 3.746 0 6.277 2.626 6.277 6.577 0 .4-.026.8-.075 1.198zm-9.594-2.115h6.584c-.152-1.912-1.317-2.957-3.164-2.957-1.9 0-3.09 1.096-3.42 2.957z" fill="#0066F5"></path></svg>
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

        {/* Hero Section  */}
        <div className='heroSection'>
            <div className="row">
                <div className="col col-md-6 imgPart">
                    <img src={Wura} alt="wura" className=' imgs img-fluid'/>
                    <div className='thumbnail'>
                        <img src={WuraThumbnail} alt="thumbnail" className='img-fluid'/>
                        <img src={MayokunThumbnail} alt="thumbnail" className='img-fluid'/>
                        <img src={WandeThumbnail} alt="thumbnail" className='img-fluid'/>
                    </div>
                </div>
                <div className="col col-md-6 textPart">
                    <h1 className='heroText'>Get your money working.</h1>
                    <p className='heroMsg'>Build discipline, access financial tools that 
                        steadily grow your finances.
                    </p>
                    <input type="email" name='email' required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email...' 
                    className='heroInput'/>
                    <button onClick={handleSubmit} className='heroBtn'>Start Investing</button>
                </div>
            </div>
            <ToastContainer/>
        </div>

        {/* Values Section */}
        <div className="row valueSection">
            <div className="col">
                <h2 className='valueTitle'>Get financial freedom</h2>
                <p className='valueMsg'>Plan towards your dream home, fund yor kid's education, 
                    travel the world, all in one app.</p>
                <div className='savings'>
                    <h5 className='valueType'>Savings</h5>
                    <h2 className='valueTitle'>Create multiple saving plans</h2>
                    <p className='valueMsg'> Earn better interest rates than your bank</p>
                    <h6 className='valueAction'>START SAVING <RiArrowRightSLine/></h6>
                    <img src={Savings} alt="savings" className='savingsImg'/>
                </div>
                <div className='mutual'>
                    <h5 className='valueType'>Mutual Funds </h5>
                    <h2 className='valueTitle'>Play the long-term game</h2>
                    <p className='valueMsg'>Invest in diverse and quality mutual funds with any amount</p>
                    <h6 className='valueAction'>START INVESTING <RiArrowRightSLine/></h6>
                    <img src={Mutual} alt="mutual" className='mutualImg'/>
                </div>
                <div className='stash'>
                    <h5 className='valueTypeStash'>Stash</h5>
                    <h2 className='valueTitleStash'>Your secure digital wallet</h2>
                    <p className='valueMsgStash'>Send and receive cash in seconds for free. You only need their username.</p>
                    <h6 className='valueActionStash'>EXPLORE IT NOW <RiArrowRightSLine/></h6>
                    <img src={Stash} alt="stash" className='stashImg'/>
                </div>
            </div>
            <div className="col">
            <div className='circles'>
                    <h5 className='valueType'>Circles</h5>
                    <h2 className='valueTitle'>Save with friends</h2>
                    <p className='valueMsg'>Stay motivated and have fun saving with your friends and family</p>
                    <h6 className='valueAction'>JOIN A CIRCLE <RiArrowRightSLine/></h6>
                    <img src={Circles} alt="circles" className='circlesImg'/>
                </div>
                <div className='emergency'>
                    <h5 className='valueType'>Emergency Fund</h5>
                    <h2 className='valueTitle'>Save for the rainy day</h2>
                    <p className='valueMsg'>Build a safety net for unexpected expenses</p>
                    <h6 className='valueAction'>CREATE YOUR EMERGENCY PLAN <RiArrowRightSLine/></h6>
                    <img src={Emergency} alt="emergency" className='emergencyImg'/>
                </div>
                <div className='stock'>
                    <h5 className='valueType'>US Stocks and bonds (Coming soon)</h5>
                    <h2 className='valueTitle'>Grow your global portfolio</h2>
                    <p className='valueMsg'> Send and receive cash in seconds for free. You only need their username.</p>
                    <h6 className='valueAction'>GET EARLY ACCESS <RiArrowRightSLine/></h6>
                    <img src={Stock} alt="stock" className='stockImg'/>
                </div>
            </div>
        </div>

        {/* Steps Section */}
        <div className="row stepSection">
            <div className="col">
                <img src={MobileMockUp} alt="mobile mock up" />
            </div>
            <div className="col">
                <h2 className='stepHero'>Start building health in 5 minutes</h2>
                <div className='step-active'>
                    <div className="borderNum">
                        <h4 className='stepContentNum'>01</h4>
                        <span className='stepBorder'></span>
                    </div>
                    <div className="content">
                        <h4 className='stepContentTitle'>Create an account</h4>
                        <p className='stepContentText'>Sign up for an account with your name, email and phone number.</p>
                    </div>
                </div>
                <div className='step-active'>
                    <div className="borderNum">
                        <h4 className='stepContentNum'>02</h4>
                        <span className='stepBorder'></span>
                    </div>
                    <div className="content">
                        <h4 className='stepContentTitle'>Add a payment method</h4>
                        <p className='stepContentText'>Using your debit card, bank account, USSD,QR Code, set up your first plan.</p>
                    </div>
                </div>
                <div className='step-active'>
                    <div className="borderNum">
                        <h4 className='stepContentNum'>03</h4>
                    </div>
                    <div className="content">
                        <h4 className='stepContentTitle'>Watch your money grow</h4>
                        <p className='stepContentTextD'>Sit back, relax &amp; let your money work for you all day, everyday.</p>
                    </div>
                </div>
                <Link to="/signup">
                    <button className='signup-btn'>Sign Up Now</button>
                </Link>
            </div>
        </div>
    </div>
    
    {/* Security Section */}
    <div className='securitySection'>
        <div className="securityHero">
            <h2 className="securityHeroTitle">Keeping your money safe is our business.</h2>
            <p className="securityHeroMsg">Trust is our currency. We are committed to the security of your money and the protection of your account.</p>
            <h6 className='securityAction'>LEARN MORE <RiArrowRightSLine/></h6>
        </div>

        <div className="row">
            <div className="col">
                <div className="securityContent">
                    <RiCheckboxMultipleBlankFill className='securityIcon'/>
                    <div className="content">
                        <h5 className="securityTitle">Bank-grade Security</h5>
                        <p className="securityText">We are PCI-DSS compliant to ensure security of your data electronically. All cards and bank data are encrypted to prevent unauthorised access to sensitive information.</p>
                    </div>
                </div>
                <div className="securityContent">
                    <RiCheckboxMultipleBlankFill className='securityIconR'/>
                    <div className="content">
                        <h5 className="securityTitle">Regulatory Compliance</h5>
                        <p className="securityText">Cowrywise is a duly registered fund manager with the Securities and Exchange Commission (SEC) of Nigeria. All our activities are in full compliance with regulatory requirements to the ultimate protection of our clients.</p>
                    </div>
                </div>
            </div>
            <div className="col">
            <div className="securityContent">
                    <RiCheckboxMultipleBlankFill className='securityIconF'/>
                    <div className="content">
                        <h5 className="securityTitle">Two-Factor Authentication</h5>
                        <p className="securityText">2FA is an extra layer of protection to ensure the security of your account beyond just a username and password. All verifications for key transactions pass through the 2FA process on Cowrywise.</p>
                    </div>
                </div>
                <div className="securityContent">
                    <RiCheckboxMultipleBlankFill className='securityIconC'/>
                    <div className="content">
                        <h5 className="securityTitle">Best-In-Class Assets</h5>
                        <p className="securityText">All the investment options listed on Cowrywise, are carefully screened, managed by professional fund managers. All the diverse mutual funds registered with the SEC, with standard third-party custodian structure.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Ratings Section */}
    <div className='container container-fluid'>
        <h6 className='perk_title'>WHY COWRYWISE ?</h6>
        <div class="perk">
            <span className="perk__question">Great Interest Rates? </span>
            <span className="perk__answer">Confam.</span>
        </div>
        <div className="row ratingSection">

            <div className="col">
                <div className="ratingsRate">
                    <h2 className='ratingsNum'>4.4 <small className='ratingsNumS'>/5
                    <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></small></h2>
                    <button className='ratingsBtn'>Get it on Play Store</button>
                </div>
                <h5 className='ratingsTitle'>Available on the Play Store</h5>
                <p className='ratingsMsg'>“User interface is fantastic, deposits and withdrawals flawless and fast. I wish I had discovered this years ago, would have been a millionaire by now” - Obiora, Nov 2021</p>
                <h6 className='ratingsAction'>DOWNLOAD NOW <RiArrowRightSLine/></h6>
            </div>
            <div className="col">
            <div className="ratingsRate">
                    <h2 className='ratingsNum'>4.4 <small>/5</small></h2>
                    <button className='ratingsBtn'>Get it on App Store</button>
                </div>
                <h5 className='ratingsTitle'>Available on the App Store</h5>
                <p className='ratingsMsg'>“I just don't know what to say about this app all i know is that it's awesome, it's been 2 years plus and I haven't had a reason to complain.” - Henrietta, December 2021</p>
                <h6 className='ratingsAction'>DOWNLOAD NOW <RiArrowRightSLine/></h6>
            </div>
        </div>
    </div>
    </React.Fragment>
  );
};

export default Navigation;