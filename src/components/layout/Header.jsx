import { useState } from "react";
import { Link } from "react-router-dom";

// Service tabs - this is the row of pills directly under the top utility
// row on the real Booking.com header. "Stays" is the active/selected one,
// shown as an outlined pill; the rest are plain text + icon, no pill.
const serviceTabs = [
  {
    label: "Stays",
    to: "/",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a2 2 0 012-2h14a2 2 0 012 2v9H3V7z M3 19h18 M7 11a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
  {
    label: "Flights",
    to: "/search?type=Flights",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3 7 7 1-5 5 1.5 7L12 18l-6.5 4L7 15 2 10l7-1 3-7z" />,
  },
  {
    label: "Car rental",
    to: "/search?type=Car+rental",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11m-14 0h14m-14 0a2 2 0 00-2 2v4a1 1 0 001 1h1a1 1 0 001-1v-1h10v1a1 1 0 001 1h1a1 1 0 001-1v-4a2 2 0 00-2-2" />,
  },
  {
    label: "Attractions",
    to: "/search?type=Attractions",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m-4-4h8m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    label: "Airport taxis",
    to: "/search?type=Airport+taxis",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l-2 4M16 16l2 4M5 16h14l-1.4-5.6A2 2 0 0015.7 9H8.3a2 2 0 00-1.9 1.4L5 16zm2-3h10" />,
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Single top row: logo left, everything else right - matches the
              real header where currency/help/register/sign-in all sit on
              one line instead of being split into a separate strip. */}
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <span className="text-white font-bold text-2xl tracking-tight">Booking.com</span>
            </Link>

            <div className="hidden md:flex items-center gap-4 text-sm text-white">
              <button className="font-medium hover:bg-white/10 px-2 py-1.5 rounded transition-colors">USD</button>
              <button
                className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                aria-label="Region"
              >
                🌐
              </button>
              <button
                className="w-7 h-7 rounded-full border border-white/50 hover:bg-white/10 flex items-center justify-center transition-colors text-xs"
                aria-label="Help"
              >
                ?
              </button>
              <Link to="/list-property" className="font-medium hover:bg-white/10 px-2 py-1.5 rounded transition-colors whitespace-nowrap">
                List your property
              </Link>
              <Link
                to="/signup"
                className="border border-white text-white font-medium px-4 py-2 rounded transition-colors hover:bg-white/10"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-white text-primary font-medium px-4 py-2 rounded transition-colors hover:bg-gray-100"
              >
                Sign in
              </Link>
            </div>

            <button
              className="md:hidden text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Service tabs row - "Stays" rendered as an outlined pill (active),
              the rest as plain icon+label, exactly like the reference. */}
          <div className="hidden sm:flex items-center gap-1 pb-3 -mt-1">
            {serviceTabs.map((tab) => (
              <Link
                key={tab.label}
                to={tab.to}
                className={
                  tab.label === "Stays"
                    ? "flex items-center gap-2 text-white text-sm font-semibold border border-white rounded-full px-4 py-2"
                    : "flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium px-3 py-2 rounded-full hover:bg-white/10 transition-colors"
                }
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {tab.icon}
                </svg>
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#00224f] border-t border-white/10 px-4 pb-4">
          {serviceTabs.map((tab) => (
            <Link
              key={tab.label}
              to={tab.to}
              className="block text-white/90 hover:text-white py-2.5 text-sm font-medium border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {tab.label}
            </Link>
          ))}
          <Link
            to="/list-property"
            className="block text-white/90 hover:text-white py-2.5 text-sm font-medium border-b border-white/10"
            onClick={() => setMenuOpen(false)}
          >
            List your property
          </Link>
          <div className="flex gap-3 mt-3 pt-3">
            <Link
              to="/signup"
              className="flex-1 text-center text-white border border-white/40 rounded-full py-2 text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
            <Link
              to="/login"
              className="flex-1 text-center bg-white text-primary rounded-full py-2 text-sm font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
