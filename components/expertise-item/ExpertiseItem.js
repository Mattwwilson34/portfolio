import styles from "./expertise-item.module.scss"
import Image from "next/image"

function ExpertiseItem({expertise}) {

  const { title, description, image } = expertise

  return (
    <div className={styles.expertiseItem}>
      <div className={styles.header}>
        <Image src={image} alt={title} width={60} />
        <h3 className={styles.title}>{title}</h3>
      </div>
        <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ExpertiseItem
