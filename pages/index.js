import { groq } from "next-sanity";
import { usePreviewSubscription } from "../lib/sanity";
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

const servicesQuery = groq`*[ _type == "services"] | order(serviceOrder asc){
  _id,
  name,
  price
}`;

const hoursQuery = groq`*[ _type == "businessHours"][0]{
  _id,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
}`;

export default function Home({ data, preview }) {

  const { data: website } = usePreviewSubscription(websiteQuery, {
    initialData: data.website,
    enabled: preview,
  });

  const { data: testimonials } = usePreviewSubscription(testimonialsQuery, {
    initialData: data.testimonials,
    enabled: preview,
  });

  const { data: services } = usePreviewSubscription(servicesQuery, {
    initialData: data.services,
    enabled: preview,
  });

  const { data: hours } = usePreviewSubscription(hoursQuery, {
    initialData: data.hours,
    enabled: preview,
  });


  const { description, extensionDescription, image, title, vividDescription } =
    website;

  return (
    <>
      <Hero title={title} description={description} image={image} />
      <Services services={services}/>
      <Gallery extensionDescription={extensionDescription} vividDescription={vividDescription}/>
      <Testimonials testimonials={testimonials}/>
      <FindUs hours={hours}/>
    </>
  );
}


export async function getServerSideProps({ preview = true }) {
  const website = await getClient(preview).fetch(websiteQuery);
  const testimonials = await getClient(preview).fetch(testimonialsQuery);
  const services = await getClient(preview).fetch(servicesQuery);
  const hours = await getClient(preview).fetch(hoursQuery);


  return {
    props: {
      preview,
      data: { website, testimonials, services, hours },
    },
  };
}