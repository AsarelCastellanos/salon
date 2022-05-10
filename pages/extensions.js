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
          <h1 className="text-2xl font-extrabold text-black sm:text-3xl mb-4">
            Extensions
          </h1>
          <p className="lg:w-2/3 mx-auto text-lg leading-6 text-black mt-4">
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
              <div className="m-4 relative border-4 border-primary bg-primary" key={extension._id}>
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
                <h2 className="text-white text-lg leading-6 bg-primary p-4 text-center">
                  {extension.name}
                </h2>
                <p className="text-black text-lg leading-6 bg-white p-2 text-center">
                  {extension.name}
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
  const extensions = await getClient(preview).fetch(extensionsQuery);

  return {
    props: {
      preview,
      data: { extensions },
    },
  };
}
