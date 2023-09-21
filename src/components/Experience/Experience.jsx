import React from 'react'
import './experience.css'

import HTML from '../../assets/language_icons/Html.webp'
import CSS from '../../assets/language_icons/TailwindCSS.webp'
import JAVASCRIPT from '../../assets/language_icons/Javascript.webp'
import REACT from '../../assets/language_icons/React.webp'
import NEXT from '../../assets/language_icons/nextjs.webp'
import SVELTE from '../../assets/language_icons/svelte.webp'

import PYTHON from '../../assets/language_icons/Python.webp'
import SQL from '../../assets/language_icons/Sql.webp'
import NODE from '../../assets/language_icons/node.png'
import FIREBASE from '../../assets/language_icons/Firebase.webp'
import REDIS from '../../assets/language_icons/redis.webp'

import JAVA from '../../assets/language_icons/Java.webp'
import CPP from '../../assets/language_icons/C++.webp'
import C from '../../assets/language_icons/C.webp'
import GO from '../../assets/language_icons/Go.webp'

const data = [
  {
    category: "Frontend Development",
    className: "experience__frontend",
    experience : {
      "HTML": HTML,
      "CSS/Tailwind": CSS,
      "Java/Typescript": JAVASCRIPT,
      "React": REACT,
      "NextJs": NEXT,
      "Svelte": SVELTE,
    }
  },
  {
    category: "Backend Development",
    className: "experience__backend",
    experience : {
      "Node.js": NODE,
      "Python": PYTHON,
      "SQL": SQL,
      "Firebase": FIREBASE,
      "Redis": REDIS,
    }
  },

  {
    category: "Software Development",
    className: "experience__software",
    experience : {
      "Go": GO,
      "C++": CPP,
      "C": C,
      "Java": JAVA,
    }
  },
]

const Experience = () => {
  return (
    <section id='experience'> 
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">
      {
        data.map(({category, className, experience}) => {
          return (
            <div key={className} className={className}>
              <h3>{category}</h3>
              {
                <div className="experience__content">
                  {
                    Object.entries(experience).map(([skill, icon]) => {
                      return (
                        <article key={className + "_" + skill} className='experience__details'>
                          <div>
                            {/* <small className='text-light'>{level}</small> */}
                            <img src={icon} alt={skill+'_LOGO'} className='experience__details_img'/>
                            <h4>{skill}</h4>
                          </div>
                        </article>
                      )
                    })
                  }
                </div>
              }
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Experience