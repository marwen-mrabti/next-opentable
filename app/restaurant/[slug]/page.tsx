import { PrismaClient, Review } from "@prisma/client";

import ResDetails from "./components/ResDetails";
import ResImages from "./components/ResImages";
import ResReviews from "./components/ResReviews";
import ReservationCard from "./components/ReservationCard";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

interface RestaurantType {
  id: number;
  name: string;
  slug: string;
  description: string;
  images: string[];
  reviews: Review[];
}

export const revalidate = 60; // revalidate this page every 60 seconds

const fetchRestaurantBySlug = async (slug: string): Promise<RestaurantType> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug: slug,
    },
    select: {
      id: true,
      name: true,
      slug: true,
      description: true,
      images: true,
      reviews: true,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

const RestaurantPage = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <div className=" m-auto -mt-11 flex w-2/3 items-start justify-between">
      <div className="w-[70%] rounded bg-white p-3 shadow">
        <ResDetails
          name={restaurant.name}
          slug={restaurant.slug}
          description={restaurant.description}
          reviews={restaurant.reviews}
        />
        {!restaurant.images.length ? null : (
          <ResImages images={restaurant.images} />
        )}
        {!restaurant.reviews.length ? null : (
          <ResReviews reviews={restaurant.reviews} />
        )}
      </div>

      <div className="relative   w-[27%] text-reg">
        <ReservationCard slug={restaurant.slug} />
      </div>
    </div>
  );
};

export default RestaurantPage;
