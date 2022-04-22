import React from "react";

// Importing Sections of the Website
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FindUs from "./components/FindUs";
import Head from "next/head";

const Views = ({ props }) => {
  console.log(props);
  const homeData = {
    title: props[0].title,
    description: props[0].description,
    image: props[0].image.asset,
  }
  return (
    <>
      <Head>
        <title>{props[0].title}</title>
      </Head>
      <Home props={homeData}/>
      <Services />
      <Gallery />
      <Testimonials />
      <FindUs />
    </>
  );
};

export default Views;
