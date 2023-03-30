import styles from "./hero.module.scss"

function generateNameCharArray() {
  const name = "MATT WILSON"
  return name.split('')
}

function generateWordArray() {
  const words =
    "A Full-Stack web developer who enjoys exploring new technologies and discovering innovative solutions to real-world problems."
    return words.split(' ')
}

function Hero() {
  const charArray = generateNameCharArray()
  const wordArray = generateWordArray()

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

      <h2 className={styles.subheader}>
        {wordArray.map((word, index) => {
          return (
            <span className={styles.word} key={index}> 
              {` ${word}`}
            </span>
          )
        })}
      </h2>
    </div>
  )
}

export default Hero
