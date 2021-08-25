import React, { useState } from "react"
import { Icon } from "../../Icons"
import emailjs from "emailjs-com"

const ContactForm = ({ inView }) => {
  return (
    <div
      className={`contact__form-wrap animate ${
        inView ? "fadeInUp" : "initialFadeInUp"
      }`}
      data-animation-delay="1"
    >
      <div className="form-wrap__header">
        <Icon name="Person" />
        <div>
          <Icon name="Circle" />
          <span>Active</span>
        </div>
      </div>
      <Form />
    </div>
  )
}

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [body, setBody] = useState("")
  const [submitStatus, setSubmitStatus] = useState({
    status: null,
    message: null,
  })

  const sendForm = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.GATSBY_EMAILJS_SERVICEID,
        process.env.GATSBY_EMAILJS_TEMPLATEID,
        e.target,
        process.env.GATSBY_EMAILJS_USERID
      )
      .then(
        response => {
          setSubmitStatus({
            status: response.status,
            message: "Message sent! Thank you for your message!",
          })
        },
        failure => {
          setSubmitStatus({
            status: failure.status,
            message:
              "An error has occurred. Please try again later or feel free to email me instead. Thank you! ",
          })
        }
      )
  }

  const clearForm = () => {
    setName("")
    setEmail("")
    setBody("")
  }

  const handleFormSubmit = e => {
    sendForm(e)
    clearForm()
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-item">
        <input
          type="text"
          id="from_name"
          name="from_name"
          onChange={e => setName(e.target.value)}
          value={name}
          required
        />
        <label htmlFor="from_name" className={name ? "label-outer" : ""}>
          Name
        </label>
      </div>

      <div className="form-item">
        <input
          type="email"
          id="from_email"
          name="from_email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor="from_email" className={email ? "label-outer" : ""}>
          Email
        </label>
      </div>

      <div className="form-item">
        <textarea
          name="from_message"
          id="from_message"
          rows="6"
          onChange={e => setBody(e.target.value)}
          value={body}
          required
        />
        <label htmlFor="from_message" className={body ? "label-outer" : ""}>
          Message
        </label>
      </div>

      <button type="submit">Send Message</button>
      <div className="submit-message">
        {submitStatus.status ? <p>{submitStatus.message}</p> : null}
      </div>
    </form>
  )
}

export default ContactForm
