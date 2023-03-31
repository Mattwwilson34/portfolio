import styles from "./footer.module.scss"

const currentDate = new Date()
const currentYear = currentDate.getFullYear()

function scrollToSection(section) {
  console.log("clicked")
  document.querySelector(`#${section}`).scrollIntoView({
    behavior: "smooth",
  })
  setTimeout(() => {
    window.scrollBy(0, 1)
  }, 800)
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.siteMap}>
        <ul>
          <li className={styles.listHeader}>Site Map</li>
          <li>
            <a href="#">Home</a>
          </li>
          <li onClick={() => scrollToSection("expertise")}>Expertise</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li>
            <a target="_blank" rel="noopener" href="/matt_wilson_resume.pdf">
              Resume
            </a>
          </li>
          <li>
            <a href="mailto:matt@mattwwilson.com?subject=Hello%20from%20[Your%20Name]&body=Hi%20[Recipient],%0A%0AI%20found%20your%20website%20and%20wanted%20to%20reach%20out%20to%20you.%20[Add%20your%20message%20here.]">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.socialMedia}>
        <ul>
          <li className={styles.listHeader}>Social Media</li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/mattwwilson/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/Mattwwilson34"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.copywrite}>
        <p>
          <span>&copy;</span> {`${currentYear} Matt Wilson`}
        </p>
      </div>
    </footer>
  )
}

export default Footer
