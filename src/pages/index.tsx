import { useState } from "react"
import Navbar from "@/components/Navbar"
import NavMobile from "@/components/NavMobile"
import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
// import Services from "@/components/Services"
import Skills from "@/components/Skills"
import Project from "@/components/Project"
// import Price from "@/components/Price"
import Reviews from "@/components/Reviews"


export default function HomePage() {

  const [showNav, setShowNav] = useState(false)
  const showNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)


  return (
    <div className="overflow-hidden">
        <NavMobile showNav={showNav} closeNav={closeNavHandler} />
        <Navbar openNav={showNavHandler} />
        <Hero />
        <AboutMe />
        {/* <Services /> */}
        <Skills />
        <Project />
        {/* <Price /> */}
        <Reviews />
    </div>
  );
}
