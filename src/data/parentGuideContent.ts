export interface FaqItem {
  question: string;
  answer: string;
  category: 'Overview' | 'Preparation' | 'Well-being' | 'Admissions';
}

export const PARENT_GUIDE_CONTENT = {
  hero: {
    title: "The Calm & Confident Guide to UK 11+ Grammar Schools",
    subtitle: "Everything you need to know about grammar schools, catchment boundaries, preparation strategies, and protecting your child's mental well-being throughout the process.",
  },
  whatIs11Plus: {
    heading: "What is the 11-Plus (11+) Grammar School Exam?",
    paragraphs: [
      "The 11-plus is an academic entrance examination taken by pupils in the United Kingdom, typically in September at the start of Year 6 (aged 10-11). Its primary purpose is to assess eligibility for selective state grammar schools.",
      "Unlike private independent schools that charge tuition fees, grammar schools in England are completely state-funded and tuition-free. Admission is awarded based on academic ability determined through the 11-plus examination and adherence to individual school admissions/catchment policies.",
      "Approximately 163 state grammar schools remain in England, concentrated in areas such as Buckinghamshire, Kent, Greater London (Barnet, Sutton, Kingston, Bexley), Essex, Warwickshire, Gloucestershire, and Greater Manchester (Trafford)."
    ],
    keyPoints: [
      "Tuition-free high-achieving state schools funded by the Department for Education.",
      "Exam sat in September of Year 6, before secondary school applications are submitted on October 31st.",
      "Tests cognitive ability, numerical acumen, vocabulary, reading comprehension, and deductive logic."
    ]
  },
  whatIsInExam: {
    heading: "What is actually tested in the 11-Plus?",
    intro: "While exam formats vary depending on the local consortium or testing board (GL Assessment, CEM, CSSE, or bespoke papers), the test generally covers four primary subjects:",
    subjects: [
      {
        name: "1. English",
        details: "Includes 19th and 20th-century literature reading comprehension, deduction, inference, nuanced vocabulary, spelling, punctuation, and grammar (SPaG). Select schools (e.g. CSSE Essex, Henrietta Barnett Stage 2, Wilson's Stage 2) also test continuous creative writing and descriptive essays."
      },
      {
        name: "2. Mathematics",
        details: "Covers the entire National Curriculum Key Stage 2 programme of study, plus extended reasoning. Topics include fractions, decimals, percentages, ratio/proportion, basic algebra, perimeter/area/volume, angle geometry, multi-step logic word problems, and data handling without a calculator."
      },
      {
        name: "3. Verbal Reasoning (VR)",
        details: "Assesses logic with words and text: anagrams, synonyms and antonyms, code-breaking, word pairs, analogies, letter sequences, and deductive riddles. It evaluates how quickly a child's brain can process structured linguistic patterns."
      },
      {
        name: "4. Non-Verbal & Spatial Reasoning (NVR)",
        details: "Assesses pattern recognition and visual problem-solving using shapes rather than language: 3D net folding, matrix completion, rotational symmetry, reflections, and odd-one-out. Spatial reasoning evaluates mental manipulation of complex 3D shapes."
      }
    ]
  },
  preparationPlaybook: {
    heading: "How to Prepare Your Child: A Balanced 12-Month Roadmap",
    principles: [
      {
        title: "Focus on Daily Micro-Habits over Weekend Marathons",
        description: "20 to 30 minutes of high-focus problem solving 4 days a week yields far better memory retention and emotional resilience than exhausting 4-hour weekend cramming sessions."
      },
      {
        title: "Read Rich Literature Every Single Evening",
        description: "Vocabulary is the single biggest separator in 11+ English and Verbal Reasoning. Encourage classic authors (C.S. Lewis, Frances Hodgson Burnett, E. Nesbit, Michael Morpurgo, Philip Pullman) and keep a dedicated 'Word Collector' notebook for unknown words."
      },
      {
        title: "Master Mental Arithmetic Speed",
        description: "Ensure times tables up to 12x12 are automatic within 2 seconds. Fluency in short division, fraction operations, and percentage conversions frees up working memory for multi-step logic."
      },
      {
        title: "Exam Technique & Timing Management",
        description: "Many bright children struggle not with question difficulty, but with strict timing (often 45 seconds to 1 minute per question). Practice 'skipping and flagging' stubborn questions rather than getting stuck and panicking."
      }
    ]
  },
  psychologyAndWellbeing: {
    heading: "The Psychology of 11+: Protecting Your Child and Handling Failure",
    summary: "As a parent, your emotional reaction directly shapes your child's self-worth. Here is psychological guidance for navigating pressure and non-qualification.",
    mindsetShifts: [
      {
        concept: "The Growth Mindset (Effort vs. Innate Identity)",
        advice: "Never say 'You are so clever' or 'You are our little genius'. Instead praise: 'I love how determined you were to crack that geometry problem' or 'You worked consistently all week'. If they tie their identity to being 'the smart one', fear of failing the 11+ becomes terrifying."
      },
      {
        concept: "De-mystifying the Grammar Myth",
        advice: "A grammar school is simply an academic environment suited to children who thrive at a fast theoretical pace. It is NOT the sole gateway to happiness, top universities, or successful careers. Outstanding comprehensives, academies, and sixth form colleges routinely send hundreds of students to Oxford, Cambridge, and Medical schools every year."
      },
      {
        concept: "Recognising Silent Anxiety in Children",
        advice: "Look out for psychosomatic indicators: sudden bedtime stomach aches, nail biting, irritability, reluctance to engage in their favourite sports, or tearfulness over minor mistakes. If you see this, drop all practice papers immediately for 5 days and reset with quality outdoor play and family time."
      }
    ],
    handlingResultsDay: {
      title: "How to Handle Results Day if Your Child Doesn't Qualify",
      scriptDo: [
        "Open the letter or email privately before your child sees it so you can process any personal disappointment out of their eyesight.",
        "When talking to your child, say: 'We are incredibly proud of how hard you prepared. This exam was a snapshot on one particular morning, and it does not define what you are capable of achieving.'",
        "Celebrate their effort with an immediate positive experience (e.g. their favourite meal, a cinema trip, or a small promised gift for their dedication) regardless of the score.",
        "Focus their excitement toward your local comprehensive: highlight their sports clubs, art studios, science labs, or friends who are attending."
      ],
      scriptDont: [
        "DO NOT express anger, grief, or say things like 'After all the money we spent on tuition!' — this inflicts acute guilt and long-term academic shame.",
        "DO NOT compare them to cousins, neighbours, or classmates who secured places.",
        "DO NOT treat the comprehensive school as a 'punishment' or inferior booby prize."
      ]
    }
  },
  faqs: [
    {
      category: 'Overview',
      question: 'Do grammar schools charge tuition fees?',
      answer: 'No. Grammar schools in England are state-funded and completely free of tuition fees. You only pay for standard items like school uniform, lunches, and school trips, just like any other state school.'
    },
    {
      category: 'Overview',
      question: 'Can I apply for a grammar school if I live outside the catchment area?',
      answer: 'Some grammar schools (called "superselective", like QE Boys Barnet or Pate\'s Cheltenham) accept applicants from any location based purely on test rank. However, many others (like in Buckinghamshire, Kent, and Bexley) enforce strict catchment zones or give heavy priority to pupils who live within specified mile radii or local parishes.'
    },
    {
      category: 'Preparation',
      question: 'When should my child start preparing for the 11-plus?',
      answer: 'Most educational psychologists and teachers recommend starting gentle, structured preparation in the spring/summer term of Year 4 or autumn of Year 5 (around 12-18 months prior to the exam). Starting earlier than Year 4 frequently causes emotional burnout.'
    },
    {
      category: 'Admissions',
      question: 'What is the Common Application Form (CAF) rule?',
      answer: 'The CAF is submitted to your home local council by 31st October in Year 6. By law (the equal preference system), schools do not know where you placed them on your preference list. Put grammar schools in your genuine order of preference; if your child does not meet the cut-off, it will not hurt your chances at your backup comprehensive.'
    },
    {
      category: 'Well-being',
      question: 'What happens if our family moves house just for the grammar catchment?',
      answer: 'Be extremely cautious. Local councils have rigorous anti-fraud teams. Most councils require families to have lived at the qualifying address by 31st October or July of Year 5, with proof of council tax, utility bills, and long-term tenancies (often minimum 12-24 months). If a move is deemed temporary, the offer will be withdrawn.'
    }
  ] as FaqItem[]
};
