import React from 'react'
import "./about.css"
import ME from'../../assets/IMG_20230702_195844_203.jpg'
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <SiLeetcode className='about__icon'/>
              <h5>LeetCode</h5>
              <small>250+ Problems solved</small>
            </article>
            <article className='about__card'>
              <FaGithub className='about__icon'/>
              <h5>GitHub</h5>
              <small>Tech Related Repo's</small>
            </article>
            <article className='about__card'>
              <FaLaptopCode className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>As a dedicated computer science student, I thrive in dynamic environments, seeking a role that fosters learning, creativity, and challenges. Proficient in HTML5, CSS3, JavaScript, ReactJS, Core Java, Core Python, MySQL, JDBC, Bootstrap, Hibernate, Spring Core, Spring Boot, and skilled in DSA with Java. I bring strong communication, leadership, problem-solving, and adaptability to drive both personal and organizational growth.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About