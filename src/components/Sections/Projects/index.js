import * as React from "react"

import "./projects.scss"

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects__inner container">
        <h2>Projects</h2>
        <div className="project-card">
          <div className="project-image"></div>
          <div>
            <h3>Project #1</h3>
            <p>Description</p>
            <ul>
              Technology
              <li>React</li>
            </ul>
            <div>
              <a href="" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a
                href="https://github.com/ricky-ho"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image"></div>
          <div>
            <h3>Project #2</h3>
            <p>Description</p>
            <ul>
              Technology
              <li>React</li>
            </ul>
            <div>
              <a href="" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a
                href="https://github.com/ricky-ho"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
