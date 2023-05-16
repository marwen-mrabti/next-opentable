import { Location, Cuisine, PRICE } from "@prisma/client";
import Link from "next/link";

interface SearchSideBarProps {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}

const SearchSideBar = ({
  locations,
  cuisines,
  searchParams,
}: SearchSideBarProps) => {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$$",
      className: "w-full cursor-pointer rounded-l border p-2 text-reg text-center",
    },
    {
      price: PRICE.REGULAR,
      label: "$$$",
      className: "w-full cursor-pointer  border p-2 text-reg text-center",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$$",
      className: "w-full cursor-pointer rounded-r border p-2 text-reg text-center",
    },
  ];

  return (
    <div className="w-1/5">
      <div className="border-b pb-4 font-normal">
        <h1 className="mb-2 font-semibold">Region</h1>
        <ul className="flex flex-col ">
          {locations.map((location) => (
            <Link
              key={location.id}
              href={{
                pathname: "/search",
                query: { ...searchParams, city: location.name },
              }}
              className="cursor-pointer text-reg"
            >
              {location.name}
            </Link>
          ))}
        </ul>
      </div>

      <div className="mt-3 border-b pb-4">
        <h1 className="mb-2 font-semibold ">Cuisine</h1>
        <ul className="flex flex-col ">
          {cuisines.map((cuisine) => (
            <Link
              key={cuisine.id}
              href={{
                pathname: "/search",
                query: { ...searchParams, cuisine: cuisine.name },
              }}
              className="cursor-pointer text-reg"
            >
              {cuisine.name}
            </Link>
          ))}
        </ul>
      </div>

      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map((price, index) => (
            <Link
              key={index}
              href={{
                pathname: "/search",
                query: { ...searchParams, price: price.price },
              }}
              className={price.className}
            >
              {price.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
