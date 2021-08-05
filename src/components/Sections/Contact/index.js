import * as React from "react"
import { IoMailUnreadOutline, IoPersonCircleOutline } from "react-icons/io5"

import "../../../styles/contact.scss"

const Contact = () => {
  return (
    <section id="contact" className="container">
      <div className="contact__inner">
        <div className="section__header">
          <h2>Contact</h2>
        </div>
        <div className="contact__card">
          <h2>Get In Touch</h2>
          <a
            href="mailto:horicky.cs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMailUnreadOutline className="io-mail" size={45} />
          </a>

          <p>Email me at</p>
          <p>horicky.cs@gmail.com</p>
        </div>
        <div className="contact__form-wrap">
          <div className="form__inner">
            <div className="form__header">
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
        {/*

        <div className="form-wrap">
          <form action="" className="contact-form" autoComplete="off">
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
            <button type="submit">Send</button>
          </form>
        </div> */}
      </div>
    </section>
  )
}

export default Contact
