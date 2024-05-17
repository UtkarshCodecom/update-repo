import React, { Fragment, useEffect, useState, useRef } from "react";
import { CgMouse } from "react-icons/cg";
import { DiCelluloid } from "react-icons/di";
import "../Home/Home.css";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../components/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import im1 from "../../images/vapt.png";
import line1 from "../../images/line1.png";
import line2 from "../../images/line2.png";
import { getAllText } from "../../components/actions/homeAction.js";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import {useNavigate }from 'react-router-dom'
import mt from "../../images/meet.png";
import web from "../../images/web.png";
import api from "../../images/api.png";
import service from "../../images/network.png";


const Vapt = () => {
    const navigate= useNavigate()
      
    const isimg = window.innerWidth >=784
   const book = ()=>{
    navigate("/book")
   }
 
    return (
        <Fragment>
           
                <Fragment>
                    <MetaData title="vapt" />

                    <div className="bg19" >

                        <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
                            <div className="box">
                                <div className="group">
                                { !isimg ?<img src={ im1}  style={{marginLeft:'220px', position:"absolute"}} className="mobileimg"/> : null}

                                    <p className="providing-high">

                                        VAPT
                                    </p>

                                    <p className="white">

                                    Our VAPT experts leverage industry-leading tools and proven methodologies to deliver a meticulous assessment of your website's security posture. We provide a detailed report outlining vulnerabilities, their severity levels, and recommended remediation steps. Don't wait for a security breach to happen.  Contact Nexus Security today and secure your new website with a comprehensive VAPT.                                    </p>
                                    <div className="top-button">
                                        <Button variant="contained">Know More</Button>
                                        <Button variant="contained">Get In Touch</Button>
                                    </div>

                                </div>
                                { isimg ?<div className="img1" style={{marginLeft:'0'}}>
                                    <img src={ im1}  style={{marginLeft:'0'}}/>
                                </div> : null}
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                            <div className="why">

                                <div className="cen">
                                <h2 className={isimg ? "white-cen" : 'white-cen mt-14'}> Sub Categories</h2>
                                </div>

                                <div className="cards vap">
                                    <div className="card">
                                        <div className="card-data gj">
                                            <img className="card-img" src={api} />
                                            <h2>API Sentinel</h2>
                                            <p> APIs, or Application Programming Interfaces, ensure seamless communication between applications and data. However, these connectors can become security vulnerabilities if not properly secured. Our API Sentinel VAPT service examines your APIs for weaknesses, identifying potential exploits that could compromise sensitive data. We act as vigilant guardians, ensuring the integrity and security of your API integrations.</p>

                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-data gj">
                                            <img className="card-img" src={web} />
                                            <h2>Web Fortress</h2>
                                            <p> Your website or web application embodies your digital identity. A security breach here can damage your reputation and expose sensitive user data. Our Web Fortress VAPT service serves as an impenetrable wall, rigorously testing your web application for vulnerabilities. We identify and address potential security gaps, fortifying your web presence against cyberattacks.</p>

                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-data gj">
                                            <img className="card-img" src={service} />
                                            <h2>Network Security</h2>
                                            <p> Your network serves as the foundation of your digital infrastructure, the gateway for data flow. Our Digital Perimeter VAPT service scrutinizes your network infrastructure, including firewalls, routers, and other devices. We identify exploitable weaknesses and recommend solutions, creating a robust shield for your network, safeguarding against potential cyber threats.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                            <div className="book">
                                <img src={mt} />
                                <div>
                                    <h3>Book a meeting with us</h3>
                                    <p>Lets Collaborate and discuss about your business goals.
                                    </p>
                                </div>
                                <Button variant="contained" onClick={book}>Book a meeting</Button>
                            </div>
                        </ScrollAnimation>
                    </div>


                </Fragment>
            
        </Fragment >
    );
};

export default Vapt;
