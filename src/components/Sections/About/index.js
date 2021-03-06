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
              {`I am a recent graduate from UCLA with a B.S. in Mathematics & Computer Science. During my college career, I gained valuable technical skills, some of which include data structures & algorithms, computer organization & architecture, and computer graphics. I also have invaluable experience working in a collaborative environment and promoting positive team dynamics as the club president for a student-organized club at UCLA.`}
            </p>
            <p>
              {`As a frontend software engineer, I enjoy creating responsive and interactive web applications with simple, yet visually appealing designs and user interfaces. Although my main expertise is working on the frontend, I am also familiar with backend tools and technologies including working with databases, RESTful APIs, and user authentication.`}
            </p>
            <p>{`I always strive to learn and to improve in order to become both a better person and a better software engineer.`}</p>
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
