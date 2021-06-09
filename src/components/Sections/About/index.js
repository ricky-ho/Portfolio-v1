import * as React from "react"
import "./about.scss"

const About = () => {
  return (
    <section id="about">
      <div className="about__inner container">
        <h2>About Me</h2>
        <div>
          <p className="about-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="about-image"></div>
        </div>
        <ul>
          <p>Technology: </p>
          <li>Tech #1</li>
          <li>Tech #1</li>
          <li>Tech #1</li>
          <li>Tech #1</li>
          <li>Tech #1</li>
          <li>Tech #1</li>
        </ul>
      </div>
    </section>
  )
}

export default About
