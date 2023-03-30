import styles from "./button.module.scss"

function Button({text}) {
  return <button className={styles.button}>{text}</button>
}

export default Button
