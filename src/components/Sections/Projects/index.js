import * as React from "react"
import { FaGithub } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"

import "../../../styles/projects.scss"

const Projects = () => {
  return (
    <section id="projects">
      <div className="section__header">
        <h2>Projects</h2>
        <div></div>
      </div>
      <div className="projects__inner container">
        <div className="project-card">
          <div className="project-image">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/v1617146298/sample.jpg"
              alt="sample image"
            />
          </div>
          <div className="card__inner">
            <div className="card__header">
              <h3>Covid-19 Statistics</h3>
            </div>
            <p>
              View the latest Covid-19 statistics including number of cases,
              deaths, and vaccinations globally or by country as reported by Our
              World in Data. Users can search for specific countries and can
              sort the results by specific parameters (e.g alphabetical, number
              of cases, etc).
            </p>
            <ul>
              <li>React</li>
              <li>Recharts.js</li>
              <li>JavaScript</li>
              <li>SCSS</li>
              <li>Netlify</li>
            </ul>
            <div className="project-links">
              <a
                href="https://github.com/ricky-ho/Covid-19-Statistics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://statistics-covid19.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/v1617146298/sample.jpg"
              alt="sample image"
            />
          </div>
          <div className="card__inner">
            <div className="card__header">
              <h3>Stocks Search</h3>
            </div>
            <p>
              A stock market inspired, mobile-responsive, web application that
              allows users to search for the latest market data on any public
              stock listed on the Investors Exchange (IEX). Includes an
              interactive intraday price movement chart created with
              ApexCharts.js. All market data is retrieved from IEXCloud API.
            </p>
            <ul>
              <li>React</li>
              <li>ApexCharts.js</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Netlify</li>
              <li>IEXCloud API</li>
            </ul>
            <div className="project-links">
              <a
                href="https://github.com/ricky-ho/react-stocks-search"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://reactstocksearch.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/v1617146298/sample.jpg"
              alt="sample image"
            />
          </div>
          <div className="card__inner">
            <div className="card__header">
              <h3>Omomo-Clone</h3>
            </div>
            <p>
              A front-end, mobile-responsive, ecommerce web application inspired
              by Omomo Tea Shoppe that allows users to browse and shop online
              for boba milk tea. Users will be able to modify drink add-ons or
              options and add or remove items from their shopping cart.
            </p>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Netlify</li>
            </ul>
            <div className="project-links">
              <a
                href="https://github.com/ricky-ho/Omomo-Clone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://omomoteashoppeclone.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
