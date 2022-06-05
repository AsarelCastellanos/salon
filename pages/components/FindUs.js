import React from "react";

const FindUs = ({ businessDays, firstAddress, secondAddress }) => {
  console.log(businessDays);
  return (
    <footer className="text-white bg-primary">
      <div className="px-5 py-8">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-extrabold text-white sm:text-3xl mb-4">
            Our Address
          </h1>
          <a className="text-lg leading-6 text-white underline" href="">
            <span className="block">
              {firstAddress}
            </span>
            <span className="block">
              {secondAddress}
            </span>
          </a>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-white sm:text-3xl mb-4">
            Our Schedule
          </h1>
          <div className="grid lg:grid-cols-3 gap-4">
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
