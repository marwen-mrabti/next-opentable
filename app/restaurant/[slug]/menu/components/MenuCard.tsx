import { Item } from "@prisma/client";
import React from "react";

interface MenuCardProps {
  menu: Item;
}

const MenuCard = ({ menu }: MenuCardProps) => {
  return (
    <li className=" mb-3 w-[49%]  rounded-md border p-3 hover:-translate-y-1 hover:bg-slate-50 ">
      <h3 className="text-lg font-bold">{menu.name}</h3>
      <p className="mt-1 text-sm font-light">{menu.description}</p>
      <p className="mt-7">{menu.price}</p>
    </li>
  );
};

export default MenuCard;
