export default function OffersBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <h2 className="text-2xl font-extrabold text-gray-900">Offers</h2>
      <p className="text-gray-500 text-sm mt-1">Promotions, deals, and special offers for you</p>

      <div className="mt-5 border border-gray-200 rounded-xl flex items-center justify-between p-6 gap-6">
        <div>
          <p className="text-xs text-gray-500 font-medium">Escape for less with our Getaway Deals</p>
          <h3 className="text-xl font-bold text-gray-900 mt-1">No catch. Just getaways.</h3>
          <p className="text-sm text-gray-600 mt-1">At least 15% off select stays worldwide – just book and go.</p>
          <button className="mt-4 bg-primary-light hover:bg-primary text-white font-semibold text-sm px-4 py-2.5 rounded transition-colors">
            Save with a Getaway Deal
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&q=80"
          alt="Couple walking on the beach"
          className="hidden sm:block w-32 h-24 rounded-lg object-cover flex-shrink-0"
        />
      </div>
    </section>
  );
}
