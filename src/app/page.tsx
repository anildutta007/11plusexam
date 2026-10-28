'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar, { TabId, TABS } from '@/components/Navbar';
import WhatIs11PlusSection from '@/components/WhatIs11PlusSection';
import UKGrammarMap from '@/components/UKGrammarMap';
import PostcodeFinder from '@/components/PostcodeFinder';
import PreparationMasterySection from '@/components/PreparationMasterySection';
import SchoolsTable from '@/components/SchoolsTable';
import TimelineSection from '@/components/TimelineSection';
import SamplePapersSection from '@/components/SamplePapersSection';
import { Compass, Search } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('what-is-11plus');
  const [heroPostcode, setHeroPostcode] = useState('');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveTab('postcode-finder');
  };

  return (
    <div className="min-h-screen bg-[#F8F3E8] text-[#1F2D28] flex flex-col font-sans selection:bg-[#F3DD87] selection:text-[#1F5A45]">
      {/* Top Navbar with Tab Controller */}
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Replaced Warm Editorial Hero Section with compact font sizing */}
      <section className="relative bg-[#F8F3E8] text-[#1F2D28] pt-6 sm:pt-10 pb-8 sm:pb-12 border-b border-[#EFE8DA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {/* Butter Yellow Tag */}
              <div className="inline-block px-3 py-1 rounded-full bg-[#F3DD87] text-[#1F5A45] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                For parents of Year 3–5 children
              </div>

              {/* Compact Heading in Fraunces serif */}
              <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-serif font-extrabold text-[#1F5A45] leading-[1.18] tracking-tight">
                The 11+ doesn’t have to feel overwhelming.
              </h1>

              {/* Subheading */}
              <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl">
                Find grammar schools near you, know exactly what to do and when, and help your child prepare — calmly.
              </p>

              {/* Postcode Search Box */}
              <form onSubmit={handleHeroSearch} className="mt-5 max-w-md">
                <div className="relative flex items-center bg-white rounded-full p-1.5 border border-[#DDD0BC] shadow-xs focus-within:ring-2 focus-within:ring-[#1F5A45] focus-within:border-transparent transition-all">
                  <input
                    type="text"
                    value={heroPostcode}
                    onChange={(e) => setHeroPostcode(e.target.value)}
                    placeholder="Enter postcode (e.g. CM1 2JG)..."
                    className="w-full pl-4 pr-2 py-2 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none uppercase"
                  />
                  <button
                    type="submit"
                    className="shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1F5A45] hover:bg-[#164233] text-white text-xs sm:text-sm font-bold transition-colors shadow-2xs flex items-center gap-1.5"
                  >
                    <span>Find schools</span>
                  </button>
                </div>
              </form>

              {/* Trust Subtext */}
              <p className="mt-3 text-[11px] sm:text-xs text-slate-600 flex items-center gap-2">
                <span>Free</span>
                <span className="text-slate-400">&bull;</span>
                <span>No sign-up</span>
                <span className="text-slate-400">&bull;</span>
                <span className="font-semibold text-slate-800">163 grammar schools covered</span>
              </p>
            </div>

            {/* Right Illustration Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-2xl overflow-hidden shadow-md border-4 border-white bg-white">
                <Image
                  src="/images/hero-illustration.png"
                  alt="Mother and son walking together towards a traditional grammar school in autumn"
                  width={420}
                  height={320}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts Banner in Forest Green */}
      <section className="bg-[#1F5A45] text-white py-5 sm:py-6 border-b border-[#164233]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/15">
            <div className="pt-2 md:pt-0">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#F8F3E8]">
                &pound;0
              </span>
              <span className="mt-1 block text-xs sm:text-[13px] text-[#E2ECE5]">
                Tuition fees &mdash; grammar schools are state-funded
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#F8F3E8]">
                Sept, Year 6
              </span>
              <span className="mt-1 block text-xs sm:text-[13px] text-[#E2ECE5]">
                When your child sits the test
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#F8F3E8]">
                May, Year 5
              </span>
              <span className="mt-1 block text-xs sm:text-[13px] text-[#E2ECE5]">
                When most registrations close
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Active Tab Sub-header with Soft Beige base and Butter Yellow tag */}
      <div className="bg-[#EFE8DA] border-b border-[#DDD0BC] sticky top-18 z-40 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1F5A45]" />
            <span className="text-xs font-semibold text-[#5C6E67] uppercase tracking-wider font-sans">
              Viewing Section:
            </span>
            <span className="text-xs sm:text-sm font-serif font-bold text-[#1F5A45] bg-[#F3DD87] px-3 py-1 rounded-lg border border-[#DEC465]">
              {TABS.find((t) => t.id === activeTab)?.label}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-sans">
            <span className="text-[#5C6E67] hidden sm:inline">Jump to:</span>
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as TabId)}
              className="bg-[#F8F3E8] border border-[#DDD0BC] rounded-lg px-2.5 py-1 text-xs font-bold text-[#1F5A45] focus:outline-none focus:ring-1 focus:ring-[#1F5A45]"
            >
              {TABS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Tab Content - Cream paper background base */}
      <main className="flex-1 min-h-[600px] bg-[#F8F3E8]">
        {activeTab === 'what-is-11plus' && <WhatIs11PlusSection />}
        {activeTab === 'uk-map' && <UKGrammarMap />}
        {activeTab === 'postcode-finder' && <PostcodeFinder />}
        {activeTab === 'how-to-prepare' && <PreparationMasterySection />}
        {activeTab === 'school-directory' && <SchoolsTable />}
        {activeTab === 'key-dates' && <TimelineSection />}
        {activeTab === 'sample-papers' && <SamplePapersSection />}
      </main>

      {/* Next/Prev Navigation Footer in Soft Beige */}
      <div className="bg-[#EFE8DA] border-t border-[#DDD0BC] py-6 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {(() => {
            const currentIndex = TABS.findIndex((t) => t.id === activeTab);
            const prevTab = currentIndex > 0 ? TABS[currentIndex - 1] : null;
            const nextTab = currentIndex < TABS.length - 1 ? TABS[currentIndex + 1] : null;

            return (
              <>
                {prevTab ? (
                  <button
                    onClick={() => setActiveTab(prevTab.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-[#1F5A45] bg-[#F8F3E8] border border-[#DDD0BC] hover:bg-white transition-colors shadow-2xs"
                  >
                    ← Previous: {prevTab.label}
                  </button>
                ) : (
                  <div />
                )}

                {nextTab ? (
                  <button
                    onClick={() => setActiveTab(nextTab.id)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#E9774F] hover:bg-[#D7653D] transition-colors shadow-xs"
                  >
                    Next: {nextTab.label} →
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveTab('what-is-11plus')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-[#1F5A45] bg-[#E2ECE5] border border-[#BFD4C8] hover:bg-[#D4E4DA] transition-colors"
                  >
                    ↺ Back to Start
                  </button>
                )}
              </>
            );
          })()}
        </div>
      </div>

      {/* Footer in Deep Forest Green */}
      <footer className="bg-[#164233] text-[#E2ECE5] text-xs py-10 border-t-2 border-[#1F5A45] font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-[#F8F3E8] font-serif font-bold text-sm">
              <Compass className="w-5 h-5 text-[#F3DD87]" />
              11+ Compass UK &middot; Independent Guidance for Parents
            </div>
            <p className="text-center md:text-right text-[11px] text-[#A2B8AF] max-w-md leading-relaxed">
              Disclaimer: 11+ Compass is an independent informational guide. Admission policies, cut-offs, and catchment definitions change annually; always check official school and local authority websites.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 text-center text-[11px] text-[#A2B8AF]">
            &copy; 2026 11+ Compass. Built with care for UK families and children.
          </div>
        </div>
      </footer>
    </div>
  );
}
