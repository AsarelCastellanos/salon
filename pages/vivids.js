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
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-2xl font-extrabold text-black sm:text-3xl mb-4">
            Vivids
          </h1>
          <p className="lg:w-2/3 mx-auto text-lg leading-6 text-black mt-4">
            Below are all vivids that have been done in the past. Hopefully this
            should give you an idea of the type of work you can expect.
          </p>
        </div>
        <div
          id="extensions"
          className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center"
        >
          {vivids?.map((vivid) => {
            return (
              <div
                className="m-4 border-4 border-primary bg-primary"
                key={vivid._id}
              >
                <Image
                  src={urlFor(vivid.image).url()}
                  alt={vivid.name}
                  loading="lazy"
                  width={318.69}
                  height={415.99}
                />
                <h2 className="text-white text-lg leading-6 bg-primary p-4 text-center">
                  {vivid.name}
                </h2>
                <p className="text-black text-lg leading-6 bg-white p-2 text-center">
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
