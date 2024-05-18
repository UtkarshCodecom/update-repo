import React, { useState } from 'react';
import './human.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import { faPlus, faMinus, faArrowRight, faLock } from '@fortawesome/free-solid-svg-icons';
import user_profile_img from '../../images/6.png'
import {program_content} from './humanmockdata'

const Humanaccordian = () => {
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
            Explore the art of talent acquisition, employee development, and fostering a thriving company culture. Equip yourself with the knowledge and skills to lead, motivate, and manage diverse teams effectively. Join us on this transformative journey to become an HR trailblazer and drive your career to new heights!"
            </p>
            <p>
            Our expert instructors will guide you through real-world case studies and hands-on projects, giving you the practical skills needed to excel in HR. You'll explore cutting-edge HR technologies, strategies for conflict resolution, and the ever-evolving legal aspects of the field.

            Upon completing this course, you'll not only earn a comprehensive understanding of HR but also develop the leadership abilities needed to drive organizational growth and employee engagement. Join us in this exciting journey to become a sought-after HR professional, ready to make a meaningful impact in the business world!"
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

export default Humanaccordian;
