import * as React from "react"
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

import "./skills.scss"

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills__inner container">
        <div className="section__header">
          <h2>Skills</h2>
          <div></div>
        </div>
        <ul>
          <li>
            HTML
            <HtmlIcon className="skills-icon" />
          </li>
          <li>
            CSS
            <CssIcon className="skills-icon" />
          </li>
          <li>
            SASS
            <SassIcon className="skills-icon" />
          </li>
          <li>
            JavaScript
            <JavascriptIcon className="skills-icon" />
          </li>
          <li>
            React
            <ReactIcon className="skills-icon" />
          </li>
          <li>
            Gatsby
            <GatsbyIcon className="skills-icon" />
          </li>
          <li>
            Node.js
            <NodeIcon className="skills-icon" />
          </li>
          <li>
            MongoDB
            <MongodbIcon className="skills-icon" />
          </li>
          <li>
            Git
            <GitIcon className="skills-icon" />
          </li>
          <li>
            Heroku
            <HerokuIcon className="skills-icon" />
          </li>
          <li>
            Netlify
            <NetlifyIcon className="skills-icon" />
          </li>
          <li>
            Figma
            <FigmaIcon className="skills-icon" />
          </li>
          <li>
            Python
            <PythonIcon className="skills-icon" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
