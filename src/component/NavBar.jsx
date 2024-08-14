import React, { useState } from "react";
import { motion } from "framer-motion";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <motion.header 
    initial={false}
    animate={isOpen ? "open" : "closed"}
    className="py-8 md:px-[100px] sm:px-[20px] phone:px-[20px] w-full fixed top-0 z-10 flex md:flex-row phone:flex-col ">
      <div className="bg-greenAccent sm:p-2 phone:p-4 md:py-5 md:px-10 rounded-xl items-center  w-full flex flex-row justify-between">
        <a href="/" className="">
          <img
            src="./images/cm-logo.svg"
            className="md:w-auto object-cover phone:w-[35px]"
            alt="logo here"
          />
        </a>
        <nav className="space-x-6 uppercase font-bold text-yellowAccent sm:hidden phone:hidden md:block ">
          <a href="/">Home</a>
          <a href="/the-wedding">The Wedding</a>
          <a href="/frequently-asked-questions">FAQ's</a>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden phone:block sm:block " >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#B49E3C"
            className="size-8 ">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <motion.div variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }} className="space-y-2 uppercase font-bold text-yellowAccent sm:hidden phone:flex phone:flex-col md:hidden items-center bg-greenAccent my-2 p-2 rounded-xl">
          <a href="/">Home</a>
          <a href="/the-wedding">The Wedding</a>
          <a href="/frequently-asked-questions">FAQ's</a>
        </motion.div>
    </motion.header>
  );
};

export default NavBar;
