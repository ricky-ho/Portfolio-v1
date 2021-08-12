import * as React from "react"
import { IoPersonCircleOutline } from "react-icons/io5"
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai"

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
        <IoPersonCircleOutline
          className="io-person-circle"
          color="white"
          size={75}
        />
        <div>
          <svg
            viewBox="0 0 100 100"
            width="10"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="lime" />
          </svg>
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
          <li>
            <h4>
              Email
              <span>
                <AiOutlineMail size={20} />
              </span>
            </h4>
            <a
              href="mailto:horicky.cs@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              horicky.cs@gmail.com
            </a>
          </li>
          <li>
            <h4>
              Github
              <span>
                <AiOutlineGithub size={20} />
              </span>
            </h4>
            <a
              href="https://github.com/ricky-ho"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/ricky-ho
            </a>
          </li>
          <li>
            <h4>
              Linkedin
              <span>
                <AiFillLinkedin size={20} />
              </span>
            </h4>

            <a
              href="https://www.linkedin.com/in/ricky-ho-01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/ricky-ho-01
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
