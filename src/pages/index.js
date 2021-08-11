import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { Hero, About, Projects, Contact, Skills } from "../components/Sections"

/* 
  TO DO:
    - Add resume link in Hero section
    - Add animation effects to sections
    - Make Project images more clear/HD
    - Change Project description and About Me
    - Prevent scrolling when mobile nav is open
*/

const IndexPage = () => (
  <Layout>
    <Seo title="Ricky Ho | Front-End Developer" />
    <Hero />
    <Projects />
    <About />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
