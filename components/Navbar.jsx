import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Works", href: "/works" },
//   { name: "Blog Posts", href: "/posts" },
//   { name: "Contact", href: "/contact" },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="bg-[#202023] "
      style={{ position: "sticky", top: 0 }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                {/* <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                  <div className="flex">
                    <SocialIcon
                      url="https://github.com/muratcan-yuksel"
                      fgColor="gray"
                      bgColor="transparent"
                      target={"_blank"}
                    />{" "}
                    <SocialIcon
                      url="https://www.linkedin.com/in/murat-can-y%C3%BCksel-2b1347119/"
                      fgColor="gray"
                      bgColor="transparent"
                      target={"_blank"}
                    />{" "}
                    <SocialIcon
                      url="https://www.youtube.com/channel/UCP1hJydcsPZCwbn8rPiohsg"
                      fgColor="gray"
                      bgColor="transparent"
                      target={"_blank"}
                    />
                    <SocialIcon
                      url="https://dev.to/muratcanyuksel"
                      fgColor="gray"
                      bgColor="transparent"
                      target={"_blank"}
                    />{" "}
                    <SocialIcon
                      url="https://twitter.com/codingsirius"
                      fgColor="gray"
                      bgColor="transparent"
                      target={"_blank"}
                    />
                  </div>
                </div>
                {/* <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium sm:hidden"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  className={classNames(
                    "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "px-3 py-2 rounded-md text-sm font-medium sm:hidden"
                    )}
                  >
                    {item.name}
                  </Link>{" "}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  );
}
