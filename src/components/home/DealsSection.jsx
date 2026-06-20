import { Link } from "react-router-dom";
import properties from "../../data/properties.json";
import PropertyCard from "../common/PropertyCard";

export default function DealsSection() {
  const deals = properties.slice(2, 6);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Deals for the weekend</h2>
            <p className="text-gray-500 text-sm mt-1">Save on stays for June 26 - June 28</p>
          </div>
          <Link to="/search" className="text-primary-light text-sm font-semibold hover:underline hidden sm:block">
            See all deals →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deals.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
