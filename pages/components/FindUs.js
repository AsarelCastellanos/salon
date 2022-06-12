import React from "react";

const FindUs = ({ businessDays, firstAddress, secondAddress }) => {
  console.log(businessDays);
  return (
    <footer className="text-white bg-primary">
      <div className="px-5 py-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl">
            Our Address
          </h1>
          <a
            className="text-lg leading-6 text-white underline"
            href="https://goo.gl/maps/YJMuG1A5zzhbTkzz9"
            target="_blank"
            rel="noreferrer"
          >
            <span className="block">{firstAddress}</span>
            <span className="block">{secondAddress}</span>
          </a>
        </div>

        <div className="text-center">
          <h1 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl">
            Our Schedule
          </h1>
          <div className="grid gap-4 lg:grid-cols-3">
            {businessDays?.map((buisnessDay) => {
              return (
                <p className="text-lg leading-6" key={buisnessDay._id}>
                  {buisnessDay.day}: {buisnessDay.hour}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FindUs;
