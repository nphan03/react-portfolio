import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {FaUserGraduate} from 'react-icons/fa'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#skills' onClick={()=> setActiveNav('#skills')} className={activeNav === "#skills" ? 'active' : ''}><BiBook/></a>
      <a href='#projects' onClick={()=> setActiveNav('#projects')} className={activeNav === "#projects" ? 'active' : ''}><RiServiceLine/></a>
      <a href='#education' onClick={()=> setActiveNav('#education')} className={activeNav === "#education" ? 'active' : ''}><FaUserGraduate/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav