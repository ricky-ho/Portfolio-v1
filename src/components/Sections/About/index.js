import * as React from "react"

import "../../../styles/about.scss"

const About = () => {
  return (
    <section id="about">
      <div className="about__inner container">
        <div className="section__header">
          <h2>About</h2>
        </div>
        <div className="about__content">
          <div className="about-text">
            <p>
              {`I am a Front-End Web Developer from San Francisco and a recent graduate from UCLA with a B.S. in Mathematics of Computation.
            During my college career, I developed an interest for Computer
            Science and acquired a solid understanding of data structures &
            algorithms and computer organization & architecture. This formed
            the foundation for my self-taught journey into web development post
            graduation, in which I discovered my passion for creating responsive
            and interactive web applications.`}
            </p>
            <p>
              {`Although I enjoy working on the client-side and utilizing good UX/UI
            principles, I also enjoy learning about server-side programming,
            including working with databases, ensuring applications are secure,
            and improving overall web performance and load times.`}
            </p>
            <p>{`I always strive to learn new things and to improve upon my existing knowledge and skillset to become an overall better web developer.`}</p>
          </div>
          <div className="about__img-wrap">
            <img
              className="about__img"
              src="https://res.cloudinary.com/ricky-ho/image/upload/v1617146298/sample.jpg"
              alt="headshot of myself"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
