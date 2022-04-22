import NavBar from "./components/NavBar"
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer"

import Head from "next/head";

import { sanityClient } from "../lib/sanity"


export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <NavBar />
      <Head>
        <title>Vicious Streak Salon</title>
      </Head>
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <FindUs />
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
        data
      },
    }
  }
}