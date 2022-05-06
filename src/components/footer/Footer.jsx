import React from 'react';
import './footer.css'
import {FaCanadianMapleLeaf} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>MS PHAN</a>
        
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__timestamp">
            <p>Alice {<FaCanadianMapleLeaf className="footer__icon"/>} Vancouver 2022</p>
        </div>
    </footer>
  )
}

export default Footer