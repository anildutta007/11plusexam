'use strict';
import React, { useState } from 'react';
import { Search, MapPin, AlertCircle, Home, CheckCircle2, Navigation, Info, ExternalLink } from 'lucide-react';
import { GRAMMAR_SCHOOLS, GrammarSchool } from '@/data/grammarSchools';
import { calculateDistanceMiles, lookupPostcode, GeocodeResult } from '@/utils/geoUtils';

interface SchoolWithDistance extends GrammarSchool {
  distanceMiles: number;
  inCatchmentRadius: boolean;
}

export default function PostcodeFinder() {
  const [postcode, setPostcode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [geoResult, setGeoResult] = useState<GeocodeResult | null>(null);
  const [schools, setSchools] = useState<SchoolWithDistance[]>([]);
  const [maxRadius, setMaxRadius] = useState<number>(20);
  const [genderFilter, setGenderFilter] = useState<string>('All');

  // Sample quick test postcodes
  const quickPostcodes = [
    { label: 'Sutton (SM1 1EA)', code: 'SM1 1EA' },
    { label: 'Barnet (EN5 4DQ)', code: 'EN5 4DQ' },
    { label: 'Kingston (KT1 2EU)', code: 'KT1 2EU' },
    { label: 'Amersham Bucks (HP6 5AH)', code: 'HP6 5AH' },
    { label: 'Chelmsford Essex (CM1 1RW)', code: 'CM1 1RW' },
    { label: 'Altrincham Trafford (WA14 2HR)', code: 'WA14 2HR' },
    { label: 'Tonbridge Kent (TN9 2PN)', code: 'TN9 2PN' },
    { label: 'Birmingham (B14 7QJ)', code: 'B14 7QJ' },
  ];

  const handleSearch = async (targetCode?: string) => {
    const codeToSearch = targetCode || postcode;
    if (!codeToSearch.trim()) {
      setError('Please enter a valid UK postcode.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const geo = await lookupPostcode(codeToSearch);
      if (!geo) {
        setError(`Could not locate postcode "${codeToSearch}". Please check formatting (e.g. SM1 1EA, HP6 5AH).`);
        setSchools([]);
        setGeoResult(null);
        setLoading(false);
        return;
      }

      setGeoResult(geo);

      const computed: SchoolWithDistance[] = GRAMMAR_SCHOOLS.map((school) => {
        const dist = calculateDistanceMiles(geo.latitude, geo.longitude, school.lat, school.lng);
        const radius = school.catchmentRadiusMiles ?? 15;
        return {
          ...school,
          distanceMiles: dist,
          inCatchmentRadius: dist <= radius,
        };
      }).sort((a, b) => a.distanceMiles - b.distanceMiles);

      setSchools(computed);
    } catch {
      setError('Failed to query postcode coordinates. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  const filteredSchools = schools.filter((school) => {
    const distMatches = school.distanceMiles <= maxRadius;
    const genderMatches =
      genderFilter === 'All' ? true : school.gender === genderFilter || school.gender === 'Mixed';
    return distMatches && genderMatches;
  });

  return (
    <section id="postcode-finder" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            UK Postcode & Catchment Radius Tool
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Find Your Grammar Schools & Local Catchment
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Enter your UK postcode to discover grammar schools near you, calculate straight-line distances, verify catchment criteria, and examine average local house prices.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="max-w-2xl mx-auto bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Enter UK Postcode (e.g. SM1 1EA, HP7 9AR)..."
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-medium uppercase text-sm sm:text-base"
              />
            </div>
            <button
              onClick={() => handleSearch()}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-sm disabled:opacity-50"
            >
              {loading ? (
                <>Searching...</>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Find Schools
                </>
              )}
            </button>
          </div>

          {/* Quick preset buttons */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">Quick samples:</span>
            {quickPostcodes.map((item) => (
              <button
                key={item.code}
                onClick={() => {
                  setPostcode(item.code);
                  handleSearch(item.code);
                }}
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {error && (
            <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{error}</span>
            </div>
          )}
        </div>

        {/* Search Results */}
        {geoResult && (
          <div className="space-y-6">
            {/* Geo Banner & Controls */}
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-indigo-600">Postcode Located</p>
                <h3 className="text-xl font-bold text-slate-900">
                  {geoResult.postcode} &middot; <span className="text-slate-600 font-normal">{geoResult.admin_district}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Showing grammar schools sorted by proximity to your exact location.
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <label htmlFor="radius-select" className="text-xs font-semibold text-slate-600">
                    Max Distance:
                  </label>
                  <select
                    id="radius-select"
                    value={maxRadius}
                    onChange={(e) => setMaxRadius(Number(e.target.value))}
                    className="border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-800 bg-white focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value={5}>Within 5 miles</option>
                    <option value={10}>Within 10 miles</option>
                    <option value={15}>Within 15 miles</option>
                    <option value={20}>Within 20 miles</option>
                    <option value={30}>Within 30 miles</option>
                    <option value={50}>Within 50 miles</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <label htmlFor="gender-select" className="text-xs font-semibold text-slate-600">
                    Gender:
                  </label>
                  <select
                    id="gender-select"
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                    className="border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-800 bg-white focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="All">All Schools</option>
                    <option value="Boys">Boys / Mixed</option>
                    <option value="Girls">Girls / Mixed</option>
                  </select>
                </div>
              </div>
            </div>

            {/* School Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredSchools.length === 0 ? (
                <div className="col-span-full bg-white p-8 rounded-xl border border-slate-200 text-center">
                  <p className="text-slate-600 font-medium">
                    No grammar schools found within {maxRadius} miles matching your filters.
                  </p>
                  <button
                    onClick={() => setMaxRadius(30)}
                    className="mt-3 text-indigo-600 hover:text-indigo-800 text-sm font-semibold underline"
                  >
                    Expand search radius to 30 miles
                  </button>
                </div>
              ) : (
                filteredSchools.map((school) => (
                  <div
                    key={school.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Distance & Catchment Status */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 text-white font-bold text-xs">
                            <Navigation className="w-3 h-3 text-indigo-300" />
                            {school.distanceMiles} miles away
                          </span>

                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                            {school.gender}
                          </span>

                          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                            Ofsted: {school.ofstedRating}
                          </span>
                        </div>

                        {/* Catchment Pill */}
                        <div>
                          {school.catchmentType === 'Score Rank (Superselective)' ? (
                            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
                              Superselective (Rank based)
                            </span>
                          ) : school.inCatchmentRadius ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              Within Catchment (~{school.catchmentRadiusMiles}m)
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                              <Info className="w-3.5 h-3.5 text-amber-600" />
                              Outside Typical Catchment ({school.catchmentRadiusMiles}m)
                            </span>
                          )}
                        </div>
                      </div>

                      {/* School Name & Borough */}
                      <h4 className="text-xl font-bold text-slate-900 leading-snug">
                        {school.name}
                      </h4>
                      <p className="text-xs text-slate-500 mb-4">
                        {school.borough}, {school.region} &middot; Postcode: {school.postcode} &middot; Exam Board: <strong className="text-slate-800">{school.examBoard}</strong>
                      </p>

                      {/* Admission Stats Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 mb-4 text-xs">
                        <div>
                          <span className="text-slate-500 block">Year 7 Seats:</span>
                          <span className="font-bold text-slate-800 text-sm">{school.totalSeats} places</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Applicants Last Year:</span>
                          <span className="font-bold text-slate-800 text-sm">{school.applicantsLastYear.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Competition Ratio:</span>
                          <span className="font-bold text-indigo-700 text-sm">
                            {Math.round((school.applicantsLastYear / school.totalSeats) * 10) / 10} to 1
                          </span>
                        </div>
                        <div className="col-span-2 sm:col-span-3 pt-2 border-t border-slate-200">
                          <span className="text-slate-500 block">Admitted Cut-off Score:</span>
                          <span className="font-bold text-slate-900">{school.admittedCutoffScore}</span>
                          <span className="text-slate-600 text-[11px] block mt-0.5">{school.scoreDescription}</span>
                        </div>
                      </div>

                      {/* Catchment Criteria Explanation */}
                      <div className="mb-4 text-xs bg-indigo-50/50 p-3 rounded-xl border border-indigo-100">
                        <strong className="text-indigo-900 font-semibold block mb-1">
                          Catchment Policy: {school.catchmentType}
                        </strong>
                        <p className="text-slate-700 leading-relaxed">{school.catchmentNotes}</p>
                      </div>

                      {/* House Price & Rent Benchmarks */}
                      <div className="mb-4 p-3 rounded-xl bg-amber-50/40 border border-amber-200/60 text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-2">
                          <Home className="w-3.5 h-3.5 text-amber-700" />
                          <span>Catchment Area Housing & Rent Benchmark:</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700 mb-1.5">
                          <div>
                            <span className="font-medium text-slate-500 block">Avg Purchase Price:</span>
                            <span>2-Bed: <strong>{school.avgHousePrice.twoBed}</strong></span><br />
                            <span>3-Bed: <strong>{school.avgHousePrice.threeBed}</strong></span><br />
                            <span>4-Bed: <strong>{school.avgHousePrice.fourBed}</strong></span>
                          </div>
                          <div>
                            <span className="font-medium text-slate-500 block">Avg Monthly Rent:</span>
                            <span>2-Bed: <strong>{school.avgMonthlyRent.twoBed}</strong></span><br />
                            <span>3-Bed: <strong>{school.avgMonthlyRent.threeBed}</strong></span>
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-500 italic mt-1 border-t border-amber-100 pt-1">
                          {school.housingNotes}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Links */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <a
                        href={school.samplePaperUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800"
                      >
                        Sample Papers & Admissions <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href={school.officialWebsite}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 hover:text-slate-900 underline"
                      >
                        Official Website
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
