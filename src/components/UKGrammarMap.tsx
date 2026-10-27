'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { GRAMMAR_SCHOOLS, GrammarSchool } from '@/data/grammarSchools';
import { MapPin, Building, Info, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import SchoolMapModal from './SchoolMapModal';
import 'leaflet/dist/leaflet.css';

// Dynamic import with SSR disabled for Leaflet components
const MapContainer = dynamic(() => import('react-leaflet').then((m) => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((m) => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((m) => m.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((m) => m.Popup), { ssr: false });
const Circle = dynamic(() => import('react-leaflet').then((m) => m.Circle), { ssr: false });

export interface RegionCluster {
  id: string;
  name: string;
  lat: number;
  lng: number;
  schoolCount: number;
  description: string;
  keySchools: string[];
  boroughs: string;
  avgHousePrice: string;
}

export const REGION_CLUSTERS: RegionCluster[] = [
  {
    id: 'london-sutton',
    name: 'South London (Sutton & Kingston)',
    lat: 51.3653,
    lng: -0.1600,
    schoolCount: 7,
    boroughs: 'Sutton, Kingston upon Thames',
    description: 'Renowned for the Sutton SET (Stage 1/2) and Tiffin schools. High academic competition and tight local catchments.',
    keySchools: ["Wilson's School", "Sutton Grammar", "Wallington County Boys", "Wallington Girls", "Nonsuch Girls", "Tiffin School", "The Tiffin Girls' School"],
    avgHousePrice: '£530,000 - £690,000'
  },
  {
    id: 'london-north',
    name: 'North London (Barnet)',
    lat: 51.6200,
    lng: -0.2000,
    schoolCount: 3,
    boroughs: 'Barnet',
    description: 'Home to the UK’s most superselective state grammars (QE Boys & Henrietta Barnett). Merit-ranked across thousands of applicants.',
    keySchools: ["Queen Elizabeth's School (QE Boys)", "The Henrietta Barnett School (HBS)", "St Michael's Catholic Grammar"],
    avgHousePrice: '£690,000 - £980,000'
  },
  {
    id: 'london-bexley-bromley',
    name: 'South East London (Bexley & Bromley)',
    lat: 51.4200,
    lng: 0.1100,
    schoolCount: 6,
    boroughs: 'Bexley, Bromley',
    description: 'Bexley selection test offers Top 180 guaranteed rank + distance bands. Bromley hosts superselective St Olave’s & Newstead Wood.',
    keySchools: ["Townley Grammar", "Beths Grammar", "Bexley Grammar (IB)", "Chislehurst & Sidcup", "St Olave's Grammar", "Newstead Wood"],
    avgHousePrice: '£460,000 - £590,000'
  },
  {
    id: 'bucks',
    name: 'Buckinghamshire County',
    lat: 51.6800,
    lng: -0.6800,
    schoolCount: 7,
    boroughs: 'Amersham, Beaconsfield, High Wycombe, Aylesbury, Marlow',
    description: 'A fully selective grammar county with 13 grammar schools. Uses the GL Secondary Transfer Test (STTS) with a 121 pass mark.',
    keySchools: ["Dr Challoner's Boys", "Dr Challoner's High", "Beaconsfield High", "Royal Grammar School (RGS)", "Aylesbury Grammar", "Sir William Borlase's"],
    avgHousePrice: '£420,000 - £720,000'
  },
  {
    id: 'essex',
    name: 'Essex & Southend-on-Sea',
    lat: 51.7400,
    lng: 0.5500,
    schoolCount: 6,
    boroughs: 'Chelmsford, Colchester, Southend',
    description: 'Governed by the CSSE Consortium (Chelmsford, Colchester, Southend). Strict 12.5-mile priority circles for KEGS & CCHS.',
    keySchools: ["King Edward VI (KEGS)", "Chelmsford County High (CCHS)", "Colchester Royal (CRGS)", "Colchester County High", "Southend High Boys", "Southend High Girls"],
    avgHousePrice: '£340,000 - £420,000'
  },
  {
    id: 'kent',
    name: 'Kent & Medway',
    lat: 51.2500,
    lng: 0.3500,
    schoolCount: 5,
    boroughs: 'Tonbridge, Tunbridge Wells, Dartford',
    description: 'The largest selective grammar county in England with 32+ grammars. Features the Kent Test (332 pass mark) and superselectives like Judd & Skinners.',
    keySchools: ["The Judd School", "The Skinners' School", "Tonbridge Grammar (TGS)", "Dartford Grammar (Boys)", "Dartford Grammar (Girls)"],
    avgHousePrice: '£395,000 - £530,000'
  },
  {
    id: 'west-midlands',
    name: 'West Midlands & Birmingham',
    lat: 52.4800,
    lng: -1.8900,
    schoolCount: 5,
    boroughs: 'Birmingham, Sutton Coldfield',
    description: 'The West Midlands Grammar Schools consortium: Camp Hill, Five Ways, and Bishop Vesey’s with designated Birmingham priority wards.',
    keySchools: ["KEVI Camp Hill Boys", "KEVI Camp Hill Girls", "KEVI Five Ways", "Bishop Vesey's Grammar", "Sutton Coldfield Girls"],
    avgHousePrice: '£310,000 - £385,000'
  },
  {
    id: 'warwickshire',
    name: 'Warwickshire',
    lat: 52.2500,
    lng: -1.5000,
    schoolCount: 4,
    boroughs: 'Stratford-upon-Avon, Rugby',
    description: 'Features Automatic Qualifying Scores (AQS) with strict priority circles (e.g. 16.8 miles around Stratford clock tower).',
    keySchools: ["Stratford Girls' (Shottery)", "King Edward VI Stratford (KES)", "Rugby High School", "Lawrence Sheriff School"],
    avgHousePrice: '£310,000 - £410,000'
  },
  {
    id: 'trafford',
    name: 'Greater Manchester (Trafford)',
    lat: 53.4000,
    lng: -2.3300,
    schoolCount: 5,
    boroughs: 'Altrincham, Sale, Stretford, Urmston',
    description: 'The premier selective grammar enclave of the North. Trafford consortium test with 334 qualifying standard and postal priority zones.',
    keySchools: ["Altrincham Boys (AGSB)", "Altrincham Girls (AGGS)", "Sale Grammar", "Stretford Grammar", "Urmston Grammar"],
    avgHousePrice: '£365,000 - £490,000'
  },
  {
    id: 'gloucestershire',
    name: 'Gloucestershire',
    lat: 51.8700,
    lng: -2.2000,
    schoolCount: 6,
    boroughs: 'Cheltenham, Gloucester, Stroud',
    description: 'Gloucestershire grammar entrance test allocates places by rank order. Pate’s Cheltenham is one of the highest-achieving co-ed schools in the UK.',
    keySchools: ["Pate's Grammar", "Sir Thomas Rich's (Tommies)", "Denmark Road High", "The Crypt School", "Marling School", "Stroud High"],
    avgHousePrice: '£320,000 - £370,000'
  }
];

export default function UKGrammarMap() {
  const [activeCluster, setActiveCluster] = useState<RegionCluster>(REGION_CLUSTERS[0]);
  const [selectedSchool, setSelectedSchool] = useState<GrammarSchool | null>(null);
  const [customIcon, setCustomIcon] = useState<any>(null);
  const [clusterIcon, setClusterIcon] = useState<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('leaflet').then((L) => {
        const icon = L.icon({
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
          iconSize: [20, 32],
          iconAnchor: [10, 32],
          popupAnchor: [1, -28],
        });
        setCustomIcon(icon);
        setMapLoaded(true);
      });
    }
  }, []);

  return (
    <section id="uk-map-section" className="py-14 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            Geographic Overview of England
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Where Are UK Grammar Schools Located?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Out of 3,000+ state secondary schools in England, only <strong>163 grammar schools</strong> remain. They are not evenly spread: they are concentrated into historical selective clusters across 10 main regions.
          </p>
        </div>

        {/* Map & Cluster Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Region Cards Navigation */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Select a Selective Cluster (10 Main Regions):
            </span>
            {REGION_CLUSTERS.map((cluster) => {
              const isSelected = activeCluster.id === cluster.id;
              return (
                <button
                  key={cluster.id}
                  onClick={() => setActiveCluster(cluster)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-indigo-600/30 border-indigo-400 shadow-lg text-white'
                      : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 text-slate-300'
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm text-white">{cluster.name}</span>
                      <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                        {cluster.schoolCount} Grammars
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 mb-1">{cluster.boroughs}</p>
                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                      {cluster.description}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${isSelected ? 'rotate-90 text-indigo-400' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Map Canvas & Details */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Interactive Leaflet Map Box */}
            <div className="w-full h-[400px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative bg-slate-950">
              {mapLoaded && customIcon ? (
                <MapContainer
                  center={[52.2, -1.0]}
                  zoom={7}
                  scrollWheelZoom={false}
                  style={{ width: '100%', height: '100%', background: '#0f172a' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                  />

                  {/* Highlight Active Cluster Region with Pulse Circle */}
                  <Circle
                    center={[activeCluster.lat, activeCluster.lng]}
                    radius={32000}
                    pathOptions={{
                      color: '#6366f1',
                      fillColor: '#818cf8',
                      fillOpacity: 0.25,
                      weight: 3,
                    }}
                  />

                  {/* Markers for all regional clusters */}
                  {REGION_CLUSTERS.map((cl) => (
                    <Marker
                      key={cl.id}
                      position={[cl.lat, cl.lng]}
                      icon={customIcon}
                      eventHandlers={{
                        click: () => setActiveCluster(cl),
                      }}
                    >
                      <Popup>
                        <div className="text-xs font-sans text-slate-900 p-1">
                          <strong className="block text-indigo-900 text-sm font-bold mb-1">{cl.name}</strong>
                          <div className="text-slate-600 mb-2">{cl.description}</div>
                          <div className="font-semibold text-slate-800">Key Schools:</div>
                          <ul className="list-disc pl-4 text-[11px] text-slate-600">
                            {cl.keySchools.slice(0, 3).map((k, i) => (
                              <li key={i}>{k}</li>
                            ))}
                          </ul>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                  Loading National Map of UK Grammar Enclaves...
                </div>
              )}

              {/* Map Floating Cluster Badge */}
              <div className="absolute top-3 right-3 z-[1000] bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700 shadow-md text-xs pointer-events-auto max-w-xs">
                <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider block">Selected Cluster</span>
                <span className="font-bold text-white text-sm block">{activeCluster.name}</span>
                <span className="text-[11px] text-slate-300 mt-1 block">Avg 3-Bed: {activeCluster.avgHousePrice}</span>
              </div>
            </div>

            {/* Active Cluster Details Box */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-700">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                    {activeCluster.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">
                    Covering {activeCluster.boroughs}
                  </span>
                </div>
                <span className="text-xs px-3 py-1 rounded-full font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                  {activeCluster.schoolCount} Grammar Schools Represented
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {activeCluster.description}
              </p>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Featured Grammar Schools in this Area:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCluster.keySchools.map((schoolName, idx) => {
                    const matchedSchool = GRAMMAR_SCHOOLS.find((s) => s.name === schoolName);
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (matchedSchool) {
                            setSelectedSchool(matchedSchool);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-700/80 hover:bg-indigo-600 text-slate-200 hover:text-white transition-colors border border-slate-600"
                      >
                        <Building className="w-3.5 h-3.5 text-indigo-300" />
                        {schoolName}
                        {matchedSchool && <span className="text-[10px] text-indigo-300">→</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Re-use map modal when user clicks a school */}
      <SchoolMapModal school={selectedSchool} onClose={() => setSelectedSchool(null)} />
    </section>
  );
}
