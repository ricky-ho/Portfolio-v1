import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Icon } from "../../Icons"

import "../../../styles/projects.scss"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              github
              live
              tech
              title
              imgURL
            }
            id
            body
          }
        }
      }
    }
  `)

  const projects = data.allMdx.edges

  return (
    <section id="projects" className="container">
      <div className="projects__inner">
        <div className="section__header">
          <h2>Projects</h2>
          <p>Here are some of the latest projects that I have worked on</p>
        </div>
        {projects.map(({ node }) => {
          const { frontmatter, id, body } = node

          return <ProjectCard key={id} metadata={frontmatter} content={body} />
        })}
      </div>
    </section>
  )
}

const ProjectCard = ({ metadata, content }) => {
  return (
    <div className="project-card">
      <div className="project__img-wrap">
        <a href={metadata.live} target="_blank" rel="noopener noreferrer">
          <img src={metadata.imgURL} alt={metadata.title} />
        </a>
      </div>
      <div className="card__inner">
        <h3>{metadata.title}</h3>
        <MDXRenderer>{content}</MDXRenderer>
        <ul>
          {metadata.tech.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={metadata.github} target="_blank" rel="noopener noreferrer">
            <Icon name="Github" />
          </a>
          <a href={metadata.live} target="_blank" rel="noopener noreferrer">
            VIEW LIVE
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
