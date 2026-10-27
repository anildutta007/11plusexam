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
import { Sparkles, MapPin, Compass, BookOpen } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('what-is-11plus');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar with Tab Controller */}
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-900 via-indigo-950 to-slate-900 text-white py-12 sm:py-16">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-200 text-xs sm:text-sm font-medium mb-5">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>The Complete 2026/2027 UK Grammar School Roadmap</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Clear Guidance for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-rose-300">Worried UK Parents</span> Navigating the 11-Plus
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From postcode catchment radii and historical admission cut-off scores, to preparation roadmaps and critical key dates.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold">
            <button
              onClick={() => setActiveTab('postcode-finder')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4" />
              Postcode & Catchment Finder
            </button>

            <button
              onClick={() => setActiveTab('how-to-prepare')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-all"
            >
              <BookOpen className="w-4 h-4 text-indigo-300" />
              How to Prepare Guide
            </button>
          </div>

          {/* Quick Stats Trust Badges */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6 border-t border-white/10 text-left">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="block text-2xl font-bold text-white">163</span>
              <span className="text-xs text-slate-400">UK Grammar Schools</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="block text-2xl font-bold text-indigo-300">100% Free</span>
              <span className="text-xs text-slate-400">State Tuition Funding</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="block text-2xl font-bold text-amber-300">121+ / Top Rank</span>
              <span className="text-xs text-slate-400">Historical Admission Scores</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="block text-2xl font-bold text-emerald-300">10 Regions</span>
              <span className="text-xs text-slate-400">National Grammar Enclaves</span>
            </div>
          </div>
        </div>
      </section>

      {/* Active Tab Sub-header & Quick Selector */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Viewing Section:
            </span>
            <span className="text-xs sm:text-sm font-bold text-indigo-900 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
              {TABS.find((t) => t.id === activeTab)?.label}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 hidden sm:inline">Jump to:</span>
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as TabId)}
              className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-800"
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

      {/* Main Tab Content - ONLY THE RELEVANT ACTIVE TAB IS SHOWN */}
      <main className="flex-1 min-h-[600px]">
        {activeTab === 'what-is-11plus' && <WhatIs11PlusSection />}
        {activeTab === 'uk-map' && <UKGrammarMap />}
        {activeTab === 'postcode-finder' && <PostcodeFinder />}
        {activeTab === 'how-to-prepare' && <PreparationMasterySection />}
        {activeTab === 'school-directory' && <SchoolsTable />}
        {activeTab === 'key-dates' && <TimelineSection />}
        {activeTab === 'sample-papers' && <SamplePapersSection />}
      </main>

      {/* Next/Prev Navigation Footer */}
      <div className="bg-slate-100 border-t border-slate-200 py-6">
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-xs"
                  >
                    ← Previous: {prevTab.label}
                  </button>
                ) : (
                  <div />
                )}

                {nextTab ? (
                  <button
                    onClick={() => setActiveTab(nextTab.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-xs"
                  >
                    Next: {nextTab.label} →
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveTab('what-is-11plus')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 transition-colors"
                  >
                    ↺ Back to Start
                  </button>
                )}
              </>
            );
          })()}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Compass className="w-5 h-5 text-indigo-400" />
              11+ Compass UK &middot; Independent Guidance for Parents
            </div>
            <p className="text-center md:text-right text-[11px] text-slate-500 max-w-md">
              Disclaimer: 11+ Compass is an independent informational guide. Admission policies, cut-offs, and catchment definitions change annually; always check official school and local authority websites.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-800 text-center text-[11px] text-slate-600">
            &copy; 2026 11+ Compass. Built with care for UK families and children.
          </div>
        </div>
      </footer>
    </div>
  );
}
