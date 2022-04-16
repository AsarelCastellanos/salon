import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <section className="bg-white body-font">
      <div className="container text-center px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-8">
          <h1 class="sm:text-3xl text-2xl font-extrabold title-font text-black">Gallery</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-black text-base">Below we have exmaples of some of the extentions, vivids, bleaches we've done in the past. Hover over an image so you can view a short description of what we've done with their hair.</p>
        </div>
        {/* Image Div */}
        <div className="flex flex-wrap -m-4">
          {/* First Image - Hover to change image */}
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative h-96">
              <Image src="/examples/vivid_1.jpeg" alt="Vivid 1" layout="fill" className="absolute inset-0 w-full h-full object-cover" />
              <div className="px-8 py-10 relative z-10 w-full bg-white opacity-0 hover:opacity-100">
                <Image src="/examples/vivid_2.jpeg" alt="Vivid 1" layout="fill" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
            <p className="leading-relaxed text-black">Hover over the image to see the extensions under!</p>
          </div>
          {/* Second Image */}
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative h-96">
              <Image src="/examples/vivid_4.jpeg" alt="Vivid 2" layout="fill" className="absolute inset-0 w-full h-full object-cover" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blackmb-1 text-black">@viciousstreaksalon</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-black">Extensions</h1>
                <p className="leading-relaxed text-black">This exention was done using the brand: ABC. As you can see we have added some bleach and tape.</p>
              </div>
            </div>
          </div>
          {/* Third Image */}
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative h-96">
              <Image src="/examples/vivid_3.jpeg" alt="Vivid 3" layout="fill" className="absolute inset-0 w-full h-full object-cover" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blackmb-1 text-black">@viciousstreaksalon</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-black">Extensions</h1>
                <p className="leading-relaxed text-black">This exention was done using the brand: ABC. As you can see we have added some bleach and tape. </p>
              </div>
            </div>
          </div>
          {/* Fourth Image */}
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative h-96">
              <Image src="/examples/vivid_1.jpeg" alt="Vivid 1" layout="fill" className="absolute inset-0 w-full h-full object-cover" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blackmb-1 text-black">@viciousstreaksalon</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-black">Extensions</h1>
                <p className="leading-relaxed text-black">This exention was done using the brand: ABC. As you can see we have added some bleach and tape.</p>
              </div>
            </div>
          </div>
          {/* <div class="flex flex-col text-center w-full mb-8">
            <h1 class="sm:text-3xl text-2xl font-extrabold title-font text-black">Gallery</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-black text-base">Below we have exmaples of some of the extentions, vivids, bleaches we've done in the past. Hover over an image so you can view a short description of what we've done with their hair.</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
