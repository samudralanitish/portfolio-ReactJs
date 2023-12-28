import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
function HeaderSocials() {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/samudrala-nitish-7448a9244/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/samudralanitish/" target='_blank'><FaGithub/></a>
        <a href="https://leetcode.com/ReddySaiNitishSamudrala/" target='_blank'><SiLeetcode/></a>

    </div>
    
  )
}

export default HeaderSocials