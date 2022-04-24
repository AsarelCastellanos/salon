import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

import Hero from "./components/Hero";

const websiteQuery = groq`*[ _type == 'website'][0]`;

export default function Home({ data, preview }) {
  console.log(data);

  const { data: website } = usePreviewSubscription(websiteQuery, {
    initialData: data.website,
    enabled: preview,
  });

  console.log(website);

  const {
    businessHours,
    description,
    extensionDescription,
    extensions,
    image,
    services,
    testimonials,
    title,
    vividDescription,
    vivids,
  } = website;

  return (
    <section id="hero" className="bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">{title}</span>
                <span className="block text-primary">by Vidalia Arellano</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-black sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {description}
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-primary" />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-lg">
              <img src={urlFor(image).url()} className="w-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>
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
