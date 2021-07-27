import * as React from "react"
import { IoMailUnreadOutline } from "react-icons/io5"

import "./contact.scss"

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__inner container">
        <div className="section__header">
          <h2>Contact</h2>
          <div></div>
        </div>
        <div className="email-card">
          <div>
            <IoMailUnreadOutline className="io-mail" size={120} />
          </div>
          <div>
            <p>Email Me</p>
            <a
              href="mailto:horicky.cs@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              horicky.cs@gmail.com
            </a>
          </div>
        </div>

        <div>
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
        </div>
      </div>
    </section>
  )
}

export default Contact
