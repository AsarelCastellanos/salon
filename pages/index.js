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
  vividDescription,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}`;

const servicesQuery = groq`*[ _type == "services"] | order(serviceOrder asc){
  _id,
  name,
  price
}`;

const extensionsQuery = groq`*[ _type == "extensions"][0..4]{
  _id,
  name,
  bottomHair,
  topHair 
}`;

const vividsQuery = groq`*[ _type == "vivids"][0..4]{
  _id,
  name,
  description,
  image
}`;

const testimonialsQuery = groq`*[_type == "testimonials"][0..3] | order(date desc){
  _id,
  date,
  name,
  description,
  'image':image.asset->url
}`;

export default function Home({ data, preview }) {

  const { data: website } = usePreviewSubscription(websiteQuery, {
    initialData: data.website,
    enabled: preview,
  });

  const { data: services } = usePreviewSubscription(servicesQuery, {
    initialData: data.services,
    enabled: preview,
  });

  const { data: extensions } = usePreviewSubscription(extensionsQuery, {
    initialData: data.extensions,
    enabled: preview,
  });

  const { data: vivids } = usePreviewSubscription(vividsQuery, {
    initialData: data.vivids,
    enabled: preview,
  });

  const { data: testimonials } = usePreviewSubscription(testimonialsQuery, {
    initialData: data.testimonials,
    enabled: preview,
  });

  const { description, extensionDescription, friday, image, monday, saturday, sunday, thursday, title, tuesday, vividDescription, wednesday } =
    website;

  return (
    <>
      <Hero title={title} description={description} image={image} />
      <Services services={services}/>
      <Gallery extensionDescription={extensionDescription} extensions={extensions} vividDescription={vividDescription} vivids={vivids}/>
      <Testimonials testimonials={testimonials}/>
      <FindUs monday={monday} tuesday={tuesday} wednesday={wednesday} thursday={thursday} friday={friday} saturday={saturday} sunday={sunday}/>
    </>
  );
}

export async function getServerSideProps({ preview = true }) {
  const website = await getClient(preview).fetch(websiteQuery);
  const services = await getClient(preview).fetch(servicesQuery);
  const extensions = await getClient(preview).fetch(extensionsQuery);
  const vivids = await getClient(preview).fetch(vividsQuery);
  const testimonials = await getClient(preview).fetch(testimonialsQuery);

  return {
    props: {
      preview,
      data: { website, services, extensions, vivids, testimonials },
    },
  };
}