import { Link } from "react-router-dom";

const types = [
  {
    label: "Hotels",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80",
  },
  {
    label: "Apartments",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80",
  },
  {
    label: "Resorts",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80",
  },
  {
    label: "Villas",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=500&q=80",
  },
];

export default function PropertyTypeTabs() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Browse by property type</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {types.map((type) => (
          <Link key={type.label} to={`/search?type=${type.label}`} className="group block">
            <div className="rounded-xl overflow-hidden h-44">
              <img
                src={type.image}
                alt={type.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="font-bold text-gray-900 text-sm mt-2">{type.label}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
