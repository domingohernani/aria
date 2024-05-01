import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/aria_logo.png";
import React, { useState } from "react";

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="flex items-center justify-between">
    //   <Image src={Logo} alt="ARIA" width={100} />
    //   <div className="flex items-center gap-5 text-bold">
    //     <Link href="#home" shallow >
    //       Home
    //     </Link>
    //     <Link href="#ar" shallow>
    //       AR
    //     </Link>
    //     <Link href="#features" shallow>
    //       Features
    //     </Link>
    //     <Link href="#info" shallow>
    //       Info
    //     </Link>
    //     <Link href="#team" shallow>
    //       Team
    //     </Link>
    //     <Link href="#contact" shallow>
    //       Contact
    //     </Link>
    //   </div>
    // </nav>

    <nav className="flex flex-wrap items-center justify-between">
      <div className="flex items-center flex-shrink-0 text-white">
        <Image src={Logo} alt="ARIA" width={100} />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-7 w-7 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-7 w-7 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="lg:flex-grow lg:flex lg:justify-end">
          <Link
            href="#home"
            shallow
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-white-200"
          >
            Home
          </Link>
          <Link
            href="#ar"
            shallow
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-white-200"
          >
            AR
          </Link>
          <Link
            href="#features"
            shallow
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-white-200"
          >
            Features
          </Link>
          <Link
            href="#info"
            shallow
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-white-200"
          >
            Info
          </Link>
          <Link
            href="#team"
            shallow
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-white-200"
          >
            Team
          </Link>
          <Link
            href="#contact"
            shallow
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-white-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

// import React from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
//   Card,
// } from "@material-tailwind/react";

// export function StickyNavbar() {
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

//   const navList = (
//     <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Pages
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Account
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Blocks
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Docs
//         </a>
//       </Typography>
//     </ul>
//   );

//   return (
//     <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
//       <Navbar className="sticky top-0 z-10 max-w-full px-4 py-2 rounded-none h-max lg:px-8 lg:py-4">
//         <div className="flex items-center justify-between text-blue-gray-900">
//           <Typography
//             as="a"
//             href="#"
//             className="mr-4 cursor-pointer py-1.5 font-medium"
//           >
//             Material Tailwind
//           </Typography>
//           <div className="flex items-center gap-4">
//             <div className="hidden mr-4 lg:block">{navList}</div>
//             <div className="flex items-center gap-x-1">
//               <Button
//                 variant="text"
//                 size="sm"
//                 className="hidden lg:inline-block"
//               >
//                 <span>Log In</span>
//               </Button>
//               <Button
//                 variant="gradient"
//                 size="sm"
//                 className="hidden lg:inline-block"
//               >
//                 <span>Sign in</span>
//               </Button>
//             </div>
//             <IconButton
//               variant="text"
//               className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//               ripple={false}
//               onClick={() => setOpenNav(!openNav)}
//             >
//               {openNav ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   className="w-6 h-6"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </IconButton>
//           </div>
//         </div>
//         <MobileNav open={openNav}>
//           {navList}
//           <div className="flex items-center gap-x-1">
//             <Button fullWidth variant="text" size="sm" className="">
//               <span>Log In</span>
//             </Button>
//             <Button fullWidth variant="gradient" size="sm" className="">
//               <span>Sign in</span>
//             </Button>
//           </div>
//         </MobileNav>
//       </Navbar>
//       <div className="max-w-screen-md py-12 mx-auto">
//         <Card className="mb-12 overflow-hidden">
//           <img
//             alt="nature"
//             className="h-[32rem] w-full object-cover object-center"
//             src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
//           />
//         </Card>
//         <Typography variant="h2" color="blue-gray" className="mb-2">
//           What is Material Tailwind
//         </Typography>
//         <Typography color="gray" className="font-normal">
//           Can you help me out? you will get a lot of free exposure doing this
//           can my website be in english?. There is too much white space do less
//           with more, so that will be a conversation piece can you rework to make
//           the pizza look more delicious other agencies charge much lesser can
//           you make the blue bluer?. I think we need to start from scratch can my
//           website be in english?, yet make it sexy i&apos;ll pay you in a week
//           we don&apos;t need to pay upfront i hope you understand can you make
//           it stand out more?. Make the font bigger can you help me out? you will
//           get a lot of free exposure doing this that&apos;s going to be a chunk
//           of change other agencies charge much lesser. Are you busy this
//           weekend? I have a new project with a tight deadline that&apos;s going
//           to be a chunk of change. There are more projects lined up charge extra
//           the next time.
//         </Typography>
//       </div>
//     </div>
//   );
// }
