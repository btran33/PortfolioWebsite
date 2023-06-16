import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ben-tran-5048a211a/" target="_blank" rel="noreferrer">
            <BsLinkedin/>
            </a>
          <a href="https://github.com/btran33" target="_blank" rel="noreferrer">
            <BsGithub/>
            </a>

    </div>
  )
}

export default Socials