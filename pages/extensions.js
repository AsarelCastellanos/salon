import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import Image from "next/image";

const extensionsQuery = groq`*[ _type == "extensions"]{
  _id,
  name,
  bottomHair,
  topHair 
}`;

export default function Extensions({ data, preview }) {
  const { data: extensions } = usePreviewSubscription(extensionsQuery, {
    initialData: data.extensions,
    enabled: preview,
  });

  return (
    <section id="gallery" className="bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
            Extensions
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-black">
            Below are all extensions that have been done in the past. You can
            hover over the images (click on the images on mobile) to view the
            extension work done under the hair.
          </p>
        </div>
        <div
          id="extensions"
          className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 justify-items-center"
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
      </div>
    </section>
  );
}

export async function getServerSideProps({ preview = true }) {
  const extensions = await getClient(preview).fetch(extensionsQuery);

  return {
    props: {
      preview,
      data: { extensions },
    },
  };
}
