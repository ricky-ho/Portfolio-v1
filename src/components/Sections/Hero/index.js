import React from "react"
import { Link } from "react-scroll"
import { Icon } from "../../Icons"
import { contactLinks } from "../../../config"

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
          <Link to="projects" smooth={true} offset={-50} duration={750}>
            My Projects
          </Link>
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
          {contactLinks.map((link, index) => {
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.url}
              >
                <Icon name={link.name} />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero
