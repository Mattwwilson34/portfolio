import styles from "./education.module.scss"
import EducationItem from "../education-item/EducationItem"

const education1 = {
  title: "The Odin Project",
  description:
    "An 6-month open-source full stack coding curriculum designed to provide high-quality industry level training with an emphasis on hands-on projects.",
  href: "https://www.theodinproject.com/",
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Git",
  ],
}

const education2 = {
  title: "Harvard's CS50",
  description:
    "A 3-month CS course focused on understanding algorithms and data structures, building and managing large-scale software projects, and mastering different programming languages such as C, Python, SQL, and JavaScript.",
  href: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x",
  tech: [
    "C",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Flask",
    "Django",
    "Git",
  ],
}

const education3 = {
  title: "SQL Fundamentals",
  description:
    "A 1-month course that builds a strong foundation in SQL. It teaches complex queries, data analysis, table and database creation, and Python integration.",
  href: "https://www.udemy.com/course/the-complete-sql-bootcamp/",
  tech: [
    "JOINs",
    "WHERE",
    "GROUP",
    "Aggregate",
    "Subqueries",
    "UNIONs",
    "Indexes",
    "Constraints",
    "Transactions",
  ],
}

const education4 = {
  title: "Full Stack Web Dev",
  description:
    "A 6-month course designed to provide a comprehensive introduction to full stack web development. It teaches the fundamentals of HTML, CSS, JavaScript, Node.js, and React.",
  href: "https://www.udemy.com/course/the-web-developer-bootcamp/",
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Git",
  ],
}

function Education() {
  return (
    <>
      <EducationItem education={education1} />
      <EducationItem education={education2} />
      <EducationItem education={education3} />
      <EducationItem education={education4} />
    </>
  )
}

export default Education
