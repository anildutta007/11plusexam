'use strict';
import React, { useState } from 'react';
import { HeartHandshake, ShieldCheck, Smile, HelpCircle, ChevronDown, ChevronUp, AlertCircle, BookOpen } from 'lucide-react';
import { PARENT_GUIDE_CONTENT } from '@/data/parentGuideContent';

export default function PsychologySection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { whatIs11Plus, whatIsInExam, preparationPlaybook, psychologyAndWellbeing, faqs } = PARENT_GUIDE_CONTENT;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="psychology-section" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            Mental Health & Parental Guidance
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            The Psychology of 11+: Protecting Your Child and Handling Failure
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Grammar school preparation can place extraordinary pressure on young children and parents alike. Here is compassionate, evidence-based guidance on how to navigate this journey with warmth and perspective.
          </p>
        </div>

        {/* 1. What is the Exam & What's In It */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* What is it */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-bold text-slate-900">{whatIs11Plus.heading}</h3>
            </div>
            {whatIs11Plus.paragraphs.map((p, i) => (
              <p key={i} className="text-xs text-slate-700 leading-relaxed mb-3">
                {p}
              </p>
            ))}
            <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
              {whatIs11Plus.keyPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What is tested */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-bold text-slate-900">{whatIsInExam.heading}</h3>
            </div>
            <p className="text-xs text-slate-600 mb-4">{whatIsInExam.intro}</p>
            <div className="space-y-3">
              {whatIsInExam.subjects.map((sub, i) => (
                <div key={i} className="p-3 bg-white rounded-xl border border-slate-200">
                  <h4 className="text-xs font-bold text-indigo-900 mb-1">{sub.name}</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{sub.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Preparation Playbook */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-6">
            {preparationPlaybook.heading}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {preparationPlaybook.principles.map((pr, i) => (
              <div key={i} className="p-5 rounded-2xl bg-indigo-50/40 border border-indigo-100 flex flex-col justify-between">
                <div>
                  <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                    0{i + 1}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{pr.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{pr.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Handling Failure & Child Anxiety (Crucial User Requirement) */}
        <div className="bg-gradient-to-br from-rose-50 via-white to-orange-50 border-2 border-rose-200 rounded-3xl p-6 sm:p-10 mb-14 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold mb-2">
              <Smile className="w-3.5 h-3.5" />
              Critical Support For Worried Parents
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {psychologyAndWellbeing.handlingResultsDay.title}
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Over 75% to 85% of children who sit the 11-plus do not secure a grammar school seat purely due to finite places, NOT because they are not bright or capable. How you frame this outcome will impact your child&apos;s academic confidence for a decade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* What to DO */}
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-emerald-900 mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                What to DO & Say:
              </h4>
              <ul className="space-y-2.5 text-xs text-emerald-950">
                {psychologyAndWellbeing.handlingResultsDay.scriptDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What NOT to DO */}
            <div className="bg-rose-50/80 border border-rose-200 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-rose-900 mb-3 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-rose-700" />
                What NOT to DO (Traps to Avoid):
              </h4>
              <ul className="space-y-2.5 text-xs text-rose-950">
                {psychologyAndWellbeing.handlingResultsDay.scriptDont.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">✕</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Psychological Mindsets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {psychologyAndWellbeing.mindsetShifts.map((shift, i) => (
              <div key={i} className="bg-white/90 p-4 rounded-xl border border-slate-200 shadow-xs">
                <h5 className="font-bold text-xs text-slate-900 mb-1.5">{shift.concept}</h5>
                <p className="text-[11px] text-slate-600 leading-relaxed">{shift.advice}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
              Frequently Asked Questions from UK Parents
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-xs sm:text-sm text-slate-900">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
