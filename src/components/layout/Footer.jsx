const columns = [
  {
    title: "Support",
    links: ["Help Center", "Safety Info", "Cancellation Options", "Contact Us", "Accessibility"],
  },
  {
    title: "Destinations",
    links: ["Kigali", "Musanze", "Rubavu", "Karongi", "Akagera"],
  },
  {
    title: "Property Types",
    links: ["Hotels", "Apartments", "Resorts", "Villas", "Guest Houses"],
  },
  {
    title: "stayRW",
    links: ["About Us", "Careers", "Press Center", "Partner Program", "Affiliate Program"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-bold text-gray-900 text-sm mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded px-2 py-1">
              <span className="text-white font-extrabold text-sm tracking-tight">stay</span>
              <span className="text-accent font-extrabold text-sm tracking-tight">RW</span>
            </div>
            <span className="text-gray-500 text-sm">© 2025 stayRW. All rights reserved.</span>
          </div>
          <div className="flex gap-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
