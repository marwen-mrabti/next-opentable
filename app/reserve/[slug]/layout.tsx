export const metadata = {
  title: "next-OpenTable | Reservation",
  description:
    "next-openTable where you can find restaurants, reserve tables, and order food online from the best restaurants in the world.",
};

function ReserveLayout({ children }: { children: React.ReactNode }) {
  return <section className=" h-full w-full bg-white">{children}</section>;
}

export default ReserveLayout;
