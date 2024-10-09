import React from "react";
import Logo from "../shared/Logo";

const Footer = () => {
  return (
    <div className="p-6 bg-gray-100/60">
      <div>
        <Logo />
        <p>Manage your users easily.</p>
      </div>
      <div className="border-t mt-4 text-center py-4 text-gray-600">
        <p>{new Date().getFullYear()} &copy; All rights are reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
