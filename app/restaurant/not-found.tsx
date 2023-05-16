"use client"; // Error components must be Client components

import Image from "next/image";
import ErrorImg from "@/public/icons/error.png";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mt-[1rem] flex h-[60vh]  w-full flex-col  items-center justify-center bg-slate-100 px-10">
      <Image src={ErrorImg} alt="error" className="mb-8 w-56" />
      <div
        className="flex w-full flex-col items-center
       justify-center bg-slate-50 px-4 py-2 shadow-md md:w-[30%]"
      >
        <h4 className="text-justify font-medium">
          couldn't find this restaurant
        </h4>
        <button
          className="mt-3 min-w-fit rounded bg-emerald-500 px-4 py-2 font-bold text-white hover:bg-emerald-700"
          onClick={() => reset()}
        >
          Let's try again
        </button>
      </div>
    </div>
  );
}
export default Error;
