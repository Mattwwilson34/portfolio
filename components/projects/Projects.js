import styles from "./projects.module.scss"
import ProjectItem from "../project-item/ProjectItem"

const project1 = {
  client: ["React", "NextJS", "CSS"],
  server: ["NodeJS", "ExpressJS", "Prisma"],
  database: ["PostgreSQL"],
}

const project2 = {
  client: ["React", "NextJS", "SASS"],
  server: ["Python", "Flask", "Prisma"],
  database: ["PostgreSQL"],
}

const project3 = {
  client: ["React", "NextJS", "Tailwind"],
  server: ["NodeJS", "ExpressJS", "MongoDB"],
  database: ["MongoDB"],
}

function Projects() {
  return (
    <ul>
      <ProjectItem
        title="My First Project"
        description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        technologies={project1}
      />
      <ProjectItem
        title="My Second Project"
        description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        technologies={project2}
      />
      <ProjectItem
        title="My Third Project"
        description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        technologies={project3}
      />
    </ul>
  )
}

export default Projects
