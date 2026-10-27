import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white font-bold text-lg shadow-sm">
              11+
            </span>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-none">
                11+ Compass
              </span>
              <span className="text-xs text-slate-500 font-medium">UK Grammar School Guide for Parents</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#postcode-finder" className="hover:text-indigo-600 transition-colors">
              Find Schools & Catchment
            </a>
            <a href="#schools-table" className="hover:text-indigo-600 transition-colors">
              School Directory
            </a>
            <a href="#timeline-section" className="hover:text-indigo-600 transition-colors">
              Key Dates
            </a>
            <a href="#psychology-section" className="hover:text-indigo-600 transition-colors">
              Child Well-being & Failure
            </a>
            <a href="#papers-section" className="hover:text-indigo-600 transition-colors">
              Sample Papers
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#postcode-finder"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
            >
              Check My Postcode
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
