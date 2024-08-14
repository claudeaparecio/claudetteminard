import React, { useState } from "react";
import { Lorem } from "../constants/lorem";
import { down, up } from "../constants/icons";
import { motion } from "framer-motion";
import { faqs } from "../constants/faqs";

const FrequentlyAskedQuestionBox = ({ title, description, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full phone:px-6 sm:px-6 ">
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className="flex flex-col justify-between md:w-2/5 phone:w-full sm:w-full h-auto mx-auto text-[20px] font-bold pb-4 border-b border-y-yellowAccent ">
        <div className="flex flex-row justify-between w-full md:text-[24px] phone:text-[18px] sm:text-[18px] uppercase text-yellowAccent">
          <p>{title}</p>
          <motion.button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? up : down}
          </motion.button>
        </div>
        <motion.div
          className="font-normal overflow-hidden flex flex-col"
          initial={{ height: 0, opacity: 1 }}
          animate={{
            transition: { type: "tween" },
            height: isOpen ? "auto" : 0,
          }}
          exit={{ height: 0, opacity: 1 }}>
          <p className="phone:text-[14px] text-greenAccent" >
          {description}
          </p>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

const colors = [
  "#122612",
  "#3E553E",
  "#6A846A",
  "#CEB8A2",
  "#E3CFBC",
  "#F7E7D7",
];

const FrequentlyAskedQuestions = () => {
  const renderCustomBox = () => (
    <FrequentlyAskedQuestionBox
      title={faqs[6].title}
      description={faqs[6].description}>
      <div className="felx flex-col space-y-4 py-2" > 
      <img src="./images/color.png" className="h-auto w-full" alt="Header" />
      <p className="italic text-[18px] text-red-500 ">Strictly no wearing of white or denim</p>

      </div>
    </FrequentlyAskedQuestionBox>
  );

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="relative h-[70vh] flex ">
        <div className="h-2/5 w-full items-center justify-end flex flex-col md:px-[100px] z-[1] absolute bottom-0 bg-gradient-to-t from-[#FFFBF4]">
          <div className="md:-mb-16 sm:-mb-8 phone:-mb-8 flex flex-col items-center -space-y-4">
            <p className="font-cursive  text-yellowAccent md:text-[100px] sm:text-[20px] phone:text-[45px]">
              Frequently Asked Questions
            </p>
          </div>
        </div>
        <img
          src="./images/image-3.jpg"
          className="h-full w-full object-cover absolute top-0"
          alt="Header"
        />
      </div>

      <div class="w-full flex-col gap-y-6 flex pt-[100px] min-h-[60vh] pb-[200px] bg-[#FFFBF4] ">
        {faqs.map((faq, i) => (
          i !== 6 && (
            <FrequentlyAskedQuestionBox
            key={i}
            title={faq.title}
            description={faq.description}
          />
          )
        ))}
        {renderCustomBox()}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
