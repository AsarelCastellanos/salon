import React from "react";
import { groq } from "next-sanity";

import { usePreviewSubscription } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import ConsultButton from "./components/ConsultButton";

const serviceQuery = groq`*[_type == "services"] | order(serviceOrder asc)
{
 _id,
 name,
 price,
 serviceOrder
}`;

export default function Services({ data, preview }) {
  const { data: services } = usePreviewSubscription(serviceQuery, {
    initialData: data.services,
    enabled: preview,
  });

  return (
    <section id="service" className="bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            Our Services
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-black text-base">
            Below you&apos;ll find our starting prices. They will vary depending
            on hair length, volume and texture.
          </p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-primary rounded-tl rounded-bl">
                  Service
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-primary rounded-tr rounded-br">
                  Pricing
                </th>
              </tr>
            </thead>
            <tbody>
              {services?.map((service) => {
                return (
                  <tr key={service._id}>
                    <td className="text-black border-t-2 bg-white border-primary px-4 py-3">
                      {service.name}
                    </td>
                    <td className="text-black border-t-2 bg-white border-primary px-4 py-3">
                      {service.price}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <ConsultButton
            style={
              "flex ml-auto text-white border-0 py-2 px-6 btn btn-primary rounded"
            }
          />
        </div>
      </div>
    </section>
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
