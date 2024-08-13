import React from "react";
import { Lorem } from "../constants/lorem";

const OurStory = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="relative h-[60vh] flex ">
        <div className="h-2/5 w-full items-center justify-end flex flex-col px-[100px] z-[1] absolute bottom-0 bg-gradient-to-t from-[#FFFBF4]">
          <div className="-mb-16 flex flex-col items-center -space-y-4">
            <p className="font-cursive  text-yellowAccent text-[120px]">
              Our Story
            </p>
            {/* <img
              src="./images/flower-ornament.png"
              className="h-auto w-[180px] my-4 object-cover"
              alt="Header"
            /> */}
          </div>
        </div>
        <img
          src="./images/image-3.jpg"
          className="h-full w-full object-cover  absolute top-0"
          alt="Header"
        />
      </div>

      <div class="w-full relative  flex pt-[100px] pb-[200px] bg-[#FFFBF4] ">
        <p className="font-normal text-center text-[20px] text-slate-900 px-[20%]">
          {Lorem}
        </p>

        <img
          src="./images/floral-02.png"
          className="h-[700px] absolute -bottom-36 -right-36 z-10 w-auto object-cover top 0 "
          alt="Header"
        />
        <img
          src="./images/floral-02.png"
          className="h-[700px] absolute -bottom-36 -left-24 z-1 w-auto object-cover top 0 rotate-180"
          alt="Header"
        />
      </div>
    </div>
  );
};

export default OurStory;
