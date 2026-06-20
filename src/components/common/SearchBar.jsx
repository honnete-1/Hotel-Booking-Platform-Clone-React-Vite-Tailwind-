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
    : "w-full bg-white border-0 px-4 py-3 text-sm text-gray-800 focus:outline-none placeholder:text-gray-400";

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
    <form
      onSubmit={handleSearch}
      className="bg-white border-[3px] border-accent rounded-lg flex flex-col lg:flex-row shadow-xl overflow-hidden"
    >
      {/* Destination */}
      <div className="flex-1 flex items-center gap-2 px-3 py-3 border-b lg:border-b-0 lg:border-r border-gray-200">
        <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a2 2 0 012-2h14a2 2 0 012 2v9H3V7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19h18M7 11a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <input
          type="text"
          placeholder="Where are you going?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full border-0 text-sm text-gray-800 focus:outline-none placeholder:text-gray-500"
        />
      </div>

      {/* Check-in — Check-out, rendered as one field like the reference's
          single "Check-in date — Check-out date" control. */}
      <div className="flex-1 flex items-center gap-2 px-3 py-3 border-b lg:border-b-0 lg:border-r border-gray-200 lg:min-w-[260px]">
        <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <div className="flex items-center gap-2 w-full text-sm">
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="border-0 text-gray-800 focus:outline-none w-full"
          />
          <span className="text-gray-400">—</span>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border-0 text-gray-800 focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Guests — single summary field like "2 adults · 0 children · 1 room" */}
      <div className="flex-1 flex items-center gap-2 px-3 py-3 lg:min-w-[220px]">
        <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full border-0 text-sm text-gray-800 focus:outline-none bg-transparent"
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>{n} {n === 1 ? "adult" : "adults"} · 0 children · 1 room</option>
          ))}
        </select>
        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <button
        type="submit"
        className="bg-primary-light hover:bg-primary text-white font-bold px-8 py-3 m-1.5 rounded text-base transition-colors"
      >
        Search
      </button>
    </form>
  );
}
