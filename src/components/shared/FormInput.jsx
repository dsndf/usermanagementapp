import React from "react";

const FormInput = ({ type, placeholder, changeHandler, value, error }) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={`border p-4 rounded-md w-full ${error && "focus:outline-red-500"}`}
        value={value}
        onChange={changeHandler}
  
      />
      {error && (
        <caption className="text-red-500 mt-1 w-full text-left block">
          {error}
        </caption>
      )}
    </div>
  );
};

export default FormInput;
