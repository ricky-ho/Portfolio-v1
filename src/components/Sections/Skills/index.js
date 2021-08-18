import React from "react"
import { useInView } from "react-intersection-observer"
import { Icon } from "../../Icons"
import { skills, srConfig } from "../../../config"

import "../../../styles/skills.scss"

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
          {skills.map((skill, index) => {
            return (
              <li
                key={index}
                className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
                data-animation-delay={Math.floor(index / 2) + 1}
              >
                <p>{skill}</p>
                <Icon name={skill} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Skills
