import React from "react";
import Image from "next/image";
import Link from "next/link";

import { urlFor } from "../../lib/sanity";

const Gallery = ({
  extensionDescription,
  extensions,
  vividDescription,
  vivids,
}) => {
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
                <div className="absolute inset-0">
                  <Image
                    src={urlFor(extension.topHair).url()}
                    alt={extension.name}
                    loading="lazy"
                    width={318.69}
                    height={415.99}
                  />
                </div>
                <div className="relative opacity-0 hover:opacity-100 z-10">
                  <Image
                    src={urlFor(extension.bottomHair).url()}
                    alt={extension.name}
                    loading="lazy"
                    width={318.69}
                    height={415.99}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <Link href="/extensions" passHref>
            <button className="btn btn-primary relative px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white">
              View More Extensions
            </button>
          </Link>
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
        <div className="flex flex-col">
        <Link href="/vivids" passHref>
            <button className="btn btn-primary relative px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white">
              View More vivids
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
