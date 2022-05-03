import { groq } from "next-sanity";
import { usePreviewSubscription } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

import Hero from "./components/Hero";

const websiteQuery = groq`*[_type == "website" && title == 'Vicious Streak Salon'][0] {
  title,
  description,
  'image':image.asset->url
}`

export default function Home({ data, preview }) {

  const { data: website } = usePreviewSubscription(websiteQuery, {
    initialData: data.website,
    enabled: preview,
  });

  const { title, description, image } = website;

  return (
    <>
      <Hero title={title} description={description} image={image} />
    </>
  );
}

export async function getServerSideProps({ preview = true }) {
  const website = await getClient(preview).fetch(websiteQuery);

  return {
    props: {
      preview,
      data: { website },
    },
  };
}