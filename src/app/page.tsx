'use client';

import Navbar from '@/components/Navbar';
import PostcodeFinder from '@/components/PostcodeFinder';
import SchoolsTable from '@/components/SchoolsTable';
import TimelineSection from '@/components/TimelineSection';
import PsychologySection from '@/components/PsychologySection';
import SamplePapersSection from '@/components/SamplePapersSection';
import { Compass, Sparkles, MapPin, CheckCircle, ShieldAlert, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-900 via-indigo-950 to-slate-900 text-white py-16 sm:py-24">
        {/* Decorative background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-200 text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>The Complete 2026/2027 UK Grammar School Roadmap</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Clear Guidance for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-rose-300">Worried UK Parents</span> Navigating the 11-Plus
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From postcode catchment radii and historical admission cut-off scores, to managing intense test anxiety and handling results day with empathy.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold">
            <a
              href="#postcode-finder"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4" />
              Check Postcode Catchment
            </a>

            <a
              href="#psychology-section"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-all"
            >
              <Heart className="w-4 h-4 text-rose-400" />
              Child Well-being Guide
            </a>
          </div>

          {/* Quick Stats Trust Badges */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10 text-left">
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
              <span className="block text-2xl font-bold text-rose-300">Empathetic</span>
              <span className="text-xs text-slate-400">Child-First Wellbeing Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main App Components */}
      <main className="flex-1">
        <PostcodeFinder />
        <SchoolsTable />
        <TimelineSection />
        <PsychologySection />
        <SamplePapersSection />
      </main>

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
