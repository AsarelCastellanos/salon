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

const testimonialsQuery = groq`*[_type == "testimonials"]{
  _id,
  date,
  name,
  description,
  'image':image.asset->url
}`;

const testimonials = [{
  _id: '0001',
  date: '01012001',
  name: 'Testing...',
  description: 'Testing...',
  image: 'image'
}];

export default function Home({ data, preview }) {

  const { data: website } = usePreviewSubscription(websiteQuery, {
    initialData: data.website,
    enabled: preview,
  });

  const { data: testimonials } = usePreviewSubscription(testimonialsQuery, {
    initialData: data.testimonials,
    enabled: preview,
  });

  const { description, extensionDescription, image, title, vividDescription } =
    website;

  return (
    <>
      <Hero title={title} description={description} image={image} />
      <Services/>
      <Gallery extensionDescription={extensionDescription} vividDescription={vividDescription}/>
      <Testimonials testimonials={testimonials}/>
      <FindUs />
    </>
  );
}

export async function getStaticProps({ preview = true }) {
  const website = await getClient(preview).fetch(websiteQuery);
  const testimonials = await getClient(preview).fetch(testimonialsQuery);

  return {
    props: {
      preview,
      data: { website, testimonials },
    },
  };
}
