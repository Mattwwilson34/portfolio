import React, { useState } from "react"
import Image from "next/image"
import github from "../../public/github.svg"
import linkedin from "../../public/linkedin.svg"
import resume from "../../public/resume.svg"
import close from "../../public/close-x.svg"
import openChevron from "../../public/arrow-circle-right.svg"
import closeChevron from "../../public/ arrow-circle-left.svg"
import styles from "./social-media-menu.module.scss"

function SocialMediaMenu() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <div
        className={styles.socialMediaMenuOpenButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={isOpen ? closeChevron : openChevron} alt="Open menu" />
      </div>
      <ul
        className={
          isOpen
            ? `${styles.socialMediaMenu} ${styles.visible}`
            : `${styles.socialMediaMenu} ${styles.hidden}`
        }
      >
        <li className={styles.socialMediaMenuItem}>
          <a href="https://www.linkedin.com/in/mattwwilson/">
            <Image src={linkedin} alt="Linkedin" />
          </a>
        </li>
        <li className={styles.socialMediaMenuItem}>
          <a href="https://github.com/Mattwwilson34">
            <Image src={github} alt="Github" />
          </a>
        </li>
        <li className={styles.socialMediaMenuItem}>
          <a href="../../public/matt_wilson_resume.pdf">
            <Image src={resume} alt="Resume" />
          </a>
        </li>
      </ul>
    </>
  )
}

export default SocialMediaMenu
