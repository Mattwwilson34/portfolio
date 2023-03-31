import Head from "next/head"
import Navbar from "../components/navbar/Navbar"
import Hero from "../components/hero/Hero"
import SocialMediaMenu from "../components/social-media-menu/SocialMediaMenu"
import Button from "../components/button/Button"
import Expertise from "../components/expertise-item/ExpertiseItem"
import softwareDev from "../public/expertise-software-dev.svg"
import react from "../public/expertise-react.svg"
import backendDev from "../public/expertise-backend.svg"
import Projects from "../components/projects/Projects"
import Education from '../components/education/Education'
import Footer from "../components/footer/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Wilson</title>
        <meta name="description" content="Matt Wilson's Portfolio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <SocialMediaMenu />
        <section id="hero">
          <Hero />
          <Button text="My Work" />
        </section>
        <section id="expertise">
          <h2>Expertise</h2>
          <Expertise
            title="Software Development"
            description="Experienced in the following languages: TypeScript, Javascript, Python, SQL."
            image={softwareDev}
          />
          <Expertise
            title="Frontend Dev React, NextJS"
            description="Passionate UI/UX. With 2 years of development experience in HTML, CSS, JS, SASS, React, and NextJS."
            image={react}
          />
          <Expertise
            title="Backend Dev NodeJS, Flask"
            description="Skilled in developing RESTful APIs, Microservices, and Data Pipelines using NodeJS, Flask, PostgreSQL, and MongoDB."
            image={backendDev}
          />
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <Projects />
        </section>
        <section id="education">
          <h2>Education</h2>
          <Education />
        </section>
        <Footer />
      </main>
    </>
  )
}
