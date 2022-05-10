import React from "react";
import Link from "next/link";
import Image from "next/image";

import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

const galleryQuery = groq`*[_type == "website" && title == 'Vicious Streak Salon'][0] {
  extensionDescription,
  extensionList[]->{_id, name, topHair, bottomHair},
  vividDescription,
  vividList[]->{_id, name, image},
}`;

export default function Gallery({ data, preview }) {
  const { data: gallery } = usePreviewSubscription(galleryQuery, {
    initialData: data.gallery,
    enabled: preview,
  });

  const { extensionDescription, extensionList, vividDescription, vividList } =
    gallery;

  return (
    <section id="gallery" className="bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-2xl font-extrabold text-black sm:text-3xl">
            Extensions
          </h1>
          <p className="lg:w-2/3 mx-auto text-lg leading-6 text-black mt-4">
            {extensionDescription}
          </p>
        </div>
        <div
          id="extensions"
          className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center"
        >
          {extensionList?.map((extension) => {
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
            <button className="btn btn-primary px-4 py-2 text-lg capitalize font-medium rounded-md text-white">
              View More Extensions
            </button>
          </Link>
        </div>
        <div className="flex flex-col text-center w-full mt-10 mb-10">
          <h1 className="text-2xl font-extrabold text-black sm:text-3xl">
            Vivids
          </h1>
          <p className="lg:w-2/3 mx-auto text-lg leading-6 text-black mt-4">
            {vividDescription}
          </p>
        </div>
        <div
          id="extensions"
          className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center"
        >
          {vividList?.map((vivid) => {
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
            <button className="btn btn-primary px-4 py-2 text-lg capitalize font-medium rounded-md text-white">
              View More vivids
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps({ preview = true }) {
  const gallery = await getClient(preview).fetch(galleryQuery);

  return {
    props: {
      preview,
      data: { gallery },
    },
  };
}