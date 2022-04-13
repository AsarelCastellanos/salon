import React from "react";

const FindUs = () => {
  return (
    <section id="find-us" className="text-gray-600 body-font relative pt-16">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJkc0HyYPZ3IARBJkGwVRvMfM&key=AIzaSyC5Ti0syiDinopQj_CNdS7ZDnHLR2ssZe0"
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
          <p className="leading-relaxed text-black mt-1">Monday: CLOSED</p>
          <p className="leading-relaxed	text-black mt-1">Tuesdy: CLOSED</p>
          <p className="leading-relaxed text-black mt-1">
            Wednesday: 12:00PM - 9:00PM
          </p>
          <p className="leading-relaxed text-black mt-1">
            Thursday: 12:00PM - 8:00PM
          </p>
          <p className="leading-relaxed text-black mt-1">
            Friday: 12:00PM - 8:00PM
          </p>
          <p className="leading-relaxed text-black mt-1">
            Saturday: 9:00 AM - 5:00PM
          </p>
          <p className="leading-relaxed text-black mt-1">Sunday: CLOSED</p>
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
