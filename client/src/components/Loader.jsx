import React from "react";
import { loader } from "../assets";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-black bg-opacity-75 flex items-center justify-center">
      <div className="flex flex-col items-center text-white text-center">
        <img src={loader} alt="loader" className="w-16 h-16 mb-4" />
        <p className="font-epilogue font-semibold text-lg leading-6">
          Transaction is in progress
        </p>
        <p className="mt-2 font-epilogue text-sm text-gray-300">
          Please wait...
          <br />
          If the loading page takes a while, refresh the page and make sure you
          have Metamask connected properly.
        </p>
      </div>
    </div>
  );
};

export default Loader;
