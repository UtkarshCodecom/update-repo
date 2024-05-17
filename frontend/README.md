# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



Authentication and Authorization: Secure your backend API endpoint to ensure that only authenticated administrators can create tasks. Implement authorization checks to verify that the user creating the task has the necessary permissions to do so.




we need two login page one is for user and another one is for admin 


 import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import CountdownTimer from "react-component-countdown-timer";
import Slider from "react-slick";
import { MdPhone } from "react-icons/md";
import { faCertificate, faGlobe, faCalendarCheck, faArrowCircleUp, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Chip, Fab } from "@material-ui/core";
import Accordion from "./Accordion";
import ScrollAnimation from "react-animate-on-scroll";
import { FAQ_auery } from "./faq_query";
import ch1 from "../../assets/images/ethical-hacking/eth1.png";

const CyberSecurity = ({ history }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    { id: 1, content: `I am now confident in my ethical hacking abilities after completing this course. The practical, hands-on approach truly sets it apart.`, author: "Tharun Danari, Ethical Hacker Intern" },
    { id: 2, content: `This course took my hacking skills to the next level. The practical experience is what sets it apart from the rest.`, author: "Kabir Verma, Intern, EH" },
    { id: 3, content: `Enrolling in this ethical hacking course was a game-changer. The hands-on experience is what makes graduates stand out in the field.`, author: "Kamalesh, Ethical Hacker" },
  ];

  return (
    <div className="main">
      <ScrollAnimation animateIn="fadeIn">
        <div className="Box 11">
          <div className="group">
            <p className="providing-high">Ethical Hacking</p>
            <p className="white">Advance upskilling program to elevate your career and land your dream job.</p>
            <div className="paragrap">
              <p className="white">
                <FontAwesomeIcon icon={faCalendarCheck} /> Next Batch Starts From Soon <CountdownTimer hours={24} minutes={40} seconds={20} />
              </p>
              <p className="white">
                <FontAwesomeIcon icon={faGlobe} /> English
              </p>
              <p className="white">
                <FontAwesomeIcon icon={faCertificate} /> Certified Course
              </p>
            </div>
          </div>
          <div className="img4">
            <img src={ch1} className="gradient-overlay" alt="Ethical Hacking" />
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <div className="eth">
          <div className="zero">
            <TabView>
              <TabPanel className="tb" header="3 Months">
                <h3>UpSkilling Program</h3>
                <p>Certification</p>
                <div className="divider" />
                <p>Live sessions + Recorded Content Access</p>
                <div className="divider" />
                <p>Resume Building</p>
                <div className="divider" />
                <p>Dedicated Student Support</p>
                <div className="divider" />
                <p>Job-Ready Projects</p>
                <div className="divider" />
                <Button variant="contained">Enroll Now</Button>
              </TabPanel>
              <TabPanel className="tb" header="6 Months">
                <h3>Placement Training</h3>
                <p>Industry-Ready-Certification</p>
                <div className="divider" />
                <p>Students Community</p>
                <div className="divider" />
                <p>Resume building & Aptitude training</p>
                <div className="divider" />
                <p>Top-notch Programs</p>
                <div className="divider" />
                <p>Placement Training</p>
                <div className="divider" />
                <p>Doubt Solving sessions</p>
                <div className="divider" />
                <Button variant="contained">Enroll Now</Button>
              </TabPanel>
              <TabPanel className="tb" header="9 Months">
                <h3>Job Assistance</h3>
                <p>Mock Interviews</p>
                <div className="divider" />
                <p>Free Aptitude & Soft Skills Training</p>
                <div className="divider" />
                <p>Students Community</p>
                <div className="divider" />
                <p>Building Real World Projects</p>
                <div className="divider" />
                <p>Job Referrals</p>
                <div className="divider" />
                <p>Letter of Recommendation</p>
                <div className="divider" />
                <Button variant="contained">Enroll Now</Button>
              </TabPanel>
            </TabView>
            <p className="tstx">For details about the course</p>
            <Fab variant="extended" className="feb">
              <Chip icon={<MdPhone />} label="Talk to an Expert" />
            </Fab>
          </div>
          <Accordion />
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <p className="top-1">FAQ</p>
        <h1 className="top-2">Frequently Asked Questions</h1>
        <h2 className="top-3">Discover valuable hands-on experience and professional development opportunities through our dynamic upskilling program designed to provide practical skills and industry exposure.</h2>
        <div className="chase-2">
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
                    <p key={subIndex}>{subItem}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollAnimation>

      <div style={{ maxWidth: "100%", padding: "0 20px" }}>
        <p className="cj-2" style={{ textAlign: "center", color: "#32c2ff", marginTop: "50px" }}>EDUCATION FOR EVERYONE</p>
        <h1 className="students" style={{ textAlign: "center", fontWeight: "bold", fontSize: "30px", color: "white", marginTop: "50px" }}>Let’s hear from our Students</h1>
        <div className="slider-container" style={{ margin: "0 auto", maxWidth: "800px" }}>
          <Slider
            {...settings}
            style={{ color: "#b0b0b0", marginTop: "50px", fontWeight: "bold", fontSize: "18px" }}
            className="slider"
            containerStyle={{
              borderBottom: "1px solid #b0b0b0",
              paddingBottom: "20px",
              fontSize: "large",
              fontWeight: "bold",
            }}
          >
            {slides.map((item, index) => (
              <div key={index} style={{ margin: "0 10px" }}>
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

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "50px" }}>
        <div style={{ width: "100%", maxWidth: "600px", marginBottom: "40px" }}>
          <img src="https://campalin.com/assets/images/others/Cert.png" style={{ height: "auto", width: "70%", marginLeft: "50px", marginTop: "100px", fontWeight: "bold", maxWidth: "400px" }} alt="Certificate" />
          <h1 style={{ color: "white", marginLeft: "50px", marginTop: "8px" }}>Get a Certificate</h1>
          <p style={{ color: "#b0b0b0", marginLeft: "50px", fontSize: "18px", marginTop: "8px" }}>
            Enhance your skills and boost your career prospects with our upskilling program, offering a certificate upon successful completion.
          </p>
          <div style={{ display: "flex", justifyContent: "start", marginTop: "20px" }}>
            <img src="https://campalin.com/Courses/images/card-icon-11.png" style={{ height: "30px", width: "30px", marginLeft: "50px" }} alt="Icon" />
            <p style={{ color: "#b0b0b0", marginLeft: "10px", fontSize: "18px", marginTop: "10px" }}>5000+</p>
            <p style={{ color: "#b0b0b0", marginLeft: "10px", fontSize: "18px", marginTop: "10px" }}>Get Award</p>
          </div>
          <div style={{ display: "flex", justifyContent: "start", marginTop: "20px" }}>
            <img src="https://campalin.com/Courses/images/card-icon-12.png" style={{ height: "30px", width: "30px", marginLeft: "50px" }} alt="Icon" />
            <p style={{ color: "#b0b0b0", marginLeft: "10px", fontSize: "18px", marginTop: "10px" }}>10K+</p>
            <p style={{ color: "#b0b0b0", marginLeft: "10px", fontSize: "18px", marginTop: "10px" }}>Zero to career</p>
          </div>
        </div>
        <div style={{ width: "100%", maxWidth: "600px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p className="white" style={{ marginTop: "100px", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>Projects You Will Build<span style={{ fontSize: "18px", fontWeight: "500", color: "#b0b0b0", display: "block", textAlign: "center", marginTop: "10px" }}>Apply your skills and knowledge gained during the upskilling program to build a real-world project, showcasing your abilities and demonstrating your readiness for professional development.</span></p>
          <img src="https://campalin.com/assets/images/projects-thumbnails/projects%20ethical.png" style={{ height: "200px", width: "300px", marginTop: "20px" }} alt="Project Thumbnail" />
          <p style={{ marginTop: "40px", color: "#b0b0b0", textAlign: "center" }}><FontAwesomeIcon icon={faArrowCircleUp} /> Industry relevant projects</p>
          <p style={{ marginTop: "40px", color: "#b0b0b0", textAlign: "center" }}><FontAwesomeIcon icon={faArrowCircleUp} /> Trending technologies</p>
          <p style={{ marginTop: "40px", color: "#b0b0b0", textAlign: "center" }}><FontAwesomeIcon icon={faArrowCircleUp} /> Learn Emerging Tech stacks</p>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
