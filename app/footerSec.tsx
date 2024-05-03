import Logo from "@/assets/aria_logo.png";
import Image from "next/image";
import Link from "next/link";

export const FooterSec = () => {
  return (
    <footer className="bg-white">
      <div className="py-16 mx-auto bg-green-300 sm:px-3 lg:px-10 max-w-screen sm:px-6 lg:px-28">
        <div className="lg:flex lg:items-start lg:gap-8">
          <Image src={Logo} alt="ARIA" className="w-20 mx-auto" />

          <div className="grid grid-cols-2 gap-8 px-3 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-green-500">
                  Get the latest news!
                </h2>

                <p className="mt-4 text-gray-500">
                  Augmented Reality Shopping Platform for Filipinos by
                  Revolutionizing the Way You Furnish Your Home
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="p-2 border border-gray-400 sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="harrypotter@.com"
                    className="w-full text-gray-500 bg-transparent border-none outline:none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />

                  <button className="w-full px-6 py-3 mt-1 text-sm font-bold tracking-wide text-white uppercase transition-none bg-green-500 hover:bg-green-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            <section className="grid justify-center grid-cols-5 gap-20 mx-auto w-max sm:col-span-1">
              <div className="col-span-3 sm:col-span-1">
                <p className="font-medium text-gray-900">Contact Details</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <span className="text-gray-500 transition hover:opacity-75">
                      hello.ariaph@gmail.com
                    </span>
                  </li>

                  <li>
                    <span className="text-gray-500 transition hover:opacity-75">
                      +639 086 095 223
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-span-3 sm:col-span-1">
                <p className="font-medium text-gray-900"> Page Sections</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="text-gray-500 transition hover:opacity-75">
                    <Link href="#home" shallow>
                      Home
                    </Link>
                  </li>

                  <li className="text-gray-500 transition hover:opacity-75">
                    <Link href="#ar" shallow>
                      AR
                    </Link>
                  </li>

                  <li className="text-gray-500 transition hover:opacity-75">
                    <Link href="#features" shallow>
                      Features
                    </Link>
                  </li>

                  <li className="text-gray-500 transition hover:opacity-75">
                    <Link href="#info" shallow>
                      Info
                    </Link>
                  </li>
                  <li className="text-gray-500 transition hover:opacity-75">
                    <Link href="#team" shallow>
                      Team
                    </Link>
                  </li>
                  <li className="text-gray-500 transition hover:opacity-75">
                    <Link href="#contact" shallow>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-5 sm:col-span-1">
                <p className="font-medium text-gray-900">Team</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="https://www.facebook.com/elijah.macatiag.7"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Elijah Japheth Macatiag{" "}
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
                      href="https://www.facebook.com/ase.geroche"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Robeniel Geroche{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-3 sm:col-span-1">
                <p className="font-medium text-gray-900"> Legal</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="text-gray-500 transition hover:opacity-75">
                    <Link href="#" shallow>
                      Privacy Policy
                    </Link>
                  </li>

                  <li className="text-gray-500 transition hover:opacity-75">
                    <Link href="#" shallow>
                      Licensing
                    </Link>
                  </li>

                  <li className="text-gray-500 transition hover:opacity-75">
                    <Link href="#" shallow>
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-100">
          <div className="text-center sm:flex sm:justify-between">
            <p className="mx-auto text-xs text-center text-gray-500 ">
              Educational purposes only. Copyright © 2024 TECH 101
              Technopreneurship - PSU Urdaneta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
