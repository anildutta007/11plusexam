'use client';

import React, { useState } from 'react';
import { Calendar, LayoutGrid, ListFilter, AlertTriangle, Clock, CheckCircle2, BellRing, Sparkles } from 'lucide-react';
import { EXAM_TIMELINE } from '@/data/grammarSchools';
import { UPCOMING_YEAR_CALENDAR, CalendarMonth } from '@/data/calendarDates';

export default function TimelineSection() {
  const [viewMode, setViewMode] = useState<'calendar' | 'cards'>('calendar');
  const [activeSeason, setActiveSeason] = useState<string>('All');

  const seasons = ['All', 'Spring', 'Summer', 'Autumn', 'Winter'];

  const filteredCalendar = UPCOMING_YEAR_CALENDAR.filter((item) => {
    if (activeSeason === 'All') return true;
    return item.season === activeSeason;
  });

  return (
    <section id="timeline-section" className="py-12 bg-[#F8F3E8] border-y border-[#EFE8DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E2ECE5] border border-[#1F5A45]/20 text-[#1F5A45] text-xs font-bold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            11+ Master Calendar & Deadlines
          </div>
          <h2 className="text-3xl font-extrabold text-[#1F5A45] tracking-tight sm:text-4xl font-serif">
            When Does It All Happen? Critical Key Dates
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            Missing grammar school registration is the #1 mistake parents make. Follow this step-by-step timeline through Year 5 and Year 6.
          </p>

          {/* View Toggle Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex p-1 rounded-xl bg-[#EFE8DA] border border-[#C7BAA7]/40">
              <button
                onClick={() => setViewMode('calendar')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'calendar'
                    ? 'bg-[#1F5A45] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[#1F5A45]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                Monthly Calendar (2026 / 2027)
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'cards'
                    ? 'bg-[#1F5A45] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[#1F5A45]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                6-Stage Overview Cards
              </button>
            </div>

            {/* Season Filter (only in calendar mode) */}
            {viewMode === 'calendar' && (
              <div className="flex items-center gap-1 text-xs">
                {seasons.map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveSeason(s)}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                      activeSeason === s
                        ? 'bg-[#E9774F] text-white'
                        : 'bg-white text-slate-700 border border-[#EFE8DA] hover:bg-[#E2ECE5]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* View 1: Detailed Upcoming Year Calendar */}
        {viewMode === 'calendar' ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCalendar.map((monthData, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border-2 shadow-xs p-5 flex flex-col justify-between hover:shadow-md transition-shadow ${monthData.highlightColor}`}
                >
                  <div>
                    {/* Month Banner */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-extrabold text-slate-900">
                            {monthData.month}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-md font-bold bg-slate-900 text-white">
                            {monthData.year}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-500 block">
                          {monthData.schoolYear}
                        </span>
                      </div>

                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-700 border border-slate-300">
                        {monthData.season}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 font-medium italic mb-4">
                      &quot;{monthData.summary}&quot;
                    </p>

                    {/* Events in Month */}
                    <div className="space-y-3">
                      {monthData.events.map((ev, eventIdx) => (
                        <div
                          key={eventIdx}
                          className={`p-3 rounded-xl border text-xs ${
                            ev.urgent
                              ? 'bg-rose-50/90 border-rose-200 text-rose-950'
                              : ev.type === 'results'
                              ? 'bg-purple-50/80 border-purple-200 text-purple-950'
                              : ev.type === 'exam'
                              ? 'bg-amber-50/80 border-amber-200 text-amber-950'
                              : 'bg-white border-slate-200 text-slate-800'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="font-bold text-[11px] uppercase tracking-wider text-slate-500">
                              {ev.day}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                                ev.urgent
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {ev.tag}
                            </span>
                          </div>
                          <h4 className="font-bold text-slate-900 mb-1 leading-snug">
                            {ev.title}
                          </h4>
                          <p className="text-[11px] leading-relaxed text-slate-600">
                            {ev.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>11+ Master Calendar</span>
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Calendar Alert Note */}
            <div className="max-w-2xl mx-auto p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Crucial Note for Year 5 Parents:</strong> Registration deadlines are completely non-negotiable. If you fail to register on the grammar school or consortium website by early July, your child will not be permitted to sit the exam in September, regardless of their academic potential.
              </div>
            </div>
          </div>
        ) : (
          /* View 2: Original 6-Stage Overview Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXAM_TIMELINE.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm relative flex flex-col justify-between hover:border-indigo-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-xs">
                      <Clock className="w-3 h-3" />
                      {item.period}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.stage}
                  </h3>

                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    {item.actionRequired}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900">
                  <div className="flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>Parent Tip:</strong> {item.parentTips}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
