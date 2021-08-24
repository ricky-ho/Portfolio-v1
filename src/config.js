module.exports = {
  email: "horicky.cs@gmail.com",
  mobileThresholdWidth: 768,
  skills: [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "React",
    "Gatsby",
    "Node.js",
    "MongoDB",
    "Git",
    "Netlify",
    "Heroku",
    "Figma",
    "Python",
  ],
  contactLinks: [
    {
      name: "Email",
      url: "mailto:horicky.cs@gmail.com",
    },
    {
      name: "Github",
      url: "https://github.com/ricky-ho",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/riho-1/",
    },
  ],
  navLinks: [
    {
      name: "Projects",
      url: "projects",
    },
    {
      name: "About",
      url: "about",
    },
    {
      name: "Skills",
      url: "skills",
    },
    {
      name: "Contact",
      url: "contact",
    },
  ],
  srConfig: {
    initialOnScreenOptions: {
      threshold: 0,
      triggerOnce: true,
    },
    projectOptions: {
      threshold: 0.1,
      triggerOnce: true,
    },
    defaultOptions: {
      threshold: 0.2,
      triggerOnce: true,
    },
  },
  ssConfig: {
    smooth: true,
    offset: -25,
    duration: 500,
  },
}
