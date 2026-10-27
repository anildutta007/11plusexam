export interface CalendarMonthEvent {
  day: string;
  title: string;
  type: 'deadline' | 'exam' | 'results' | 'registration' | 'action';
  description: string;
  tag: string;
  urgent?: boolean;
}

export interface CalendarMonth {
  month: string;
  year: string;
  schoolYear: string;
  season: string;
  summary: string;
  highlightColor: string;
  events: CalendarMonthEvent[];
}

export const UPCOMING_YEAR_CALENDAR: CalendarMonth[] = [
  {
    month: 'April',
    year: '2026',
    schoolYear: 'Year 5 (Spring Term)',
    season: 'Spring',
    summary: 'Consortium registration portals begin opening across England.',
    highlightColor: 'border-blue-400 bg-blue-50/50',
    events: [
      {
        day: 'Mid-Late April',
        title: 'Trafford & Birmingham Registration Opens',
        type: 'registration',
        description: 'Online candidate registration portals go live. Parents must submit child passport photo and personal details.',
        tag: 'Registration'
      },
      {
        day: 'All Month',
        title: 'Syllabus Review & Foundation Mock Assessment',
        type: 'action',
        description: 'Conduct a baseline relaxed mock test at home to identify maths gaps (e.g. fractions, percentages, basic algebra).',
        tag: 'Preparation'
      }
    ]
  },
  {
    month: 'May',
    year: '2026',
    schoolYear: 'Year 5 (Summer Term)',
    season: 'Spring',
    summary: 'Major registration wave: London, Kent, Essex (CSSE), Bucks & Sutton SET.',
    highlightColor: 'border-indigo-400 bg-indigo-50/50',
    events: [
      {
        day: '1st - 15th May',
        title: 'CSSE Essex, Sutton SET & Bexley Portals Open',
        type: 'registration',
        description: 'Register for Sutton Selective Eligibility Test (SET), CSSE Essex and Bexley selection tests.',
        tag: 'Registration'
      },
      {
        day: 'End of May',
        title: 'SEN / Access Arrangements Deadline',
        type: 'deadline',
        description: 'If your child requires extra time (e.g. dyslexia, ADHD, medical accommodations), full EHCP/medical evidence must be submitted now.',
        tag: 'Strict Deadline',
        urgent: true
      }
    ]
  },
  {
    month: 'June',
    year: '2026',
    schoolYear: 'Year 5 (Summer Term)',
    season: 'Summer',
    summary: 'Kent Test and Buckinghamshire registration peak. Registrations start closing!',
    highlightColor: 'border-amber-400 bg-amber-50/50',
    events: [
      {
        day: '1st June',
        title: 'Kent Test Online Registration Opens',
        type: 'registration',
        description: 'Kent County Council opens the portal for all Kent grammar school candidates.',
        tag: 'Registration'
      },
      {
        day: 'Late June',
        title: 'First Wave Registration DEADLINES',
        type: 'deadline',
        description: 'Trafford, Birmingham and several West Midlands portals CLOSE. Missing this means your child cannot sit the test.',
        tag: 'Strict Deadline',
        urgent: true
      }
    ]
  },
  {
    month: 'July',
    year: '2026',
    schoolYear: 'Year 5 (End of Summer Term)',
    season: 'Summer',
    summary: 'Final registration cut-offs for London, Kent and Essex. Summer preparation plan begins.',
    highlightColor: 'border-rose-400 bg-rose-50/50',
    events: [
      {
        day: '1st July 23:59',
        title: 'Kent Test & Bexley Registration CLOSES',
        type: 'deadline',
        description: 'Strict absolute cutoff. Late registrations are virtually never accepted by Kent or Bexley councils.',
        tag: 'Strict Deadline',
        urgent: true
      },
      {
        day: 'Mid July',
        title: 'CSSE Essex & Sutton SET Registration Closes',
        type: 'deadline',
        description: 'Ensure test venue choices and verification confirmations have arrived in your inbox.',
        tag: 'Deadline'
      },
      {
        day: 'Late July',
        title: 'Start of Summer Holiday Study Routine',
        type: 'action',
        description: 'Keep sessions short: 30-40 mins daily in the morning, leaving afternoons completely free for active play, swimming, and mental rest.',
        tag: 'Parent Routine'
      }
    ]
  },
  {
    month: 'August',
    year: '2026',
    schoolYear: 'Summer Holidays (Transition to Year 6)',
    season: 'Summer',
    summary: 'Timed exam technique, timed mock papers, test day venue dry-runs, and emotional de-stressing.',
    highlightColor: 'border-emerald-400 bg-emerald-50/50',
    events: [
      {
        day: 'Early-Mid August',
        title: 'Full Timed Mock Papers (GL & CEM format)',
        type: 'action',
        description: 'Practice working under timed conditions (approx 45-50 seconds per question). Focus heavily on skipping difficult questions.',
        tag: 'Mock Practice'
      },
      {
        day: 'Late August',
        title: 'Dry-run Test Journey & Venue Logistics',
        type: 'action',
        description: 'Plan travel routes, parking, and transit times to test centres to avoid morning traffic panic on exam day.',
        tag: 'Logistics'
      },
      {
        day: '25th - 31st August',
        title: 'Tapering Down & Mental Reset',
        type: 'action',
        description: 'Cease intense testing. Prioritise regular 9:00 PM sleep, hydration, screen reduction, and confidence boosting.',
        tag: 'Well-being'
      }
    ]
  },
  {
    month: 'September',
    year: '2026',
    schoolYear: 'Year 6 (Autumn Term)',
    season: 'Autumn',
    summary: 'THE EXAM WEEKS. Children sit 11+ entrance examinations across England.',
    highlightColor: 'border-red-500 bg-red-50/50',
    events: [
      {
        day: '1st - 2nd Week',
        title: 'Kent Test & Bexley Selection Exams',
        type: 'exam',
        description: 'Children in Kent primary schools sit tests during school weekdays; out-of-county children sit on designated Saturdays.',
        tag: 'Exam Sitting',
        urgent: true
      },
      {
        day: '2nd - 3rd Week',
        title: 'Bucks, Sutton SET Stage 1, CSSE Essex Exams',
        type: 'exam',
        description: 'Major weekend test sessions. Maintain zero-pressure home environment and focus on praise for effort.',
        tag: 'Exam Sitting',
        urgent: true
      },
      {
        day: 'Late September',
        title: 'QE Boys Barnet & Henrietta Barnett Round 1',
        type: 'exam',
        description: 'Superselective entrance tests in North London.',
        tag: 'Exam Sitting'
      }
    ]
  },
  {
    month: 'October',
    year: '2026',
    schoolYear: 'Year 6 (Autumn Term)',
    season: 'Autumn',
    summary: '11+ Results released, followed by the nationwide secondary school CAF deadline.',
    highlightColor: 'border-purple-400 bg-purple-50/50',
    events: [
      {
        day: 'Mid October (14th - 18th)',
        title: 'Official 11+ Results & Score Letters Released',
        type: 'results',
        description: 'Parents receive standardized scores (e.g. Kent 332+ pass mark, Bucks 121 STTS, CSSE ranks). Check scores against historical cut-offs.',
        tag: 'Results Day',
        urgent: true
      },
      {
        day: 'Mid-Late October',
        title: 'Sutton Stage 2 & HBS Round 2 Written Papers',
        type: 'exam',
        description: 'Second stage exams for shortlisted candidates who met the Stage 1 threshold.',
        tag: 'Stage 2 Exams'
      },
      {
        day: '31st October 23:59',
        title: 'Common Application Form (CAF) DEADLINE',
        type: 'deadline',
        description: 'Submit secondary school preference form to your home council. Always include dream grammar choices and a strong local comprehensive backup.',
        tag: 'National Deadline',
        urgent: true
      }
    ]
  },
  {
    month: 'November - February',
    year: '2026-2027',
    schoolYear: 'Year 6 (Winter Term)',
    season: 'Winter',
    summary: 'Admissions allocation, council residency checks, waiting period.',
    highlightColor: 'border-slate-300 bg-slate-50',
    events: [
      {
        day: 'Nov - Dec',
        title: 'Address Verification & Tenancy Audits',
        type: 'action',
        description: 'Council admission officers verify residency proofs (council tax, utility bills, tenancy agreements) for catchment criteria.',
        tag: 'Compliance'
      },
      {
        day: 'January - Feb',
        title: 'Independent / Private School Entrance Exams',
        type: 'exam',
        description: 'For parents also applying to fee-paying day schools as grammar alternatives.',
        tag: 'Independent Schools'
      }
    ]
  },
  {
    month: 'March',
    year: '2027',
    schoolYear: 'Year 6 (Spring Term)',
    season: 'Spring',
    summary: 'National Offer Day! Official secondary school offers revealed.',
    highlightColor: 'border-emerald-500 bg-emerald-50/60',
    events: [
      {
        day: '1st March 2027',
        title: 'NATIONAL OFFER DAY',
        type: 'results',
        description: 'Parents receive their single official secondary school offer via their local council admissions portal.',
        tag: 'National Offer Day',
        urgent: true
      },
      {
        day: '15th March 2027',
        title: 'Offer Acceptance Deadline',
        type: 'deadline',
        description: 'Must accept offered school to secure place, while simultaneously opting into grammar waiting lists or appeals if required.',
        tag: 'Deadline'
      }
    ]
  },
  {
    month: 'April - June',
    year: '2027',
    schoolYear: 'Year 6 (Summer Term)',
    season: 'Summer',
    summary: 'Waiting list reallocation movements, appeals hearings, and transition days.',
    highlightColor: 'border-teal-400 bg-teal-50/50',
    events: [
      {
        day: 'April - May',
        title: 'Independent Appeals Hearings & Waiting List Movement',
        type: 'action',
        description: 'Waiting lists move as parents decline state offers for private schools. Grammar appeals panels review non-qualification cases.',
        tag: 'Appeals & Reallocation'
      },
      {
        day: 'June - July',
        title: 'Year 6 Induction & Secondary Transition Days',
        type: 'action',
        description: 'Children visit their confirmed new secondary school, meet teachers, and order Year 7 uniforms.',
        tag: 'Induction'
      }
    ]
  }
];
