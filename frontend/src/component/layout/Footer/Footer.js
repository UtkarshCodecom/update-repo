import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";



const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
        <div className="footer-cta pt-5 pb-5 " style={{marginTop:"500px"}}>
          </div>
          
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img
                        src="http://localhost:3000/static/media/logo.d932563c.png"
                        className="img-fluid"
                        alt="logo"
                        
                      />
                     
                    </a>
                    <p style={{fontSize:"18px", fontWeight:"bold" , color:"#b0b0b0", }}>
                    Master key competencies to become job-ready
                    
                    </p>
                  </div>
                  <div className="footer-text">
                    
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us on</span>
                   
                    <div>
                    <a href="http://instagram.com/meabhisingh"> <img src="https://campalin.com/Courses/social%20icons/instagram.png"  style={{height:"40px", width:"40px"}}></img></a>
                    <a href="http://youtube.com/6packprogramemr"><img src="https://campalin.com/Courses/social%20icons/youtube.png"  style={{height:"40px", width:"40px"}}></img></a>
                    <a href="http://instagram.com/meabhisingh"><img src="https://campalin.com/Courses/social%20icons/linkedin.png" style={{height:"40px", width:"40px"}} ></img></a>
                    </div>
                    <a href="#">
                      <i className="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Courses</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">VAPT</a>
                    </li>
                    <li>
                      <a href="#">Other Services</a>
                    </li>
                    <li>
                      <a href="#">Terms and condition</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Install Our App</h3>
                  </div>
                  <div className="footer-text mb-25">
                    
                    <img src={playStore} style={{height:"50px", width:"100px"}}></img>
                    <img src={appStore}  style={{height:"50px", width:"100px"}}></img>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2018, All Right Reserved{" "}
                    <a href="#">nexus security</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="./home">Home</a>
                    </li>
                    <li>
                      <a href="#">VAPT</a>
                    </li>
                    <li>
                      <a href="#">Courses</a>
                    </li>
                    <li>
                      <a href="#">Other Services</a>
                    </li>
                    <li>
                      <a href="#">Terms and condition</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;





