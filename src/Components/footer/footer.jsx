import React from 'react'
import "./footer.css"
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>SAMUDRALA NITISH</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#educations">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com/samudralanitish"><FaFacebook/></a>
        <a href="https://instagram.com/samudralanitish"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/samudrala-nitish-7448a9244/"><FaLinkedin/></a>
        <a href="https://www.github.com/samudralanitish/"><FaGithub/></a>
        <a href="https://leetcode.com/ReddySaiNitishSamudrala/"><SiLeetcode/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Nitish Samudrala. All rights reserved .</small>
      </div>
    </footer>
  )
}

export default Footer