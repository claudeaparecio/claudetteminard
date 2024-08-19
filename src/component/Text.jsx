import React from "react";

const Text = ({ title, list, align}) => {
  return (
    <div className={`flex flex-col md:items-${align} phone:w-[100%] phone:px-[10px] gap-x-10 my-2 text-yellowAccent w-1/2`}>
      <p className="font-regular tracking-wide text-[20px] uppercase">{title}</p>
      {list.map((name) => (
        <p className="font-bold md:text-[24px] sm:text-[16px] uppercase">{name}</p>
      ))}
    </div>
  );
};

export default Text;
