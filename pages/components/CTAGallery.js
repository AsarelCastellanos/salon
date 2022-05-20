import React from "react";
import Link from "next/link";

const CTAGallery = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-2xl px-4 py-16 mx-auto text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          <span className="block">Unsure? Nervous?</span>
          <span className="block">Lost? Concerned?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-white">
          That&apos;s fine! I know it can be difficult to trust someone to handle your hair. In order to help ease you I&apos;ve created a gallery that shows some of the past hair I&apos;ve worked on.
        </p>
        <Link href="/gallery" passHref>
          <button className="w-full mt-6 text-lg font-medium capitalize bg-white rounded-md btn text-primary hover:text-white sm:w-auto">
            View Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTAGallery;