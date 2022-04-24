import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FindUs from "./components/FindUs";

const websiteQuery = groq`*[ _type == 'website'][0]{
  description,
  extensionDescription,
  'image':image.asset->url,
  title,
  vividDescription
}`;

const servicesQuery = groq`*[_type == "services"] | order(_createdAt asc){
  _id,
  name,
  price
}`

export default function Home({ data, preview }) {
  const { data: website } = usePreviewSubscription(websiteQuery, {
    initialData: data.website,
    enabled: preview,
  });

  // const { data: services } = usePreviewSubscription(servicesQuery, {
  //   initialData: data.services,
  //   enabled: preview,
  // });

  const { description, extensionDescription, image, title, vividDescription } =
    website;

  return (
    <>
      <Hero title={title} description={description} image={image} />
      <Services services={services}/>
      <Gallery extensionDescription={extensionDescription} vividDescription={vividDescription}/>
      <Testimonials />
      <FindUs />
    </>
  );
}

export async function getStaticProps({ preview = true }) {
  const website = await getClient(preview).fetch(websiteQuery);
  const services = await getClient(preview).fetch(servicesQuery);

  return {
    props: {
      preview,
      data: { website, services },
    },
  };
}
