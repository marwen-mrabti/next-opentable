"use client"; // Error components must be Client components

import { useEffect } from "react";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mt-[1rem] flex h-[10rem] w-full flex-col  items-center justify-center bg-slate-100 px-10">
      <h2>Something went wrong!</h2>
      <button
        className="mt-3 min-w-fit rounded bg-emerald-500 px-4 py-2 font-bold text-white hover:bg-emerald-700"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
export default Error;
