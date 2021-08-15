import React from "react"

import "../../styles/footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className="footer__inner container">
        <p>
          &copy; 2021 Built by{" "}
          <a
            href="https://github.com/ricky-ho/Portfolio-v1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ricky Ho
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
