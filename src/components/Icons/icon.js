import React from "react"
import {
  IconCircle,
  IconGithub,
  IconEmail,
  IconLinkedin,
  IconPerson,
  IconHTML,
  IconCSS,
  IconJavaScript,
  IconSASS,
  IconReact,
  IconGit,
  IconNode,
  IconMongodb,
  IconNetlify,
  IconGatsby,
  IconHeroku,
  IconFigma,
  IconPython,
} from "./index"

const Icon = ({ name }) => {
  switch (name) {
    case "Github":
      return <IconGithub />
    case "Linkedin":
      return <IconLinkedin />
    case "Email":
      return <IconEmail />
    case "Person":
      return <IconPerson />
    case "Circle":
      return <IconCircle />
    case "HTML":
      return <IconHTML />
    case "CSS":
      return <IconCSS />
    case "SASS":
      return <IconSASS />
    case "JavaScript":
      return <IconJavaScript />
    case "React":
      return <IconReact />
    case "Gatsby":
      return <IconGatsby />
    case "Node.js":
      return <IconNode />
    case "MongoDB":
      return <IconMongodb />
    case "Git":
      return <IconGit />
    case "Figma":
      return <IconFigma />
    case "Netlify":
      return <IconNetlify />
    case "Heroku":
      return <IconHeroku />
    case "Python":
      return <IconPython />
    default:
      return
  }
}

export default Icon
