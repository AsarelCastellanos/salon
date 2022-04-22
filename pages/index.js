import NavBar from "./components/NavBar"
import Views from "./views"
import Footer from "./components/Footer"

import { sanityClient } from "../lib/sanity"


export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <NavBar />
      <Views/>
      <Footer />
    </>
  )
}


export const getServerSideProps = async () => {
  const query = '*[ _type == "website"]'
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