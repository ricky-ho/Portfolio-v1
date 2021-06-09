import * as React from "react"

import "./contact.scss"

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__inner container">
        <h2>Contact Me</h2>
        <p>
          Feel free to send me an email at horicky2016@gmail.com or use the form
          below.
        </p>
        <form action="" className="contact-form">
          <input type="name" id="name" placeholder="Your name" required />
          <input type="email" id="email" placeholder="Your email" required />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
