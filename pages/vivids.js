import React from "react";
import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import Image from "next/image";

const vividsQuery = groq`*[ _type == "vivids"]{
  _id,
  name,
  description,
  image
}`;

export default function Vivids({ data, preview }) {
  const { data: vivids } = usePreviewSubscription(vividsQuery, {
    initialData: data.vivids,
    enabled: preview,
  });

  return (
    <section id="gallery" className="bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-10 text-center">
          <h1 className="mb-4 text-2xl font-extrabold text-black sm:text-3xl">
            Vivids
          </h1>
          <p className="mx-auto mt-4 text-lg leading-6 text-black lg:w-2/3">
            Below are all vivids that have been done in the past. Hopefully this
            should give you an idea of the type of work you can expect.
          </p>
        </div>
        <div
          id="extensions"
          className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
        >
          {vivids?.map((vivid) => {
            return (
              <div className="mx-5 border-4 border-primary bg-primary" key={vivid._id}>
                <Image
                  src={urlFor(vivid.image).url()}
                  alt={vivid.name}
                  loading="lazy"
                  width={318.69}
                  height={415.99}
                />
                <h2 className="p-4 text-lg leading-6 text-center text-white bg-primary">
                  {vivid.name}
                </h2>
                <p className="p-4 text-lg leading-6 text-center text-black bg-white">
                  {vivid.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps({ preview = true }) {
  const vivids = await getClient(preview).fetch(vividsQuery);

  return {
    props: {
      preview,
      data: { vivids },
    },
  };
}
