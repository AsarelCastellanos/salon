import React from "react";
import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import Image from "next/image";

const testimonialQuery = groq`*[_type == "testimonials"]`;

export default function Testimonials({ data, preview }) {
  const { data: testimonials } = usePreviewSubscription(testimonialQuery, {
    initialData: data.testimonials,
    enabled: preview,
  });

  return (
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
  );
}

export async function getServerSideProps({ preview = true }) {
  const testimonials = await getClient(preview).fetch(testimonialQuery);

  return {
    props: {
      preview,
      data: { testimonials },
    },
  };
}
