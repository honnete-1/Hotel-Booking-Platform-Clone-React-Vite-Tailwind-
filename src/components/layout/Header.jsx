import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/search?type=Hotels", label: "Hotels" },
  { to: "/search?type=Apartments", label: "Apartments" },
  { to: "/search?type=Resorts", label: "Resorts" },
  { to: "/search?type=Villas", label: "Villas" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-white rounded px-2 py-1">
              <span className="text-primary font-extrabold text-lg tracking-tight">stay</span>
              <span className="text-accent font-extrabold text-lg tracking-tight">RW</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-white/90 hover:text-white text-sm font-medium border-b-2 border-transparent hover:border-accent transition-all pb-0.5"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="text-white font-medium text-sm hover:bg-white/10 px-3 py-1.5 rounded transition-colors"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="bg-accent hover:bg-accent-dark text-gray-900 font-semibold text-sm px-4 py-2 rounded transition-colors"
            >
              Register
            </Link>
          </div>

          {/* Mobile toggle */}
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
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#00224f] border-t border-white/10 px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="block text-white/90 hover:text-white py-2.5 text-sm font-medium border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-3 pt-3">
            <Link
              to="/login"
              className="flex-1 text-center text-white border border-white/40 rounded py-2 text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="flex-1 text-center bg-accent text-gray-900 rounded py-2 text-sm font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
