import { Link } from "react-router-dom";

function StarRating({ stars }) {
  if (!stars) return null;
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: stars }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewBadge({ rating, label }) {
  const color = rating >= 4.5 ? "bg-primary" : rating >= 4 ? "bg-blue-600" : "bg-blue-500";
  return (
    <div className="flex items-center gap-2">
      <span className={`${color} text-white font-bold text-sm px-2 py-1 rounded-tl-md rounded-tr-md rounded-br-md`}>
        {rating.toFixed(1)}
      </span>
      <div>
        <div className="text-xs font-semibold text-gray-800">{label}</div>
      </div>
    </div>
  );
}

export default function PropertyCard({ property, horizontal = false }) {
  if (horizontal) {
    return (
      <Link
        to={`/property/${property.id}`}
        className="flex bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
      >
        <div className="w-48 sm:w-56 flex-shrink-0 overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-bold text-gray-900 text-base hover:text-primary-light transition-colors">
                  {property.name}
                </h3>
                <p className="text-xs text-primary-light mt-0.5 font-medium">{property.location}</p>
                <StarRating stars={property.stars} />
              </div>
              <ReviewBadge rating={property.rating} label={property.reviewLabel} />
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {property.amenities.slice(0, 3).map((a) => (
                <span key={a} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-end justify-between mt-3">
            <span className="text-xs text-green-700 font-medium">Free cancellation</span>
            <div className="text-right">
              <div className="text-xl font-bold text-gray-900">${property.pricePerNight}</div>
              <div className="text-xs text-gray-500">per night</div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/property/${property.id}`}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group block"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={property.images[0]}
          alt={property.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
            {property.type}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-sm leading-tight truncate">{property.name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{property.location}</p>
            <StarRating stars={property.stars} />
          </div>
          <ReviewBadge rating={property.rating} label={property.reviewLabel} />
        </div>
        <div className="mt-3 flex items-end justify-between">
          <div className="text-xs text-green-700 font-medium">Free cancellation</div>
          <div className="text-right">
            <span className="text-lg font-extrabold text-gray-900">${property.pricePerNight}</span>
            <div className="text-xs text-gray-500">/ night</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
