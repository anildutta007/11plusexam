'use client';

import React, { useState } from 'react';
import { GRAMMAR_SCHOOLS, GrammarSchool } from '@/data/grammarSchools';
import { Search, Filter, Award, TrendingUp, Building, MapPin } from 'lucide-react';
import SchoolMapModal from './SchoolMapModal';

export default function SchoolsTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedGender, setSelectedGender] = useState('All');
  const [activeMapSchool, setActiveMapSchool] = useState<GrammarSchool | null>(null);

  const regions = ['All', 'London', 'Buckinghamshire', 'Essex', 'Kent', 'West Midlands', 'Warwickshire', 'Greater Manchester', 'Gloucestershire'];

  const filtered = GRAMMAR_SCHOOLS.filter((school) => {
    const matchesSearch =
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.borough.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.postcode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || school.region === selectedRegion;
    const matchesGender = selectedGender === 'All' || school.gender === selectedGender || school.gender === 'Mixed';
    return matchesSearch && matchesRegion && matchesGender;
  });

  return (
    <section id="schools-table" className="py-12 bg-[#F8F3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E2ECE5] border border-[#1F5A45]/20 text-[#1F5A45] text-xs font-bold mb-2">
              <Building className="w-3.5 h-3.5" />
              National Grammar School Database
            </div>
            <h2 className="text-3xl font-extrabold text-[#1F5A45] tracking-tight font-serif">
              Grammar School Performance, Scores & Cut-Offs
            </h2>
            <p className="mt-1 text-sm text-slate-700 max-w-2xl">
              Inspect test formats, admitted cut-off scores, applicants, Progress 8 ratings, and local housing benchmarks for top UK state grammar schools. Click on any school or location to inspect its catchment radius on an interactive map.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search school or town..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#1F5A45] bg-white w-48 sm:w-60"
              />
            </div>

            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="text-xs border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800 bg-white focus:ring-1 focus:ring-[#1F5A45]"
            >
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r === 'All' ? 'All Regions' : r}
                </option>
              ))}
            </select>

            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="text-xs border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800 bg-white focus:ring-1 focus:ring-[#1F5A45]"
            >
              <option value="All">All Genders</option>
              <option value="Boys">Boys</option>
              <option value="Girls">Girls</option>
              <option value="Mixed">Mixed</option>
            </select>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto border border-[#EFE8DA] rounded-xl shadow-sm bg-white">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#EFE8DA] text-[#1F5A45] font-bold border-b border-[#EFE8DA]">
                <th className="py-3 px-4">School & Location (Click to view map)</th>
                <th className="py-3 px-3">Exam Board</th>
                <th className="py-3 px-3">Places / Applicants</th>
                <th className="py-3 px-3">Admitted Cut-off Score</th>
                <th className="py-3 px-3">Catchment Model & Map</th>
                <th className="py-3 px-3">Ofsted & Progress 8</th>
                <th className="py-3 px-3">Avg 3-Bed House</th>
                <th className="py-3 px-3 text-right">Links</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFE8DA] text-slate-800">
              {filtered.map((school) => {
                const ratio = Math.round((school.applicantsLastYear / school.totalSeats) * 10) / 10;
                return (
                  <tr key={school.id} className="hover:bg-[#F8F3E8]/60 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-slate-900">
                      <button
                        onClick={() => setActiveMapSchool(school)}
                        className="text-left group flex items-start gap-1.5 focus:outline-none"
                      >
                        <div>
                          <div className="font-bold text-sm text-[#1F5A45] group-hover:text-[#E9774F] transition-colors flex items-center gap-1 font-serif">
                            {school.name}
                            <MapPin className="w-3.5 h-3.5 text-[#E9774F] opacity-70 group-hover:opacity-100" />
                          </div>
                          <div className="text-[11px] text-slate-600 group-hover:text-slate-800">
                            {school.borough}, {school.region} ({school.postcode}) &middot; <span className="font-semibold">{school.gender}</span>
                          </div>
                          <span className="text-[10px] text-[#E9774F] font-semibold underline mt-0.5 inline-block">
                            View location & catchment radius on map →
                          </span>
                        </div>
                      </button>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-block px-2 py-0.5 rounded bg-[#EFE8DA] text-[#1F5A45] font-semibold text-[11px]">
                        {school.examBoard}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <div><strong className="text-slate-900">{school.totalSeats}</strong> seats</div>
                      <div className="text-slate-500 text-[11px]">{school.applicantsLastYear.toLocaleString()} apps ({ratio}:1)</div>
                      <div className="text-[10px] text-[#1F5A45] font-bold mt-0.5">
                        In: {school.seatsInsideCatchment} | Out: {school.seatsOutsideCatchment}
                      </div>
                    </td>
                    <td className="py-3 px-3 max-w-xs">
                      <div className="font-bold text-slate-900">{school.admittedCutoffScore}</div>
                      <div className="text-[11px] text-slate-600 line-clamp-2">{school.scoreDescription}</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-semibold block text-slate-900">{school.catchmentType}</span>
                      <span className="text-[11px] text-slate-500 block mb-1">
                        {school.catchmentRadiusMiles ? `~${school.catchmentRadiusMiles} miles radius` : 'No radius limit'}
                      </span>
                      <button
                        onClick={() => setActiveMapSchool(school)}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#E2ECE5] hover:bg-[#1F5A45] hover:text-white text-[#1F5A45] text-[11px] font-bold border border-[#1F5A45]/30 transition-colors"
                      >
                        <MapPin className="w-3 h-3" />
                        Show Radius Map
                      </button>
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1 font-bold text-[#1F5A45]">
                        <Award className="w-3.5 h-3.5 text-[#E9774F]" />
                        {school.ofstedRating}
                      </div>
                      <div className="text-[11px] text-slate-600">
                        P8: {school.progress8Score}
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-900">{school.avgHousePrice.threeBed}</div>
                      <div className="text-[11px] text-slate-600">Rent: {school.avgMonthlyRent.threeBed}</div>
                    </td>
                    <td className="py-3 px-3 text-right whitespace-nowrap">
                      <a
                        href={school.samplePaperUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#E9774F] hover:text-[#D7653D] font-bold underline text-[11px] block"
                      >
                        Sample Papers
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Interactive Map Modal with Catchment Radius and Seats */}
        <SchoolMapModal
          school={activeMapSchool}
          onClose={() => setActiveMapSchool(null)}
        />
      </div>
    </section>
  );
}
