import React from 'react'
import './footer.css'

import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ben Tran</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/giathien.tran.5/"> 
        <BsFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ben Tran. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer