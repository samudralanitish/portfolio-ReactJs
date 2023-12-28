import React from 'react'
import './skills.css'
import { BiSolidBadgeCheck } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { SiHibernate } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
const Skills = () => {
    return (
        <section id='skills'>
          <h5>What Skills I Have</h5>
          <h2>My Skills</h2>
          <div className="container skills__container">
            <div className="skills__frontend">
              <h3>Frontend Development</h3>
              <div className="skills__content">
                <article className='skills__details'><FaHtml5 className='skills__details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
                </article>  
                <article className='skills__details'><FaCss3Alt className='skills__details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                </article>
                <article className='skills__details'><TbBrandJavascript className='skills__details-icon'/>
                <div>
                <h4>Java Script</h4>
                <small className='text-light'>Intermediate</small>

                </div>
                </article>
                <article className='skills__details'><FaReact className='skills__details-icon'/>
                <div>
                <h4>React JS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                </article> 
                <article className='skills__details'><FaBootstrap className='skills__details-icon'/>
                <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>

                </div>
                </article> 
              </div>
            </div>
            <div className="skills__backend">
              <h3>Backend Development</h3>
              <div className="skills__content">
                <article className='skills__details'><FaJava className='skills__details-icon'/>
                <div>
                <h4>Core Java</h4>
                <small className='text-light'>Advanced</small>

                </div>
                </article>  
                <article className='skills__details'><FaPython className='skills__details-icon'/>
                  <div>
                  <h4>Core Python</h4>
                <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='skills__details'><SiMysql className='skills__details-icon'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='skills__details'><FaDatabase className='skills__details-icon'/>
                <div>
                <h4>JDBC</h4>
                <small className='text-light'>Intermediate</small></div>
                </article> 
                <article className='skills__details'><SiHibernate className='skills__details-icon'/>
                <div>
                <h4>Hibernate</h4>
                <small className='text-light'>Intermediate</small></div>
                </article> 
                <article className='skills__details'><SiSpring className='skills__details-icon'/>
                <div>
                <h4>Spring Core</h4>
                <small className='text-light'>Intermediate</small></div>
                </article> 
                <article className='skills__details'><SiSpringboot className='skills__details-icon'/>
                <div>
                <h4>SpringBoot</h4>
                <small className='text-light'>Intermediate</small></div>
                </article> 
              </div>
            </div>
          </div>
          
        </section>
      )
}

export default Skills