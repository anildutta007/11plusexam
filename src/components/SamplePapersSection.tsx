'use strict';
import React, { useState } from 'react';
import { FileText, Download, CheckCircle, ExternalLink } from 'lucide-react';
import { SAMPLE_PAPERS } from '@/data/grammarSchools';

export default function SamplePapersSection() {
  const [selectedSubject, setSelectedSubject] = useState('All');

  const subjects = ['All', 'Mathematics', 'English', 'Verbal Reasoning', 'Non-Verbal Reasoning', 'Maths & English'];

  const filteredPapers = SAMPLE_PAPERS.filter(
    (p) => selectedSubject === 'All' || p.subject === selectedSubject || p.subject.includes(selectedSubject)
  );

  return (
    <section id="papers-section" className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-2">
              <FileText className="w-3.5 h-3.5" />
              Free Practice Papers & Consortia Tests
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Sample Exam Papers & Familiarisation Materials
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-2xl">
              Download and review official sample examination papers across GL Assessment, CSSE Essex, Sutton SET, and Kent tests.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-600">Subject:</span>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="text-xs border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-800 bg-white"
            >
              {subjects.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPapers.map((paper, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-50 text-indigo-700">
                    {paper.board}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      paper.difficulty === 'Challenging'
                        ? 'bg-rose-50 text-rose-700'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {paper.difficulty}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                  {paper.title}
                </h3>
                <p className="text-xs text-slate-500 mb-3">{paper.subject}</p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {paper.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  {paper.source}
                </span>
                <a
                  href={paper.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Access Paper
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
