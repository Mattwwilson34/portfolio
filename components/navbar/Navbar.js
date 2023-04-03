import React, { useState, useEffect, useRef } from "react"
import { Divide as Hamburger } from "hamburger-react"
// import ProfileCircle from "../profile-circle/ProfileCircle"
import Dropdown from "../dropdown/Dropdown"
import styles from "./navbar.module.scss"

function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const prevScrollY = useRef(0)

  function handleNavbarVisibility() {
    const currentScrollY = window.scrollY
    const scrollingDown = currentScrollY > prevScrollY.current
    if (scrollingDown && currentScrollY > 100) {
      setIsVisible(false)
      setOpen(false)
    } else {
      setIsVisible(true)
    }
    prevScrollY.current = currentScrollY
  }

  function closeMenuOnClickAway(e) {
    e.stopPropagation()

    let dropdownMenuElement = false

    e.target.classList.forEach((className) => {
      if (className.includes("dropdown") || className.includes("hamburger")) {
        dropdownMenuElement = true
        return
      }
    })

    if (!dropdownMenuElement) {
      setOpen(false)
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
    <nav className={`${styles.nav} ${isVisible ? "" : styles.navHidden}`}>
      <div className={styles.image}>
        {/* <ProfileCircle /> */}
        <a className={styles.nameLink} href="#">
          Matt Wilson.<span>_</span>
        </a>
      </div>
      <Hamburger
        label="Show menu"
        hideOutline={true}
        toggled={isOpen}
        toggle={setOpen}
      />
      <Dropdown isOpen={isOpen}>
        <a href="#" className={styles.dropdownItem}>
          Home
        </a>
        <a href="#expertise" className={styles.dropdownItem}>
          Expertise
        </a>
        <a href="#projects" className={styles.dropdownItem}>
          Projects
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="/matt_wilson_resume.pdf"
          className={styles.dropdownItem}
        >
          Resume
        </a>
        <a
          href="mailto:matt@mattwwilson.com?subject=Hello%20from%20[Your%20Name]&body=Hi%20[Recipient],%0A%0AI%20found%20your%20website%20and%20wanted%20to%20reach%20out%20to%20you.%20[Add%20your%20message%20here.]"
          className={styles.dropdownItem}
        >
          Contact
        </a>
      </Dropdown>
    </nav>
  )
}

export default Navbar
