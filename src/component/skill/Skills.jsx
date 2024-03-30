import React from 'react';
import './skill.css';
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import OtherSkill from './OtherSkill';


const Skills = () => {
  return (
   <section className="skill section" id="skills">
      <h2 className="section__title ">Skills</h2>
       <span className="section__subtitle sub">My technical level</span>
        <div className="skills__container container grids">
          <FrontEnd/>
          <BackEnd/>
          <OtherSkill />
         
        </div>
   </section>
  );
};

export default Skills;