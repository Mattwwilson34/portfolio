import React, { useState, useEffect, useRef} from "react"
import { Divide as Hamburger } from "hamburger-react"
import ProfileCircle from "../profile-circle/ProfileCircle"
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
    <nav className={`${styles.nav} ${isVisible ? '' : styles.navHidden}`}>
      <div className={styles.image}>
        <ProfileCircle />
        <a href="#">Matt Wilson</a>
      </div>
      <Hamburger
        label="Show menu"
        hideOutline={true}
        toggled={isOpen}
        toggle={setOpen}
      />
      <Dropdown isOpen={isOpen}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </Dropdown>
    </nav>
  )
}

export default Navbar
