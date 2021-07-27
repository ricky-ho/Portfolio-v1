import * as React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

import "./hero.scss"

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero__inner container">
        <h1>
          <span>Hi, my name is </span>
          <span>RICKY HO</span>
        </h1>
        <p className="description">
          I'm a San Francisco-based web developer with an interest in{" "}
          <span>Front-End Web Development </span> and a passion for creating
          responsive and interactive web applications.
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
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ricky-ho-01/"
            target="_blank"
            rel="noopener noreferrer"
            title="https://www.linkedin.com/in/ricky-ho-01"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:horicky.cs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="mailto:horicky.cs@gmail.com"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
