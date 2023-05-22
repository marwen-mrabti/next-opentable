export const metadata = {
  title: "next-OpenTable",
  description:
    "next-openTable where you can find restaurants, reserve tables, and order food online from the best restaurants in the world.",
};

import HomeHeader from "@/app/components/HomeHeader";
import RestaurantCard from "@/app/components/RestaurantCard";

import { PrismaClient, Cuisine, Location, PRICE, Review } from "@prisma/client";
interface RestaurantCardType {
  id: number;
  name: string;
  slug: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  reviews: Review[];
}
const prisma = new PrismaClient();

export const revalidate = 30; // revalidate this page every 30 seconds

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      reviews: true,
    },
  });

  if (!restaurants.length) {
    throw new Error("oooops! no restaurants found");
  }

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <main className="mx-auto w-full">
      <HomeHeader />
      {!restaurants.length ? (
        <div className="flex w-full items-center justify-center">
          <h3 className="text-lg font-bold text-orange-400">no restaurants</h3>
        </div>
      ) : (
        <ul className="flex flex-wrap items-center justify-around gap-3 px-5 ">
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
