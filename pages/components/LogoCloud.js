import Image from "next/image";
import React from "react";

const LogoCloud = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-center text-white text-sm font-semibold uppercase tracking-wide">
          Trusted Brands We Use
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="h-12">
              <Image
                src="/logos/pulpRiot.png"
                alt="Pulp Riot"
                width={250}
                height={50}
                layout="intrinsic"
              />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="h-12">
              <Image
                src="/logos/olaplex.png"
                alt="Olaplex"
                width={250}
                height={50}
                layout="intrinsic"
              />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="h-12">
              <Image
                src="/logos/pravana.png"
                alt="Pravana"
                width={250}
                height={50}
                layout="intrinsic"
              />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <div className="h-12">
              <Image
                src="/logos/redken.png"
                alt="Redken"
                width={300}
                height={100}
                layout="intrinsic"
              />
            </div>
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <div className="h-12">
              <Image
                src="/logos/k18.svg"
                alt="K-18"
                width={300}
                height={100}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
