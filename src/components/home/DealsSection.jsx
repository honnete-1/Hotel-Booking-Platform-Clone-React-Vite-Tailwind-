import { Link } from "react-router-dom";
import properties from "../../data/properties.json";

export default function DealsSection() {
  const deals = properties.filter((p) => p.trending).slice(0, 4);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Featured deals</h2>
            <p className="text-gray-500 text-sm mt-1">Handpicked stays at exceptional value</p>
          </div>
          <Link to="/search" className="text-primary-light text-sm font-semibold hover:underline hidden sm:block">
            See all deals →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deals.map((property) => (
            <Link
              key={property.id}
              to={`/property/${property.id}`}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={property.images[0]}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 bg-accent text-gray-900 text-xs font-extrabold px-2 py-1 rounded-full">
                  HOT DEAL
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-gray-900 text-sm truncate">{property.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{property.location}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1">
                    <span className="bg-primary text-white text-xs font-bold px-1.5 py-0.5 rounded">
                      {property.rating}
                    </span>
                    <span className="text-xs text-gray-500">{property.reviewLabel}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-extrabold text-gray-900">${property.pricePerNight}</span>
                    <span className="text-xs text-gray-500">/night</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
