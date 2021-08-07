import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { Hero, About, Projects, Contact, Skills } from "../components/Sections"

/* 
  TO DO:
    - Add resume links in Header and Hero section
    - Add animation effects to sections
    - Create a Logo and Favicon for portfolio
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
