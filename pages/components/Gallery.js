import Image from "next/image";
import React from "react";

const Gallery = ({
  extensionDescription,
  extensions,
  vividDescription,
  vivids,
}) => {
  return (
    <section id="gallery" className="bg-white body-font">
      <div className="container text-center px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-5xl text-4xl font-extrabold title-font text-black">
            Gallery
          </h1>
        </div>
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-extrabold title-font text-black">
            Extensions
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-black text-base">
            {extensionDescription}
          </p>
        </div>
        {/* Image Div */}
        <div className="flex flex-wrap -m-4">
          {/* Extensions */}
          {extensions?.map((extension) => {
            return (
              <div key={extension._id} className="lg:w-1/4 sm:w-1/2 p-4">
                <div className="flex relative h-96 w-22 lg:w-72">
                  <Image
                    src={extension.topHair}
                    alt={extension.name}
                    layout="fill"
                    className="absolute inset-0 w-full h-full object-cover"
                    priority="true"
                  />
                  <div className="px-8 py-10 relative z-10 w-full bg-white opacity-0 hover:opacity-100">
                    <Image
                      src={extension.bottomHair}
                      alt={extension.name}
                      layout="fill"
                      className="absolute inset-0 w-full h-full object-cover"
                      priority="true"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          {/* Vivid Hair */}
          <div className="flex flex-col text-center w-full mt-10 mb-8">
            <h1 className="sm:text-3xl text-2xl font-extrabold title-font text-black">
              Vivid Hair
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-black text-base">
              {vividDescription}
            </p>
          </div>
          {/* Vivids  */}
          {vivids?.map((vivid) => {
            return (
              <div key={vivid._id} className="lg:w-1/4 sm:w-1/2 p-4">
                <div className="flex relative h-96 w-22 lg:w-72">
                  <Image
                    src={vivid.image}
                    alt={vivid.name}
                    layout="fill"
                    className="absolute inset-0 w-full h-full object-cover"
                    priority="true"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blackmb-1 text-black">
                      @viciousstreaksalon
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-black">
                      {vivid.name}
                    </h1>
                    <p className="leading-relaxed text-black">
                      {vivid.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
