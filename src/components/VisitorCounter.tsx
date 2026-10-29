'use client';

import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const BASE_VISITOR_COUNT = 1;
    const STORAGE_KEY = 'eleven_plus_compass_visits_total_v2';
    const SESSION_KEY = 'eleven_plus_compass_session_counted_v2';

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      let count = stored ? parseInt(stored, 10) : BASE_VISITOR_COUNT;

      if (isNaN(count)) {
        count = BASE_VISITOR_COUNT;
      }

      const sessionCounted = sessionStorage.getItem(SESSION_KEY);
      if (!sessionCounted) {
        if (!stored) {
          count = BASE_VISITOR_COUNT;
        } else {
          count += 1;
        }
        localStorage.setItem(STORAGE_KEY, count.toString());
        sessionStorage.setItem(SESSION_KEY, 'true');
      }

      setVisitorCount(count);
    } catch {
      setVisitorCount(BASE_VISITOR_COUNT);
    }
  }, []);

  if (visitorCount === null) {
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE8DA] border border-[#DDD0BC] text-[#86948E] text-xs font-semibold animate-pulse">
        <Users className="w-3.5 h-3.5" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2ECE5] border border-[#BFD4C8] text-[#1F5A45] text-xs font-semibold shadow-2xs">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1F5A45] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1F5A45]"></span>
      </span>
      <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
        <Users className="w-3.5 h-3.5 text-[#1F5A45]" />
        <span className="text-[#3E4E47] font-medium hidden sm:inline">Parents Guided:</span>
        <strong className="text-[#1F5A45] font-bold">{visitorCount.toLocaleString()}</strong>
        <span className="text-[#5C6E67] text-[10px] hidden md:inline">families</span>
      </div>
    </div>
  );
}
