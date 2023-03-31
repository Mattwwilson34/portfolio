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
import Footer from '../components/footer/Footer'

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
            description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
            image={softwareDev}
          />
          <Expertise
            title="Frontend Dev React, NextJS"
            description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
            image={react}
          />
          <Expertise
            title="Backend Dev NodeJS, Flask"
            description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
            image={backendDev}
          />
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <Projects />
        </section>
          <Footer />
      </main>
    </>
  )
}
