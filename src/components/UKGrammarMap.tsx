'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { GRAMMAR_SCHOOLS, GrammarSchool } from '@/data/grammarSchools';
import { MapPin, Building, Info, CheckCircle2, ChevronRight, Layers, ZoomIn } from 'lucide-react';
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
  zoom: number;
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
    lat: 51.3850,
    lng: -0.2100,
    zoom: 11,
    schoolCount: 7,
    boroughs: 'Sutton, Kingston upon Thames',
    description: 'Renowned for the Sutton SET (Stage 1/2) and Tiffin schools. High academic competition and tight local catchments.',
    keySchools: ["Wilson's School", "Sutton Grammar", "Wallington County Grammar School (WCGS)", "Wallington High School for Girls (WHSG)", "Nonsuch High School for Girls", "Tiffin School", "The Tiffin Girls' School"],
    avgHousePrice: '£530,000 - £690,000'
  },
  {
    id: 'london-north',
    name: 'North London (Barnet)',
    lat: 51.6200,
    lng: -0.1950,
    zoom: 12,
    schoolCount: 3,
    boroughs: 'Barnet',
    description: 'Home to the UK’s most superselective state grammars (QE Boys & Henrietta Barnett). Merit-ranked across thousands of applicants.',
    keySchools: ["Queen Elizabeth's School (QE Boys)", "The Henrietta Barnett School (HBS)", "St Michael's Catholic Grammar School"],
    avgHousePrice: '£690,000 - £980,000'
  },
  {
    id: 'london-bexley-bromley',
    name: 'South East London (Bexley & Bromley)',
    lat: 51.4150,
    lng: 0.1100,
    zoom: 11,
    schoolCount: 6,
    boroughs: 'Bexley, Bromley',
    description: 'Bexley selection test offers Top 180 guaranteed rank + distance bands. Bromley hosts superselective St Olave’s & Newstead Wood.',
    keySchools: ["Townley Grammar School", "Beths Grammar School", "Bexley Grammar School", "Chislehurst and Sidcup Grammar School", "St Olave's Grammar School", "Newstead Wood School"],
    avgHousePrice: '£460,000 - £590,000'
  },
  {
    id: 'bucks',
    name: 'Buckinghamshire County',
    lat: 51.6900,
    lng: -0.6800,
    zoom: 10,
    schoolCount: 7,
    boroughs: 'Amersham, Beaconsfield, High Wycombe, Aylesbury, Marlow',
    description: 'A fully selective grammar county with 13 grammar schools. Uses the GL Secondary Transfer Test (STTS) with a 121 pass mark.',
    keySchools: ["Dr Challoner's Grammar School", "Dr Challoner's High School", "Beaconsfield High School", "Royal Grammar School (RGS High Wycombe)", "Aylesbury Grammar School (AGS)", "Aylesbury High School (AHS)", "Sir William Borlase's Grammar School"],
    avgHousePrice: '£420,000 - £720,000'
  },
  {
    id: 'essex',
    name: 'Essex & Southend-on-Sea',
    lat: 51.6800,
    lng: 0.6500,
    zoom: 10,
    schoolCount: 6,
    boroughs: 'Chelmsford, Colchester, Southend',
    description: 'Governed by the CSSE Consortium (Chelmsford, Colchester, Southend). Strict 12.5-mile priority circles for KEGS & CCHS.',
    keySchools: ["King Edward VI Grammar School (KEGS)", "Chelmsford County High School for Girls (CCHS)", "Colchester Royal Grammar School (CRGS)", "Colchester County High School for Girls (CCHSG)", "Southend High School for Boys (SHSB)", "Southend High School for Girls (SHSG)"],
    avgHousePrice: '£340,000 - £420,000'
  },
  {
    id: 'kent',
    name: 'Kent & Medway',
    lat: 51.2800,
    lng: 0.2600,
    zoom: 10,
    schoolCount: 5,
    boroughs: 'Tonbridge, Tunbridge Wells, Dartford',
    description: 'The largest selective grammar county in England with 32+ grammars. Features the Kent Test (332 pass mark) and superselectives like Judd & Skinners.',
    keySchools: ["The Judd School", "The Skinners' School", "Tonbridge Grammar School (TGS)", "Dartford Grammar School", "Dartford Grammar School for Girls"],
    avgHousePrice: '£395,000 - £530,000'
  },
  {
    id: 'west-midlands',
    name: 'West Midlands & Birmingham',
    lat: 52.4900,
    lng: -1.8600,
    zoom: 11,
    schoolCount: 5,
    boroughs: 'Birmingham, Sutton Coldfield',
    description: 'The West Midlands Grammar Schools consortium: Camp Hill, Five Ways, and Bishop Vesey’s with designated Birmingham priority wards.',
    keySchools: ["King Edward VI Camp Hill School for Boys", "King Edward VI Camp Hill School for Girls", "King Edward VI Five Ways School", "Bishop Vesey's Grammar School", "Sutton Coldfield Grammar School for Girls"],
    avgHousePrice: '£310,000 - £385,000'
  },
  {
    id: 'warwickshire',
    name: 'Warwickshire',
    lat: 52.2800,
    lng: -1.5000,
    zoom: 10,
    schoolCount: 4,
    boroughs: 'Stratford-upon-Avon, Rugby',
    description: 'Features Automatic Qualifying Scores (AQS) with strict priority circles (e.g. 16.8 miles around Stratford clock tower).',
    keySchools: ["Stratford Girls’ Grammar School (Shottery)", "King Edward VI School, Stratford (K.E.S. Shakespeare's School)", "Rugby High School", "Lawrence Sheriff School"],
    avgHousePrice: '£310,000 - £410,000'
  },
  {
    id: 'trafford',
    name: 'Greater Manchester (Trafford)',
    lat: 53.4100,
    lng: -2.3300,
    zoom: 11,
    schoolCount: 5,
    boroughs: 'Altrincham, Sale, Stretford, Urmston',
    description: 'The premier selective grammar enclave of the North. Trafford consortium test with 334 qualifying standard and postal priority zones.',
    keySchools: ["Altrincham Grammar School for Boys (AGSB)", "Altrincham Grammar School for Girls (AGGS)", "Sale Grammar School", "Stretford Grammar School", "Urmston Grammar School"],
    avgHousePrice: '£365,000 - £490,000'
  },
  {
    id: 'gloucestershire',
    name: 'Gloucestershire',
    lat: 51.8600,
    lng: -2.2000,
    zoom: 10,
    schoolCount: 6,
    boroughs: 'Cheltenham, Gloucester, Stroud',
    description: 'Gloucestershire grammar entrance test allocates places by rank order. Pate’s Cheltenham is one of the highest-achieving co-ed schools in the UK.',
    keySchools: ["Pate's Grammar School", "Sir Thomas Rich's School (Tommies)", "Denmark Road High School (DRHS)", "The Crypt School", "Marling School", "Stroud High School"],
    avgHousePrice: '£320,000 - £370,000'
  }
];

