'use client';

import React from 'react';
import Link from 'next/link';
import VisitorCounter from './VisitorCounter';
import { 
  HelpCircle, 
  Map, 
  MapPin, 
  BookOpen, 
  Building2, 
  Calendar, 
  FileText 
} from 'lucide-react';

export type TabId = 
  | 'what-is-11plus'
  | 'uk-map'
  | 'postcode-finder'
  | 'how-to-prepare'
  | 'school-directory'
  | 'key-dates'
  | 'sample-papers';

export interface TabItem {
  id: TabId;
  label: string;
  icon: React.ElementType;
}

export const TABS: TabItem[] = [
  { id: 'what-is-11plus', label: 'What is 11+?', icon: HelpCircle },
  { id: 'uk-map', label: 'UK Map of Grammars', icon: Map },
  { id: 'postcode-finder', label: 'Postcode & Catchment Finder', icon: MapPin },
  { id: 'how-to-prepare', label: 'How to Prepare', icon: BookOpen },
  { id: 'school-directory', label: 'School Directory', icon: Building2 },
  { id: 'key-dates', label: 'Key Dates', icon: Calendar },
  { id: 'sample-papers', label: 'Sample Papers', icon: FileText },
];

interface NavbarProps {
  activeTab: TabId;
  onSelectTab: (tabId: TabId) => void;
}

export default function Navbar({ activeTab, onSelectTab }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <button 
            onClick={() => onSelectTab('what-is-11plus')} 
            className="flex items-center gap-2.5 text-left focus:outline-none"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white font-bold text-lg shadow-sm">
              11+
            </span>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-none">
                11+ Compass
              </span>
              <span className="text-xs text-slate-500 font-medium">UK Grammar School Guide for Parents</span>
            </div>
          </button>

          {/* Top Tabs Bar */}
          <nav className="hidden lg:flex items-center gap-1.5 text-xs font-semibold">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm font-bold'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Live Visitor Counter */}
          <div className="flex items-center">
            <VisitorCounter />
          </div>
        </div>

        {/* Mobile Scrolling Horizontal Tab Strip */}
        <div className="flex lg:hidden overflow-x-auto py-2.5 gap-1.5 border-t border-slate-100 no-scrollbar">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all font-semibold ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
