import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

import Image from "next/image";
import Link from "next/link";

const websiteQuery = groq`*[_type == "website" && title == 'Vicious Streak Salon'][0] {
  title,
  description,
  'image':image.asset->url
}`;

const testimonialQuery = groq`*[_type == "testimonials"]`;

export default function Home({ data, preview }) {
  const { data: website } = usePreviewSubscription(websiteQuery, {
    initialData: data.website,
    enabled: preview,
  });

  const { data: testimonials } = usePreviewSubscription(testimonialQuery, {
    initialData: data.testimonials,
    enabled: preview,
  });

  const { title, description, image } = website;

  return (
    <>
      <section id="home" className="bg-white">
        <div className="relative overflow-hidden">
          <div className="relative pt-6 pb-16 sm:pb-24">
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">{title}</span>
                  <span className="block text-primary">
                    by Vidalia Arellano
                  </span>
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
                <Image
                  src={image}
                  width="1000"
                  height="700"
                  alt={title}
                  priority="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-priamry overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl">
                <span className="block xl:inline">Our Services</span>{" "}
                <span className="block text-white xl:inline">
                  Example1. Example2.
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link href="/services" passHref>
                    <p className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary md:py-4 md:text-lg md:px-10">
                      View Services
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      <section className="relative bg-white overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-extrabold text-black sm:text-4xl md:text-5xl">
                <span className="block xl:inline">View our Gallery</span>{" "}
                <span className="block text-primary xl:inline">
                  Extensions. Gallery.
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-black sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link href="/extensions" passHref>
                  <p
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary md:py-4 md:text-lg md:px-10"
                  >
                    View Extensions
                  </p>
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/vivids" passHref>
                  <p
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary md:py-4 md:text-lg md:px-10"
                  >
                    View Vivids
                  </p>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      <section id="testimonials" className="bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-black mb-20 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          {testimonials?.map((testimonial) => {
            return (
              <div key={testimonial._id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <div className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-primary bg-primary">
                    <Image
                      className="rounded-full"
                      src={urlFor(testimonial.image).url()}
                      alt="Charles"
                      width="80"
                      height="80"
                      loading="lazy"
                    />
                  </div>
                  <p className="leading-relaxed text-black">
                    {testimonial.description}
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-primary mt-2 mb-2"></span>
                  <h2 className="text-black font-medium title-font tracking-wider text-sm">
                    {testimonial.name}
                  </h2>
                  <p className="text-black">{testimonial.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}

export async function getServerSideProps({ preview = true }) {
  const website = await getClient(preview).fetch(websiteQuery);
  const testimonials = await getClient(preview).fetch(testimonialQuery);

  return {
    props: {
      preview,
      data: { website, testimonials },
    },
  };
}
