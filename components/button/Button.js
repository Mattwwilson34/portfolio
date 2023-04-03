import styles from "./button.module.scss"

function scrollToSection(section) {
  console.log("clicked")
  document.querySelector(`#${section}`).scrollIntoView({
    behavior: "smooth",
  })
  setTimeout(() => {
    window.scrollBy(0, 1)
  }, 800)
}

function Button({text}) {
  return <button className={styles.button} onClick={()=> scrollToSection('projects')}>{text}</button>
}

export default Button
