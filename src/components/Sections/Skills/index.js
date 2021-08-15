import React from "react"
import {
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  SassIcon,
  ReactIcon,
  GitIcon,
  NodeIcon,
  MongodbIcon,
  NetlifyIcon,
  GatsbyIcon,
  HerokuIcon,
  FigmaIcon,
  PythonIcon,
} from "../../../assets"

import "../../../styles/skills.scss"

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills__inner container">
        <div className="section__header">
          <h2>Skills</h2>
        </div>
        <ul>
          <li>
            <p>HTML</p>
            <HtmlIcon className="skills-icon" />
          </li>
          <li>
            <p>CSS</p>
            <CssIcon className="skills-icon" />
          </li>
          <li>
            <p>SASS</p>
            <SassIcon className="skills-icon" />
          </li>
          <li>
            <p>JavaScript</p>
            <JavascriptIcon className="skills-icon" />
          </li>
          <li>
            <p>React</p>
            <ReactIcon className="skills-icon" />
          </li>
          <li>
            <p>Gatsby</p>
            <GatsbyIcon className="skills-icon" />
          </li>
          <li>
            <p>Node.js</p>
            <NodeIcon className="skills-icon" />
          </li>
          <li>
            <p>MongoDB</p>
            <MongodbIcon className="skills-icon" />
          </li>
          <li>
            <p>Git</p>
            <GitIcon className="skills-icon" />
          </li>
          <li>
            <p>Heroku</p>
            <HerokuIcon className="skills-icon" />
          </li>
          <li>
            <p>Netlify</p>
            <NetlifyIcon className="skills-icon" />
          </li>
          <li>
            <p>Figma</p>
            <FigmaIcon className="skills-icon" />
          </li>
          <li>
            <p>Python</p>
            <PythonIcon className="skills-icon" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
