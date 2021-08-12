import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { Hero, About, Projects, Contact, Skills } from "../components/Sections"

/* 
  TO DO:
    - Add resume link in Hero section
    - Make Project images more clear/HD
    - Change copywriting for About Me, Projects, and Hero

  FUTURE ADD-ONS:
    - Smooth scrolling
    - Highlight the section in header that is in view
    - Add animation effects to sections
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
