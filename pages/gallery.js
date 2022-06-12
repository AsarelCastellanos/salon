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
    <section id="gallery" className="bg-neutral body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-10 text-center">
          <h1 className="text-2xl font-extrabold text-black sm:text-3xl">
            Extensions
          </h1>
          <p className="mx-auto mt-4 text-lg leading-6 text-black lg:w-2/3">
            {extensionDescription}
          </p>
        </div>
        <div
          id="extensions"
          className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center"
        >
          {extensionList?.map((extension) => {
            return (
              <div className="relative m-4" key={extension._id}>
                <div className="absolute inset-0">
                  <Image
                    src={urlFor(extension.topHair).url()}
                    alt={extension.name}
                    priority="true"
                    width={318.69}
                    height={415.99}
                  />
                </div>
                <div className="relative z-10 opacity-0 hover:opacity-100">
                  <Image
                    src={urlFor(extension.bottomHair).url()}
                    alt={extension.name}
                    priority="true"
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
            <button className="px-4 py-2 text-lg font-medium text-white capitalize rounded-md btn btn-primary">
              View More Extensions
            </button>
          </Link>
        </div>
        <div className="flex flex-col w-full mt-10 mb-10 text-center">
          <h1 className="text-2xl font-extrabold text-black sm:text-3xl">
            Vivids
          </h1>
          <p className="mx-auto mt-4 text-lg leading-6 text-black lg:w-2/3">
            {vividDescription}
          </p>
        </div>
        <div
          id="extensions"
          className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center"
        >
          {vividList?.map((vivid) => {
            return (
              <div className="m-4" key={vivid._id}>
                <Image
                  src={urlFor(vivid.image).url()}
                  alt={vivid.name}
                  priority="true"
                  width={318.69}
                  height={415.99}
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <Link href="/vivids" passHref>
            <button className="px-4 py-2 text-lg font-medium text-white capitalize rounded-md btn btn-primary">
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
