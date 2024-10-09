import React from "react";

const Loader = ({ label = "Loading" }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <span className="mx-auto p-3 border-4 border-t-blue-500 rounded-full animate-loader"></span>
      <p>{label}</p>
    </div>
  );
};

export default Loader;
