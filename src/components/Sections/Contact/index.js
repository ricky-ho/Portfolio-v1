import React from "react"
import { Icon } from "../../Icons"
import { email, contactLinks } from "../../../config"

import "../../../styles/contact.scss"

const Contact = () => {
  return (
    <section id="contact" className="container">
      <div className="section__header">
        <h2>Get In Touch</h2>
        <p>
          Contact me using the form below or message me using any of the links
        </p>
      </div>
      <div className="contact__inner">
        <ContactForm />
        <ContactLinks />
      </div>
    </section>
  )
}

const ContactForm = () => {
  return (
    <div className="contact__form-wrap">
      <div className="form-wrap__header">
        <Icon name="Person" />
        <div>
          <Icon name="Circle" />
          <span>Active</span>
        </div>
      </div>
      <form action="" autoComplete="off">
        <input type="name" id="name" placeholder="Your name*" required />
        <input type="email" id="email" placeholder="Your email*" required />
        <input type="text" id="subject" placeholder="Subject*" required />
        <textarea
          name="message"
          id="message"
          rows="6"
          placeholder="Your message*"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

const ContactLinks = () => {
  return (
    <div className="contact__links">
      <div className="links__wrap">
        <ul>
          {contactLinks.map((link, index) => {
            return (
              <li key={index}>
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
