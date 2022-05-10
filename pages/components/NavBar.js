import Image from "next/image";
import React from "react";
import Link from "next/link";

import ConsultButton from "./ConsultButton";

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavBar = () => {
  return (
    <Disclosure as="nav" className="w-full bg-primary fixed top-0 z-40">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {/* If open the menu then show X-Icon otherwise show the Menu-Icon */}
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Logo - First: Show when mobile. Second: Show when full-screen. */}
                <div className="flex-shrink-0 flex items-center">
                  <div className="block lg:hidden mt-1">
                    <Image
                      src="/logos/vss_logo.png"
                      width="40"
                      height="55"
                      layout="intrinsic"
                      alt="Vicious Streak Salon"
                    />
                  </div>
                  <div className="flex-1 hidden lg:flex">
                    <Image
                      src="/logos/vss_logo.png"
                      width="50"
                      height="60"
                      layout="intrinsic"
                      alt="Vicious Streak Salon"
                    />
                  </div>
                </div>
                {/* NavBar Links */}
                <div className="hidden md:ml-6 md:flex md:space-x-2">
                  <Link href="/" passHref>
                    <p className="btn btn-ghost text-white inline-flex items-center px-2 mt-2 text-lg capitalize font-medium">
                      Home
                    </p>
                  </Link>
                  <Link href="/services" passHref>
                    <p className="btn btn-ghost text-white inline-flex items-center px-2 mt-2 text-lg capitalize font-medium">
                      Services
                    </p>
                  </Link>
                  <Link href="/gallery" passHref>
                    <p className="btn btn-ghost text-white inline-flex items-center px-2 mt-2 text-lg capitalize font-medium">
                      Gallery
                    </p>
                  </Link>
                </div>
              </div>
              {/* Book A Consult Button */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ConsultButton
                    style={
                      "btn btn-ghost relative inline-flex items-center text-md text-lg capitalize font-medium rounded-md text-white"
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Mobile Menu Links */}
              <Disclosure.Button className="btn btn-ghost text-white hover:border-white block pr-4 py-2 text-lg capitalize font-medium sm:pl-5 sm:pr-6">
                <Link href="/" passHref>
                  Home
                </Link>
              </Disclosure.Button>
              <Disclosure.Button className="btn btn-ghost text-white hover:border-white block pr-4 py-2 text-lg capitalize font-medium sm:pl-5 sm:pr-6">
                <Link href="/services" passHref>
                  Services
                </Link>
              </Disclosure.Button>
              <Disclosure.Button className="btn btn-ghost text-white hover:border-white block pr-4 py-2 text-lg capitalize font-medium sm:pl-5 sm:pr-6">
                <Link href="/gallery" passHref>
                  Gallery
                </Link>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
