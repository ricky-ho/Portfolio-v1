import React from "react"
import { useInView } from "react-intersection-observer"
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
import { srConfig } from "../../../config"

import "../../../styles/skills.scss"

// skills: [
//   "HTML",
//   "CSS",
//   "SASS",
//   "JavaScript",
//   "React",
//   "Gatsby",
//   "Node.js",
//   "MongoDB",
//   "Git",
//   "Netlify",
//   "Heroku",
//   "Figma",
//   "Python",
// ],

const Skills = () => {
  const [ref, inView] = useInView(srConfig.contentOptions)

  return (
    <section ref={ref} id="skills">
      <div
        className={`skills__inner container animate ${
          inView ? "fadeInUp" : "initialFadeInUp"
        }`}
      >
        <div className="section__header">
          <h2>Skills</h2>
        </div>
        <ul>
          <li
            className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
            data-animation-delay="1"
          >
            <p>HTML</p>
            <HtmlIcon className="skills-icon" />
          </li>
          <li
            className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
            data-animation-delay="1"
          >
            <p>CSS</p>
            <CssIcon className="skills-icon" />
          </li>
          <li
            className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
            data-animation-delay="2"
          >
            <p>SASS</p>
            <SassIcon className="skills-icon" />
          </li>
          <li
            className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
            data-animation-delay="2"
          >
            <p>JavaScript</p>
            <JavascriptIcon className="skills-icon" />
          </li>
          <li
            className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
            data-animation-delay="3"
          >
            <p>React</p>
            <ReactIcon className="skills-icon" />
          </li>
          <li
            className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
            data-animation-delay="3"
          >
            <p>Gatsby</p>
            <GatsbyIcon className="skills-icon" />
          </li>
          <li
            className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
            data-animation-delay="4"
          >
            <p>Node.js</p>
            <NodeIcon className="skills-icon" />
          </li>
          <li
            className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
            data-animation-delay="4"
          >
            <p>MongoDB</p>
            <MongodbIcon className="skills-icon" />
          </li>
          <li
            className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
            data-animation-delay="5"
          >
            <p>Git</p>
            <GitIcon className="skills-icon" />
          </li>
          <li
            className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
            data-animation-delay="5"
          >
            <p>Heroku</p>
            <HerokuIcon className="skills-icon" />
          </li>
          <li
            className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
            data-animation-delay="6"
          >
            <p>Netlify</p>
            <NetlifyIcon className="skills-icon" />
          </li>
          <li
            className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
            data-animation-delay="6"
          >
            <p>Figma</p>
            <FigmaIcon className="skills-icon" />
          </li>
          <li
            className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
            data-animation-delay="7"
          >
            <p>Python</p>
            <PythonIcon className="skills-icon" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
