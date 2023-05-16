import Price from "@/app/components/Price";
import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import Link from "next/link";
import RatingCard from "./RatingCard";

interface Restaurant {
  id: number;
  name: string;
  slug: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  reviews: Review[];
}

const RestaurantOverview = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <li className="flex  border-b pb-5">
      <img
        src={restaurant.main_image}
        alt={restaurant.name}
        className="h-36 w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name} </h2>
        <div className="flex items-start font-medium">
          <RatingCard reviews={restaurant.reviews} />
        </div>
        <div className="mb-9 capitalize">
          <div className="flex text-reg font-normal">
            <Price price={restaurant.price} />
            <p className="mr-4"> {restaurant.cuisine.name} </p>
            <p className="mr-4">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="font-medium text-red-600 hover:text-red-500">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </li>
  );
};

export default RestaurantOverview;
