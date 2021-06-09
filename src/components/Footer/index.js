import * as React from "react"
import { FiMail } from "react-icons/fi"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { BiChevronUpCircle } from "react-icons/bi"

import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className="footer__inner container">
        <p>Copyright &copy; 2021 RICKY HO</p>
        <a href="#" className="back-to-top">
          <BiChevronUpCircle className="bi-chevron" size="45" />
        </a>

        <div className="socials">
          <a href="mailto:horicky2016@gmail.com">
            <FiMail size={25} />
          </a>
          <a href="https://github.com/ricky-ho">
            <FaGithub size={25} />
          </a>
          <a href="https://www.linkedin.com/in/ricky-ho-01/">
            <FaLinkedinIn size={25} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
