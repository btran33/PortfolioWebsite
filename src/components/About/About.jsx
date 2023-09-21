import React from 'react'
import './about.css'

import { FaAward, FaGraduationCap, FaRegFolderOpen } from 'react-icons/fa'
import ME from '../../assets/me-about2.webp'
import ME_CAT from '../../assets/me-about-cat.webp'

const About = () => {
  return (
    <section id='about'>

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">


          <div className="about__me-front">
            <img src={ME} alt="About" height="100%" width="100%"/>
          </div>

          <div className="about__me-back">
            <img src={ME_CAT} alt="About" height="100%" width="100%"/>
          </div>

        </div>

        <div className="about__content">
          
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Developer</small>
            </article>

            <article className='about__card'>
              <FaGraduationCap className='about__icon' />
              <h5>Education</h5>
              <small>Graduate Level</small>
            </article>

            <article className='about__card'>
              <FaRegFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>

          <p>
            I am an aspiring full stack software developer/engineer, 
            graduated with Professional Masters of Computer Science program at UIUC.
            I like to listen to music, take occasional portraits of my cats,
            and create impactful software projects during my free time.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About