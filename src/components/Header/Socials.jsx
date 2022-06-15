import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ben-tran-5048a211a/" target="_blank" rel="noreferrer">
            <BsLinkedin/>
            </a>
          <a href="https://github.com/btran33" target="_blank" rel="noreferrer">
            <BsGithub/>
            </a>
          <a href="https://www.facebook.com/giathien.tran.5/" target="_blank" rel="noreferrer">
              <BsFacebook/>
            </a>
    </div>
  )
}

export default Socials