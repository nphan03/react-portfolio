import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/alice-phan-ab1a08198/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/nphan03" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials