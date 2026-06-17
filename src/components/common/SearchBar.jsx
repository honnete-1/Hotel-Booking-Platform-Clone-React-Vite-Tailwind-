import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ compact = false, initialValues = {} }) {
  const navigate = useNavigate();
  const [destination, setDestination] = useState(initialValues.destination || "");
  const [checkIn, setCheckIn] = useState(initialValues.checkIn || "");
  const [checkOut, setCheckOut] = useState(initialValues.checkOut || "");
  const [guests, setGuests] = useState(initialValues.guests || "2");

  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests) params.set("guests", guests);
    navigate(`/search?${params.toString()}`);
  }

  const inputClass = compact
    ? "w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-light"
    : "w-full bg-white border-0 px-4 py-3 text-sm text-gray-800 focus:outline-none";

  if (compact) {
    return (
      <form onSubmit={handleSearch} className="flex flex-wrap gap-2 items-end">
        <div className="flex-1 min-w-[160px]">
          <label className="block text-xs font-semibold text-gray-600 mb-1">Destination</label>
          <input
            type="text"
            placeholder="Where are you going?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="min-w-[130px]">
          <label className="block text-xs font-semibold text-gray-600 mb-1">Check-in</label>
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className={inputClass} />
        </div>
        <div className="min-w-[130px]">
          <label className="block text-xs font-semibold text-gray-600 mb-1">Check-out</label>
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className={inputClass} />
        </div>
        <div className="min-w-[100px]">
          <label className="block text-xs font-semibold text-gray-600 mb-1">Guests</label>
          <select value={guests} onChange={(e) => setGuests(e.target.value)} className={inputClass}>
            {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? "adult" : "adults"}</option>)}
          </select>
        </div>
        <button type="submit" className="bg-accent hover:bg-accent-dark text-gray-900 font-bold px-5 py-2 rounded text-sm transition-colors">
          Search
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSearch} className="bg-accent p-1.5 rounded-lg flex flex-col lg:flex-row gap-1.5">
      {/* Destination */}
      <div className="flex-1 bg-white rounded flex items-center gap-2 px-1">
        <svg className="w-5 h-5 text-gray-400 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <input
          type="text"
          placeholder="Where are you going?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Check-in */}
      <div className="bg-white rounded flex items-center gap-2 px-1 lg:w-44">
        <svg className="w-5 h-5 text-gray-400 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          placeholder="Check-in"
          className={inputClass}
        />
      </div>

      {/* Check-out */}
      <div className="bg-white rounded flex items-center gap-2 px-1 lg:w-44">
        <svg className="w-5 h-5 text-gray-400 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          placeholder="Check-out"
          className={inputClass}
        />
      </div>

      {/* Guests */}
      <div className="bg-white rounded flex items-center gap-2 px-1 lg:w-36">
        <svg className="w-5 h-5 text-gray-400 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className={inputClass}
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>{n} {n === 1 ? "adult" : "adults"}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-primary-light hover:bg-primary text-white font-bold px-8 py-3 rounded text-sm transition-colors"
      >
        Search
      </button>
    </form>
  );
}
