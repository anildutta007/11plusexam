'use strict';
import React from 'react';
import { Calendar, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { EXAM_TIMELINE } from '@/data/grammarSchools';

export default function TimelineSection() {
  return (
    <section id="timeline-section" className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            11+ Master Calendar & Deadlines
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            When Does It All Happen? Critical Key Dates
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Missing grammar school registration is the #1 mistake parents make. Follow this step-by-step timeline through Year 5 and Year 6.
          </p>
        </div>

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
      </div>
    </section>
  );
}
