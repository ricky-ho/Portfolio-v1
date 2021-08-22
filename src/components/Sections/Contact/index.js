import React from "react"
import ContactForm from "./ContactForm"
import { useInView } from "react-intersection-observer"
import { Icon } from "../../Icons"
import { email, contactLinks, srConfig } from "../../../config"

import "../../../styles/contact.scss"

const Contact = () => {
  const [ref, inView] = useInView(srConfig.defaultOptions)

  return (
    <section
      ref={ref}
      id="contact"
      className={`container animate ${inView ? "fadeInUp" : "initialFadeInUp"}`}
    >
      <div className="section__header">
        <h2>Get In Touch</h2>
        <p>
          Contact me using the form below or message me using any of the links
        </p>
      </div>
      <div className="contact__inner">
        <ContactForm inView={inView} />
        <ContactLinks inView={inView} />
      </div>
    </section>
  )
}

const ContactLinks = ({ inView }) => {
  return (
    <div className="contact__links">
      <div className="links__wrap">
        <ul>
          {contactLinks.map((link, index) => {
            return (
              <li
                key={index}
                className={`animate ${inView ? "fadeInUp" : "initialFadeInUp"}`}
                data-animation-delay={index + 2}
              >
                <h4>
                  {link.name}{" "}
                  <span>
                    <Icon name={link.name} />
                  </span>{" "}
                </h4>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name === "Email" ? email : link.url}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Contact
