import React, { useState } from "react"
import { Divide as Hamburger } from "hamburger-react"
import ProfileCircle from "../profile-circle/ProfileCircle"
import Dropdown from "../dropdown/Dropdown"
import styles from "./navbar.module.scss"

function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
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
