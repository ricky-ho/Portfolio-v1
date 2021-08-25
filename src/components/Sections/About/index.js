import React from "react"
import { useInView } from "react-intersection-observer"
import { srConfig } from "../../../config"
import AboutImage from "../../../assets/svg/profile_details.svg"

import "../../../styles/about.scss"

const About = () => {
  const [ref, inView] = useInView(srConfig.defaultOptions)

  return (
    <section
      ref={ref}
      id="about"
      className={`container animate ${inView ? "fadeInUp" : "initialFadeInUp"}`}
    >
      <div className="about__inner">
        <div className="section__header">
          <h2>About</h2>
        </div>
        <div className="about__content">
          <div className="about-text">
            <p>
              {`I am a recent graduate from UCLA with a B.S. in Mathematics of Computation, which is a combined mathematics & computer science major. During my college career, I gained valuable technical skills, some of which include data structures and algorithms, computer organization and architecture, and computer graphics. I also gained invaluable experience in promoting positive team dynamics and collaboration as the club president for a student-organized club. `}
            </p>
            <p>
              {`As a front-end software developer, I enjoy creating responsive applications and websites with professional-looking components and designs. Although my main expertise is on the front end, I am also familiar with back-end technologies and concepts including working with databases, RESTful APIs, and user authentication.`}
            </p>
            <p>{`My main technology stack is MongoDB, Express, React, and Node.js. However, I am always eager to learn new web technologies and best practices to improve upon my existing skillset and become an overall better software developer.`}</p>
          </div>
          <div className="about__img-wrap">
            <AboutImage className="about__img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
