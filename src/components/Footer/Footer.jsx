import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#about" className='footer__logo'>Ben Tran</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Ben Tran. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer