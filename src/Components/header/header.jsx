import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../../assets/me1.png"
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Samudrala Nitish</h1>
      <h5 className='text-light'>Full Stack Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img className="fixed" src={ME} alt="me" />
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
    </header>
  )
}
// function Header() {
//   return (
//     <header>
//       <div className='container header__container'>
//         <div className="header-content">
//           <h5>Hello I'm</h5>
//           <h1>Samudrala Nitish</h1>
//           <h5 className='text-light'>Full Stack Developer</h5>
//           <CTA />
//           <HeaderSocials />
//         </div>
//         <div className="me">
//           <img className="fixed" src={ME} alt="me" />
//         </div>
//         <a href="#contact" className='scroll__down'>Scroll Down</a>
//       </div>
//     </header>
//   );
// }


export default Header