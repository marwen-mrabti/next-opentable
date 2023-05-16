
import { Cuisine, Location, PRICE, PrismaClient } from "@prisma/client";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantOverview from "@/app/search/components/RestaurantOverview";

const prisma = new PrismaClient();

interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const fetchRestaurantsByQuery = async (searchParams: SearchParams) => {
  const select = {
    id: true,
    name: true,
    price: true,
    slug: true,
    main_image: true,
    cuisine: true,
    location: true,
    reviews: true,
  };
  const where: any = {};

  if (!searchParams) {
    return prisma.restaurant.findMany({ select: select });
  } else {
    if (searchParams.city) {
      where.location = {
        name: {
          equals: searchParams.city?.toLowerCase(),
        },
      };
    }
    if (searchParams.cuisine) {
      where.cuisine = {
        name: {
          equals: searchParams.cuisine?.toLowerCase(),
        },
      };
    }
    if (searchParams.price) {
      where.price = {
        equals: searchParams.price,
      };
    }

    return prisma.restaurant.findMany({
      where: where,
      select: select,
    });
  }
};

const fetchLocations = async (): Promise<Location[]> => {
  const locations = await prisma.location.findMany();
  if (!locations) {
    throw new Error("No locations found");
  }
  return locations;
};

const fetchCuisines = async (): Promise<Cuisine[]> => {
  const cuisines = await prisma.cuisine.findMany();
  if (!cuisines) {
    throw new Error("No cuisines found");
  }
  return cuisines;
};

const SearchPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const restaurants = await fetchRestaurantsByQuery(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <SearchSideBar
        locations={locations}
        cuisines={cuisines}
        searchParams={searchParams}
      />
      <div className="w-5/6">
        {!restaurants.length ? (
          <div className="flex w-full items-center justify-center">
            <h3 className="text-lg font-bold text-orange-400">
              {" "}
              no restaurant in this location{" "}
            </h3>
          </div>
        ) : (
          <ul className="flex flex-col flex-wrap items-start justify-start gap-3 px-5 ">
            {restaurants.map((restaurant) => (
              <RestaurantOverview key={restaurant.id} restaurant={restaurant} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchPage;
