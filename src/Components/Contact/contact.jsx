import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a1qid8z', 'template_88ydhzo', form.current, 'OxS2sZkJMEDsyfovc')
    
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
             <h4>Email</h4>
             <h5>nitishsamudrala@gmail.com</h5>
             <a href="mailto:nitishsamudrala@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
             <h4>Messenger</h4>
             <h5>nitishsamudrala</h5>
             <a href="https://m.me/nitishsamudrala" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
             <h4>WhatsApp</h4>
             <h5>+91 7396154780</h5>
             <a href="https://api.whatsapp.com/send?phone=917396154780" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" id='sendername'  placeholder='Your Full Name' required />
          <input type="email" id='senderemail'  placeholder='Your Email' required />
          <textarea  id='sendermsg' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact