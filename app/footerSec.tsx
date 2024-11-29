import Logo from "@/assets/aria_logo.png";
import Image from "next/image";
import Link from "next/link";

export const FooterSec = () => {
  return (
    <footer className="w-full px-4 py-20 bg-green-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center pb-12 border-b border-gray-200 lg:justify-between lg:flex-row gap-7 lg:gap-0">
          <Image src={Logo} alt="ARIA" className="w-36" />
          <a
            href="javascript:;"
            className="flex text-center items-center gap-2 py-3.5 px-7 rounded-full bg-green-500 shadow-md text-white font-semibold hover:bg-green-600"
          >
            Contact hello.ariaph@gmail.com
          </a>
        </div>
        <div className="flex justify-between flex-col py-8 min-[500px]:py-14 gap-8 min-[500px]:gap-16 lg:gap-0 lg:flex-row">
          <div className="flex flex-col items-center max-lg:justify-center min-[500px]:items-start min-[500px]:flex-row gap-8 sm:gap-12 xl:gap-24">
            <div className="block">
              <h4 className="text-lg text-gray-900 font-medium mb-4 min-[500px]:mb-7 text-center min-[500px]:text-left">
                Section
              </h4>
              <ul className="grid gap-4 min-[500px]:gap-6 text-center min-[500px]:text-left">
                <li className="text-gray-600 transition hover:opacity-75">
                  <Link href="#home" shallow>
                    Home
                  </Link>
                </li>
                <li className="text-gray-600 transition hover:opacity-75">
                  <Link href="#ar" shallow>
                    AR
                  </Link>
                </li>
                <li className="text-gray-600 transition hover:opacity-75">
                  <Link href="#features" shallow>
                    Features
                  </Link>
                </li>
                <li className="text-gray-600 transition hover:opacity-75">
                  <Link href="#info" shallow>
                    Info
                  </Link>
                </li>
                <li className="text-gray-600 transition hover:opacity-75">
                  <Link href="#team" shallow>
                    Team
                  </Link>
                </li>
                <li className="text-gray-600 transition hover:opacity-75">
                  <Link href="#contact" shallow>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="block">
              <h4 className="text-lg text-gray-900 font-medium mb-4 min-[500px]:mb-7 text-center min-[500px]:text-left">
                Team
              </h4>
              <ul className="grid gap-4 min-[500px]:gap-6 text-center min-[500px]:text-left">
                <li>
                  <a
                    href="https://www.facebook.com/elijah.macatiag.7"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Elijah Japheth Macatiag
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/deadnaako"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Hernani Domingo
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/rynn.com.ph"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Ryan King Ballesteros
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/vincentcueva.58"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Vincent Cueva
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/llegojessica"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Jesicca Llego
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="block lg:max-w-md">
            <h3 className="mb-8 text-2xl font-semibold leading-9 text-center text-gray-900 font-manrope lg:text-left">
              Be the first to know about new arrivals and exclusive deals!
            </h3>
            <div className="lg:bg-gray-100 lg:rounded-full lg:h-16 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
              <input
                type="text"
                name="email"
                className="flex-1 w-full max-w-xl px-6 py-3 mx-auto text-gray-900 bg-gray-100 rounded-full placeholder:text-gray-500 focus:outline-none lg:w-auto lg:py-5 lg:px-7 lg:bg-transparent"
                placeholder="Your email here..."
              />
              <button
                type="submit"
                className="py-3.5 px-7 bg-green-500 shadow-md rounded-full text-white font-semibold hover:bg-green-600"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-9">
          <div className="flex flex-col items-center justify-center gap-8 lg:gap-0 lg:flex-row">
            <span className="text-sm text-gray-500 md:text-center">
              Copyright © 2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
