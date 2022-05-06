import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import {MdWavingHand} from 'react-icons/md';
import {FaRegSmileWink} from 'react-icons/fa';

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>
                <div className="about__content">
                    <p>Hi there <MdWavingHand className='emphasis'/> Thank you for stopping by my portforlio!</p>
                    <p>My name is <span className='emphasis'>Alice</span>, a {(new Date().getFullYear()) - 1998} years old <span className='emphasis'>full stack web developer</span> based in Vancouver, Canada.</p>

                    <p><span className='emphasis'>My love for web development</span>. I still remember the old days when I was very excited and curious about my first computer. I spent hours going through countless websites. I was impressed by the varied content and great designs of these websites. One day I had an idea how great it would be if I could be one of many experts in creating these apps and making them available to people all over the world. That's why I decided to start my journey to becoming a professional web developer. </p>

                    <p><span className='emphasis'>I'm enthusiastic about making things </span> and love to see people satisfied as they enjoy what I do. These are what drive me to overcome the problems I face and they accompany me through the painful hours of fixing bugs in my programs <FaRegSmileWink className='emphasis'/></p>
                    
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
};

export default About;