import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import properties from "../data/properties.json";

function StarDisplay({ rating }) {
  const full = Math.floor(rating);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < full ? "text-accent" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const fakeReviews = [
  { name: "Alice M.", country: "🇺🇸 USA", rating: 5, comment: "Absolutely stunning property! The staff were incredibly welcoming and the views were breathtaking.", date: "March 2025" },
  { name: "James K.", country: "🇬🇧 UK", rating: 4, comment: "Great value for money. Clean rooms, excellent breakfast, and perfectly located for sightseeing.", date: "February 2025" },
  { name: "Sophie R.", country: "🇫🇷 France", rating: 5, comment: "Une expérience magnifique! Rwanda is beautiful and this hotel made our stay even more memorable.", date: "January 2025" },
];

export default function PropertyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [nights, setNights] = useState(3);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center flex-col gap-4">
          <p className="text-2xl font-bold text-gray-700">Property not found</p>
          <Link to="/" className="text-primary-light underline">Back to home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <nav className="text-sm text-gray-500 flex items-center gap-1.5">
              <Link to="/" className="hover:text-primary-light">Home</Link>
              <span>›</span>
              <Link to="/search" className="hover:text-primary-light">Search</Link>
              <span>›</span>
              <span className="text-gray-800 font-medium truncate">{property.name}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          {/* Title Row */}
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{property.name}</h1>
              <div className="flex items-center gap-3 mt-2 flex-wrap">
                {property.stars > 0 && (
                  <div className="flex gap-0.5">
                    {Array.from({ length: property.stars }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {property.location}
                </span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">
                  Free cancellation
                </span>
              </div>
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="flex items-center gap-2 justify-end">
                <div className="text-right">
                  <div className="text-xs text-gray-500">{property.reviewLabel}</div>
                  <div className="text-xs text-gray-400">{property.reviewCount} reviews</div>
                </div>
                <span className="bg-primary text-white font-extrabold text-lg w-12 h-12 flex items-center justify-center rounded-tl-xl rounded-tr-xl rounded-bl-xl">
                  {property.rating}
                </span>
              </div>
            </div>
          </div>

          {/* Image Gallery — large hero tile shows the active image; clicking any
              thumbnail swaps it in, matching the real Booking.com gallery behavior
              rather than leaving the big tile static. */}
          <div className="grid grid-cols-4 grid-rows-2 gap-2 h-72 sm:h-96 mb-8 rounded-xl overflow-hidden">
            <div className="col-span-4 sm:col-span-2 row-span-2 relative overflow-hidden cursor-pointer">
              <img src={property.images[activeImage]} alt={property.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            {property.images.slice(1, 5).map((img, idx) => (
              <div key={idx} className="relative overflow-hidden cursor-pointer hidden sm:block" onClick={() => setActiveImage(idx + 1)}>
                <img src={img} alt={`view ${idx + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                {idx === 3 && property.images.length > 5 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">+{property.images.length - 5} more</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column — info */}
            <div className="flex-1 min-w-0">
              {/* Description */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-5">
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">About this property</h2>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-5">
                <h2 className="text-xl font-extrabold text-gray-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Types */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-5">
                <h2 className="text-xl font-extrabold text-gray-900 mb-4">Available rooms</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 pr-4 font-semibold text-gray-700">Room type</th>
                        <th className="text-left py-3 pr-4 font-semibold text-gray-700">Sleeps</th>
                        <th className="text-left py-3 pr-4 font-semibold text-gray-700">Beds</th>
                        <th className="text-right py-3 font-semibold text-gray-700">Price</th>
                        <th className="py-3 pl-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {property.roomTypes.map((room, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                          <td className="py-3 pr-4 font-medium text-gray-900">{room.name}</td>
                          <td className="py-3 pr-4 text-gray-600">
                            <div className="flex items-center gap-1">
                              {Array.from({ length: room.capacity }).map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                              ))}
                              <span className="ml-1">{room.capacity}</span>
                            </div>
                          </td>
                          <td className="py-3 pr-4 text-gray-600">{room.beds}</td>
                          <td className="py-3 text-right font-bold text-gray-900">${room.price}<span className="text-xs font-normal text-gray-500">/night</span></td>
                          <td className="py-3 pl-4">
                            <button
                              onClick={() => navigate(`/property/${property.id}`)}
                              className="bg-primary-light hover:bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors whitespace-nowrap"
                            >
                              Reserve
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-xl font-extrabold text-gray-900">Guest reviews</h2>
                  <div className="flex items-center gap-2">
                    <span className="bg-primary text-white font-bold w-11 h-11 flex items-center justify-center rounded-tl-lg rounded-tr-lg rounded-bl-lg text-lg">
                      {property.rating}
                    </span>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{property.reviewLabel}</div>
                      <div className="text-gray-500 text-xs">{property.reviewCount} reviews</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  {fakeReviews.map((review, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                          <div className="text-gray-400 text-xs">{review.country} · {review.date}</div>
                        </div>
                        <StarDisplay rating={review.rating} />
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky booking widget */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white border border-gray-200 rounded-xl p-5 lg:sticky lg:top-24 shadow-sm">
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-extrabold text-gray-900">${property.pricePerNight}</span>
                  <span className="text-gray-500 text-sm">/ night</span>
                </div>

                <div className="border border-gray-300 rounded-lg overflow-hidden mb-3">
                  <div className="grid grid-cols-2 divide-x divide-gray-300">
                    <div className="p-3">
                      <label className="text-xs font-bold text-gray-500 block">CHECK-IN</label>
                      <input type="date" className="text-sm text-gray-900 w-full focus:outline-none mt-0.5" />
                    </div>
                    <div className="p-3">
                      <label className="text-xs font-bold text-gray-500 block">CHECK-OUT</label>
                      <input type="date" className="text-sm text-gray-900 w-full focus:outline-none mt-0.5" />
                    </div>
                  </div>
                  <div className="border-t border-gray-300 p-3">
                    <label className="text-xs font-bold text-gray-500 block">GUESTS</label>
                    <select className="text-sm text-gray-900 w-full focus:outline-none mt-0.5 bg-transparent">
                      {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n===1?"adult":"adults"}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-xs font-bold text-gray-500 block mb-1">NIGHTS</label>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setNights(Math.max(1, nights - 1))} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-primary-light">−</button>
                    <span className="font-bold text-gray-900 w-4 text-center">{nights}</span>
                    <button onClick={() => setNights(nights + 1)} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-primary-light">+</button>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-4 space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${property.pricePerNight} × {nights} nights</span>
                    <span>${property.pricePerNight * nights}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Taxes & fees</span>
                    <span>${Math.round(property.pricePerNight * nights * 0.1)}</span>
                  </div>
                  <div className="flex justify-between font-extrabold text-gray-900 pt-2 border-t border-gray-200 text-base">
                    <span>Total</span>
                    <span>${Math.round(property.pricePerNight * nights * 1.1)}</span>
                  </div>
                </div>

                <button className="w-full bg-primary-light hover:bg-primary text-white font-bold py-3.5 rounded-lg transition-colors text-base">
                  Reserve now
                </button>
                <p className="text-xs text-gray-400 text-center mt-2">You won't be charged yet</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
