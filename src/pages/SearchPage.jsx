import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SearchBar from "../components/common/SearchBar";
import PropertyCard from "../components/common/PropertyCard";
import properties from "../data/properties.json";

const PROPERTY_TYPES = ["Hotels", "Apartments", "Resorts", "Villas"];
const SORT_OPTIONS = [
  { value: "recommended", label: "Recommended" },
  { value: "price_asc", label: "Price: low to high" },
  { value: "price_desc", label: "Price: high to low" },
  { value: "rating", label: "Best rated" },
];

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination") || "";
  const initialType = searchParams.get("type") || "";

  const [selectedTypes, setSelectedTypes] = useState(initialType ? [initialType] : []);
  const [maxPrice, setMaxPrice] = useState(600);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("recommended");
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleType(type) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  const filtered = useMemo(() => {
    let results = properties.filter((p) => {
      const matchDest = !destination || p.location.toLowerCase().includes(destination.toLowerCase()) || p.city.toLowerCase().includes(destination.toLowerCase());
      const matchType = selectedTypes.length === 0 || selectedTypes.includes(p.type);
      const matchPrice = p.pricePerNight <= maxPrice;
      const matchRating = p.rating >= minRating;
      return matchDest && matchType && matchPrice && matchRating;
    });

    if (sortBy === "price_asc") results = [...results].sort((a, b) => a.pricePerNight - b.pricePerNight);
    if (sortBy === "price_desc") results = [...results].sort((a, b) => b.pricePerNight - a.pricePerNight);
    if (sortBy === "rating") results = [...results].sort((a, b) => b.rating - a.rating);

    return results;
  }, [destination, selectedTypes, maxPrice, minRating, sortBy]);

  const Filters = () => (
    <div className="space-y-6">
      {/* Property type */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Property type</h3>
        <div className="space-y-2">
          {PROPERTY_TYPES.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
                className="w-4 h-4 accent-primary rounded"
              />
              <span className="text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Max price per night</h3>
        <input
          type="range"
          min={50}
          max={600}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>$50</span>
          <span className="font-semibold text-gray-800">${maxPrice}</span>
          <span>$600</span>
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Minimum rating</h3>
        <div className="space-y-2">
          {[0, 4.0, 4.5, 4.7].map((r) => (
            <label key={r} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={minRating === r}
                onChange={() => setMinRating(r)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-gray-700">
                {r === 0 ? "Any" : `${r}+`}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() => { setSelectedTypes([]); setMaxPrice(600); setMinRating(0); }}
        className="text-primary-light text-sm font-semibold hover:underline"
      >
        Reset all filters
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Search bar strip */}
      <div className="bg-primary py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SearchBar
            compact
            initialValues={{ destination, checkIn: searchParams.get("checkIn") || "", checkOut: searchParams.get("checkOut") || "", guests: searchParams.get("guests") || "2" }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full">
        <div className="flex gap-6">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-24">
              <h2 className="font-extrabold text-gray-900 mb-5">Filter results</h2>
              <Filters />
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
              <div>
                <h1 className="font-extrabold text-gray-900 text-lg">
                  {destination ? `${destination}: ` : ""}{filtered.length} properties found
                </h1>
              </div>
              <div className="flex items-center gap-3">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="lg:hidden flex items-center gap-2 border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                  </svg>
                  Filters
                </button>
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="font-bold text-gray-700 text-lg">No properties found</h3>
                <p className="text-gray-500 text-sm mt-2">Try adjusting your filters or search a different destination.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((p) => (
                  <PropertyCard key={p.id} property={p} horizontal />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} />
          <div className="relative ml-auto w-72 bg-white h-full overflow-y-auto p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-extrabold text-gray-900">Filters</h2>
              <button onClick={() => setDrawerOpen(false)}>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Filters />
            <button
              onClick={() => setDrawerOpen(false)}
              className="mt-6 w-full bg-primary text-white font-bold py-3 rounded-lg"
            >
              Show {filtered.length} results
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
