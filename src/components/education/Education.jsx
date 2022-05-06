import React from 'react';
import './education.css';
import {FaSchool, FaAward} from 'react-icons/fa';
import {FcDiploma1} from 'react-icons/fc';

const Education = () => {
    return (
        <section id="education">
            <h5>Where I Studied</h5>
            <h2>Education and Awards</h2>
            
            <div className="container edu__container">
                    <article className='edu__content'>
                        <h3>Computer Studies</h3>
                        <div className="edu__detail">
                            <p>Jan 2019 - August 2021</p>
                            <p>Langara College</p>
                            <p>Degree: Diploma</p>
                            <p>GPA: 3.77</p>
                            <a href="https://langara.ca/programs-and-courses/programs/computer-studies/index.html" className="btn" target='_blank'>Program Info</a>
                        </div>
                    </article>

                    <article className='edu__content'>
                        <h3>Full Stack Web Development</h3>
                        <div className="edu__detail">
                            <p>May 2020 - April 2021</p>
                            <p>Langara College</p>
                            <p>Degree: Citation</p>
                            <p>GPA: 4.22</p>
                            <a href="https://langara.ca/programs-and-courses/programs/full-stack-web-development/index.html" className="btn" target='_blank'>Program Info</a>
                        </div>
                    </article>               
                
            </div>
        </section>
    )
};

export default Education;