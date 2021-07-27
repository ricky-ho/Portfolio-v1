import * as React from "react"
import { FiMail } from "react-icons/fi"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { BiChevronUpCircle } from "react-icons/bi"

import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className="footer__inner container">
        <p>
          &copy; 2021 <span>Ricky Ho</span>
        </p>
        <a href="#hero" className="back-to-top" title="Back to Top">
          <BiChevronUpCircle className="bi-chevron" size={40} />
        </a>

        <div className="socials">
          <a
            href="https://github.com/ricky-ho"
            target="_blank"
            rel="noopener noreferrer"
            title="https://github.com/ricky-ho"
          >
            <FaGithub size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/ricky-ho-01/"
            target="_blank"
            rel="noopener noreferrer"
            title="https://www.linkedin.com/in/ricky-ho-01"
          >
            <FaLinkedinIn size={15} />
          </a>
          <a
            href="mailto:horicky.cs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="mailto:horicky.cs@gmail.com"
          >
            <FiMail size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
