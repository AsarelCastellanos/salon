import Image from "next/image";
import React from "react";

import { urlFor } from "../../lib/sanity";

const Testimonials = ({ testimonials }) => {
  return (
    <section id="testimonials" className="bg-neutral body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="mb-16 text-3xl font-extrabold text-center text-black sm:text-4xl">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          {testimonials?.map((testimonial) => {
            return (
              <div
                key={testimonial._id}
                className="max-w-xl p-4 mx-auto mb-6 lg:w-1/3 lg:mb-0"
              >
                <div className="h-full text-center">
                  <div className="inline-block object-cover object-center w-20 h-20 mb-8 border-2 rounded-full border-primary bg-primary">
                    <Image
                      className="rounded-full"
                      src={urlFor(testimonial.image).url()}
                      alt={testimonial.name}
                      width="80"
                      height="80"
                      priority="true"
                    />
                  </div>
                  <p className="text-lg leading-6 text-black">
                    {testimonial.description}
                  </p>
                  <span className="inline-block w-10 h-1 mt-2 mb-2 rounded bg-primary"></span>
                  <h2 className="text-lg font-medium tracking-wider text-black">
                    {testimonial.name}
                  </h2>
                  <p className="font-medium tracking-wider text-black text-md">{testimonial.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    
  );
};

export default Testimonials;
