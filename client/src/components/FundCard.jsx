import React from "react";
import { daysLeft } from "../utils";

const FundCard = ({
  owner,
  title,
  description,
  target,
  deadline,
  amountCollected,
  image,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline);
  return (
    <div
      className={`sm:w-[288px] w-full rounded-[15px] shadow-md bg-[#C4CFDD] cursor-pointer`}
      onClick={handleClick}
    >
      <img
        src={image}
        alt="fund"
        className="w-full h-[158px] object-cover rounded-[15px]"
      />

      <div className="flex flex-col p-4">
        <div className="block">
          <h3 className="font-epilogue font-semibold text-lg text-gray-800 leading-6 truncate">
            {title}
          </h3>
          <p className="mt-2 font-epilogue font-normal text-sm text-gray-600 leading-5 truncate">
            {description}
          </p>
        </div>

        <div className="flex items-center mt-3 space-x-4">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-sm text-gray-700">
              {amountCollected}
            </h4>
            <p className="mt-1 font-epilogue font-normal text-xs text-gray-500">
              Raised of {target}
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-sm text-gray-700">
              {remainingDays}
            </h4>
            <p className="mt-1 font-epilogue font-normal text-xs text-gray-500">
              Days Left
            </p>
          </div>
        </div>

        <div className="flex items-center mt-4">
          <p className="flex-1 font-epilogue font-normal text-xs text-gray-600 truncate">
            by <span className="text-gray-700">{owner}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
