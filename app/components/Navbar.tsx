import Link from "next/link";
import React from "react";
import AuthModal from "./AuthModal";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between bg-white px-4 py-1">
      <Link
        href="/"
        className="text-2xl font-bold text-gray-700 hover:text-gray-800 "
      >
        OpenTable
      </Link>

      <div>
        <div className="flex items-center justify-around gap-5">
          <AuthModal isSignIn={true} />
          <AuthModal isSignIn={false} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
