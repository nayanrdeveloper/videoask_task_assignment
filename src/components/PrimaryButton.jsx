import React from "react";

function PrimaryButton({ headerText, urlPath }) {
  return <button className="bg-btn-index text-white font-semibold px-8 py-4 rounded-2xl hover:scale-110 duration-300 transition transform ease-out">{headerText}</button>;
}

export default PrimaryButton;
