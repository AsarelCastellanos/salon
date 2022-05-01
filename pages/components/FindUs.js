import React from "react";
import ConsultButton from "./ConsultButton";

const FindUs = ({ monday, tuesday, wednesday, thursday, friday, saturday, sunday }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black text-center">Find Us</h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium text-black text-center">Our Location</h3>
            <a href="https://goo.gl/maps/SS2rBLErK4Y7sgEM7" target="_blank" rel="noreferrer" className="mt-2 text-base text-gray-500 text-center hover:underline">
              <span className="block">1979 E 17th St. Ste 142</span>
              <span className="block">Santa Ana, CA 92705</span>
            </a>
            <div className="text-center">
              <ConsultButton style={"btn btn-primary inline-flex px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white mt-6"} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-black text-center">Our Business Hours</h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              <span className="block">Monday: {monday}</span>
              <span className="block">Tuesday: {tuesday}</span>
              <span className="block">Wednesday: {wednesday}</span>
              <span className="block">Thursday: {thursday}</span>
              <span className="block">Friday: {friday}</span>
              <span className="block">Saturday: {saturday}</span>
              <span className="block">Sunday: {sunday}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
