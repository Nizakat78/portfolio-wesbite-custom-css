import React from 'react'
import "../app/styles/Skills.css"

const Skills = () => {
  return (
    <div  id ="Skills" className='skills-container'>
    <div className="skills-grid">
        < div className="skills-left" data-aos="zoom-in">
           <h2 className="skill-heading" data-aos="zoom-in"> Technologies I work with </h2>
              <p   className='skills-text' data-aos="zoom-in">
              I specialize in blockchain technology and web development, focusing on token creation and smart contracts. With experience in launching presale tokens, I ensure secure transactions and compliance. Proficient in Solidity, TypeScript, and Twailwind CSS, I develop decentralized applications (dApps) that enhance user experience. Passionate about blockchain innovation, I aim to create practical solutions that drive the industry forward.
             </p>
      </div>    
     <div  className='skills-right'>
        <div className="skills-icons-grid">
            <div className='skills-space'>
                <h2 data-aos="zoom-in-left">Typescript</h2>
                <h2 data-aos="zoom-in-left">Solidity</h2>
                <h2 data-aos="zoom-in-left">Next.js</h2>
            </div>
            <div className='skills-space'>
                <h2 data-aos="zoom-out-left">Twailwind CSS</h2>
                <h2 data-aos="zoom-out-left">HTML</h2>
                <h2 data-aos="zoom-out-left">React</h2>
            </div>
        </div>
    </div>
    </div>
      
    </div>
  )
  }

export default Skills
