import styles from "./hero.module.scss"

function Hero() {
  return (
    <div className={styles.hero}>
    <h1>Hi, I'm</h1>
    <div className={styles.name}>
      <span className={styles.mySpan} style={{'--i': 1}}>M</span>
      <span className={styles.mySpan} style={{'--i': 2}}>a</span>
      <span className={styles.mySpan} style={{'--i': 3}}>t</span>
      <span className={styles.mySpan} style={{'--i': 4}}>t</span>
      <span className={styles.mySpan} style={{'--i': 5}}> &nbsp;</span>
      <span className={styles.mySpan} style={{'--i': 6}}>W</span>
      <span className={styles.mySpan} style={{'--i': 7}}>i</span>
      <span className={styles.mySpan} style={{'--i': 8}}>l</span>
      <span className={styles.mySpan} style={{'--i': 9}}>s</span>
      <span className={styles.mySpan} style={{'--i': 10}}>o</span>
      <span className={styles.mySpan} style={{'--i': 11}}>n</span>
    </div>

      <h2>
        A Full-Stack web developer who enjoys exploring new technologies and
        discovering innovative solutions to real-world problems.
      </h2>
    </div>
  )
}

export default Hero
