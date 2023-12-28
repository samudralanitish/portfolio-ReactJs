import React from 'react'
import "./projects.css"
import IMG9 from '../../assets/MergedImages.png'
import IMG1 from '../../assets/quiz.png'
import IMG2 from '../../assets/to_do.gif'
import IMG3 from '../../assets/tictactoe.gif'
import IMG4 from '../../assets/juicess.png'
import IMG5 from '../../assets/calc.gif'
import IMG6 from '../../assets/routes.png'
import IMG7 from '../../assets/bookstore.jpg'
import IMG8 from '../../assets/college.png'

const data =[
  {
    id:1,
    image:IMG9,
    title:'Nitish Samudrala Portfolio',
    github:'https://github.com/samudralanitish/portfolio-ReactJs',
    demo:'https://nitishsamudrala.netlify.app/'
  },
  {
    id:2,
    image:IMG1,
    title:'Quiz App using ReactJS',
    github:'https://github.com/samudralanitish/Quiz-App-ReactJs',
    demo:'https://nitish-quizapp.netlify.app/'
  },
  {
    id:3,
    image:IMG2,
    title:'To Do List using ReactJS',
    github:'https://github.com/samudralanitish/ToDoList-ReactJs',
    demo:'https://nitish-todolist.netlify.app/'
  },
  {
    id:4,
    image:IMG3,
    title:'Tic Tac Toe using ReactJS ',
    github:'https://github.com/samudralanitish/TicTacToe-ReactJs',
    demo:'https://nitish-tictactoe.netlify.app/'
  },
  {
    id:5,
    image:IMG4,
    title:'Juicy Heaven using ReactJS ',
    github:'https://github.com/samudralanitish/TicTacToe-ReactJs',
    demo:'https://nitish-juicyheaven7.netlify.app/'
  },
  {
    id:6,
    image:IMG5,
    title:'Basic Calculator App',
    github:'https://github.com/samudralanitish/Basic-Calculator',
    demo:'https://nitish-calculator.netlify.app/'
  },
  {
    id:7,
    image:IMG6,
    title:'Basic React Routes',
    github:'https://github.com/samudralanitish/React-Routes',
    demo:'https://nitish-react-routes.netlify.app/'
  },
  {
    id:8,
    image:IMG7,
    title:'Online Bookstore Web App using Spring Boot',
    github:'https://github.com/samudralanitish/onlinebookstore/',
    demo:'https://github.com/samudralanitish/onlinebookstore/'
  },
  
  {
    id:9,
    image:IMG8,
    title:'Our College Website using HTML/CSS',
    github:'https://github.com/samudralanitish/College__Website',
    demo:'https://beamish-llama-aead59.netlify.app/'
  }
  
]
function Projects() {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id } className="project__item">
          <div className="project__item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="project__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>        
        </article>
            )
          }) 
        }
      </div>
    </section>
  )
}

export default Projects