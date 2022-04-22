import React from "react"

// Importing Main Components of Website
import NavBar from "./components/NavBar"
import Views from "./views"
import Footer from "./components/Footer"

import { sanityClient } from "../lib/sanity"


export default function Home({ data }) {
  return (
    <>
      <NavBar />
      <Views props={data} />
      <Footer />
    </>
  )
}


export const getServerSideProps = async () => {
  const query = '*[ _type == "websiteData"]'
  const data = await sanityClient.fetch(query)

  if (!data.length) {
    return {
      props: {
        data: [],
      },
    }
  } else {
    return {
      props: {
        data,
      },
    }
  }
}
