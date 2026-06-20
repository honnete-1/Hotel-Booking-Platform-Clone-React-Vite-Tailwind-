import { Link } from "react-router-dom";
import properties from "../../data/properties.json";
import PropertyCard from "../common/PropertyCard";

export default function HomesGuestsLove() {
  const homes = properties.slice(4, 8);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold text-gray-900">Homes guests love</h2>
        <Link to="/search" className="text-primary-light text-sm font-semibold hover:underline hidden sm:block">
          Discover homes →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {homes.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
