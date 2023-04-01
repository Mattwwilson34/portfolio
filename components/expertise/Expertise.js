import styles from './expertise.module.scss'
import ExpertiseItem from '../expertise-item/ExpertiseItem'
import softwareDev from "../../public/expertise-software-dev.svg"
import react from "../../public/expertise-react.svg"
import backendDev from "../../public/expertise-backend.svg"

const expertise1 = {
  title: 'Software Development',
  description: 'Experience with React, Redux, Next.js, Gatsby, Styled Components, Tailwind CSS, Material UI, Bootstrap, and more.',
  image: softwareDev
}

const expertise2 = {
  title: 'Frontend',
  description: 'Experience with React, Redux, Next.js, Gatsby, Styled Components, Tailwind CSS, Material UI, Bootstrap, and more.',
  image: react
}

const expertise3 = {
  title: 'Backend',
  description: 'Experience with React, Redux, Next.js, Gatsby, Styled Components, Tailwind CSS, Material UI, Bootstrap, and more.',
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
