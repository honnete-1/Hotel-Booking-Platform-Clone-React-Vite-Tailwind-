import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <Link to="/" className="mb-8">
        <div className="bg-primary rounded-lg px-3 py-2 inline-flex">
          <span className="text-white font-extrabold text-xl tracking-tight">stay</span>
          <span className="text-accent font-extrabold text-xl tracking-tight">RW</span>
        </div>
      </Link>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm w-full max-w-sm p-8">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Create account</h1>
        <p className="text-gray-500 text-sm mb-6">Join stayRW and start booking today</p>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">First name</label>
              <input
                type="text"
                placeholder="Alice"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last name</label>
              <input
                type="text"
                placeholder="Smith"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
            <input
              type="password"
              placeholder="Min. 8 characters"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>

          <div className="flex items-start gap-2 text-xs text-gray-500">
            <input type="checkbox" className="mt-0.5 accent-primary" />
            <span>
              I agree to stayRW's{" "}
              <a href="#" className="text-primary-light underline">Terms of Service</a> and{" "}
              <a href="#" className="text-primary-light underline">Privacy Policy</a>
            </span>
          </div>

          <button className="w-full bg-primary-light hover:bg-primary text-white font-bold py-3 rounded-lg transition-colors">
            Create account
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary-light font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
