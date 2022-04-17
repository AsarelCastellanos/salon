import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="bg-white body-font">
      <div className="container text-center px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-5xl text-4xl font-extrabold title-font text-black">Gallery</h1>
        </div>
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-extrabold title-font text-black">Extensions</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-black text-base">Below we have examples of extensions. You can hover over the images to see how the extensions look under the hair.</p>
        </div>
        {/* Image Div */}
        <div className="flex flex-wrap -m-4">
          {/* First Extension */}
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative h-96 w-22 lg:w-72">
              <Image src="/extensions/woven_weft_extensions_1.jpeg" alt="K-Tip Extensions" layout="fill" className="absolute inset-0 w-full h-full object-cover" priority="true"/>
              <div className="px-8 py-10 relative z-10 w-full bg-white opacity-0 hover:opacity-100">
                <Image src="/extensions/woven_weft_extensions_2.jpeg" alt="K-Tip Extensions" layout="fill" className="absolute inset-0 w-full h-full object-cover" priority="true"/>
              </div>
            </div>
          </div>
          {/* Second Extension */}
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative h-96 w-22 lg:w-72">
              <Image src="/extensions/k_tip_extensions_1.jpeg" alt="K-Tip Extensions" layout="fill" className="absolute inset-0 w-full h-full object-cover" priority="true"/>
              <div className="px-8 py-10 relative z-10 w-full bg-white opacity-0 hover:opacity-100">
                <Image src="/extensions/k_tip_extensions_2.jpeg" alt="K-Tip Extensions" layout="fill" className="absolute inset-0 w-full h-full object-cover" priority="true"/>
              </div>
            </div>
          </div>
          {/* Third Extension */}
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative h-96 w-22 lg:w-72">
              <Image src="/extensions/volume_weft_extensions_1.jpeg" alt="Volume Weft Extensions" layout="fill" className="absolute inset-0 w-full h-full object-cover" priority="true"/>
              <div className="px-8 py-10 relative z-10 w-full bg-white opacity-0 hover:opacity-100">
                <Image src="/extensions/volume_weft_extensions_2.jpeg" alt="Volume Weft Extensions" layout="fill" className="absolute inset-0 w-full h-full object-cover" priority="true"/>
              </div>
            </div>
          </div>
          {/* Fourth Extension */}
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative h-96 w-22 lg:w-72">
              <Image src="/extensions/sew_in_extensions_1.jpeg" alt="Sew In Extensions" layout="fill" className="absolute inset-0 w-full h-full object-cover" priority="true"/>
              <div className="px-8 py-10 relative z-10 w-full bg-white opacity-0 hover:opacity-100">
                <Image src="/extensions/sew_in_extensions_2.jpeg" alt="Sew In Extensions" layout="fill" className="absolute inset-0 w-full h-full object-cover" priority="true"/>
              </div>
            </div>
          </div>
          {/* Vivid Hair */}
          <div className="flex flex-col text-center w-full mt-10 mb-8">
            <h1 className="sm:text-3xl text-2xl font-extrabold title-font text-black">Vivid Hair</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-black text-base">Below we have exmaples of the vivid hair we have done in the past. Hover over an image so you can view a short description of what we've done with their hair.</p>
          </div>
          {/* First Vivid  */}
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative h-96 w-22 lg:w-72">
              <Image src="/vivids/vivid_hair_1.jpeg" alt="Purple and Gold Hair" layout="fill" className="absolute inset-0 w-full h-full object-cover" priority="true"/>
              <div className="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blackmb-1 text-black">@viciousstreaksalon</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-black">Vivid Hair</h1>
                <p className="leading-relaxed text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac neque pellentesque, fringilla mauris rutrum, euismod enim. Donec facilisis ornare enim ut sagittis.</p>
              </div>
            </div>
          </div>
          {/* Second Vivid */}
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative h-96 w-22 lg:w-72">
              <Image src="/vivids/vivid_hair_2.jpeg" alt="Fiery Red Hair" layout="fill" className="absolute inset-0 w-full h-full object-cover" priority="true"/>
              <div className="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blackmb-1 text-black">@viciousstreaksalon</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-black">Vivid Hair</h1>
                <p className="leading-relaxed text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac neque pellentesque, fringilla mauris rutrum, euismod enim. Donec facilisis ornare enim ut sagittis.</p>
              </div>
            </div>
          </div>
          {/* Third Vivid  */}
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative h-96 w-22 lg:w-72">
              <Image src="/vivids/vivid_hair_3.jpeg" alt="Green with Purple Hair" layout="fill" className="absolute inset-0 w-full h-full object-cover" priority="true"/>
              <div className="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blackmb-1 text-black">@viciousstreaksalon</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-black">Vivid Hair</h1>
                <p className="leading-relaxed text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac neque pellentesque, fringilla mauris rutrum, euismod enim. Donec facilisis ornare enim ut sagittis.</p>
              </div>
            </div>
          </div>
          {/* Fourth Vivid  */}
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative h-96 w-22 lg:w-72">
              <Image src="/vivids/vivid_hair_4.jpeg" alt="Chill Blue Hair" layout="fill" className="absolute inset-0 w-full h-full object-cover" priority="true"/>
              <div className="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blackmb-1 text-black">@viciousstreaksalon</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-black">Vivid Hair</h1>
                <p className="leading-relaxed text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac neque pellentesque, fringilla mauris rutrum, euismod enim. Donec facilisis ornare enim ut sagittis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
