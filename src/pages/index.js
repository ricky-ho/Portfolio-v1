import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { Hero, About, Projects, Contact } from "../components/Sections"

const IndexPage = () => (
  <Layout>
    <Seo title="Ricky Ho" />
    <Hero />
    <Projects />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
