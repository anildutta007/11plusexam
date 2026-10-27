'use strict';

import React from 'react';
import { HelpCircle, TrendingUp, Sparkles, Award, ShieldAlert, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export default function WhatIs11PlusSection() {
  return (
    <section id="what-is-11plus" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Essential Foundations for Parents
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            What is the 11-Plus Exam & Why is it So Popular?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Understanding the origins, modern mechanics, and the reasons why hundreds of thousands of UK families register their 10-year-olds for this selective entrance test every year.
          </p>
        </div>

        {/* 2-Column Core Explainer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: What is the 11+? */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
                11+
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                What Exactly is the 11-Plus (11+)?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                The 11-plus is a standardised academic selection test sat by children in England in <strong>September of Year 6</strong> (aged 10 or 11). Its sole function is to assess whether a pupil qualifies for admission into state-funded <strong>grammar schools</strong>.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Established following the Education Act of 1944 (the &quot;Tripartite System&quot;), state education was originally divided between grammar schools, secondary moderns, and technical schools. In the 1960s and 70s, most of England transitioned to non-selective comprehensive schools. Today, only <strong>163 state grammar schools</strong> remain in select English local authorities (such as Kent, Bucks, Lincolnshire, Essex, Gloucestershire, and pockets of London and Birmingham).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 space-y-2 mt-4">
              <div className="flex items-center gap-2 font-bold text-indigo-900">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>100% Free Tuition — Funded by the State</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Grammar schools are not private fee-paying institutions. They receive taxpayer funding and charge £0 in tuition fees, offering private-school-calibre academic outcomes at no cost to parents.
              </p>
            </div>
          </div>

          {/* Card 2: Why is it So Incredibly Popular? */}
          <div className="bg-indigo-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Why is the 11-Plus in Such High Demand?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Competition for grammar school places has surged dramatically over the past two decades. In areas like North London and Sutton, over <strong>4,000 applicants</strong> compete for fewer than 180 seats (a ratio often exceeding 22 to 1).
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <strong className="text-amber-300 block mb-0.5">1. Unmatched Academic Results & Oxbridge Offers</strong>
                  <span className="text-slate-300">
                    Grammars like QE Boys, Henrietta Barnett, and Wilson&apos;s regularly outperform Britain’s most elite £45,000/year private schools in GCSE and A-Level league tables, sending 30–50+ pupils to Oxford and Cambridge annually.
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <strong className="text-amber-300 block mb-0.5">2. Soaring Private School Fees & 20% VAT</strong>
                  <span className="text-slate-300">
                    With independent day school fees rising to £20,000–£30,000 per year, thousands of middle-class families now see state grammar schools as the ultimate high-aspiration education path.
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <strong className="text-amber-300 block mb-0.5">3. Exceptional Peer Environment & High Expectations</strong>
                  <span className="text-slate-300">
                    Classrooms are filled with academically driven children who enjoy theoretical learning, resulting in calm, fast-paced lessons with virtually zero disruptive classroom behaviour.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of What Parents Need to Understand */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">Pillar 1</span>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Standardised Scores (SAS)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Scores are adjusted based on a child&apos;s exact age down to months and days. Summer-born children (born in July/August) are not penalized for competing against older autumn-born classmates.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">Pillar 2</span>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Superselective vs Catchment</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Some schools (QE Boys, St Olave&apos;s, Pate&apos;s) take purely the top-ranked scores nationwide. Others (Bucks, Bexley, Tiffin) enforce strict residential distance rules once the qualifying pass score is achieved.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">Pillar 3</span>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Separate Registration</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Registering on your local council form (CAF) in October does NOT register your child for the exam. You must register directly on the grammar school or consortium website in May–June of Year 5.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">Pillar 4</span>
            <h4 className="text-sm font-bold text-slate-900 mb-1">No Child Defines Their Worth</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              80% to 85% of exam candidates will not be offered a seat due to finite spaces. Preparing for 11+ builds formidable literacy and arithmetic resilience regardless of the eventual school offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
