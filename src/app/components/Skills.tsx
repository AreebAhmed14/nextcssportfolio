import React from 'react'

const Skills = () => {
  return (
    <div>
      <div className="skill-heading">
        <h1>SKILLS</h1>
    </div>
    <div className="skills">
        <div className="progress-work">
            <h2>HTML</h2>
            <div className="back">
                <div className="innerhtml"></div>
            </div>
        </div>
        <div className="progress-work">
            <h2>CSS</h2>
            <div className="back">
                <div className="innercss"></div>

            </div>
        </div>
        <div className="progress-work">
            <h2>JAVASCRIPT</h2>
            <div className="back">
                <div className="innerjs"></div>
            </div>
        </div>
        <div className="progress-work">
            <h2>WORDPRESS</h2>
            <div className="back">
                <div className="innerwp"></div>
            </div>
        </div>
        <div className="progress-work">
            <h2>NEXT JS</h2>
            <div className="back">
                <div className="innernext"></div>
            </div>
        </div>
        <div className="progress-work lastone">
            <h2>TAILWIND CSS</h2>
            <div className="back">
                <div className="innertail"></div>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Skills
