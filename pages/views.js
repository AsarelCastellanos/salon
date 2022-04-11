import React from "react"

// Importing Sections of the Website
import Home from "./components/Home"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import LogoCloud from "./components/LogoCloud"
import FindUs from "./components/FindUs"


// Importing Typeform Button
import ConsultButton from "./components/ConsultButton"

const Views = () => {
  return (
    <>
      <Home />
      <Services />
      <Testimonials />
      <LogoCloud />
      <FindUs />
    </>
  )
}

export default Views