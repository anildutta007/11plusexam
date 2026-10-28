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
    <section id="postcode-finder" className="py-12 bg-[#F8F3E8] border-b border-[#EFE8DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E2ECE5] text-[#1F5A45] border border-[#1F5A45]/20 text-xs font-bold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            UK Postcode & Catchment Radius Tool
          </div>
          <h2 className="text-3xl font-extrabold text-[#1F5A45] tracking-tight sm:text-4xl font-serif">
            Find Your Grammar Schools & Local Catchment
          </h2>
          <p className="mt-3 text-base text-slate-700">
            Enter your UK postcode to discover grammar schools near you, calculate straight-line distances, verify catchment criteria, and examine average local house prices.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="max-w-2xl mx-auto bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#EFE8DA] mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Enter UK Postcode (e.g. SM1 1EA, HP7 9AR)..."
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1F5A45] focus:border-[#1F5A45] font-medium uppercase text-sm sm:text-base"
              />
            </div>
            <button
              onClick={() => handleSearch()}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#E9774F] hover:bg-[#D7653D] text-white font-bold text-sm transition-all shadow-sm disabled:opacity-50"
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
          <div className="mt-4 pt-3 border-t border-[#EFE8DA] flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-600 font-semibold">Quick samples:</span>
            {quickPostcodes.map((item) => (
              <button
                key={item.code}
                onClick={() => {
                  setPostcode(item.code);
                  handleSearch(item.code);
                }}
                className="px-2.5 py-1 rounded-md bg-[#EFE8DA] hover:bg-[#E2ECE5] hover:text-[#1F5A45] text-slate-800 font-medium transition-colors"
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
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#EFE8DA] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-[#E9774F]">Postcode Located</p>
                <h3 className="text-xl font-bold text-[#1F5A45] font-serif">
                  {geoResult.postcode} &middot; <span className="text-slate-600 font-normal">{geoResult.admin_district}</span>
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Showing grammar schools sorted by proximity to your exact location.
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <label htmlFor="radius-select" className="text-xs font-bold text-[#1F5A45]">
                    Max Distance:
                  </label>
                  <select
                    id="radius-select"
                    value={maxRadius}
                    onChange={(e) => setMaxRadius(Number(e.target.value))}
                    className="border border-[#EFE8DA] rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 bg-[#F8F3E8] focus:ring-1 focus:ring-[#1F5A45]"
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
                  <label htmlFor="gender-select" className="text-xs font-bold text-[#1F5A45]">
                    Gender:
                  </label>
                  <select
                    id="gender-select"
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                    className="border border-[#EFE8DA] rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 bg-[#F8F3E8] focus:ring-1 focus:ring-[#1F5A45]"
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
                <div className="col-span-full bg-white p-8 rounded-xl border border-[#EFE8DA] text-center">
                  <p className="text-slate-700 font-medium">
                    No grammar schools found within {maxRadius} miles matching your filters.
                  </p>
                  <button
                    onClick={() => setMaxRadius(30)}
                    className="mt-3 text-[#1F5A45] hover:text-[#164233] text-sm font-bold underline"
                  >
                    Expand search radius to 30 miles
                  </button>
                </div>
              ) : (
                filteredSchools.map((school) => (
                  <div
                    key={school.id}
                    className="bg-white rounded-2xl border border-[#EFE8DA] p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Distance & Catchment Status */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1F5A45] text-white font-bold text-xs">
                            <Navigation className="w-3 h-3 text-[#F3DD87]" />
                            {school.distanceMiles} miles away
                          </span>

                          <span className="px-2 py-0.5 rounded-md bg-[#E2ECE5] text-[#1F5A45] text-xs font-semibold">
                            {school.gender}
                          </span>

                          <span className="px-2 py-0.5 rounded-md bg-[#F3DD87]/40 text-[#1F5A45] border border-[#F3DD87] text-xs font-semibold">
                            Ofsted: {school.ofstedRating}
                          </span>
                        </div>

                        {/* Catchment Pill */}
                        <div>
                          {school.catchmentType === 'Score Rank (Superselective)' ? (
                            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#EFE8DA] text-purple-900 border border-purple-200">
                              Superselective (Rank based)
                            </span>
                          ) : school.inCatchmentRadius ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E2ECE5] text-[#1F5A45] border border-[#1F5A45]/30">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#1F5A45]" />
                              Within Catchment (~{school.catchmentRadiusMiles}m)
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-300">
                              <Info className="w-3.5 h-3.5 text-amber-700" />
                              Outside Typical Catchment ({school.catchmentRadiusMiles}m)
                            </span>
                          )}
                        </div>
                      </div>

                      {/* School Name & Borough */}
                      <h4 className="text-xl font-bold text-[#1F5A45] font-serif leading-snug">
                        {school.name}
                      </h4>
                      <p className="text-xs text-slate-600 mb-4">
                        {school.borough}, {school.region} &middot; Postcode: {school.postcode} &middot; Exam Board: <strong className="text-slate-900">{school.examBoard}</strong>
                      </p>

                      {/* Admission Stats Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded-xl bg-[#F8F3E8] border border-[#EFE8DA] mb-4 text-xs">
                        <div>
                          <span className="text-slate-600 block">Year 7 Seats:</span>
                          <span className="font-bold text-slate-900 text-sm">{school.totalSeats} places</span>
                        </div>
                        <div>
                          <span className="text-slate-600 block">Applicants Last Year:</span>
                          <span className="font-bold text-slate-900 text-sm">{school.applicantsLastYear.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-slate-600 block">Competition Ratio:</span>
                          <span className="font-bold text-[#E9774F] text-sm">
                            {Math.round((school.applicantsLastYear / school.totalSeats) * 10) / 10} to 1
                          </span>
                        </div>
                        <div className="col-span-2 sm:col-span-3 pt-2 border-t border-[#EFE8DA]">
                          <span className="text-slate-600 block">Admitted Cut-off Score:</span>
                          <span className="font-bold text-[#1F5A45]">{school.admittedCutoffScore}</span>
                          <span className="text-slate-700 text-[11px] block mt-0.5">{school.scoreDescription}</span>
                        </div>
                      </div>

                      {/* Catchment Criteria Explanation */}
                      <div className="mb-4 text-xs bg-[#E2ECE5]/60 p-3 rounded-xl border border-[#1F5A45]/15">
                        <strong className="text-[#1F5A45] font-bold block mb-1">
                          Catchment Policy: {school.catchmentType}
                        </strong>
                        <p className="text-slate-800 leading-relaxed">{school.catchmentNotes}</p>
                      </div>

                      {/* House Price & Rent Benchmarks */}
                      <div className="mb-4 p-3 rounded-xl bg-[#EFE8DA]/80 border border-[#C7BAA7]/40 text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-[#1F5A45] mb-2">
                          <Home className="w-3.5 h-3.5 text-[#E9774F]" />
                          <span>Catchment Area Housing & Rent Benchmark:</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-800 mb-1.5">
                          <div>
                            <span className="font-medium text-slate-600 block">Avg Purchase Price:</span>
                            <span>2-Bed: <strong>{school.avgHousePrice.twoBed}</strong></span><br />
                            <span>3-Bed: <strong>{school.avgHousePrice.threeBed}</strong></span><br />
                            <span>4-Bed: <strong>{school.avgHousePrice.fourBed}</strong></span>
                          </div>
                          <div>
                            <span className="font-medium text-slate-600 block">Avg Monthly Rent:</span>
                            <span>2-Bed: <strong>{school.avgMonthlyRent.twoBed}</strong></span><br />
                            <span>3-Bed: <strong>{school.avgMonthlyRent.threeBed}</strong></span>
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-600 italic mt-1 border-t border-[#C7BAA7]/30 pt-1">
                          {school.housingNotes}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Links */}
                    <div className="pt-3 border-t border-[#EFE8DA] flex items-center justify-between text-xs">
                      <a
                        href={school.samplePaperUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-[#E9774F] hover:text-[#D7653D]"
                      >
                        Sample Papers & Admissions <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href={school.officialWebsite}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#1F5A45] hover:text-[#164233] underline font-medium"
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
