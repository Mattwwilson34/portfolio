import React, { useState } from "react"
import styles from "./project-item.module.scss"
import Image from "next/image"
import fb from "../../public/fb-login.png"
import dropDownArrow from "../../public/arrow-drop-down.svg"
import dropUpArrow from "../../public/arrow-drop-up.svg"

function ProjectItem({ title, description, technologies }) {
  const [isOpen, setIsOpen] = useState(false)

  const { client, server, database } = technologies

  return (
    <li className={styles.item}>
      <div className={styles.imageContainer}>
        <Image src={fb} alt="Facebook" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Technologies</button>
      <Image
        className={styles.dropDownArrow}
        src={isOpen ? dropUpArrow : dropDownArrow}
        alt="Drop Down Arrow"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={`${styles.techDrawer} ${
          isOpen ? `${styles.drawerOpen}` : `${styles.drawerClosed}`
        }`}
      >
        <div className={styles.techSection}>
          <h4>Client</h4>
          <ul>
            {client.map(tech => <li>{tech}</li>)}
          </ul>
        </div>
        <div className={styles.techSection}>
          <h4>Server</h4>
          <ul>
            {server.map(tech => <li>{tech}</li>)}
          </ul>
        </div>
        <div className={styles.techSection}>
          <h4>Data</h4>
          <ul>
            {database.map(tech => <li>{tech}</li>)}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default ProjectItem
