'use client';

import React, { useState } from 'react';
import Navbar, { TabId, TABS } from '@/components/Navbar';
import WhatIs11PlusSection from '@/components/WhatIs11PlusSection';
import UKGrammarMap from '@/components/UKGrammarMap';
import PostcodeFinder from '@/components/PostcodeFinder';
import PreparationMasterySection from '@/components/PreparationMasterySection';
import SchoolsTable from '@/components/SchoolsTable';
import TimelineSection from '@/components/TimelineSection';
import SamplePapersSection from '@/components/SamplePapersSection';
import { Sparkles, MapPin, Compass, BookOpen, CheckCircle } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('what-is-11plus');

  return (
    <div className="min-h-screen bg-[#F8F3E8] text-[#1F2D28] flex flex-col font-sans selection:bg-[#F3DD87] selection:text-[#1F5A45]">
      {/* Top Navbar with Tab Controller */}
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Hero Section styled with Forest Green, Butter Yellow badges, and Coral CTAs */}
      <section className="relative overflow-hidden bg-[#1F5A45] text-white py-14 sm:py-20 border-b-4 border-[#F3DD87]">
        {/* Subtle warm ambient accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E9774F]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F3DD87]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Butter Yellow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3DD87] text-[#1F5A45] text-xs sm:text-sm font-bold tracking-wide mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#E9774F]" />
            <span>The Calm 2026/2027 UK Grammar School Companion</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight max-w-4xl mx-auto leading-tight text-[#F8F3E8]">
            Clear Guidance for <span className="text-[#F3DD87] underline decoration-[#E9774F] decoration-wavy decoration-2">Worried UK Parents</span> Navigating the 11-Plus
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#E2ECE5] max-w-2xl mx-auto leading-relaxed font-sans">
            A warm, paper-friendly space covering postcode catchment radii, cut-off admission scores, school housing benchmarks, and balanced preparation roadmaps.
          </p>

          {/* Action Buttons: Coral for "Start here" / "Check Postcode", and Pale Sage outline */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 text-xs sm:text-sm font-bold font-sans">
            <button
              onClick={() => setActiveTab('postcode-finder')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#E9774F] hover:bg-[#D7653D] text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 tracking-wide"
            >
              <MapPin className="w-4 h-4 text-[#F3DD87]" />
              Start Here: Postcode & Catchment
            </button>

            <button
              onClick={() => setActiveTab('how-to-prepare')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#E2ECE5] hover:bg-white text-[#1F5A45] font-bold shadow-xs transition-all"
            >
              <BookOpen className="w-4 h-4 text-[#1F5A45]" />
              How to Prepare Guide
            </button>
          </div>

          {/* Facts Band with Soft Beige & Forest Green trust points */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto pt-8 border-t border-white/20 text-left">
            <div className="p-3.5 bg-[#164233]/70 rounded-2xl border border-white/10 backdrop-blur-xs">
              <span className="block text-2xl font-serif font-bold text-[#F3DD87]">163</span>
              <span className="text-xs text-[#E2ECE5]">UK Grammar Schools</span>
            </div>
            <div className="p-3.5 bg-[#164233]/70 rounded-2xl border border-white/10 backdrop-blur-xs">
              <span className="block text-2xl font-serif font-bold text-[#F8F3E8]">100% Free</span>
              <span className="text-xs text-[#E2ECE5]">State Tuition Funding</span>
            </div>
            <div className="p-3.5 bg-[#164233]/70 rounded-2xl border border-white/10 backdrop-blur-xs">
              <span className="block text-2xl font-serif font-bold text-[#E9774F]">121+ / Rank</span>
              <span className="text-xs text-[#E2ECE5]">Historical Admission Scores</span>
            </div>
            <div className="p-3.5 bg-[#164233]/70 rounded-2xl border border-white/10 backdrop-blur-xs">
              <span className="block text-2xl font-serif font-bold text-[#F3DD87]">10 Regions</span>
              <span className="text-xs text-[#E2ECE5]">National Selective Enclaves</span>
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
