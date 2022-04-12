import Image from "next/image";
import salon from "../../public/profile/salon_2.jpg";
import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Vicious Streak Salon</span>
                <span className="block text-primary">by Vidalia Arellano</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-primary" />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-lg shadow-lg">
              <Image src={salon} alt="Salon" layout="responsive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
