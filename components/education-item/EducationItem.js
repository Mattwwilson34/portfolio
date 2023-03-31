import styles from "./education-item.module.scss"

function EducationItem({ education }) {
  const { title, description, href, tech } = education

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.href}>
      <div className={styles.educationItem}>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>Curriculum Tech:</h4>
        <ul>
          {tech.map((item, index) => (
            <li className={styles.listItem} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </a>
  )
}

export default EducationItem
