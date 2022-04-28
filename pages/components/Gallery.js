/* eslint-disable @next/next/no-img-element */
import React from "react";

import { urlFor } from "../../lib/sanity";

const Gallery = ({
  extensionDescription,
  extensions,
  vividDescription,
  vivids,
}) => {
  console.log(extensions);
  return (
    <section id="gallery" className="bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
            Extensions
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-black">
            {extensionDescription}
          </p>
        </div>
        <div
          id="extensions"
          className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center"
        >
          {extensions?.map((extension) => {
            return (
              <div className="m-4 relative" key={extension._id}>
                <img
                  src={urlFor(extension.topHair).url()}
                  alt={extension.name}
                  className="absolute inset-0"
                />
                <img
                  src={urlFor(extension.bottomHair).url()}
                  alt={extension.name}
                  className="relative opacity-0 hover:opacity-100 z-10"
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col text-center w-full mt-10 mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
            Vivids
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-black">
            {vividDescription}
          </p>
        </div>
        <div
          id="extensions"
          className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center"
        >
          {vivids?.map((vivid) => {
            return (
              <div className="m-4 relative" key={vivid._id}>
                <img
                  src={urlFor(vivid.image).url()}
                  alt={vivid.name}
                  className="absolute inset-0"
                />
                <div className="relative opacity-0 hover:opacity-100 z-10 h-custom px-8 py-10 bg-white border-4 border-primary">
                  <a
                    href="https://www.instagram.com/viciousstreaksalon/"
                    target="_blank"
                    className="tracking-widest text-sm title-font font-medium text-black"
                    rel="noreferrer"
                  >
                    @viciousstreaksalon
                  </a>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    {vivid.name}
                  </h1>
                  <p className="leading-relaxed text-black">
                    {vivid.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
