import React from "react";
import {
  LocationMarkerIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/outline";

const FindUs = ({ businessDays, firstAddress, secondAddress }) => {
  console.log(businessDays);
  return (
    <div className="bg-primary">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-center text-white sm:text-3xl">
              Our Location
            </h2>
            <div className="mt-9">
              <div className="flex justify-center">
                {/* <div className="flex-shrink-0">
                  <LocationMarkerIcon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div> */}
                <div className="text-base text-white ml-2">
                  <a
                    className="underline"
                    href="https://goo.gl/maps/p1dkFoGW6z3n7ma97"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>{firstAddress}</p>
                    <p>{secondAddress}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-extrabold text-center text-white sm:text-3xl">
              Business Days
            </h2>
            <div className="mt-9">
              <div className="flex justify-center">
                <div className="ml-14 text-base text-white">
                  {businessDays?.map((businessDay) => {
                    return (
                      <div className="flex mt-2" key={businessDay._id}>
                        <CalendarIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                        <p className="flex-1 ml-4">{businessDay.day}</p>
                        <ClockIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                        <p className="flex-1 ml-4">{businessDay.hour}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
