import properties from "../../data/properties.json";
import PropertyCard from "../common/PropertyCard";

export default function TopProperties() {
  const top = properties.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <h2 className="text-2xl font-extrabold text-gray-900">Stay at our top unique properties</h2>
      <p className="text-gray-500 text-sm mt-1">From castles and villas to boats and igloos, we have it all</p>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {top.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
