import React from "react";

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[130px] h-[125px] rounded-md shadow-md bg-blue-500 text-white">
      <h4 className="font-epilogue font-bold text-3xl">{value}</h4>
      <p className="font-epilogue font-normal text-lg mt-2">{title}</p>
    </div>
  );
};
export default CountBox;
