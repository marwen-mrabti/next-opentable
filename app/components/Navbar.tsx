"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AuthModal from "./AuthModal";
import { useRecoilValue } from "recoil";
import { authState } from "../store/atoms";
import { hasCookie } from "cookies-next";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
  const { signout, fetchUser } = useAuth();

  const auth = useRecoilValue<{
    loading: boolean;
    data: any;
    error: any;
  }>(authState);

  const isToken = hasCookie("jwt");

  useEffect(() => {
    fetchUser();
  }, []);

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
          {isToken && auth.loading ? null : auth.data ? (
            <button
              onClick={() => signout()}
              className={`rounded border bg-red-500  p-2 font-semibold text-white hover:bg-red-300 hover:text-gray-400`}
            >
              Sign Out
            </button>
          ) : (
            <>
              <AuthModal isSignIn={true} />
              <AuthModal isSignIn={false} />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
