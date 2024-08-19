import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="relative md:h-screen phone:h-[800px] flex ">
        <div className="h-2/3 w-full items-center justify-center  object-cover flex flex-col px-[100px] z-[1] absolute bottom-0 bg-gradient-to-t from-[#FFFBF4]">
          <div className="drop-shadow-xl shadow-black text-greenAccent md:text-[170px] sm:text-[120px] phone:text-[80px]">
            <p className="font-cursive mt-10 ">Claudette</p>
            <p className="font-cursive md:-mt-28  md:ml-32 sm:ml-20 phone:ml-16 sm:-mt-16 phone:-mt-16">
              Minard
            </p>
          </div>
        </div>
        <img
          src="./images/image-1.jpg"
          className="h-full w-full object-cover absolute top-0 phone:mr-10"
          alt="Header"
        />
      </div>
      <div class="w-full relative md:min-h-[70vh] flex items-center justify-start bg-[#FFFBF4] ">
        <img
          src="./images/floral-01.png"
          className="md:h-[700px] phone:h-[180px] sm:h-[250px] absolute md:-bottom-40 sm:-bottom-64 phone:-bottom-64 sm:-rotate-45 z-[2] left-0  w-auto object-cover top 0 "
          alt="Header"
        />
        <div className="flex w-full md:flex-row sm:flex-col phone:flex-col ">
          <div className="items-center text-[150px]  justify-center text-start flex flex-col">
            <div className="z-[3] flex md:items-center sm:items-end">
              <div className="md:w-[420px] sm:w-[320px] phone:w-[180px] md:h-[600px] sm:h-[450px] phone:h-[200px] md:p-8 sm:p-6 phone:p-3 rounded-md bg-yellowAccent -rotate-3">
                <img
                  src="./images/header-2.jpg"
                  className="h-4/5 rounded-md w-full object-cover"
                  alt="Header"
                />
              </div>
              <div className="md:w-[400px] sm:w-[225px] phone:w-[180px] md:h-[600px] -mb-10 sm:h-[350px] md:p-8 phone:p-2 sm:p-4 rounded-md bg-greenAccent rotate-3">
                <img
                  src="./images/header.jpeg"
                  className="h-4/5 rounded-md w-full object-cover"
                  alt="Header"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 items-center md:pl-10 phone:px-2 sm:px-2 justify-center align sm:pt-16 phone:pt-16 ">
            <div className="flex flex-col md:w-full z-10 sm:w-full items-center text-yellowAccent">
              <p className="font-bold text-[24px] tracking-[10px]">
                WE'RE GETTING
              </p>
              <p className="font-cursive text-[100px] -my-6">Married</p>
              <p className="font-bold text-[24px] tracking-[10px]">
                AUGUST 23, 2024
              </p>
              <img
                src="./images/flower-ornament.png"
                className="h-auto w-[180px] my-4 object-cover rotate-180"
                alt="Header"
              />
              <div className="flex phone:flex-col sm:flex-col md:flex-row md:justify-center sm:items-center phone:items-center  gap-x-10 mb-2 md:text-[50px] sm:text-[45px] phone:text-[40px]">
                <p className="font-cursive">Claudette Aparecio</p>
                <p className="font-cursive ">John Minard Jorolan</p>
              </div>
              <div className="flex flex-col text-center items-center gap-x-10 my-2">
                <p className="font-regular text-[20px]">CEREMONY:</p>
                <p className="font-bold text-[24px] uppercase">
                  Sagrado Corazon de Jesus Nazareno Parish
                </p>
              </div>
              <div className="flex flex-col text-center items-center gap-x-10 my-2">
                <p className="font-regular text-[20px]">RECEPTION:</p>
                <p className="font-bold text-[24px] uppercase">
                  Sam Centre beside Sagrado Corazon
                </p>
              </div>
              <img
                src="./images/flower-ornament.png"
                className="h-auto w-[180px] my-4 object-cover"
                alt="Header"
              />
              <div className="flex flex-col text-center items-center gap-x-10 my-2">
                <p className="font-regular text-[20px]">THEME:</p>
                <p className="font-bold text-[24px] uppercase">
                  Elegant rustic white and green theme
                </p>
              </div>
              <button className="text-[18px] my-10 uppercase py-4 px-7 w-3/5 bg-greenAccent text-[#f2f2f2] rounded-md">
                <a className="font-bold text-[20px]" href="/frequently-asked-questions">LEARN MORE</a>
              </button>
            </div>
          </div>
        </div>
        <img
          src="./images/floral-02.png"
          className="md:h-[600px] phone:h-[180px] sm:h-[250px] absolute top-0 -right-[250px] z-[1] w-auto object-cover"
          alt="Header"
        />
      </div>
      <div class="w-full relative md:h-[70vh] phone:h-auto flex items-center justify-start bg-[#FFFBF4] ">
        <div className="items-center phone:gap-y-10 md:px-[100px] phone:px-4 sm:px-4 w-full justify-between text-start flex md:flex-row sm:flex-col phone:flex-col-reverse">
          <div className="md:w-1/2 phone:w-full z-[3] flex ">
            <div class="md:w-4/5 phone:w-full h-full flex flex-col pt-5 items-center justify-center text-greenAccent bg-white border-dashed rounded-3xl border-2 border-greenAccent">
              <p className="font-cursive md:text-[90px] sm:text-[60px] phone:text-[50px]">You are Invited</p>
              <img
                src="./images/flower-ornament.png"
                className="h-auto w-[180px] mb-4 object-cover"
                alt="Header"
              />
              <p className="font-light text-center md:text-[20px] sm:[14px] phone:text-[14px] ">
                We're overjoyed to celebrate our love with you. <br></br> Please
                join us for our wedding ceremony and reception.
              </p>

              <button className="text-[18px] my-10 uppercase py-4 px-7  bg-greenAccent text-[#f2f2f2] rounded-md">
                <a href="/the-wedding">View List of Guests</a>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 sm:w-full phone:w-full md:h-[600px] sm:h-[450px] phone:h-auto md:p-8 sm:p-6 phone:p-4 rounded-md bg-yellowAccent -rotate-3 z-[3]">
            <img
              src="./images/image-2.jpg"
              className="h-full rounded-md w-full object-cover"
              alt="Header"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
