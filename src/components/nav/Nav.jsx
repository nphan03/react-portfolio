import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {FaUserGraduate} from 'react-icons/fa'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {MdWebStories} from 'react-icons/md';
import {ImCog} from 'react-icons/im';

const Nav = params => {
  //states passed from App
  const setActiveNav = params.setActiveNav;
  const activeNav = params.activeNav;

  return (
    <nav>
      {/*title='Home': create mouseover text */}
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiOutlineHome title='Home'/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><AiOutlineUser title='About'/></a>
      <a href='#skills' onClick={()=> setActiveNav('#skills')} className={activeNav === "#skills" ? 'active' : ''}><ImCog title='Skills'/></a>
      <a href='#projects' onClick={()=> setActiveNav('#projects')} className={activeNav === "#projects" ? 'active' : ''}><MdWebStories title='Projects'/></a>
      <a href='#education' onClick={()=> setActiveNav('#education')} className={activeNav === "#education" ? 'active' : ''}><FaUserGraduate title='Education'/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><BiMessageSquareDetail title='Contact'/></a>
    </nav>
  )
}

export default Nav