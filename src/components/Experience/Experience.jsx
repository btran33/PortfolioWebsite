import React from 'react'
import './experience.css'

const data = [
  {
    category: "Frontend Development",
    className: "experience__frontend",
    experience : {
      "HTML": "Knowledgeable",
      "CSS": "Intermediate",
      "Javascript": "Knowledgeable",
      "React": "Intermediate"
    }
  },
  {
    category: "Backend Development",
    className: "experience__backend",
    experience : {
      "Python": "Knowledgeable",
      "SQL": "Knowledgable",
      "MongoDB": "Intermediate",
      "Firebase": "Intermediate"
    }
  },

  {
    category: "Software Development",
    className: "experience__software",
    experience : {
      "Java": "Knowledgeable",
      "C++": "Knowledgable",
      "C": "Intermediate",
      "Go": "Intermediate"
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
                    Object.entries(experience).map(([skill, level]) => {
                      return (
                        <article key={className + "_" + skill} className='experience__details'>
                          <div>
                            <h4>{skill}</h4>
                            <small className='text-light'>{level}</small>
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