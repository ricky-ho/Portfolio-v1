import * as React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

import "../../../styles/hero.scss"

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero__overlay"></div>
      <div className="hero__inner container">
        <h1>
          Hi, I'm <span>Ricky Ho</span>
        </h1>
        <div className="hero__text">
          <div></div>
          <p>
            I enjoy creating <span>responsive</span> and{" "}
            <span>interactive</span> web applications and experiences
          </p>
        </div>
        <p className="description">
          I am a <span>Front-End Developer</span> based in San Francisco,
          California.
        </p>
        <div className="cta-container">
          <a href="#projects" title="View my projects">
            My Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener referrer"
            title="View my resume"
          >
            Resume
          </a>
        </div>

        <div className="socials-container">
          <a
            href="https://github.com/ricky-ho"
            target="_blank"
            rel="noopener noreferrer"
            title="https://github.com/ricky-ho"
          >
            <FaGithub size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/ricky-ho-01/"
            target="_blank"
            rel="noopener noreferrer"
            title="https://www.linkedin.com/in/ricky-ho-01"
          >
            <FaLinkedin size={15} />
          </a>
          <a
            href="mailto:horicky.cs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="mailto:horicky.cs@gmail.com"
          >
            <FiMail size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
