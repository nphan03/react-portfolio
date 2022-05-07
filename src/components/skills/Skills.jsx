import React from 'react'
import './skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Skills = React.forwardRef((props, ref) => {
  return (
    <section id="skills" ref={ref}>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsFillPatchCheckFill className="skills__details-icon"/>
              <h4>HTML</h4>  
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className="skills__details-icon"/>
              <h4>CSS</h4>  
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className="skills__details-icon"/>
              <h4>JavaScript</h4>  
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className="skills__details-icon"/>
              <h4>Bootstrap</h4>  
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className="skills__details-icon"/>
              <h4>React</h4>  
            </article>
          </div>
        </div>
        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsFillPatchCheckFill className="skills__details-icon"/>
              <h4>Node JS</h4>  
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className="skills__details-icon"/>
              <h4>MongoDB</h4>  
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className="skills__details-icon"/>
              <h4>MySQL</h4>  
            </article>
            <article className='skills__details'>
              <BsFillPatchCheckFill className="skills__details-icon"/>
              <h4>PHP</h4>  
            </article>
          </div>
          </div>
        </div>
    </section>
  )
});

export default Skills