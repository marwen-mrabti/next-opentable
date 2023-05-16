import React from "react";

interface ResHeaderProps {
  name: string;
}

const ResHeader = ({ name }: ResHeaderProps) => {
  const renderName = () => {
    let nameArr = name.split("-");
    nameArr[nameArr.length - 1] = `( ${nameArr[nameArr.length - 1]} )`;
    return nameArr.join(" ");
  };

  return (
    <div className="mt-3 h-72 overflow-hidden ">
      <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#0f1f47] to-[#5f6984] bg-center ">
        <h1 className="text-shadow text-center text-7xl capitalize text-white ">
          {renderName()}
        </h1>
      </div>
    </div>
  );
};

export default ResHeader;
