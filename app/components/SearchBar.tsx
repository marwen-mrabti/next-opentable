"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const location = searchParams !== null && searchParams.get("city");

  const [city, setCity] = useState("");
  useEffect(() => {
    if (location) {
      setCity(location);
    }
  }, [location]);

  return (
    <div className="flex items-center justify-center py-3 text-left ">
      <input
        type="text"
        placeholder="state, city or town"
        className="mr-3 w-[450px] rounded p-2 text-lg"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-center font-semibold text-white hover:bg-red-500"
        onClick={() => city && router.push(`/search?city=${city}`)}
      >
        Let's go
      </button>
    </div>
  );
};

export default SearchBar;
