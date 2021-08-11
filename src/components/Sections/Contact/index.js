import * as React from "react"
import { IoPersonCircleOutline } from "react-icons/io5"
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai"

import "../../../styles/contact.scss"

const Contact = () => {
  return (
    <section id="contact" className="container">
      <div className="contact__inner">
        <div className="contact__card">
          <h2>Get In Touch</h2>
          <div className="contact__options">
            <ul>
              <li>
                <span>
                  <AiOutlineMail size={20} />
                </span>
                <a
                  href="mailto:horicky.cs@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  horicky.cs@gmail.com
                </a>
              </li>
              <li>
                <span>
                  <AiOutlineGithub size={20} />
                </span>
                <a
                  href="https://github.com/ricky-ho"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <span>
                  <AiFillLinkedin size={20} />
                </span>
                <a
                  href="https://www.linkedin.com/in/ricky-ho-01/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact__form-wrap">
          <div className="form-wrap__inner">
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
              <input
                type="email"
                id="email"
                placeholder="Your email*"
                required
              />
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
        </div>
      </div>
    </section>
  )
}

export default Contact
