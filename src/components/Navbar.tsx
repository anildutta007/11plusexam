'use client';

import React from 'react';
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
    <header className="sticky top-0 z-50 bg-[#F8F3E8]/95 backdrop-blur-md border-b border-[#E3D8C6] shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo with Forest Green & Warm Serif Typography */}
          <button 
            onClick={() => onSelectTab('what-is-11plus')} 
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-[#1F5A45] text-white font-serif font-bold text-xl shadow-sm group-hover:bg-[#164233] transition-colors">
              11+
            </span>
            <div>
              <span className="text-xl font-serif font-bold tracking-tight text-[#1F5A45] block leading-none">
                11+ Compass
              </span>
              <span className="text-xs text-[#5C6E67] font-medium font-sans">A Calm UK Grammar Guide for Parents</span>
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
                      ? 'bg-[#1F5A45] text-white shadow-xs font-bold'
                      : 'text-[#3E4E47] hover:text-[#1F5A45] hover:bg-[#E2ECE5]/70'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#F3DD87]' : 'text-[#6C7E77]'}`} />
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
        <div className="flex lg:hidden overflow-x-auto py-2.5 gap-1.5 border-t border-[#E3D8C6] no-scrollbar">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all font-semibold ${
                  isActive
                    ? 'bg-[#1F5A45] text-white shadow-xs'
                    : 'bg-[#EFE8DA] text-[#3E4E47] hover:bg-[#E2ECE5]'
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
