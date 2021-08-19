import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { Hero, About, Projects, Contact, Skills } from "../components/Sections"

/* 
  TO DO:
    - Add resume link to pdf 
    - Change copywriting for About Me and Hero section
    - Add an image in About Me Section
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
