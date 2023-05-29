import React from "react";

const CustomButton = ({ btnType, title, handleClick, styles, disabled }) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-lg text-white h-[48px] px-4 rounded-md shadow-md ${styles}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default CustomButton;
