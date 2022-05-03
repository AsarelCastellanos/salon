import React from "react";
import { groq } from "next-sanity";
import { urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import Image from "next/image";

const vividsQuery = groq`*[ _type == "vivids"][0..4]{
  _id,
  name,
  description,
  image
}`;

const vivids = ({ vivids }) => {
  return (
    <section id="gallery" className="bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mt-10 mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
            Vivids
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-black">
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
              <div className="m-4" key={vivid._id}>
                <Image
                  src={urlFor(vivid.image).url()}
                  alt={vivid.name}
                  loading="lazy"
                  width={318.69}
                  height={415.99}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default vivids;

export async function getServerSideProps({ preview = true }) {
  const vivids = await getClient(preview).fetch(vividsQuery);

  return {
    props: {
      vivids,
    },
  };
}
