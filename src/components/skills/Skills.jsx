import React from 'react'
import './skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const dataFrontEnd = [
  "HTML", "CSS", "JavaScript", "Bootstrap", "React"
];
const dataBackEnd = [
  "NodeJS", "Java", "PHP", "MySQL", "MongoDB"
];

const Skills = React.forwardRef((props, ref) => {
  return (
    <section id="skills" ref={ref}>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            {
              dataFrontEnd.map((skill, index) => {
                return(
                  <article key={index} className='skills__details'>
                  <BsFillPatchCheckFill className="skills__details-icon"/>
                  <h4>{skill}</h4>  
                  </article>
                )
              })
            }
          </div>
        </div>
        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            {
              dataBackEnd.map((skill, index) => {
                return(
                  <article key={index} className='skills__details'>
                  <BsFillPatchCheckFill className="skills__details-icon"/>
                  <h4>{skill}</h4>  
                  </article>
                )
              })
            }
          </div>
          </div>
        </div>
    </section>
  )
});

export default Skills