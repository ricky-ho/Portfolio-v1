import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { Hero, About, Projects, Contact, Skills } from "../components/Sections"

/* 
  TO DO:
    - Add resume links in Header and Hero section
    - Add responsiveness
    - Add animation effects 
    - Create page loading effect
    - Create a Logo and Favicon for portfolio
    - Add light/dark mode feature

*/

const IndexPage = () => (
  <Layout>
    <Seo title="Ricky Ho" />
    <Hero />
    <Projects />
    <About />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
