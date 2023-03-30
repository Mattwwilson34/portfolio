import Head from "next/head"
import Navbar from "../components/navbar/Navbar"
import Hero from "../components/hero/Hero"
import SocialMediaMenu from "../components/social-media-menu/SocialMediaMenu"

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Wilson</title>
        <meta name="description" content="Matt Wilson's Portfolio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="my-class">
        <Navbar />
        <SocialMediaMenu />
        <section>
          <Hero />
        </section>
      </main>
    </>
  )
}
