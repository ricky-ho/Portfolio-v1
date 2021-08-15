import React from "react"
import {
  IconCircle,
  IconGithub,
  IconEmail,
  IconLinkedin,
  IconPerson,
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
    default:
      return
  }
}

export default Icon
