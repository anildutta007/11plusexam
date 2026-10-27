// Haversine formula to compute distance in miles between two latitude/longitude points
export function calculateDistanceMiles(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3958.8; // Radius of Earth in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return Math.round(distance * 10) / 10;
}

export interface GeocodeResult {
  postcode: string;
  latitude: number;
  longitude: number;
  admin_district: string;
  parish?: string;
  outcode: string;
}

export async function lookupPostcode(postcode: string): Promise<GeocodeResult | null> {
  const cleanCode = postcode.replace(/\s+/g, '').toUpperCase();
  if (!cleanCode) return null;

  try {
    const res = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(cleanCode)}`);
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    if (data.status === 200 && data.result) {
      return {
        postcode: data.result.postcode,
        latitude: data.result.latitude,
        longitude: data.result.longitude,
        admin_district: data.result.admin_district,
        parish: data.result.parish,
        outcode: data.result.outcode,
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching postcode from postcodes.io:', error);
    return null;
  }
}
