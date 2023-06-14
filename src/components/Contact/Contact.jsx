import React, { useRef } from 'react'
// import emailjs from '@emailjs/browser'
import './contact.css'

import { AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin } from 'react-icons/ai'
// import { RiMessengerLine } from 'react-icons/ri'

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_5m5sp6s', 'template_43t98gf', form.current, 'X7m672Fbo-yesTrIa')
  //     .then((result) => {
  //       // TODO: Pop-up message indicating a success or fail
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });

  //   e.target.reset();
  // };

  return (
    <section id='contact'> 
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      {/* <div className="contact__options"> */}
        
        <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>btran30003@gmail.com</h5>
            <a href="mailto:btran30003@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
        </article>

        <article className="contact__option">
          <AiOutlineLinkedin className='contact__option-icon'/>
          <h4>LinkedIn</h4>
          <h5>Ben Tran</h5>
            <a href="https://www.linkedin.com/in/ben-tran-5048a211a/" target="_blank" rel="noreferrer">Send a Message</a>
        </article>

        <article className="contact__option">
          <AiOutlinePhone className='contact__option-icon'/>
          <h4>Phone</h4>
            <a href="mailto:8155031483">+1 815-503-1483</a>
        </article>
      {/* </div> */}

      {/* BEGIN CONTACT FORM*/
      /* <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'> Send Message</button>
      </form> */}

    </div>
    </section>
  )
}

export default Contact