import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import github from "../../public/github.svg"
import linkedin from "../../public/linkedin.svg"
import resume from "../../public/resume.svg"
import styles from "./social-media-menu.module.scss"
import openSocial from "../../public/open-social.svg"

function SocialMediaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const prevScrollY = useRef(0)

  function handleNavbarVisibility() {
    const currentScrollY = window.scrollY
    const scrollingDown = currentScrollY > prevScrollY.current
    if (scrollingDown && currentScrollY > 100) {
      setIsVisible(false)
      setIsOpen(false)
    } else {
      setIsVisible(true)
    }
    prevScrollY.current = currentScrollY
  }

  function closeMenuOnClickAway(e) {
    e.stopPropagation()
    let socialMenuElement = false;

    e.target.classList.forEach((className) => {
      if (className.includes('social')) {
        socialMenuElement = true;
        return;
      }
    })

    if (!socialMenuElement) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarVisibility)
    return () => {
      window.removeEventListener("scroll", handleNavbarVisibility)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("click", closeMenuOnClickAway)
    return () => {
      window.addEventListener("click", closeMenuOnClickAway)
    }
  }, [])

  return (
    <>
      <div
        className={`${styles.socialMediaBtnContainer} ${
          isVisible ? "" : styles.buttonHidden
        }`}
      >
        <Image
          src={openSocial}
          alt="Open menu"
          width={48}
          className={`${styles.socialMediaBtn} ${isOpen ? styles.rotate : ""} ${
            isVisible ? "" : styles.buttonHidden
          }`}
          onClick={() => setIsOpen(!isOpen)}
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
          <a
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/mattwwilson/"
          >
            <Image src={linkedin} alt="Linkedin" />
          </a>
        </li>
        <li className={styles.socialMediaMenuItem}>
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/Mattwwilson34"
          >
            <Image src={github} color="#181818" alt="Github" />
          </a>
        </li>
        <li className={styles.socialMediaMenuItem}>
          <a target="_blank" rel="noopener" href="/matt_wilson_resume.pdf">
            <Image src={resume} color="#181818" alt="Resume" />
          </a>
        </li>
      </ul>
    </>
  )
}

export default SocialMediaMenu
