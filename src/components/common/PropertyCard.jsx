import { useState } from "react";
import { Link } from "react-router-dom";

// Shared heart button - default outline, fills solid red once clicked/saved.
// Used by every card style below so wishlist behavior is consistent site-wide.
function WishlistHeart({ className = "" }) {
  const [saved, setSaved] = useState(false);
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        setSaved((s) => !s);
      }}
      aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
      className={`w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors ${className}`}
    >
      <svg
        className={`w-4.5 h-4.5 transition-colors ${saved ? "text-red-500" : "text-gray-700"}`}
        fill={saved ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-8.318a4.5 4.5 0 010-6.364z" />
      </svg>
    </button>
  );
}

function singularType(type) {
  if (!type) return "";
  return type.endsWith("s") ? type.slice(0, -1) : type;
}

function StarRating({ stars }) {
  if (!stars) return null;
  return (
    <div className="flex gap-0.5 mt-0.5">
      {Array.from({ length: stars }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Booking.com's review score box is a dark-navy square with the number, with
// the descriptive label and review count stacked to its right - not a pill.
// That square-cornered-on-one-side shape is one of the most recognizable
// pieces of their visual identity, so we replicate that shape specifically.
function ReviewBadge({ rating, label, reviewCount }) {
  return (
    <div className="flex items-center gap-2">
      <span className="bg-primary text-white font-bold text-sm w-9 h-9 flex items-center justify-center rounded-tl-md rounded-tr-md rounded-bl-md flex-shrink-0">
        {rating.toFixed(1)}
      </span>
      <div>
        <div className="text-xs font-semibold text-gray-800">{label}</div>
        {reviewCount && <div className="text-[11px] text-gray-500">{reviewCount} reviews</div>}
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
              <ReviewBadge rating={property.rating} label={property.reviewLabel} reviewCount={property.reviewCount} />
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
            <span className="text-xs text-green-700 font-medium flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free cancellation
            </span>
            <div className="text-right">
              <div className="text-xs text-gray-500">Starting from</div>
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
        {/* Wishlist heart - present on every Booking.com card, top-right of the image */}
        <WishlistHeart className="absolute top-2 right-2" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">{singularType(property.type)}</span>
          <StarRating stars={property.stars} />
          {property.genius && (
            <span className="bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded">Genius</span>
          )}
        </div>
        <h3 className="font-bold text-gray-900 text-sm leading-tight truncate mt-1">{property.name}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{property.location}</p>

        <div className="mt-3 flex items-end justify-between">
          <ReviewBadge rating={property.rating} label={property.reviewLabel} reviewCount={property.reviewCount} />
          <div className="text-right flex-shrink-0">
            <div className="text-[11px] text-gray-500">Starting from</div>
            {property.originalPrice && (
              <span className="text-xs text-gray-400 line-through mr-1">${property.originalPrice}</span>
            )}
            <span className="text-lg font-extrabold text-gray-900">${property.pricePerNight}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
