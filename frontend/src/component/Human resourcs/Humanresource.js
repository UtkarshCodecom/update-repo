import React, { Fragment, useEffect, useState, useRef } from "react";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import {Fab, colors} from "@mui/material";
import { FAQ_auery } from "./humanmockdata.js";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ch1 from "../../images/et.png";
import ScrollAnimation from 'react-animate-on-scroll'; 
import "animate.css/animate.compat.css"
import { TabView, TabPanel } from 'primereact/tabview';
import './human.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faArrowCircleUp, faCalendarCheck, faCertificate, faGlobe, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Fullstackaccoridon from "./Humanaccordion.js";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mt from "../../images/meet.png";



const Humanresource = ({ history }) => {
   
  const [activeIndex, setActiveIndex] = useState(null)

  const handleAccordionClick = (index) => {
    // Toggle the active index when a section is clicked
    setActiveIndex(activeIndex === index ? null : index);
  };


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1024, // Adjust breakpoint as needed
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768, // Adjust breakpoint as needed
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // Add more breakpoints if needed
        ]
      };
      
   
      const slides = [
        { id: 1, content: `I feel very good about this course as it give me ample of knowledge and basic things about human resource . I found this Course very good and i will use it again . It clear all my doubts and queries about recruitment , function, HR Audit e.t.c . Thank you`, author: 'Riya Sharma, HR' },
        { id: 2, content: `I learned a lot from Campalin and the whole team covering the HR Management Specialization really!! I love the fact that you can go at your own pace. They managed to get all the goods in the 5 courses. I'm starting course #4 now and I get more excited as I go because the info provided is so useful.`, author: 'Nisha Gupta, HR (Intern)' },
        {
            id:3 , content: `Yes, the course was very informative and I leant more detailed information about the Human Resource position as what is done and expected.`,
            author: "Kabir Verma, HR"
        }
       
      ];
   const  isimge = window.innerWidth >= 784
     
    return (
        <Fragment>
          
                <Fragment>
                    <MetaData title="human-resource" />

                    <div className="main">
                          
                        <ScrollAnimation animateIn="fadeIn">
                            <div className="Box ">
                            <img src={"https://campalin.com/Courses/course%20thumbnails/HR%20THUMBNAIL.png"}className={isimge ? `absolute h-48 mt-28 ml-[750px] rounded-md` : `    h-52 mt-10  ml-5 rounded-md`}   alt="Ethical Hacking" />
                                <div className="group"  >
                                
                                <p className={isimge ?`providing-high mt-20 ml-20` : ` text-white flex  ml-12 font-bold text-xl   mt-10 ` }>
                                   

                                  
                                   Human Resource Management
                               </p >

                               <p className={isimge ?`white ml-[82px]` : `white ml-[52px]   `} >
                                   Advance upskilling program to elevate your career and land your dream job.
                               </p>
                               <div className={isimge ?`white ml-[82px]` : `white ml-[52px]   `}>
                               <p className="white"> <FontAwesomeIcon icon={faCalendarCheck}  /> {"Next Batch Starts From Soon" } ||
                               <FontAwesomeIcon icon={faGlobe}  className="ml-2"/>English ||<FontAwesomeIcon icon={faCertificate} className="ml-2"/> Certified Course 
                              </p>
                                    </div>


                                </div>
                                
                                </div>
                        </ScrollAnimation>


                        <ScrollAnimation animateIn="fadeIn">
                            <div className="eth " >
                                <div className="zero ">
                                <TabView className="tab-view">
  <TabPanel className="tb" header="3 Months">
    <h3 className="text-lg font-bold mb-3">3 Months</h3>
    <h4 className="text-2xl font-bold mb-2">UpSkilling Program</h4>
    <ul className="list-disc list-inside mb-4">
      <li>Certification</li>
      <li>Live sessions + Recorded Content Access</li>
      <li>Resume Building</li>
      <li>Dedicated Student Support</li>
      <li>Job-Ready Projects</li>
    </ul>
    <div className="mr-[0px]">
    <Button variant="contained"  size="large"className="bg-blue-500 hover:bg-blue-700 text-white font-bold ">
      Enroll 
    </Button>
    </div>
  </TabPanel>
  <TabPanel className="tb" header="6  Months">
    <h3 className="text-lg font-bold mb-4">6 Months</h3>
    <h4 className="text-2xl font-bold mb-2">Placement Training</h4>
    <ul className="list-disc list-inside mb-4">
      <li>Industry-Ready-Certification</li>
      <li>Students Community</li>
      <li>Resume building & Aptitude training</li>
      <li>Top-notch Programs</li>
      <li>Placement Training</li>
      <li>Doubt Solving sessions</li>
    </ul>
    <div className="mr-[0px]">
    <Button variant="contained"  size="large"className="bg-blue-500 hover:bg-blue-700 text-white font-bold ">
      Enroll 
    </Button>
    </div>
  </TabPanel>
  <TabPanel className="tb" header="9 Months">
    <h3 className="text-lg font-bold mb-4">9 Months</h3>
    <h4 className="text-2xl font-bold mb-2">Job Assistance</h4>
    <ul className="list-disc list-inside mb-4">
      <li>Mock Interviews</li>
      <li>Free Aptitude & Soft Skills Training</li>
      <li>Students Community</li>
      <li>Building Real World Projects</li>
      <li>Job Referrals</li>
      <li>Letter of Recommendation</li>
    </ul>
    <div className="mr-[0px]">
    <Button variant="contained"  size="large"className="bg-blue-500 hover:bg-blue-700 text-white font-bold ">
      Enroll 
    </Button>
    </div>
  </TabPanel>
</TabView>

                                    <p className="tstx" >
                                    For details about the course  
                                    </p>
                                    <div className="ml-16 mt-6">
                                    <Fab variant="extended" >
                                     
                                   Talk to an Expert
                                      
                                    </Fab>
                                    </div>
                                  
                                </div>
                                <Fullstackaccoridon />
                              
                        </div>
                        </ScrollAnimation>
                  

                    </div>
                </Fragment>
                
        
               <ScrollAnimation animateIn="fadeIn">
               <p className="flex justify-center text-amber-50 mt-3 ">FAQ</p>
               <h1 className="text-gray-500 justify-center flex text-lg font-medium mt-3">Frequently Asked Questions</h1>
               <p className="text-gray-400 ml-10 mt-3  font-medium ">Discover valuable hands-on experience and professional development opportunities through our dynamic upskilling program designed  to provide practical skills and industry exposure.</p>
              
              
               <div className={ isimge ? ` chase-2  w-[860px]  ml-96`: `chase-2 mr-20`}>
               {FAQ_auery.map((item, index) => (
  <div className={`name ${activeIndex === index ? 'active' : ''}`} key={index}>
    <h3 onClick={() => handleAccordionClick(index)}>
      {item.title}
      <span className="icon-1">
        {activeIndex === index ? (
          <FontAwesomeIcon icon={faMinus} />
        ) : (
          <FontAwesomeIcon icon={faPlus} />
        )}
      </span>
    </h3>
    {activeIndex === index && (
      <div className="content">
        {item.subItems.map((subItem, subIndex) => (
          <p key={subIndex}>{subItem}</p> // Add unique keys for nested elements
        ))}
      </div>
    )}
  </div>
))}


      </div>
     
      <div style={{ maxWidth: '100%', padding: '0 20px' }}>
      <p className={ isimge ? `cj-2` : ""} style={{ textAlign: 'center', color: '#32c2ff', marginTop: '50px' }} >EDUCATION FOR EVERYONE</p>
      <h1 className={ isimge ? `studets` : ""} style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '30px', color: 'white', marginTop:'50px' }}>Let’s hear from our Students</h1>
      <div className="slider-container" style={{ margin: '0 auto', maxWidth: '800px' }}>
      <Slider
      {...settings}
      
      style={{ color: '#b0b0b0', marginTop: '50px', fontWeight:"bold", fontSize: "18px" }}
      className={isimge ?`slider` : ""}
      containerStyle={{
        borderBottom: '1px solid #b0b0b0',
        paddingBottom: '20px',
        fontSize:'large',
        fontWeight: "bold"
      }}
    >
      {slides.map((item, index) => (
        <div key={index} style={{ margin: '0 10px' }}>
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="description">
                <p className="subtitle-3">{item.content}</p>
                <div className="clint-info-wrapper">
                  <div className="client-info">
                    <h5 className="title">{item.author}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
</Slider>
      </div>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center",marginLeft: "150px" }}>
  {/* <div style={isimge ? { width: "100%", maxWidth: "600px", marginBottom: "40px", marginLeft:"40px" } : { width: "100%", maxWidth: "200px", marginBottom: "40px", marginRight:"160px" } }>
    <img
      src="https://campalin.com/assets/images/others/Cert.png"
      style={isimge ? {
        height: "auto",
        width: "70%",
        marginLeft: "10px",
        marginTop: "100px",
        fontWeight: "bold",
        maxWidth: "400px",
      } :  {
      marginTop: "100px",
      fontWeight: "bold",
      maxWidth: "200px",
    }}
      alt="Certificate"
    />
    <h1 style={isimge ? { color: "white", marginLeft: "20px", marginTop: "8px" }:  { color: "white", marginLeft: "", marginTop: "8px" }}>Get a Certificate</h1>
    <p style={isimge ? { color: "#b0b0b0", marginLeft: "20px", fontSize: "18px", marginTop: "8px" }: { color: "#b0b0b0",  fontSize: "18px", marginTop: "8px" } }>
      Enhance your skills and boost your career prospects with our upskilling program, <br />offering a certificate upon successful completion.
    </p>
    <div style={{ display: "flex", justifyContent: "start", marginTop: "20px" }}>
      <img
        src="https://campalin.com/Courses/images/card-icon-11.png"
        style={isimge ? { height: "30px", width: "30px", marginLeft: "20px" } : { height: "30px", width: "30px", marginLeft: "" }}
        alt="Icon"
      />
      <p style={{ color: "#b0b0b0", marginLeft: "10px", fontSize: "18px", marginTop: "10px" }}>
        5000+
      </p>
      <p style={{ color: "#b0b0b0", marginLeft: "10px", fontSize: "18px", marginTop: "10px" }}>
        Get Award
      </p>
    </div>
    <div style={{ display: "flex", justifyContent: "start", marginTop: "20px" }}>
      <img
        src="https://campalin.com/Courses/images/card-icon-12.png"
       style={isimge ? { height: "30px", width: "30px", marginLeft: "20px" } : { height: "30px", width: "30px", marginLeft: "" }}
        alt="Icon"
      />
      <p style={{ color: "#b0b0b0", marginLeft: "10px", fontSize: "18px", marginTop: "10px" }}>
        10K+
      </p>
      <p style={{ color: "#b0b0b0", marginLeft: "10px", fontSize: "18px", marginTop: "10px" }}>
        Zero to career
      </p>
    </div>
  </div> */}
  <div style={{ width: "100%", maxWidth: "600px", display: "flex", flexDirection: "column", alignItems: "center", marginRight:"150px" }}>
    <p className="white" style={{ marginTop: "100px", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>
      Projects You Will Build
      <span style={{ fontSize: "18px", fontWeight: "500", color: "#b0b0b0", display: "block", textAlign: "center", marginTop: "10px" }}>
        Apply your skills and knowledge gained during the upskilling program to build a real-world project, showcasing your abilities and demonstrating your readiness for professional development.
      </span>
    </p>
    <img
      src="https://campalin.com/assets/images/projects-thumbnails/projects%20hr.png"
      style={{ height: "200px", width: "300px", marginTop: "20px" }}
      alt="Project Thumbnail"
    />
    <p style={{ marginTop: "40px", color: "#b0b0b0", textAlign: "center" }}>
      <FontAwesomeIcon icon={faArrowCircleUp} /> Industry relevant projects
    </p>
    <p style={{ marginTop: "40px", color: "#b0b0b0", textAlign: "center" }}>
      <FontAwesomeIcon icon={faArrowCircleUp} /> Trending technologies
    </p>
    <p style={{ marginTop: "40px", color: "#b0b0b0", textAlign: "center", marginBottom:"70px" }}>
      <FontAwesomeIcon icon={faArrowCircleUp} /> Learn Emerging Tech stacks
    </p>
  </div>
</div>

      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                            <div className="book ">
                                <img src={mt} />
                                <div>
                                    <h3>Book a meeting with us</h3>
                                    <p>Lets Collaborate and discuss about your business goals.
                                    </p>
                                </div>
                                <Button variant="contained">Book a meeting</Button>
                            </div>
                        </ScrollAnimation>
        </Fragment >
    );
};

export default Humanresource;
