import React from "react";

const FindUs = () => {
  return (
    <section id="find-us" className="text-gray-600 body-font relative pt-16">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.01335619748!2d-117.83836124597619!3d33.76087036837357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd983c907cd91%3A0xf3316f54c1069904!2sPhenix%20Salon%20Suites%20-%20Santa%20Ana!5e0!3m2!1sen!2sus!4v1649838544289!5m2!1sen!2sus"
          className="w-full h-full opacity-80 brightness-100"
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="title-font font-medium text-black tracking-wider text-md mt-2">
            ADDRESS
          </h2>
          <a
            href="https://goo.gl/maps/SS2rBLErK4Y7sgEM7"
            target="_blank"
            className="mt-1 mb-2 font-semibold text-primary leading-relaxed text-md"
            rel="noreferrer"
          >
            1979 E 17th St Ste 142 Santa Ana, CA 92705
          </a>
          <h2 className="title-font font-medium text-black tracking-wider text-md">
            REGULAR HOURS
          </h2>
          <p className="leading-relaxed text-black mt-1">
            Monday: 
          </p>
          <p className="leading-relaxed	text-black mt-1">
            Tuesday:
          </p>
          <p className="leading-relaxed text-black mt-1">
            Wednesday:
          </p>
          <p className="leading-relaxed text-black mt-1">
            Thursday:
          </p>
          <p className="leading-relaxed text-black mt-1">
            Friday:
          </p>
          <p className="leading-relaxed text-black mt-1">
            Saturday:
          </p>
          <p className="leading-relaxed text-black mt-1">
            Sunday:
          </p>
          <h2 className="title-font font-medium text-black tracking-wider text-md mt-2">
            TEXT US
          </h2>
          <p className="leading-relaxed text-black mt-1">(657) 859 - 1301</p>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
