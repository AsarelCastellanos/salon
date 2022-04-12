import Image from "next/image";
import React from "react";

import ConsultButton from "./ConsultButton";

import{ Disclosure } from '@headlessui/react'
import  { MenuIcon, XIcon } from '@heroicons/react/outline'

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
                    <Image src="/logos/vss_logo.png" width="40" height="55" layout="intrinsic" alt="Vicious Streak Salon"/>
                  </div>
                  <div className="hidden lg:block mt-1">
                    <Image src="/logos/vss_logo.png" width="50" height="60" layout="intrinsic" alt="Vicious Streak Salon"/>
                  </div>
                  {/* <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  /> */}
                </div>
                {/* NavBar Links */}
                <div className="hidden md:ml-6 md:flex md:space-x-2">
                  <a
                    href="#home"
                    className="btn btn-ghost text-white hover:border-white inline-flex items-center px-2 mt-2 text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#service"
                    className="btn btn-ghost text-white hover:border-white inline-flex items-center px-2 mt-2 text-sm font-medium"
                  >
                    Services
                  </a>
                  <a
                    href="#testimonials"
                    className="btn btn-ghost text-white hover:border-white inline-flex items-center px-2 mt-2 text-sm font-medium"
                  >
                    Testimonials
                  </a>
                  <a
                    href="#find-us"
                    className="btn btn-ghost text-white hover:border-white inline-flex items-center px-2 mt-2 text-sm font-medium"
                  >
                    Find Us
                  </a>
                </div>
              </div>
              {/* Book A Consult Button */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ConsultButton />
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#home"
                className="btn btn-ghost text-white hover:border-white block pr-4 py-2 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#service"
                className="btn btn-ghost text-white hover:border-white block pl-3 pr-4 py-2 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#testimonials"
                className="btn btn-ghost text-white hover:border-white block pl-3 pr-4 py-2 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Testimonials
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#find-us"
                className="btn btn-ghost text-white hover:border-white block pl-3 pr-4 py-2 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Find Us
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
