'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { GrammarSchool } from '@/data/grammarSchools';
import { X, Navigation, Users, CheckCircle, MapPin, Building, Home } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Dynamic import of Leaflet components with SSR disabled to prevent window object errors in Next.js
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);
const Circle = dynamic(
  () => import('react-leaflet').then((mod) => mod.Circle),
  { ssr: false }
);

interface SchoolMapModalProps {
  school: GrammarSchool | null;
  onClose: () => void;
}

export default function SchoolMapModal({ school, onClose }: SchoolMapModalProps) {
  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const [customIcon, setCustomIcon] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('leaflet').then((L) => {
        // Fix Leaflet's default marker icons in Next.js / Webpack
        const icon = L.icon({
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });
        setCustomIcon(icon);
        setLeafletLoaded(true);
      });
    }
  }, []);

  if (!school) return null;

  // Convert miles to meters for Leaflet circle
  const radiusMiles = school.catchmentRadiusMiles ?? 10;
  const radiusMeters = radiusMiles * 1609.34;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-start justify-between bg-slate-50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 text-xs font-bold">
                {school.gender} Grammar
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {school.borough}, {school.region} &middot; {school.postcode}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{school.name}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Seat Allocation Badge Bar (Within Catchment vs Outside Catchment) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-indigo-900 text-white text-xs">
          <div className="p-2 rounded-lg bg-white/10 border border-white/10">
            <span className="text-indigo-200 block text-[11px] font-medium">Total Places:</span>
            <span className="text-base font-extrabold text-white">{school.totalSeats} seats</span>
          </div>

          <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-400/30">
            <span className="text-emerald-200 block text-[11px] font-bold flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              Seats Within Catchment:
            </span>
            <span className="text-base font-extrabold text-emerald-300">
              {school.seatsInsideCatchment > 0
                ? `${school.seatsInsideCatchment} seats (${Math.round((school.seatsInsideCatchment / school.totalSeats) * 100)}%)`
                : 'Merit-ranked (Open)'}
            </span>
          </div>

          <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-400/30">
            <span className="text-amber-200 block text-[11px] font-bold">Seats Outside Catchment:</span>
            <span className="text-base font-extrabold text-amber-300">
              {school.seatsOutsideCatchment > 0
                ? `${school.seatsOutsideCatchment} seats (${Math.round((school.seatsOutsideCatchment / school.totalSeats) * 100)}%)`
                : '0 (Catchment Only)'}
            </span>
          </div>

          <div className="p-2 rounded-lg bg-white/10 border border-white/10">
            <span className="text-indigo-200 block text-[11px] font-medium">Catchment Circle:</span>
            <span className="text-base font-extrabold text-white">
              {school.catchmentRadiusMiles ? `~${school.catchmentRadiusMiles} miles` : 'No radius limit'}
            </span>
          </div>
        </div>

        {/* Leaflet Map Body */}
        <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-100">
          {leafletLoaded && customIcon ? (
            <MapContainer
              center={[school.lat, school.lng]}
              zoom={11}
              scrollWheelZoom={true}
              style={{ width: '100%', height: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Catchment Radius Visual Circle */}
              {school.catchmentRadiusMiles && (
                <Circle
                  center={[school.lat, school.lng]}
                  radius={radiusMeters}
                  pathOptions={{
                    color: '#4f46e5',
                    fillColor: '#6366f1',
                    fillOpacity: 0.15,
                    weight: 2,
                    dashArray: '6, 6',
                  }}
                >
                  <Popup>
                    <div className="text-xs font-sans">
                      <strong className="block text-indigo-900 font-bold mb-1">
                        Catchment Radius: ~{school.catchmentRadiusMiles} Miles
                      </strong>
                      <span>Candidates residing inside this circle receive priority consideration under local admissions criteria.</span>
                    </div>
                  </Popup>
                </Circle>
              )}

              {/* School Location Marker */}
              <Marker position={[school.lat, school.lng]} icon={customIcon}>
                <Popup>
                  <div className="text-xs font-sans p-1">
                    <strong className="text-slate-900 block font-bold text-sm mb-1">{school.name}</strong>
                    <div className="text-slate-600 mb-1">
                      {school.borough}, {school.postcode}
                    </div>
                    <div className="border-t pt-1 space-y-0.5 text-[11px]">
                      <div><strong>Seats:</strong> {school.totalSeats}</div>
                      <div><strong>Inside Catchment:</strong> {school.seatsInsideCatchment}</div>
                      <div><strong>Outside Catchment:</strong> {school.seatsOutsideCatchment}</div>
                      <div><strong>Cutoff:</strong> {school.admittedCutoffScore}</div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
              Loading interactive map & catchment overlay...
            </div>
          )}

          {/* Floating Catchment Legend on Map */}
          <div className="absolute bottom-3 left-3 z-[1000] bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-slate-200 shadow-md max-w-xs text-xs pointer-events-auto">
            <div className="flex items-center gap-2 mb-1.5 font-bold text-slate-900">
              <span className="w-3 h-3 rounded-full bg-indigo-500 border border-indigo-600 block"></span>
              <span>{school.catchmentType}</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed mb-2">
              {school.catchmentNotes}
            </p>
            <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px] text-slate-500">
              <span>Inside: <strong className="text-emerald-700">{school.seatsInsideCatchment}</strong></span>
              <span>Outside: <strong className="text-amber-700">{school.seatsOutsideCatchment}</strong></span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-600">
            Avg 3-Bed House: <strong className="text-slate-900">{school.avgHousePrice.threeBed}</strong> &middot; Avg Rent: <strong className="text-slate-900">{school.avgMonthlyRent.threeBed}</strong>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.name + ' ' + school.postcode)}`}
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-indigo-600 font-semibold underline"
            >
              Open in Google Maps
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
            >
              Close Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
