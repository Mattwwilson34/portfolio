import Head from "next/head"
import Navbar from "../components/navbar/Navbar"
import Hero from "../components/hero/Hero"
import SocialMediaMenu from "../components/social-media-menu/SocialMediaMenu"
import Button from "../components/button/Button"
import Expertise from "../components/expertise/Expertise"
import Projects from "../components/projects/Projects"
import Education from "../components/education/Education"
import Footer from "../components/footer/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Wilson</title>
        <meta name="description" content="Matt Wilson's Portfolio." />
        <meta property="og:title" content="Matt Wilson's Porfolio" />
        <meta
          property="og:description"
          content="My portfolio website showcases my skills and experience as a full stack web developer and designer. I've created a modern and minimalist design that emphasizes the visuals and descriptions of my work."
        />
        <meta
          property="og:image"
          content="https://mattwwilson.com/og-image-thumbnail.png"
        />
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
          <h2>My Expertise</h2>
          <Expertise />
        </section>
        <section id="projects">
          <h2>My Work</h2>
          <Projects />
        </section>
        <section id="education">
          <h2>My Education</h2>
          <Education />
        </section>
        <Footer />
      </main>
    </>
  )
}
