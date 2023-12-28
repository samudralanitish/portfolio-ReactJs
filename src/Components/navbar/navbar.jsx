import React from 'react'
import "./navbar.css"
import {AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUser } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
// import { SiReacthookform } from "react-icons/si";
import { CgNotes } from "react-icons/cg";
import { useState } from 'react';

const Navbar = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#' ?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ?'active':''} ><AiOutlineUser/></a>
      <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav==='#skills' ?'active':''} ><CgNotes/></a>
      <a href="#educations" onClick={()=>setActiveNav('#education')} className={activeNav==='#education' ?'active':''}><FaBookOpen/></a>
      <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav==='#projects' ?'active':''}><FaLaptopCode/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ?'active':''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Navbar