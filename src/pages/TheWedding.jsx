import React, { Children } from "react";
import Text from "../component/Text";
import { guestList } from "../constants/guests";

const renderTitle = (title) => (
  <div>
    <p className="font-cursive text-center text-yellowAccent text-6xl">
      {title}
    </p>
    <div className="w-2/5 border border-t border-y-yellowAccent mx-auto my-2" />
    
  </div>
);

const GridBox = ({ children }) => (
  <div className="flex md:flex-row phone:flex-col justify-center align w-full">{children}</div>
);

const TheWedding = () => {

  return (
    <div className="flex flex-col min-h-screen items-center md:px-[100px] phone:px-[10px] overflow-hidden bg-[#FFFBF4]">
      <p className="font-cursive text-center mt-[200px] text-yellowAccent text-[100px] phone:text-8xl mb-[20px]">
        The Wedding
      </p>
      <div className="w-3/5 phone:w-[100%] h-full pb-[100px] mb-[200px] relative">
        <img
          src="./images/floral-02.png"
          className="md:h-[350px] phone:h-[180px] sm:h-[250px] absolute -top-40 -left-40 z-[1] w-auto rotate-180 object-cover"
          alt="Header"
        />
        <img
          src="./images/floral-02.png"
          className="md:h-[400px] phone:h-[180px] sm:h-[250px] absolute bottom-[50%] -right-40 z-[1] w-auto rotate-180 object-cover"
          alt="Header"
        />
        <img
          src="./images/floral-02.png"
          className="md:h-[400px] phone:h-[180px] sm:h-[250px] absolute -bottom-20 -left-40 z-[1] w-auto rotate-180 object-cover"
          alt="Header"
        />
        <div class="flex flex-col  py-5 md:px-[32px] gap-y-9  text-greenAccent bg-white rounded-3xl shadow-lg">
          {renderTitle("Entourage")}
          <GridBox>
            <Text
              align="left"
              title="BRIDE’S PARENTS:"
              list={guestList.bridesParents}
            />
            <Text
              align="end"
              title="GROOM’S PARENTS:"
              list={guestList.groomsParents}
            />
          </GridBox>
          {renderTitle("Principal Sponsors")}
          <GridBox>
            <Text align="left" title="NINONG:" list={guestList.ninongs} />
            <Text align="end" title="NINANG" list={guestList.ninangs} />
          </GridBox>
          <GridBox>
            <Text align="left" title="BEST MAN:" list={guestList.bestMan} />
            <Text
              align="end"
              title="MAID OF HONOR:"
              list={guestList.maidOfHonor}
            />
          </GridBox>
          <GridBox>
            <Text
              align="center"
              title="MATRON OF HONOR:"
              list={guestList.matronOfHonor}
            />
          </GridBox>
          <GridBox>
            <Text
              align="start"
              title="groomsmen:"
              list={guestList.groomsMen}
            />
             <Text
              align="end"
              title="bridesmaid:"
              list={guestList.bridesMaid}
            />
          </GridBox>
          {renderTitle("Secondary Sponsors")}
          <GridBox>
            <Text
              align="start"
              title="candle:"
              list={guestList.candle}
            />
             <Text
              align="end"
              title="cord:"
              list={guestList.cord}
            />
          </GridBox>
          <GridBox>
            <Text
              align="start"
              title="veil:"
              list={guestList.veil}
            />
             <Text
              align="end"
              title="ring bearer:"
              list={guestList.ringBearer}
            />
          </GridBox>
          <GridBox>
            <Text
              align="start"
              title="coin bearer:"
              list={guestList.coinBearer}
            />
             <Text
              align="end"
              title="bible bearer:"
              list={guestList.bibleBearer}
            />
          </GridBox>
          <GridBox>
            
             <Text
              align="center"
              title="flower girls:"
              list={guestList.flowerGirls}
            />
          </GridBox>
        </div>
      </div>
    </div>
  );
};

export default TheWedding;
