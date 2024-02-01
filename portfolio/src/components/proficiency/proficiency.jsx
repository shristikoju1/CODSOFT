// Proficiency.js

import React from 'react';
import './proficiency.css';
import skillImg from '../../img/skill.jpg';


const Proficiency = () => {
  const skillsData = [
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Tailwind', level: 'Intermediate' },
    { name: 'Bootstrap', level: 'Intermediate' },
    { name: 'Nodejs', level: 'Beginner' },
    { name: 'Python', level: 'Intermedite' },
    // { name: 'AWS', level: 'Advanced' },
    // { name: 'SEO', level: 'Advanced' },
    // Add more skills as needed
  ];

  return ( 
  <div>
    <h2 className="Proficiency-heading"> My Skills</h2>

    <div id='proficiency'>
      <div className="Proficiency-container">

        <ul>
            {skillsData.map((skill, index) => (
              <li key={index} className="Proficiency-skill">
                <div className='list'>
                  <span className="Proficiency-skill-name">{skill.name}:</span>
                  <span className={`Proficiency-skill-level-block ${skill.level}`}></span>
                  <span className='level'> {skill.level}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
                
      <img src={skillImg} alt="skill" className='img' />
    
    </div>
    </div>
  );
};

export default Proficiency;
