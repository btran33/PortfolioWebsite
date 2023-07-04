import React from 'react'
import './experience.css'

import HTML from '../../assets/language_icons/Html.webp'
import CSS from '../../assets/language_icons/TailwindCSS.webp'
import JAVASCRIPT from '../../assets/language_icons/Javascript.webp'
import REACT from '../../assets/language_icons/React.webp'
import PYTHON from '../../assets/language_icons/Python.webp'
import SQL from '../../assets/language_icons/Sql.webp'
import MONGODB from '../../assets/language_icons/MongoDB.webp'
import FIREBASE from '../../assets/language_icons/Firebase.webp'
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
      "Javascript": JAVASCRIPT,
      "React": REACT
    }
  },
  {
    category: "Backend Development",
    className: "experience__backend",
    experience : {
      "Python": PYTHON,
      "SQL": SQL,
      "MongoDB": MONGODB,
      "Firebase": FIREBASE
    }
  },

  {
    category: "Software Development",
    className: "experience__software",
    experience : {
      "Java": JAVA,
      "C++": CPP,
      "C": C,
      "Go": GO
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