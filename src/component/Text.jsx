import React from "react";

const Text = ({ title, list, items, align }) => {
  return (
    <div className={`flex flex-col text-${align} items-${items} gap-x-10 my-2`}>
      <p className="font-regular tracking-wide text-[20px]">{title}</p>

      {list.map((name) => (
        <p className="font-bold text-[24px] uppercase">{name}</p>
      ))}
    </div>
  );
};

export default Text;
