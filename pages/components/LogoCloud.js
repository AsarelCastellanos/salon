import React from "react";

const LogoCloud = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-center text-white text-sm font-semibold uppercase tracking-wide">
          Trusted Brands We Use
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="/logos/pulpRiot.png"
              alt="Pulp Riot"
            />
          </div>

          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="/logos/olaplex.png"
              alt="Olaplex"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="/logos/pravana.png"
              alt="Pravana"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="/logos/redken.png"
              alt="Redken"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="/logos/k18.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
