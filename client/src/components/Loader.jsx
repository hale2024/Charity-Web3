import React from "react";
import { loader } from "../assets";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <img
        src={loader}
        alt="loader"
        className="w-[100px] h-[100px] object-contain"
      />
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center">
        Transaction is in progress
        <br />
        Please wait...
        <br /> If the loading page takes a while refresh the page and make sure
        you have Metamask connected to the site properly
      </p>
    </div>
  );
};

export default Loader;
