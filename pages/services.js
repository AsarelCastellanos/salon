import React from "react";
import { groq } from "next-sanity";

import { usePreviewSubscription } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

const serviceQuery = groq`*[_type == "services"] | order(serviceOrder asc)
{
 _id,
 name,
 price,
 serviceOrder,
 description
}`;

export default function Services({ data, preview }) {
  const { data: services } = usePreviewSubscription(serviceQuery, {
    initialData: data.services,
    enabled: preview,
  });

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="pb-20">
        <div className="px-4 py-24 mx-auto text-center max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-black md:text-5xl lg:text-6xl">
            Services
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-xl text-center text-black">
            Below you&apos;ll find our starting prices. They will vary depending
            on hair length, volume and texture. When you want to book an
            appointment just click the &quot;Book A Consult&quot; button on the
            top right.
          </p>
        </div>
      </div>
      {/* Overlapping cards */}
      <section
        className="px-4 pb-32 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8"
        aria-labelledby="services-heading"
      >
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-y-8 lg:gap-x-8 md:grid-cols-2 md:gap-y-8 md:gap-x-4">
          {services?.map((service) => (
            <div
              key={service._id}
              className="flex flex-col bg-primary rounded-2xl"
            >
              <div className="flex-1 px-6 pt-4 pb-4">
                <div className="flex flex-row">
                  <h3 className="flex-1 text-xl font-medium text-white">
                    {service.name}
                  </h3>
                  <p className="flex-1 text-xl font-medium text-right text-white">
                    {service.price}
                  </p>
                </div>
              </div>
              {/* <div className="px-5 py-6 bg-white border-b-4 border-l-4 border-r-4 rounded-bl-2xl rounded-br-2xl border-primary">
                <p className="text-lg font-medium text-black">
                  {service.description}
                </p>
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps({ preview = true }) {
  const services = await getClient(preview).fetch(serviceQuery);

  return {
    props: {
      preview,
      data: { services },
    },
  };
}
