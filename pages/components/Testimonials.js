import Image from "next/image";
import React from "react";

import { urlFor } from "../../lib/sanity";

const Testimonials = ({ testimonials }) => {
  return (
    <section id="testimonials" className="bg-primary body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-16 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          {testimonials?.map((testimonial) => {
            return (
              <div
                key={testimonial._id}
                className="lg:w-1/3 lg:mb-0 mb-6 p-4 max-w-xl mx-auto"
              >
                <div className="h-full text-center">
                  <div className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-white bg-gray-100">
                    <Image
                      className="rounded-full"
                      src={urlFor(testimonial.image).url()}
                      alt="Charles"
                      width="80"
                      height="80"
                      priority="true"
                    />
                  </div>
                  <p className="text-lg leading-6 text-white">
                    {testimonial.description}
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-white mt-2 mb-2"></span>
                  <h2 className="text-white font-medium tracking-wider text-sm">
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
  );
};

export default Testimonials;
