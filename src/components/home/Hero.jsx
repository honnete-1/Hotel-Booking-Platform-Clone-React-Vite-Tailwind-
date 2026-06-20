import SearchBar from "../common/SearchBar";

export default function Hero() {
  return (
    <section className="relative bg-primary">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          Find your next stay
        </h1>
        <p className="mt-2 text-lg text-white">
          Search deals on hotels, homes, and much more...
        </p>

        {/* Search Bar — overlaps the bottom edge of the hero, same as the
            reference where the white search fields sit half on the navy
            background and half on the white "Offers" section below. */}
        <div className="mt-6 relative z-10">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
