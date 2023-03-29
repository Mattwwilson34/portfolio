import ProfileCircle from "../profile-circle/ProfileCircle"
import styles from "./navbar.module.scss"
function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.image}>
        <ProfileCircle />
        <a href="#">Matt Wilson</a>
      </div>
export default Navbar
