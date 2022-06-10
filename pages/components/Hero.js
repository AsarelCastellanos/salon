import React from "react";
import Image from "next/image";

const Hero = ({ title, description, image }) => {
  return (
    <section id="home" className="bg-neutral">
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl">
                <span className="block">{title}</span>
                <span className="block text-primary">by Vidalia Arellano</span>
              </h1>
              <p className="max-w-md mx-auto mt-3 text-lg tracking-tight text-black sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-primary" />
          </div>
          <div className="max-w-5xl px-4 mx-auto sm:px-6">
            <div className="relative rounded-lg">
              <Image
                src={image}
                width="1000"
                height="700"
                alt={title}
                priority="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
