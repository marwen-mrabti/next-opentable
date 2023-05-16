import React from "react";
import FoodCardLoadingSkelton from "../components/FoodCardLoadingSkelton";
import HomeHeader from "../components/HomeHeader";

export default function loading() {
  return (
    <main className="mx-auto w-full">
      <HomeHeader />
      <ul className="flex flex-wrap items-center justify-start gap-3 px-5 ">
        {"open_table".split("").map((_, index) => (
          <FoodCardLoadingSkelton key={index} />
        ))}
      </ul>
    </main>
  );
}
