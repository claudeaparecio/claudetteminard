import React from "react";

const NavBar = () => {
  return (
    <header className="  py-8 md:px-[100px] sm:px-[20px] phone:px-[20px] w-full fixed top-0 z-10 ">
      <div className="bg-greenAccent py-5 px-10 rounded-3xl items-center  w-full flex flex-row justify-between">
        <a href="/" className="">
          <img
            src="./images/cm-logo.svg"
            className="w-auto object-cover"
            alt="logo here"
          />
        </a>
        <nav className="space-x-6 uppercase font-bold text-yellowAccent sm:hidden phone:hidden md:block ">
          <a href="/">Home</a>
          <a href="/our-story">Our Story</a>
          <a href="/the-wedding">The Wedding</a>
        </nav>
        <button className="md:hidden phone:block sm:block " >
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
    </header>
  );
};

export default NavBar;
