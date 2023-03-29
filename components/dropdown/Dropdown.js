import styles from "./dropdown.module.scss"

function Dropdown({ children, isOpen }) {
  return (
    <div className={isOpen ? `${styles.dropdown} ${styles.visible}` :  `${styles.dropdown} ${styles.hidden}`}>
      {children}
    </div>
  )
}

export default Dropdown
