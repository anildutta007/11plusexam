'use strict';

import React, { useState } from 'react';
import { 
  BookCheck, 
  Clock, 
  Lightbulb, 
  Target, 
  Layers, 
  CheckCircle2, 
  Calendar, 
  BookmarkCheck, 
  Brain, 
  Timer, 
  FileSpreadsheet,
  AlertCircle
} from 'lucide-react';

export default function PreparationMasterySection() {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'subjects' | 'routine' | 'books'>('roadmap');

  return (
    <section id="preparation-mastery" className="py-14 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <BookCheck className="w-3.5 h-3.5" />
            Comprehensive 11+ Preparation Masterclass
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            How to Prepare Your Child: Step-by-Step Strategic Blueprint
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A sustainable, low-anxiety preparation system designed by UK educational specialists. Learn what to study, when to study, which books to buy, and how to build speed without burnout.
          </p>

          {/* Navigation Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'roadmap'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Calendar className="w-4 h-4" />
              12-Month Preparation Roadmap
            </button>

            <button
              onClick={() => setActiveTab('subjects')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'subjects'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Brain className="w-4 h-4" />
              Subject-by-Subject Syllabus Breakdown
            </button>

            <button
              onClick={() => setActiveTab('routine')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'routine'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Timer className="w-4 h-4" />
              Daily Study Routine & Timing Mastery
            </button>

            <button
              onClick={() => setActiveTab('books')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'books'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <BookmarkCheck className="w-4 h-4" />
              Recommended Books & Publishers
            </button>
          </div>
        </div>

        {/* TAB 1: 12-MONTH PREPARATION ROADMAP */}
        {activeTab === 'roadmap' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Phase 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-800 font-bold text-xs flex items-center justify-center mb-3">
                  01
                </span>
                <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block">September – December (Year 5)</span>
                <h3 className="text-base font-bold text-slate-900 mb-2">Phase 1: Diagnostic & Core Foundations</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Do NOT jump straight into timed test papers. Focus entirely on establishing curriculum fluency and emotional routine.
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Instant multiplication recall (tables 1 to 12 within 1.5 seconds).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Establish daily 20-minute reading habit with classical literature.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Introduce basic Verbal & Non-Verbal Reasoning logic concepts untimed.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                Pace: 20 mins/day, 4 days a week
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center mb-3">
                  02
                </span>
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">January – April (Year 5)</span>
                <h3 className="text-base font-bold text-slate-900 mb-2">Phase 2: Complete KS2 Syllabus Early</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Normal primary schools don&apos;t teach Year 6 maths until spring of Year 6, which is TOO LATE for September 11+ exams.
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Teach fractions, decimals, percentages, ratio & proportion, basic algebra.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Build vocabulary bank (&quot;Word Collector&quot; book for 10 new words/week).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Master spatial rotations, net cubes, and 21 standard VR question types.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                Pace: 30 mins/day, 4 days a week
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center mb-3">
                  03
                </span>
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">May – July (Year 5)</span>
                <h3 className="text-base font-bold text-slate-900 mb-2">Phase 3: Topic Practice & Registration</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Register on all target school/consortium websites and begin targeted 10-minute timed tests.
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>CRITICAL: Register for exam on school/consortium websites before deadlines.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Use 10-minute test workouts (Bond, CGP) to build time awareness.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Identify stubborn weak spots: geometry word problems, vocabulary in context.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                Pace: 35 mins/day, 4 days a week
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-800 font-bold text-xs flex items-center justify-center mb-3">
                  04
                </span>
                <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider block">August – September (Exam Time)</span>
                <h3 className="text-base font-bold text-slate-900 mb-2">Phase 4: Full Mocks & Tapering</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Simulate real examination conditions with full past papers, followed by deep mental rest prior to test day.
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Complete 1 full timed mock paper every Saturday morning in August.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Practice &quot;Skip & Guess&quot;: Never leave a question blank on multiple choice!</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Taper off 5 days before the exam: No cramming, early nights, light outdoors.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                Pace: Morning mocks + relaxed afternoons
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SUBJECT-BY-SUBJECT SYLLABUS BREAKDOWN */}
        {activeTab === 'subjects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mathematics */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs">Mathematics</span>
                <span className="text-xs text-slate-500 font-medium">Key Stage 2 Advanced & Logic</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Core High-Yield Maths Topics:</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                The exam tests arithmetic, rapid problem translation, and algebraic deduction under strict non-calculator conditions.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="block text-indigo-900 mb-1">Numbers & Arithmetic</strong>
                  Fractions (adding/dividing), decimals, percentages, LCM/HCF, prime numbers, BIDMAS order of operations.
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="block text-indigo-900 mb-1">Ratio & Word Problems</strong>
                  Sharing in ratio, proportional scaling, unit conversions (kg/g, litres/ml, km/miles), multi-step reasoning.
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="block text-indigo-900 mb-1">Geometry & Measures</strong>
                  Angles on parallel lines, triangles, area & perimeter of compound shapes, volume of cuboids, coordinate grids.
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="block text-indigo-900 mb-1">Statistics & Algebra</strong>
                  Mean, median, mode and range, interpreting line/pie charts, simple linear equations (e.g. 3x + 7 = 28).
                </div>
              </div>
            </div>

            {/* English & Creative Writing */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs">English & Comprehension</span>
                <span className="text-xs text-slate-500 font-medium">Inference & Advanced Literacy</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Core High-Yield English Skills:</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Comprehension passages in 11+ are frequently taken from 19th or early 20th-century classics (Charles Dickens, Frances Hodgson Burnett).
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="block text-emerald-900 mb-1">Deep Inference & Deduction</strong>
                  Reading between the lines to deduce character motive, emotional subtext, tone, and authorial intention.
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="block text-emerald-900 mb-1">Nuanced Vocabulary in Context</strong>
                  Selecting synonyms or antonyms for archaic or literary words (e.g. &apos;melancholy&apos;, &apos;indignant&apos;, &apos;austere&apos;).
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="block text-emerald-900 mb-1">SPaG Mastery</strong>
                  Active vs passive voice, subordinate clauses, semi-colons, apostrophes of omission vs possession, hyphenation.
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="block text-emerald-900 mb-1">Creative Writing (CSSE/SET)</strong>
                  For schools testing written essays: descriptive show-not-tell, sensory figurative language, structured plot arcs.
                </div>
              </div>
            </div>

            {/* Verbal Reasoning */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-lg bg-purple-100 text-purple-800 font-bold text-xs">Verbal Reasoning (VR)</span>
                <span className="text-xs text-slate-500 font-medium">Linguistic Logic & Speed</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">The 21 Classic GL VR Question Types:</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Assesses the processing speed of linguistic connections, word codes, and structured deduction.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span><strong>Letter Codes:</strong> Transferring words into numerical/alphabet shift codes (e.g. +3, -2).</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span><strong>Hidden Words & Word Extraction:</strong> Finding 4-letter words hidden across boundary words.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span><strong>Compound Words & Anagrams:</strong> Matching two independent roots to form single valid nouns.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span><strong>Logical Deductions:</strong> &quot;Alice is taller than Bob, Charlie is shorter than David... who is second?&quot;</span>
                </li>
              </ul>
            </div>

            {/* Non-Verbal & Spatial Reasoning */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 font-bold text-xs">Non-Verbal & Spatial (NVR)</span>
                <span className="text-xs text-slate-500 font-medium">Visual Matrix & 3D Deduction</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Core NVR Pattern Types:</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Crucially culture-fair: tests abstract reasoning using geometric symbols, rotational symmetry, and 3D folding.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span><strong>Rotations vs Reflections:</strong> Identifying 90°/180° turns versus mirror reflections.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span><strong>3D Cube Nets:</strong> Mentally folding a flat cross net into a 3D patterned cube.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span><strong>Matrices & Sequences:</strong> 3x3 grids where rows/columns change by shading, number of sides, or line shifts.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span><strong>Hidden Shapes & Odd-One-Out:</strong> Finding subtle rule breaks (e.g. prime number of dots).</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 3: DAILY STUDY ROUTINE & TIMING MASTERY */}
        {activeTab === 'routine' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="max-w-3xl mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                The Sustainable Weekly Routine: 30 Minutes &gt; 4-Hour Cramming
              </h3>
              <p className="text-sm text-slate-600">
                The biggest reason children fail or suffer panic attacks in the 11+ is parental over-drilling on weekends. Consistent, short, high-focus sessions preserve your child’s love for learning and build durable neuroplasticity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-xs text-indigo-700 block mb-1">Monday (25 Mins)</span>
                <strong className="text-xs text-slate-900 block mb-1">Maths Concept + Timed Drill</strong>
                <p className="text-[11px] text-slate-600">10 mins teaching fractions/ratio, 15 mins working through 10 targeted problems.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-xs text-indigo-700 block mb-1">Tuesday (25 Mins)</span>
                <strong className="text-xs text-slate-900 block mb-1">Vocabulary & Comprehension</strong>
                <p className="text-[11px] text-slate-600">1 short classic passage. Highlight 5 unfamiliar words and add them to their Word Collector.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-xs text-indigo-700 block mb-1">Wednesday (REST)</span>
                <strong className="text-xs text-slate-900 block mb-1">Sports, Art & Play</strong>
                <p className="text-[11px] text-slate-600">Strictly no 11+ study. Encourage physical exercise, swimming, or outdoor play to prevent mental fatigue.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-xs text-indigo-700 block mb-1">Thursday (25 Mins)</span>
                <strong className="text-xs text-slate-900 block mb-1">Reasoning (VR / NVR)</strong>
                <p className="text-[11px] text-slate-600">Alternate weeks between Verbal Reasoning code types and Non-Verbal 3D rotations.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-xs text-indigo-700 block mb-1">Saturday (45 Mins)</span>
                <strong className="text-xs text-slate-900 block mb-1">Timed Mini-Workout & Review</strong>
                <p className="text-[11px] text-slate-600">Sit one 20-minute timed paper. Spend 25 minutes gently dissecting mistakes together with positive reinforcement.</p>
              </div>
            </div>

            {/* Exam Timing Technique */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
              <h4 className="text-sm font-bold text-amber-950 mb-2 flex items-center gap-1.5">
                <Timer className="w-4 h-4 text-amber-700" />
                The &quot;Two-Pass&quot; Exam Technique: How to Beat the 50-Second Clock
              </h4>
              <p className="text-xs text-amber-900 leading-relaxed mb-3">
                In most GL Assessment and CEM tests, children have around <strong>45 to 50 seconds per question</strong>. Bright children often lose points because they spend 4 minutes battling one complex maths puzzle and run out of time to answer 10 easy questions at the end.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-amber-950">
                <div className="p-3 bg-white/80 rounded-xl border border-amber-200">
                  <strong>Pass 1: The Quick Harvest</strong>
                  <p className="text-[11px] text-slate-700 mt-1">Answer all questions you can solve immediately within 30 seconds. Build easy confidence and bank marks early.</p>
                </div>
                <div className="p-3 bg-white/80 rounded-xl border border-amber-200">
                  <strong>The 60-Second Skip Rule</strong>
                  <p className="text-[11px] text-slate-700 mt-1">If a question takes longer than 60 seconds and you feel stuck, circle the question number in pencil and immediately MOVE ON.</p>
                </div>
                <div className="p-3 bg-white/80 rounded-xl border border-amber-200">
                  <strong>Pass 2: The Return & Educated Guess</strong>
                  <p className="text-[11px] text-slate-700 mt-1">With 5 minutes remaining, revisit circled questions. If still unsure, eliminate 2 obviously wrong choices and make an educated guess.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: RECOMMENDED BOOKS & PUBLISHERS */}
        {activeTab === 'books' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1: Foundation (Year 4 - Early Year 5) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs">Stage 1: Ages 8–10</span>
                <h3 className="text-base font-bold text-slate-900 mt-2 mb-2">Foundation & Concept Building</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  For learning fundamental concepts without timing pressure.
                </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 block font-semibold">Bond 11+ Assessment Papers (Age 9-10)</strong>
                    <span className="text-slate-600 text-[11px]">The gold standard for graded topic introduction in Maths, English, VR and NVR.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 block font-semibold">Schofield & Sims Mental Arithmetic (Books 3 & 4)</strong>
                    <span className="text-slate-600 text-[11px]">Unmatched for drilling lightning rapid mental arithmetic and multi-step word problems.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 block font-semibold">First Past The Post (FPTP) Vocabulary</strong>
                    <span className="text-slate-600 text-[11px]">Excellent vocabulary cards and puzzle books created specifically for 11+ English.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tier 2: Core Practice (Mid Year 5) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-xs">Stage 2: Ages 10–11</span>
                <h3 className="text-base font-bold text-slate-900 mt-2 mb-2">Targeted Practice & 10-Min Drills</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Introducing time constraints and mixed question layouts.
                </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 block font-semibold">CGP 11+ 10-Minute Tests (with Answer Bumper)</strong>
                    <span className="text-slate-600 text-[11px]">Bite-sized daily workouts with fun puzzle endings that keep children motivated.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 block font-semibold">GL Assessment Practice Packs 1 & 2</strong>
                    <span className="text-slate-600 text-[11px]">Official practice packs written by the exam board that provides Kent, Bucks, and London tests.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 block font-semibold">AE Publications (Workbooks & Testbooks)</strong>
                    <span className="text-slate-600 text-[11px]">Extremely thorough step-by-step methodology for tackling tricky reasoning codes.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tier 3: Exam Readiness (Summer Year 5) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 font-bold text-xs">Stage 3: Exam Simulation</span>
                <h3 className="text-base font-bold text-slate-900 mt-2 mb-2">Full Mocks & Superselective Prep</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  For mastering the toughest consortium and bespoke school exams.
                </p>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 block font-semibold">Collins 11+ Practice Test Papers</strong>
                    <span className="text-slate-600 text-[11px]">Full-length realistic multiple-choice exam papers with authentic separate OMR answer sheets.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 block font-semibold">CSSE Official Past Paper Bound Packs</strong>
                    <span className="text-slate-600 text-[11px]">Official past examination papers with mark schemes directly from CSSE Essex.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 block font-semibold">Classic Literature Reading Canon</strong>
                    <span className="text-slate-600 text-[11px]">The Secret Garden, Treasure Island, Tom&apos;s Midnight Garden, Animal Farm, The Hobbit.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
