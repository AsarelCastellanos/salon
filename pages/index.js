import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import Image from "next/image";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FindUs from "./components/FindUs";

const websiteQuery = groq`*[ _type == 'website'][0]{
  description,
  extensionDescription,
  'image':image.asset->url,
  title,
  vividDescription
}`;

const testimonialsQuery = groq`*[_type == "testimonials"]{
  _id,
  date,
  name,
  description,
  'image':image.asset->url
}`;

export default function Home({ data, preview }) {
  const { data: website } = usePreviewSubscription(websiteQuery, {
    initialData: data.website,
    enabled: preview,
  });

  const { data: testimonials } = usePreviewSubscription(testimonialsQuery, {
    initialData: data.testimonials,
    enabled: preview,
  });

  const { description, extensionDescription, image, title, vividDescription } =
    website;

  return (
    <>
      <Hero title={title} description={description} image={image} />
      <Services />
      <Gallery
        extensionDescription={extensionDescription}
        vividDescription={vividDescription}
      />
      <section id="testimonials" className="bg-primary body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-white mb-20 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            {testimonials && testimonials.map((testimonial) => {
              return (
                <div
                  key={testimonial._id}
                  className="lg:w-1/3 lg:mb-0 mb-6 p-4"
                >
                  <div className="h-full text-center">
                    <div className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-white bg-gray-100">
                      <Image
                        className="rounded-full"
                        src={testimonial.image}
                        alt="Charles"
                        width="10"
                        height="10"
                        layout="responsive"
                      />
                    </div>
                    <p className="leading-relaxed text-white">
                      {testimonial.description}
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-primary mt-2 mb-2"></span>
                    <h2 className="text-white font-medium title-font tracking-wider text-sm">
                      {testimonial.name}
                    </h2>
                    <p className="text-white">{testimonial.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <FindUs />
    </>
  );
}

export async function getStaticProps({ preview = true }) {
  const website = await getClient(preview).fetch(websiteQuery);
  const testimonials = await getClient(preview).fetch(testimonialsQuery);

  if (!website || !testimonials) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview,
      data: { website, testimonials },
    },
  };
}
