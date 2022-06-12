import React from "react";
import Link from "next/link";

const CTAServices = () => {
  return (
    <div className="bg-neutral">
      <div className="max-w-2xl px-4 py-16 mx-auto text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-xl font-extrabold text-black sm:text-3xl">
          <span className="block">Haircuts? Balayage?</span>
          <span className="block">What do you offer?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-black">
          Great question! I offer a range of servies from root color, hair cuts,
          balayage, extensions and more. Below you will be directed to a page
          where you will see all the base prices.
        </p>
        <Link href="/services" passHref>
          <button className="w-full mt-6 text-lg font-medium text-white capitalize rounded-md btn btn-primary sm:w-auto">
            View Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTAServices;
