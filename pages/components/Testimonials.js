import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-black mb-20 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-primary bg-gray-100"
                src="/profile/charles_b.jpg"
              />
              <p className="leading-relaxed text-black">
                I can&apos;t tell you how much I LOVE Vidalia. I have followed
                her from salon to salon to now, as a small business owner
                because I trust NO ONE else with my hair. I would fly to another
                country just to have her do my hair. Besides being a great
                stylist, she&apos;s super funny and always has great tunes on! I
                have referred tons of people to her and now they all love her
                too!
              </p>
              <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
              <h2 className="text-black font-medium title-font tracking-wider text-sm">
                Charles B.
              </h2>
              <p className="text-black">10/22/2021</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-primary bg-gray-100"
                src="/profile/elyse_t.jpg"
              />
              <p className="leading-relaxed text-black">
                I&apos;ve been coming to Vidalia for over a year now and I can
                say I trust her with my hair needs. It&apos;s been a struggle
                trying to find a hair stylist that does what you ask for, or
                even what you want. I&apos;ve had a few mess up my hair and now
                it&apos;s hard for me to trust anyone with it, but she
                definitely knows her stuff!! I&apos;ll be coming to her for the
                rest of my hair dying days! You rock Vidalia!!
              </p>
              <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
              <h2 className="text-black font-medium title-font tracking-wider text-sm">
                Elyse T.
              </h2>
              <p className="text-black">09/16/2020</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-primary bg-gray-100"
                src="/profile/breeana_b.jpg"
              />
              <p className="leading-relaxed text-black">
                Vidalia is an extremely talented hairstylist, I&apos;ve been
                going to her for many years and every time I&apos;ve gone
                anywhere else I&apos;ve regretted it. She&apos;s talented in all
                aspects, balayage, highlights, vibrant bright colors,
                extensions? She&apos;s got you. The salon is decorated with a
                cute dark but homey vibe and she has various refreshments to
                pick from. She&apos;s kind, funny and sweet.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
              <h2 className="text-black font-medium title-font tracking-wider text-sm">
                Breeana B.
              </h2>
              <p className="text-black">10/23/2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
