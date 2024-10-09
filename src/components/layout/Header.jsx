import React, { useContext } from "react";
import Logo from "../shared/Logo";
import { Context } from "../../context/ApiContext";
import { clearSession } from "../../lib/helper";
import toast from "react-hot-toast";

const Header = () => {
  const { setAuthToken } = useContext(Context);

  const logoutHandler = () => {
    clearSession();
    setAuthToken(null);
    toast.success("Logged out")
  };

  return (
    <div className="p-6 h-16 flex justify-between items-center border shadow-md shadow-blue-100">
      <Logo />
      <ul>
        <button
          onClick={logoutHandler}
          className="py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Logout
        </button>
      </ul>
    </div>
  );
};

export default Header;
