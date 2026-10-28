'use strict';

import React from 'react';
import { HelpCircle, Sparkles, CheckCircle, GraduationCap, Building2, Users } from 'lucide-react';

export default function WhatIs11PlusSection() {
  return (
    <section id="what-is-11plus" className="py-14 bg-[#F8F3E8] border-b border-[#E3D8C6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Butter Yellow Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F3DD87] text-[#1F5A45] text-xs font-bold mb-3 shadow-2xs border border-[#DEC465]">
            <HelpCircle className="w-3.5 h-3.5 text-[#E9774F]" />
            Essential Foundations for Parents
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F5A45] tracking-tight">
            What is the 11-Plus Exam & Why is it So Popular?
          </h2>
          <p className="mt-3 text-base text-[#4A5D55] leading-relaxed font-sans">
            Understanding the origins, modern mechanics, and the reasons why hundreds of thousands of UK families register their 10-year-olds for this selective entrance test every year.
          </p>
        </div>

        {/* 2-Column Core Explainer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: What is the 11+? (Soft Beige container with Forest Green accents) */}
          <div className="bg-[#EFE8DA] border border-[#DDD0BC] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#1F5A45] text-white flex items-center justify-center font-serif font-bold text-lg mb-4 shadow-xs">
                11+
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1F5A45] mb-3">
                What Exactly is the 11-Plus (11+)?
              </h3>
              <p className="text-sm text-[#3E4E47] leading-relaxed mb-4">
                The 11-plus is a standardised academic selection test sat by children in England in <strong>September of Year 6</strong> (aged 10 or 11). Its sole function is to assess whether a pupil qualifies for admission into state-funded <strong>grammar schools</strong>.
              </p>
              <p className="text-sm text-[#3E4E47] leading-relaxed mb-4">
                Established following the Education Act of 1944 (the &quot;Tripartite System&quot;), state education was originally divided between grammar schools, secondary moderns, and technical schools. In the 1960s and 70s, most of England transitioned to non-selective comprehensive schools. Today, only <strong>163 state grammar schools</strong> remain in select English local authorities (such as Kent, Bucks, Lincolnshire, Essex, Gloucestershire, and pockets of London and Birmingham).
              </p>
            </div>

            {/* Pale Sage Callout */}
            <div className="p-4 rounded-2xl bg-[#E2ECE5] border border-[#BFD4C8] text-xs text-[#1F5A45] space-y-1.5 mt-4">
              <div className="flex items-center gap-2 font-bold text-sm">
                <CheckCircle className="w-4 h-4 text-[#1F5A45]" />
                <span>100% Free Tuition — Funded by the State</span>
              </div>
              <p className="text-[#3E4E47] text-[11px] leading-relaxed">
                Grammar schools are not private fee-paying institutions. They receive taxpayer funding and charge £0 in tuition fees, offering academic outcomes comparable to Britain&apos;s leading independent day schools at zero cost.
              </p>
            </div>
          </div>

          {/* Card 2: Why is it So Incredibly Popular? (Forest Green container with Coral highlights) */}
          <div className="bg-[#1F5A45] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E9774F]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-11 h-11 rounded-2xl bg-[#F3DD87] text-[#1F5A45] flex items-center justify-center font-bold text-lg mb-4 shadow-xs">
                <Sparkles className="w-5 h-5 text-[#E9774F]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#F8F3E8] mb-3">
                Why is the 11-Plus in Such High Demand?
              </h3>
              <p className="text-sm text-[#E2ECE5] leading-relaxed mb-5">
                Competition for grammar school places has surged dramatically over the past two decades. In areas like North London, Sutton, and Trafford, over <strong>4,000 applicants</strong> routinely compete for fewer than 180 seats (a ratio often exceeding 22 to 1).
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#164233]/70 border border-white/10">
                  <strong className="text-[#F3DD87] block mb-0.5 text-xs font-serif">1. Unmatched Academic Results & Oxbridge Offers</strong>
                  <span className="text-[#E2ECE5] leading-relaxed">
                    Grammars like QE Boys, Henrietta Barnett, and Wilson&apos;s regularly outperform Britain’s most elite £45,000/year private schools in GCSE and A-Level league tables, sending 30–50+ pupils to Oxford and Cambridge annually.
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#164233]/70 border border-white/10">
                  <strong className="text-[#F3DD87] block mb-0.5 text-xs font-serif">2. Soaring Private School Fees & 20% VAT</strong>
                  <span className="text-[#E2ECE5] leading-relaxed">
                    With independent day school fees rising to £20,000–£30,000 per year, thousands of middle-class families now see state grammar schools as the ultimate high-aspiration education path.
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#164233]/70 border border-white/10">
                  <strong className="text-[#F3DD87] block mb-0.5 text-xs font-serif">3. Exceptional Peer Environment & High Expectations</strong>
                  <span className="text-[#E2ECE5] leading-relaxed">
                    Classrooms are filled with academically driven children who enjoy theoretical learning, resulting in calm, fast-paced lessons with virtually zero disruptive classroom behaviour.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of What Parents Need to Understand (Alternating Soft Beige Cards with Coral Badges) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl border border-[#DDD0BC] bg-[#EFE8DA]">
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#E9774F] text-white uppercase tracking-wider mb-2">
              Pillar 01
            </span>
            <h4 className="text-base font-serif font-bold text-[#1F5A45] mb-1.5">Standardised Scores (SAS)</h4>
            <p className="text-xs text-[#4A5D55] leading-relaxed font-sans">
              Scores are adjusted based on a child&apos;s exact age down to months and days. Summer-born children (born in July/August) are not penalized for competing against older autumn-born classmates.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#DDD0BC] bg-[#EFE8DA]">
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#E9774F] text-white uppercase tracking-wider mb-2">
              Pillar 02
            </span>
            <h4 className="text-base font-serif font-bold text-[#1F5A45] mb-1.5">Superselective vs Catchment</h4>
            <p className="text-xs text-[#4A5D55] leading-relaxed font-sans">
              Some schools (QE Boys, St Olave&apos;s, Pate&apos;s) take purely the top-ranked scores nationwide. Others (Bucks, Bexley, Tiffin) enforce strict residential distance rules once the qualifying pass score is achieved.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#DDD0BC] bg-[#EFE8DA]">
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#E9774F] text-white uppercase tracking-wider mb-2">
              Pillar 03
            </span>
            <h4 className="text-base font-serif font-bold text-[#1F5A45] mb-1.5">Separate Registration</h4>
            <p className="text-xs text-[#4A5D55] leading-relaxed font-sans">
              Registering on your local council form (CAF) in October does NOT register your child for the exam. You must register directly on the grammar school or consortium website in May–June of Year 5.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#DDD0BC] bg-[#EFE8DA]">
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#E9774F] text-white uppercase tracking-wider mb-2">
              Pillar 04
            </span>
            <h4 className="text-base font-serif font-bold text-[#1F5A45] mb-1.5">A Learning Journey</h4>
            <p className="text-xs text-[#4A5D55] leading-relaxed font-sans">
              80% to 85% of exam candidates will not be offered a seat due to finite spaces. Preparing for 11+ builds formidable literacy and arithmetic resilience regardless of the eventual school offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
