import ResHeader from "@/app/restaurant/[slug]/components/ResHeader";

export const metadata = {
  title: `next-OpenTable | restaurant `,
  description:
    "next-openTable where you can find restaurants, reserve tables, and order food online from the best restaurants in the world.",
};

function RestaurantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <section className="min-h-fit w-full bg-white pb-4">
      <ResHeader name={params.slug} />

      {children}
    </section>
  );
}

export default RestaurantLayout;
