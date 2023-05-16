import SearchBar from "./SearchBar";

const HomeHeader = () => {
  return (
    <header className="mt-3 flex h-72 flex-col items-center justify-center bg-gradient-to-br from-[#0f1f47] to-[#5f6984]">
      <h1 className="mb-2 text-center text-5xl font-bold text-gray-100 ">
        Find your table for any occasion
      </h1>
      <SearchBar />
    </header>
  );
};

export default HomeHeader;
