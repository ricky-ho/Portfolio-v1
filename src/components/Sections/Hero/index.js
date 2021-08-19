import React from "react"
import { Link } from "react-scroll"
import { useInView } from "react-intersection-observer"
import { Icon } from "../../Icons"
import { contactLinks, srConfig } from "../../../config"

import "../../../styles/hero.scss"

const Hero = () => {
  const [ref, inView] = useInView(srConfig.initialOnScreenOptions)

  return (
    <section id="hero">
      <div className="hero__overlay"></div>
      <div ref={ref} className="hero__inner container">
        <h1
          data-animation-delay="1"
          className={`animate ${inView ? "fadeIn" : "initialFadeIn"}`}
        >
          Hi, I'm <span>Ricky Ho</span>
        </h1>
        <div
          data-animation-delay="2"
          className={`hero__text animate ${
            inView ? "fadeIn" : "initialFadeIn"
          }`}
        >
          <div></div>
          <p>
            I create <span>responsive</span> and <span>interactive</span> web
            applications and experiences
          </p>
        </div>
        <p
          data-animation-delay="3"
          className={`description animate ${
            inView ? "fadeIn" : "initialFadeIn"
          }`}
        >
          I am a <span>Front-End Developer</span> based in San Francisco,
          California.
        </p>
        <div
          data-animation-delay="4"
          className={`cta-container animate ${
            inView ? "fadeIn" : "initialFadeIn"
          }`}
        >
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

        <div
          data-animation-delay="5"
          className={`socials-container animate ${
            inView ? "fadeIn" : "initialFadeIn"
          }`}
        >
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
