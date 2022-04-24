import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import Hero from "./components/Hero";

const websiteQuery = groq`*[ _type == 'website'][0]{
  description,
  extensionDescription,
  'image':image.asset->url,
  title,
  vividDescription
}`;

export default function Home({ data, preview }) {
  const { data: website } = usePreviewSubscription(websiteQuery, {
    initialData: data.website,
    enabled: preview,
  });

  console.log(website);

  const { description, extensionDescription, image, title, vividDescription } =
    website;

  return (
    <>
      <Hero title={title} description={description} image={image} />
    </>
  );
}

export async function getStaticProps({ preview = true }) {
  const website = await getClient(preview).fetch(websiteQuery);
  return {
    props: {
      preview,
      data: { website },
    },
  };
}
