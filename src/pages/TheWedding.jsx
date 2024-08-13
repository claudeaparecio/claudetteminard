import React from "react";
import Text from "../component/Text";
import { guestList } from "../constants/guests";

const TheWedding = () => {
  return (
    <div className="flex flex-col min-h-screen items-center px-[100px] overflow-hidden bg-[#FFFBF4]">
      <p className="font-cursive text-center mt-[150px] text-yellowAccent text-[100px]">
        The Wedding
      </p>
      <div className="w-3/5 h-full pb-[100px] relative">
        <img
          src="./images/floral-02.png"
          className="md:h-[400px] phone:h-[180px] sm:h-[250px] absolute -top-40 -left-40 z-[1] w-auto rotate-180 object-cover"
          alt="Header"
        />
        <img
          src="./images/floral-02.png"
          className="md:h-[400px] phone:h-[180px] sm:h-[250px] absolute -bottom-40 -right-40 z-[1] w-auto rotate-180 object-cover"
          alt="Header"
        />
        <div class="flex flex-col min-h-[100vh] py-5 px-32   text-greenAccent bg-white rounded-3xl shadow-lg">
          {/* <div className="flex flex-col text-center items-center gap-x-10 my-2">
            <p className="font-regular tracking-wide text-[20px]">DATE:</p>
            <p className="font-bold text-[24px] tracking-[10px] uppercase">
            AUGUST 23, 2024
            </p>
          </div> */}
          <p className="font-cursive text-center text-yellowAccent text-[60px]">
            Entourage
          </p>
          <div className="w-2/5 border border-t border-y-yellowAccent mx-auto my-4" />

          <div className="grid w-full grid-cols-2">
            <Text
              align="left"
              title="BRIDE’S PARENTS:"
              list={guestList.bridesParents}
            />
            <Text
              align="right"
              title="GROOM’S PARENTS:"
              list={guestList.groomsParents}
            />
          </div>
          <p className="font-cursive text-center text-yellowAccent text-[60px]">
            Principal Sponsor
          </p>
          <div className="w-2/5 border border-t border-y-yellowAccent mx-auto my-4" />
          <div className="grid w-full grid-cols-2">
            <Text align="left" title="NINONG:" list={guestList.ninongs} />
            <Text align="right" title="NINANG" list={guestList.ninangs} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TheWedding;
