import React from "react";

function WelcomeButton({ btnText, btnIndex }) {
  return (
    <div className="space-x-2 w-[22rem] py-4 rounded-3xl cursor-pointer bg-btn-primary border hover:border-[#6A51A8] duration-300 transition transform">
      <span className="uppercase px-3 text-center py-2 rounded-full bg-btn-index text-white ml-8">
        {btnIndex}
      </span>
      <span>{btnText}</span>
    </div>
  );
}

export default WelcomeButton;
