/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";


const LogoCloud = ({ logos }) => {
  return (
    <div className="bg-primary">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <h2 className="font-semibold tracking-wide text-center text-white uppercase text-md">
          Using only the best brands and products
        </h2>
        <div className="grid grid-cols-2 gap-8 mt-8 md:grid-cols-4 lg:grid-cols-4">
          {logos?.map((logo) => {
            return (
              <div key={logo._key} className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <Image
                    src={urlFor(logo.asset).url()}
                    alt={logo._key}
                    priority="true"
                    width={5000}
                    height={850}
                  />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
