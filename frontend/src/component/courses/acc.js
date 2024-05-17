import React, { useState } from 'react';
import './fullstack.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import { faPlus, faMinus, faArrowRight, faLock } from '@fortawesome/free-solid-svg-icons';
import user_profile_img from '../../images/6.png'
import {program_content} from './fullstackdata'

export const Acc = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nestedActiveIndex, setNestedActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    // Toggle the active index when a section is clicked
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleNestedClick = (index) => {
    setNestedActiveIndex(nestedActiveIndex === index ? null : index);
  };

  // Program content with titles and a list of sub-items
 
  return (
    <div className="one">
        <div className={`descri ${activeIndex === 0 ? 'active' : ''}`}>
        <h3 onClick={() => handleAccordionClick(0)}>
          Description
          <span className="icon">
            {activeIndex === 0 ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </span>
        </h3>
        {activeIndex === 0 && (
          <div className="content">
            <p>
              Step into the world of Certified Ethical Hacking, where you'll unlock the secrets of cybersecurity and ethical hacking techniques. Our program is your passport to gaining in-depth knowledge and practical skills required to protect systems, networks, and data against malicious threats.
            </p>
            <p>
              Our expert instructors will lead you through hands-on labs, real-world scenarios, and the latest hacking tools, enabling you to understand the hacker's mindset and how to defend against it.
            </p>
          </div>
        )}
      </div>
     
      <div className={`descri ${activeIndex === 1 ? 'active' : ''}`}>
        <h3 onClick={() => handleAccordionClick(1)}>
         Program Content
         <span className="icon">
            {activeIndex === 1 ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </span>
        </h3>
        {activeIndex === 1 && (
          <div className="content">
           {program_content.map((item, index) => (
        <div key={index} className={`descri ${activeIndex === index   ? 'active' : ''}`}>
          {/* Toggle the section when clicked */}
          <h3 onClick={() => handleNestedClick(index )}>
            {item.title}
           { item.title && <span className="icon">
              {nestedActiveIndex === index  ? (
                <FontAwesomeIcon icon={faMinus} />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </span>}
          </h3>
              
          {/* Display sub-items when the section is active and it has sub-items */}
          {nestedActiveIndex === index  && item.subItems.length > 0 && (
            <div className="content">
              {item.subItems.map((subItem, subIndex) => (
                <p key={subIndex} className="ethical-hacking-intro">
                  <FontAwesomeIcon icon={faArrowRight} /> {subItem}
                  <FontAwesomeIcon icon={faLock} className="tee" />
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
          </div>
        )}
      </div>


     
     <div  className='contain'>
     
    
     <div className='profile'>
  <img src={user_profile_img} alt='user_profile' />
  <div className='text-container'>
    <h1 className='title'>Instructor || Armaan Sidana</h1>
    <p className='tt'>Skilled with Network Security, Ethical Hacking, Penetration Testing, VAPT, Snort, IDS, MOD Security. Good practice to perform CTF over WIN, MAC and Linux.</p>
    <p className='tt'>Certified Ethical Hacker (CEH), OSCP, Nexus Security</p>
  </div>
</div>

<div  className='whole'>

<Button variant='outlined'>Download curriculum</Button>
           
       </div >
      

     </div>
     
    </div>
  );
};


