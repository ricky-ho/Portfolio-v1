import * as React from "react"
import "./hero.scss"

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero__inner container">
        <h1>
          <span>Hi, my name is </span>
          <span>Ricky Ho</span>
        </h1>
        <p>Aspiring front-end web developer</p>
        <a href="#projects" className="cta-btn">
          View My Projects
        </a>
      </div>
    </section>
  )
}

export default Hero
