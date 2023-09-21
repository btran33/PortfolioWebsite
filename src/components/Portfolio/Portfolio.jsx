import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/aichatdemo.mp4'
import IMG2 from '../../assets/insulin.webp'
import IMG3 from '../../assets/gasdemo.mp4'
import IMG4 from '../../assets/cryptobot.mp4'
import ReactPlayer from 'react-player'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'AI.Buddy',
    git: 'https://github.com/btran33/AI-Chat-SaaS',
    isVideo: true,
    hasLink: true,
    link: 'https://ai-chat-saas.vercel.app/',
    description: 'A SaaS focusing on empowering AI enthusiasts with companions to chat'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Insulin Supply Calculator',
    git: 'https://github.com/btran33/Insulin-PWA/',
    isVideo: false,
    hasLink: true,
    link: 'https://btran33.github.io/Insulin-PWA/',
    description: 'A service for doctors to swiftly calculate bulk insulin supplies for patients'
  },
  {
    id: 3,
    image: IMG3,
    title: '3D Gas Simulation',
    git: 'https://github.com/btran33/3D-Ideal-Gas-Simulation',
    isVideo: true,
    hasLink: false,
    description: 'A project simulating ideal gas with Maxwell-Boltzmann distribution graphs'
  },
  
  {
    id: 4,
    image: IMG4,
    title: 'CryptoBot',
    git: 'https://github.com/btran33/CryptoBot',
    isVideo: true,
    hasLink: false,
    description: 'A project enabling automation of trading in real time'
  },

  
]


const Portfolio = () => {
  return (
    <section id='portfolio'> 
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, image, title, git, isVideo, hasLink, link,description}) => {
            return (
              <article key={id} className="portfolio__item">
                {/* return either a reactPlayer or image */}
                <div className="portfolio__item-image">
                  { isVideo ?
                    <ReactPlayer className="portfolio__item-video" url={image} 
                      playing={true} loop={true} muted={true} 
                      width="100%" height="100%" /> 
                    :
                    <div>
                      <img src={image} alt={title} height="100%" width="100%"/>
                    </div>
                  }
                   
                </div>

                <h3>{title}</h3>
                <p className='text-light'>{description}</p>

                <div className="portfolio__item-cta">
                  <a href={git} className='btn'>Github</a>
                  {/* add link btn when needed */}
                  { hasLink ? 
                    <a href={link} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a> : null
                  }
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