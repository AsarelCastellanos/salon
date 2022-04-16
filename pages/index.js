import React from "react"
import MetaTags from "./meta";

// Importing Main Components of Website
import NavBar from "./components/NavBar"
import Views from "./views"
import Footer from "./components/Footer"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <MetaTags />
      </Head>
      <NavBar />
      <Views />
      <Footer />
    </>
  )
}
