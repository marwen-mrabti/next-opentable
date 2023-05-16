import Image from "next/image";
import Link from "next/link";
import Price from "./Price";
import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import { calcAverageRating } from "@/utils/calcAverageRating";
import { renderStars } from "@/utils/renderStars";

interface Props {
  restaurant: {
    id: number;
    name: string;
    slug: string;
    main_image: string;
    price: PRICE;
    cuisine: Cuisine;
    location: Location;
    reviews: Review[];
  };
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <div className="m-3 h-72 w-64 cursor-pointer overflow-hidden rounded border bg-white shadow-md">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <Image
          src={restaurant.main_image}
          alt="table"
          width={250}
          height={150}
          className="h-36 w-full object-cover"
          loading="lazy"
        />
        <div className="p-2">
          <h3 className="mb-2 text-2xl font-bold capitalize ">
            {restaurant.name}
          </h3>

          <div className="flex items-center justify-around ">
            <div className="mx-2 mb-2 flex items-center">
              {renderStars(restaurant.reviews)}
            </div>
            <p className="mx-2">
              {restaurant.reviews.length === 0
                ? "no reviews"
                : restaurant.reviews.length === 1
                ? `${restaurant.reviews.length} review`
                : `${restaurant.reviews.length} reviews`}
            </p>
          </div>
          <div className="flex items-center text-reg font-light capitalize">
            <p className="mr-3 font-semibold "> {restaurant.cuisine.name} </p>
            <Price price={restaurant.price} />
            <p className="font-semibold">{restaurant.location.name}</p>
          </div>
          <p className="mt-1 text-sm font-bold ">booked 3 times today </p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
