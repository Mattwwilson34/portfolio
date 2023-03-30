import styles from "./hero.module.scss"

function generateNameCharArray() {
  const name = "MATT WILSON"
  return name.split('')
}
function Hero() {
  const charArray = generateNameCharArray()
  return (
    <div className={styles.hero}>
      <h1 className={styles.name}>
        <span id={styles.greet}>Hi, I'm</span>
        {charArray.map((char, index) => {
          return (
            <span className={styles.name} key={index} style={{ "--i": index }}>
              {char}
            </span>
          )
        })}
      </h1>

      <h2>
        A Full-Stack web developer who enjoys exploring new technologies and
        discovering innovative solutions to real-world problems.
      </h2>
    </div>
  )
}

export default Hero
