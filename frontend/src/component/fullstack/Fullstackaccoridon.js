import React, { useState } from 'react';
import './fulstack.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import { faPlus, faMinus, faArrowRight, faLock } from '@fortawesome/free-solid-svg-icons';
import user_profile_img from '../../images/6.png'
import {program_content} from './fullstackmockdata'

const Fullstackaccoridon = () => {
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
            Embark on a transformative journey with our Full Stack Development program, where you'll delve deep into the intricate world of web application development. From crafting captivating user interfaces to building powerful server-side functionality, our program covers it all. Gain expertise in front-end technologies, back-end frameworks, and the seamless integration that bridges them.
            </p>
            <p>
            You'll master the art of creating responsive, user-friendly websites and web applications, and learn how to optimize performance for a seamless user experience. With hands-on projects and expert guidance, you'll gain the skills needed to be a versatile developer, ready to tackle the most complex challenges in today's tech-driven world.

            Join us and become a Full Stack Developer who can turn innovative ideas into reality.
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
  <img src={'https://campalin.com/Courses/images/avatar-02.png'} alt=''  className='h-20 w-20 rounded-xl p-2 '/>
  <div className='text-container '>
    <h1 className='title'>Instructor || Isha</h1>
    <p className='tt'>Expertise in HTML, CSS, JavaScript, and various frameworks like React and Node.js</p>
    <p className='tt'>Skilled web developer with over 5 years of experience in front-end and back-end development.</p>
  </div>
</div>

<div  className='whole'>

<Button variant='outlined'>Download curriculum</Button>
           
       </div >
      

     </div>
     
    </div>
  );
};

export default Fullstackaccoridon;
