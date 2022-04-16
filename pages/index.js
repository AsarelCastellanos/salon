import React from "react"

// Importing Main Components of Website
import NavBar from "./components/NavBar"
import Views from "./views"
import Footer from "./components/Footer"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <NavBar />
      <Views />
      <Footer />
    </>
  )
}
