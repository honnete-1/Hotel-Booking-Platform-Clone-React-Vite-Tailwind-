import { Link } from "react-router-dom";

const destinations = [
  {
    city: "Kigali",
    subtitle: "Capital & Culture",
    image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=600&q=80",
    count: 4,
    span: "col-span-2 row-span-2",
  },
  {
    city: "Musanze",
    subtitle: "Gorilla Trekking",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
    count: 2,
    span: "",
  },
  {
    city: "Rubavu",
    subtitle: "Lake Kivu West",
    image: "https://images.unsplash.com/photo-1540541338537-1220059ce94e?w=600&q=80",
    count: 1,
    span: "",
  },
  {
    city: "Akagera",
    subtitle: "Safari & Wildlife",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80",
    count: 1,
    span: "",
  },
  {
    city: "Nyungwe",
    subtitle: "Rainforest & Canopy",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    count: 1,
    span: "",
  },
];

export default function TrendingDestinations() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold text-gray-900">Trending destinations</h2>
        <Link to="/search" className="text-primary-light text-sm font-semibold hover:underline">
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[160px]">
        {/* Large card */}
        <Link
          to={`/search?destination=${destinations[0].city}`}
          className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group"
        >
          <img
            src={destinations[0].image}
            alt={destinations[0].city}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="font-extrabold text-2xl">{destinations[0].city}</div>
            <div className="text-white/80 text-sm">{destinations[0].subtitle}</div>
            <div className="text-white/70 text-xs mt-1">{destinations[0].count} properties</div>
          </div>
        </Link>

        {/* Small cards */}
        {destinations.slice(1).map((dest) => (
          <Link
            key={dest.city}
            to={`/search?destination=${dest.city}`}
            className="relative rounded-xl overflow-hidden group"
          >
            <img
              src={dest.image}
              alt={dest.city}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <div className="font-bold text-sm">{dest.city}</div>
              <div className="text-white/75 text-xs">{dest.subtitle}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
