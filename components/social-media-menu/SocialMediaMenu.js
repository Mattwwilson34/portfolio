import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import github from "../../public/github.svg"
import linkedin from "../../public/linkedin.svg"
import resume from "../../public/resume.svg"
import openChevron from "../../public/arrow-circle-right.svg"
import closeChevron from "../../public/ arrow-circle-left.svg"
import styles from "./social-media-menu.module.scss"

function SocialMediaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const prevScrollY = useRef(0)

  function handleNavbarVisibility() {
    const currentScrollY = window.scrollY
    const scrollingDown = currentScrollY > prevScrollY.current
    if (scrollingDown && currentScrollY > 100) {
      setIsVisible(false)
    }
    else {
      setIsVisible(true)
    }
    prevScrollY.current = currentScrollY

  }

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarVisibility)
    return () => {
      window.removeEventListener("scroll", handleNavbarVisibility)
    }
  }, [])

  return (
    <>
      <div
        className={`${styles.socialMediaMenuOpenButton} ${isVisible ? '' : styles.buttonHidden}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={isOpen ? closeChevron : openChevron}
          color="#181818"
          alt="Open menu"
        />
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
            <Image src={linkedin} color="#181818" alt="Linkedin" />
          </a>
        </li>
        <li className={styles.socialMediaMenuItem}>
          <a href="https://github.com/Mattwwilson34">
            <Image src={github} color="#181818" alt="Github" />
          </a>
        </li>
        <li className={styles.socialMediaMenuItem}>
          <a href="../../public/matt_wilson_resume.pdf">
            <Image src={resume} color="#181818" alt="Resume" />
          </a>
        </li>
      </ul>
    </>
  )
}

export default SocialMediaMenu
