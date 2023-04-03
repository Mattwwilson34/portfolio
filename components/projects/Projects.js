import styles from "./projects.module.scss"
import ProjectItem from "../project-item/ProjectItem"
import ppProjectImage from "../../public/pp-project.png"
import ktProjectImage from "../../public/kt-project.png"
import obProjectImage from "../../public/ob-project.png"
import wdProjectImage from "../../public/wd-project.png"

const project1 = {
  client: ["TypeScript", "React", "Material UI"],
  server: ["Firebase"],
  database: ["FireStore"],
  image: ppProjectImage,
  href: "https://profile-pilot.web.app/"
}

const project2 = {
  client: ["TypeScript", "React", "NextJS"],
  server: [""],
  database: [""],
  image: ktProjectImage,
  href: "https://mattwwilson34.github.io/knights-travail/"

}

const project3 = {
  client: ["JS", "React", "Styled Components"],
  server: ["NodeJS", "ExpressJS"],
  database: ["MySQL"],
  image: obProjectImage,
  href: "https://github.com/Mattwwilson34/the-odin-book"
}

const project4 = {
  client: ["JS", "HTML", "CSS"],
  server: ["NodeJS", "ExpressJS"],
  database: [""],
  image: wdProjectImage,
  href: "https://github.com/Mattwwilson34/weather-dashboard"
}

function Projects() {
  return (
    <ul>
      <ProjectItem
        title="Profile Pilot"
        description="A cloud based full stack application that allows users to login with third party authentication and create thier own sharable profile pages "
        technologies={project1}
      />
      <ProjectItem
        title="Backtracking Algorithm Visualizer"
        description="An application that uses a custom algorithm to solve the Knight's Tour problem and allows the user to visualize the solution."
        technologies={project2}
      />
      <ProjectItem
        title="The Odin Book"
        description="A full-stack social media application allowing users to create an account, post, comment, and create frienships."
        technologies={project3}
      />
      <ProjectItem
        title="Weather Dashboard"
        description="A weather dashboard application that allows users to search for a city and view the current weather as well as a 5 day forecast."
        technologies={project4}
      />
    </ul>
  )
}

export default Projects
