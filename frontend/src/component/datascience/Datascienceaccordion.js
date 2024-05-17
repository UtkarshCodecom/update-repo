import React, { useState } from 'react';
import './datascience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import { faPlus, faMinus, faArrowRight, faLock } from '@fortawesome/free-solid-svg-icons';
import user_profile_img from '../../images/6.png'
import {program_content} from './datasciencemockdata'

const Datascienceaccordion = () => {
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
            Dive deep into the world of data with our Data Science course! Discover the power of data-driven decision-making and embark on a journey of exploration and innovation. Learn to extract insights from vast datasets, build predictive models, and communicate your findings effectively.
            </p>
            <p>
            Our program equips you with the tools and techniques to solve real-world problems, from business analytics to cutting-edge research. With hands-on experience and mentorship from industry experts, you'll become a Data Scientist capable of driving value through data.

            Join us and unlock the endless possibilities of the data universe!
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
  <img src={'https://campalin.com/Courses/images/Mentor/mentor2.png'} alt=''  className='h-20 w-20 rounded-xl p-2 '/>
  <div className='text-container '>
    <h1 className='title'>Instructor || Satyanarayana Koushik</h1>
    <p className='tt'>ESenior Data Analyst</p>
    <p className='tt'>Experience in Data Visualization, Data Cleaning/Modelling, Business Intelligence and statistical analysis.
Adept at leveraging BI tools and extract useful Insights from the given set of data. Build complex custom-designed solutions that use a wide range of the latest technologies.</p>
  </div>
</div>

<div  className='whole'>

<Button variant='outlined'>Download curriculum</Button>
           
       </div >
      

     </div>
     
    </div>
  );
};

export default Datascienceaccordion;
