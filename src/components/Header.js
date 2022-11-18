import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Pokemon Company</span>
              <img
                className="h-8 w-auto sm:h-14"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a
              href="/pokedex"
              className="text-base font-extrabold text-sky-700 hover:text-sky-900"
            >
              POKÉDEX
            </a>
            <a
              href="/my_pokemon"
              className="text-base font-extrabold text-sky-700 hover:text-sky-900"
            >
              MY POKÉMON
            </a>
            <a
              href="/about"
              className="text-base font-extrabold text-sky-700 hover:text-sky-900"
            >
              ABOUT US
            </a>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="/error"
              className="whitespace-nowrap text-base font-medium text-sky-700 hover:text-sky-900"
            >
              Sign in
            </a>
            <a
              href="error"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-sky-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-800"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href={"/"}
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                  >
                    {/* <item.icon
                        className="h-6 w-6 flex-shrink-0 text-blue-600"
                        aria-hidden="true"
                      /> */}
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {"Home"}
                    </span>
                  </a>
                  <a
                    href={"about"}
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                  >
                    {/* <item.icon
                        className="h-6 w-6 flex-shrink-0 text-blue-600"
                        aria-hidden="true"
                      /> */}
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {"About"}
                    </span>
                  </a>
                  <a
                    href={"pokemon"}
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                  >
                    {/* <item.icon
                        className="h-6 w-6 flex-shrink-0 text-blue-600"
                        aria-hidden="true"
                      /> */}
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {"Pokemon"}
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <a
                  href="error"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing user?{" "}
                  <a href="error" className="text-blue-600 hover:text-blue-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
