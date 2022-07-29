import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'> 
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">

        {/* FRONTEND SECTION */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          
          <div className="experience__content">
            <article className='experience__details'>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Knowledgeable</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Knowledgeable</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Novice</small>
              </div>
            </article>
          </div>
        </div>
      
        {/* BACKEND SECTION */}
        <div className="experience__backend">
          <h3>Backend Development</h3>

          <div className="experience__content">
            <article className='experience__details'>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Knowledgeable</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Knowledgeable</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* SOFTWARE SECTION */}
        <div className="experience__software">
          <h3>Software Development</h3>

          <div className="experience__content">
            <article className='experience__details'>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Knowledgeable</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Knowledgeable</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4>C</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience