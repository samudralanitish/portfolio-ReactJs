import React from 'react'
import './education.css';
import { FaSchool } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";
const Education = () => {
  return (
    <section id='educations'>
      <h5>My Education</h5>
      <h2>Carrer</h2>
      <div className="container educations__container">
        <article className="education">
          <div className="education__head">
            <h3>10th Standard</h3>
          </div>
          <ul className='education__list'>
            <li>
              <FaSchool className='education__list-icon'/>
              <p>School : Nagarjuna High School</p>
            </li>
            <li>
              <LuCalendarClock className='education__list-icon'/>
              <p>Batch : 2016 - 2017</p>
            </li>
            <li>
              <IoMdCheckmark className='education__list-icon'/>
              <p>CGPA : 10.0</p>
            </li>
          </ul>
        </article>


        <article className="education">
          <div className="education__head">
            <h3>Intermediate</h3>
          </div>
          <ul className='education__list'>
            <li>
              <FaSchool className='education__list-icon'/>
              <p>College : Sri Chaitanya College</p>
            </li>
            <li>
              <FiBook className='education__list-icon'/>
              <p>Specialization : MPC</p>
            </li>
            <li>
              <LuCalendarClock className='education__list-icon'/>
              <p>Batch : 2017 - 2019</p>
            </li>
            <li>
              <IoMdCheckmark className='education__list-icon'/>
              <p>CGPA : 9.88</p>
            </li>
            
          </ul>
        </article>


        <article className="education">
          <div className="education__head">
            <h3>B.TECH</h3>
          </div>
          <ul className='education__list'>
            <li>
              <FaSchool className='education__list-icon'/>
              <p>College : KSRMCE</p>
            </li>
            <li>
              <FiBook className='education__list-icon'/>
              <p>Branch : CSE</p>
            </li>
            <li>
              <LuCalendarClock className='education__list-icon'/>
              <p>Batch : 2019 - 2023</p>
            </li>
            <li>
              <IoMdCheckmark className='education__list-icon'/>
              <p>CGPA : 8.18</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Education