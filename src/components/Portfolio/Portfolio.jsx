import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'CryptoBot',
    git: 'https://github.com/btran33/CryptoBot',
    demo: 'https://github.com/btran33/CryptoBot'
  },

  {
    id: 2,
    image: IMG2,
    title: '3D Gas Simulation',
    git: 'https://github.com/btran33/3D-Ideal-Gas-Simulation',
    demo: 'https://github.com/btran33/3D-Ideal-Gas-Simulation'
  },

  {
    id: 3,
    image: IMG3,
    title: 'TimeLapse App',
    git: 'https://github.com/btran33/TimeLapse-App',
    demo: 'https://github.com/btran33/TimeLapse-App'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Heated Crimes',
    git: 'https://github.com/btran33/HeatedCrimes',
    demo: 'https://github.com/btran33/HeatedCrimes'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'> 
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, image, title, git, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={git} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio