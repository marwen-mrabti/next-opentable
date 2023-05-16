import MenuCard from "@/app/restaurant/[slug]/menu/components/MenuCard";
import ResNavbar from "@/app/restaurant/[slug]/components/ResNavbar";
import { PrismaClient, Item } from "@prisma/client";

const prisma = new PrismaClient();

const fetchMenusByRestaurantSlug = async (slug: string): Promise<Item[]> => {
  const menus = await prisma.item.findMany({
    where: {
      restaurant: {
        slug: slug,
      },
    },
  });
  if (!menus) {
    throw new Error(`No menu found for slug: ${slug}`);
  }
  return menus;
};

const MenuPage = async ({ params }: { params: { slug: string } }) => {
  const menus = await fetchMenusByRestaurantSlug(params.slug);

  return (
    <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between rounded-md bg-inherit shadow-md">
      <div className="w-[100%] rounded  p-3  ">
        <ResNavbar slug={params.slug} />
        <main className="mt-5">
          <div>
            <div className="mb-1 mt-4 pb-1">
              <h1 className="text-4xl font-bold">Menu</h1>
            </div>
            {!menus.length ? (
              <div className="flex flex-wrap justify-between">
                <p> this restaurant does not have a menu </p>
              </div>
            ) : (
              <ul className="flex flex-wrap justify-between">
                {menus.map((menu) => (
                  <MenuCard key={menu.id} menu={menu} />
                ))}
              </ul>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MenuPage;
