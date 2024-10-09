import React from "react";

const IconButton = ({ icon, onClick, color = "blue" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-100/70 text-${color}-500 p-2 rounded-md hover:bg-${color}-200`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