// Helper component to smoothly pan/zoom Leaflet map to selected region
function MapFlyTo({ lat, lng, zoom }: { lat: number; lng: number; zoom: number }) {
  const map = (window as any)._currentMapInstance;
  useEffect(() => {
    if (map) {
      map.flyTo([lat, lng], zoom, { duration: 1.2 });
    }
  }, [lat, lng, zoom, map]);
  return null;
}

export default function UKGrammarMap() {
  const [activeCluster, setActiveCluster] = useState<RegionCluster>(REGION_CLUSTERS[0]);
  const [selectedSchool, setSelectedSchool] = useState<GrammarSchool | null>(null);
  const [customIcon, setCustomIcon] = useState<any>(null);
  const [schoolIcon, setSchoolIcon] = useState<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('leaflet').then((L) => {
        // Red pin for individual schools
        const redSchoolIcon = L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        // Blue pin for clusters
        const blueClusterIcon = L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
          iconSize: [22, 36],
          iconAnchor: [11, 36],
          popupAnchor: [1, -30],
          shadowSize: [36, 36]
        });

        setSchoolIcon(redSchoolIcon);
        setCustomIcon(blueClusterIcon);
        setMapLoaded(true);
      });
    }
  }, []);

  const handleSelectCluster = (cluster: RegionCluster) => {
    setActiveCluster(cluster);
    if (mapInstance) {
      mapInstance.flyTo([cluster.lat, cluster.lng], cluster.zoom, { duration: 1.2 });
    }
  };

  // Find all schools belonging to active cluster
  const currentClusterSchools = GRAMMAR_SCHOOLS.filter((school) =>
    activeCluster.keySchools.some((name) =>
      school.name.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(school.name.toLowerCase())
    )
  );

  return (
    <section id="uk-map-section" className="py-14 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            Interactive Regional School Locator
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Where Are UK Grammar Schools Located?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Select any region to automatically zoom into that area and <strong>view every grammar school pin</strong> with its exact location, admission cutoff, and catchment circle.
          </p>
        </div>

        {/* Map & Cluster Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Region Cards Navigation */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Select a Selective Cluster (10 Main Regions):
            </span>
            {REGION_CLUSTERS.map((cluster) => {
              const isSelected = activeCluster.id === cluster.id;
              return (
                <button
                  key={cluster.id}
                  onClick={() => handleSelectCluster(cluster)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-indigo-600/35 border-indigo-400 shadow-lg text-white ring-1 ring-indigo-400/50'
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
            <div className="w-full h-[430px] sm:h-[480px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative bg-slate-950">
              {mapLoaded && customIcon && schoolIcon ? (
                <MapContainer
                  center={[activeCluster.lat, activeCluster.lng]}
                  zoom={activeCluster.zoom}
                  scrollWheelZoom={true}
                  ref={setMapInstance}
                  style={{ width: '100%', height: '100%', background: '#0f172a' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {/* Highlight Active Cluster Region with Priority Circle */}
                  <Circle
                    center={[activeCluster.lat, activeCluster.lng]}
                    radius={22000}
                    pathOptions={{
                      color: '#4f46e5',
                      fillColor: '#6366f1',
                      fillOpacity: 0.12,
                      weight: 2,
                      dashArray: '6, 6'
                    }}
                  />

                  {/* Render INDIVIDUAL SCHOOL PINS for the selected region cluster */}
                  {currentClusterSchools.map((school) => {
                    const radiusMeters = (school.catchmentRadiusMiles ?? 8) * 1609.34;
                    return (
                      <React.Fragment key={school.id}>
                        {/* Optional subtle catchment ring for each school on zoom */}
                        {school.catchmentRadiusMiles && (
                          <Circle
                            center={[school.lat, school.lng]}
                            radius={radiusMeters}
                            pathOptions={{
                              color: '#ef4444',
                              fillColor: '#f87171',
                              fillOpacity: 0.06,
                              weight: 1,
                              dashArray: '4, 4'
                            }}
                          />
                        )}

                        <Marker position={[school.lat, school.lng]} icon={schoolIcon}>
                          <Popup>
                            <div className="text-xs font-sans text-slate-900 p-1 min-w-[210px]">
                              <span className="inline-block px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-800 text-[10px] font-bold mb-1">
                                {school.gender} Grammar &middot; {school.examBoard}
                              </span>
                              <strong className="block text-slate-900 text-sm font-bold mb-1">
                                {school.name}
                              </strong>
                              <div className="text-slate-600 text-[11px] mb-2">
                                {school.borough}, {school.postcode}
                              </div>

                              <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 space-y-1 text-[11px] mb-2">
                                <div><strong>Seats:</strong> {school.totalSeats} ({school.applicantsLastYear.toLocaleString()} applicants)</div>
                                <div className="text-emerald-700 font-semibold">
                                  <strong>Inside Catchment:</strong> {school.seatsInsideCatchment} seats
                                </div>
                                <div className="text-amber-700 font-semibold">
                                  <strong>Outside Catchment:</strong> {school.seatsOutsideCatchment} seats
                                </div>
                                <div><strong>Cut-off:</strong> {school.admittedCutoffScore}</div>
                              </div>

                              <div className="text-[11px] text-slate-600 mb-2">
                                <strong>Avg 3-Bed House:</strong> {school.avgHousePrice.threeBed} | <strong>Rent:</strong> {school.avgMonthlyRent.threeBed}
                              </div>

                              <button
                                onClick={() => setSelectedSchool(school)}
                                className="w-full py-1.5 px-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-center text-[11px] block transition-colors"
                              >
                                View Full Catchment & Details →
                              </button>
                            </div>
                          </Popup>
                        </Marker>
                      </React.Fragment>
                    );
                  })}
                </MapContainer>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                  Loading Regional Interactive Grammar Map...
                </div>
              )}

              {/* Map Floating Cluster Badge */}
              <div className="absolute top-3 right-3 z-[1000] bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700 shadow-md text-xs pointer-events-auto max-w-xs">
                <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider block">Active Region View</span>
                <span className="font-bold text-white text-sm block">{activeCluster.name}</span>
                <span className="text-[11px] text-slate-300 mt-1 block">
                  Showing <strong>{currentClusterSchools.length}</strong> individual grammar school pins (Red Pins)
                </span>
              </div>

              {/* Bottom helper tip */}
              <div className="absolute bottom-3 left-3 z-[1000] bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-[11px] text-slate-300 flex items-center gap-1.5">
                <ZoomIn className="w-3.5 h-3.5 text-indigo-400" />
                <span>Zoom in to see roads, towns & property catchment boundaries</span>
              </div>
            </div>

            {/* Active Cluster Details Box & Clickable School Badges */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-700">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                    {activeCluster.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">
                    Covering {activeCluster.boroughs} &middot; Avg 3-Bed: <strong className="text-slate-200">{activeCluster.avgHousePrice}</strong>
                  </span>
                </div>
                <span className="text-xs px-3 py-1 rounded-full font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                  {currentClusterSchools.length} Grammar Schools Shown
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {activeCluster.description}
              </p>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Click any school to fly to it or view its dedicated catchment radius:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentClusterSchools.map((school) => (
                    <button
                      key={school.id}
                      onClick={() => {
                        if (mapInstance) {
                          mapInstance.flyTo([school.lat, school.lng], 13, { duration: 1.0 });
                        }
                        setSelectedSchool(school);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-700/80 hover:bg-indigo-600 text-slate-200 hover:text-white transition-colors border border-slate-600"
                    >
                      <Building className="w-3.5 h-3.5 text-rose-400" />
                      <span>{school.name}</span>
                      <span className="text-[10px] text-slate-400 hover:text-white">({school.postcode})</span>
                    </button>
                  ))}
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
