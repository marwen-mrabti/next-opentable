import SearchBar from "@/app/components/SearchBar";

export const metadata = {
  title: "next-OpenTable | search",
  description:
    "next-openTable where you can find restaurants, reserve tables, and order food online from the best restaurants in the world.",
};

function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-fit w-full bg-white pb-4">
      <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
        <SearchBar />
      </div>
      <div className="m-auto flex w-2/3 items-start justify-between py-4">
        {children}
      </div>
    </section>
  );
}

export default SearchLayout;
