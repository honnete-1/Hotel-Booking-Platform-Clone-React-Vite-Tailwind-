import { Link } from "react-router-dom";

const types = [
  {
    label: "Hotels",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    count: "4 properties",
  },
  {
    label: "Apartments",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    count: "2 properties",
  },
  {
    label: "Resorts",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    count: "3 properties",
  },
  {
    label: "Villas",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    count: "2 properties",
  },
];

export default function PropertyTypeTabs() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Browse by property type</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {types.map((type) => (
          <Link
            key={type.label}
            to={`/search?type=${type.label}`}
            className="group flex flex-col items-center gap-3 p-5 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all"
          >
            <div className="text-gray-600 group-hover:text-primary transition-colors">
              {type.icon}
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-900 text-sm">{type.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{type.count}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
