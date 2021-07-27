import * as React from "react"
import { AiFillGithub } from "react-icons/ai"
import { BiLinkExternal } from "react-icons/bi"

import "./projects.scss"

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects__inner container">
        <div className="section__header">
          <h2>Projects</h2>
          <div></div>
        </div>

        <div className="project-card">
          <div className="project-image"></div>
          <div className="card__inner">
            <h3>Covid-19 Statistics</h3>
            <p>
              View the latest Covid-19 statistics including number of cases,
              deaths, and vaccinations globally or by country as reported by{" "}
              <a href="https://ourworldindata.org/covid">Our World in Data</a>.
              Users can search for specific countries and can sort the results
              by specific parameters (e.g alphabetical, number of cases, etc).
            </p>
            <ul>
              <li>React</li>
              <li>Recharts</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Netlify</li>
            </ul>
            <div className="project-links">
              <a
                href="https://github.com/ricky-ho/Covid-19-Statistics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={30} />
              </a>
              <a
                href="https://statistics-covid19.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image"></div>
          <div className="card__inner">
            <h3>Stocks Search</h3>
            <p>
              A stock market inspired, mobile-responsive, single-page
              application that allows users to search for the latest market data
              on any public stock listed on the Investors Exchange (IEX) with an
              interactive intraday price movement chart created with
              ApexCharts.js. All market data is retrieved from{" "}
              <a href="https://iexcloud.io">IEX Cloud</a> API using asynchronous
              fetch requests.
            </p>
            <ul>
              <li>React</li>
              <li>ApexCharts.js</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Netlify</li>
            </ul>
            <div className="project-links">
              <a
                href="https://github.com/ricky-ho/react-stocks-search"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={30} />
              </a>
              <a
                href="https://reactstocksearch.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image"></div>
          <div className="card__inner">
            <h3>Omomo-Clone</h3>
            <p>
              A front-end, mobile-responsive, ecommerce web application inspired
              by <a href="https://omomoteashoppe.com">Omomo Tea Shoppe</a> that
              allows users to browse and shop online for boba milk tea. Users
              will be able to modify drink add-ons/options and add or remove
              items from their shopping cart.
            </p>
            <ul>
              <li>React</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Netlify</li>
            </ul>
            <div className="project-links">
              <a
                href="https://github.com/ricky-ho/Omomo-Clone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={30} />
              </a>
              <a
                href="https://omomoteashoppeclone.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
