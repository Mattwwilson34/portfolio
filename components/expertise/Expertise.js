import styles from './expertise.module.scss'
import ExpertiseItem from '../expertise-item/ExpertiseItem'
import softwareDev from "../../public/expertise-software-dev.svg"
import react from "../../public/expertise-react.svg"
import backendDev from "../../public/expertise-backend.svg"

const expertise1 = {
  title: 'Software Development',
  description: 'Experienced in the following languages: TypeScript, JavaScript, Python, C, SQL',
  image: softwareDev
}

const expertise2 = {
  title: 'Frontend Dev React, NextJS',
  description: 'Passionate about UI/UX. Over 1.5 years of development experience in HTML, CSS, JS, React, and NextJS frameworks.',
  image: react
}

const expertise3 = {
  title: 'Backend Dev NodeJS, Flask',
  description: 'Skilled in developing scallbale and secure backend services: NodeJS, Flask, PostGresSQL, MongoDB.',
  image: backendDev
}

function Expertise() {
  return (
    <div className={styles.expertise}>
      <ExpertiseItem expertise={expertise1} />
      <ExpertiseItem expertise={expertise2} />
      <ExpertiseItem expertise={expertise3} />
    </div>
  )
}

export default Expertise
