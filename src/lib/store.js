import {
  db,
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "./firebase";

// ─── MEMORIES ───
export function subscribeToMemories(callback) {
  const q = query(collection(db, "memories"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snap) => {
    const memories = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(memories);
  });
}

export async function addMemory(memory) {
  return addDoc(collection(db, "memories"), {
    ...memory,
    createdAt: serverTimestamp(),
  });
}

export async function deleteMemory(id) {
  return deleteDoc(doc(db, "memories", id));
}

// ─── ASSETS ───
export function subscribeToAssets(callback) {
  const q = query(collection(db, "assets"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snap) => {
    const assets = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(assets);
  });
}

export async function addAsset(asset) {
  return addDoc(collection(db, "assets"), {
    ...asset,
    createdAt: serverTimestamp(),
  });
}

export async function updateAsset(id, data) {
  return updateDoc(doc(db, "assets", id), data);
}

export async function deleteAsset(id) {
  return deleteDoc(doc(db, "assets", id));
}

// ─── LOVE QUOTES ───
export function subscribeToQuotes(callback) {
  const q = query(collection(db, "loveQuotes"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snap) => {
    const quotes = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(quotes);
  });
}

export async function addQuote(quote) {
  return addDoc(collection(db, "loveQuotes"), {
    ...quote,
    createdAt: serverTimestamp(),
  });
}

// ─── COUNTRY DATABASE ───
export const COUNTRY_DB = {
  "Nigeria": { lat: 9.06, lng: 7.49, flag: "\u{1F1F3}\u{1F1EC}", tagline: "Where it all started" },
  "Ghana": { lat: 5.56, lng: -0.19, flag: "\u{1F1EC}\u{1F1ED}", tagline: "Sun & good vibes" },
  "Dubai": { lat: 25.20, lng: 55.27, flag: "\u{1F1E6}\u{1F1EA}", tagline: "Luxury with my love" },
  "Italy": { lat: 41.90, lng: 12.50, flag: "\u{1F1EE}\u{1F1F9}", tagline: "Pasta & romance" },
  "France": { lat: 48.86, lng: 2.35, flag: "\u{1F1EB}\u{1F1F7}", tagline: "Paris at midnight" },
  "Japan": { lat: 35.68, lng: 139.69, flag: "\u{1F1EF}\u{1F1F5}", tagline: "Cherry blossoms together" },
  "Greece": { lat: 36.39, lng: 25.46, flag: "\u{1F1EC}\u{1F1F7}", tagline: "Santorini sunsets" },
  "Brazil": { lat: -22.91, lng: -43.17, flag: "\u{1F1E7}\u{1F1F7}", tagline: "Rio carnival energy" },
  "Thailand": { lat: 13.76, lng: 100.50, flag: "\u{1F1F9}\u{1F1ED}", tagline: "Temples & beaches" },
  "Australia": { lat: -33.87, lng: 151.21, flag: "\u{1F1E6}\u{1F1FA}", tagline: "Down under adventure" },
  "Mexico": { lat: 20.21, lng: -87.46, flag: "\u{1F1F2}\u{1F1FD}", tagline: "Tulum nights" },
  "Spain": { lat: 41.39, lng: 2.17, flag: "\u{1F1EA}\u{1F1F8}", tagline: "Barcelona & beyond" },
  "Kenya": { lat: -1.29, lng: 36.82, flag: "\u{1F1F0}\u{1F1EA}", tagline: "Safari for two" },
  "Morocco": { lat: 31.63, lng: -7.98, flag: "\u{1F1F2}\u{1F1E6}", tagline: "Marrakech magic" },
  "South Africa": { lat: -33.92, lng: 18.42, flag: "\u{1F1FF}\u{1F1E6}", tagline: "Cape Town beauty" },
  "Turkey": { lat: 41.01, lng: 28.98, flag: "\u{1F1F9}\u{1F1F7}", tagline: "Istanbul dreams" },
  "Portugal": { lat: 38.72, lng: -9.14, flag: "\u{1F1F5}\u{1F1F9}", tagline: "Lisbon sunsets" },
  "Egypt": { lat: 30.04, lng: 31.24, flag: "\u{1F1EA}\u{1F1EC}", tagline: "Pyramids together" },
  "Jamaica": { lat: 18.11, lng: -77.30, flag: "\u{1F1EF}\u{1F1F2}", tagline: "Island vibes" },
  "UK": { lat: 51.51, lng: -0.13, flag: "\u{1F1EC}\u{1F1E7}", tagline: "London calling" },
  "Singapore": { lat: 1.35, lng: 103.82, flag: "\u{1F1F8}\u{1F1EC}", tagline: "City of the future" },
  "Canada": { lat: 43.65, lng: -79.38, flag: "\u{1F1E8}\u{1F1E6}", tagline: "Toronto vibes" },
  "Switzerland": { lat: 46.95, lng: 7.45, flag: "\u{1F1E8}\u{1F1ED}", tagline: "Alps & chocolate" },
  "Tanzania": { lat: -6.37, lng: 34.89, flag: "\u{1F1F9}\u{1F1FF}", tagline: "Zanzibar dreams" },
  "Bali": { lat: -8.41, lng: 115.19, flag: "\u{1F1EE}\u{1F1E9}", tagline: "Island paradise" },
  "Seychelles": { lat: -4.68, lng: 55.49, flag: "\u{1F1F8}\u{1F1E8}", tagline: "Hidden paradise" },
  "New York": { lat: 40.71, lng: -74.01, flag: "\u{1F1FA}\u{1F1F8}", tagline: "City that never sleeps" },
  "Germany": { lat: 52.52, lng: 13.41, flag: "\u{1F1E9}\u{1F1EA}", tagline: "Berlin nights" },
};

export const ASSET_CATEGORIES = [
  { id: "land", icon: "\u{1F30D}", label: "Land & Property", color: "#c9a96e" },
  { id: "homes", icon: "\u{1F3E0}", label: "Homes", color: "#8fb58f" },
  { id: "cars", icon: "\u{1F697}", label: "Cars", color: "#7a9cc4" },
  { id: "investments", icon: "\u{1F48E}", label: "Investments", color: "#c4787a" },
  { id: "savings", icon: "\u{1F3E6}", label: "Savings Goals", color: "#b89ad4" },
  { id: "other", icon: "\u{2728}", label: "Other", color: "#d4a574" },
];
