import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { Hero, About, Projects, Contact, Skills } from "../components/Sections"

/* 
  TO DO:
    - Add Portfolio as project 
    - Order the projects
*/

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title={data.site.siteMetadata.title} />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </Layout>
  )
}

export default IndexPage
