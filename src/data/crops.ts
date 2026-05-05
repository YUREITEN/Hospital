import wheat from "@/assets/wheat.png";
import cotton from "@/assets/cotton.png";
import rice from "@/assets/rice.png";
import kinnow from "@/assets/kinnow.png";
import groundnut from "@/assets/groundnut.png";
import sugarcane from "@/assets/sugarcane.png";
import mothbean from "@/assets/mothbean.png";
import pearlmillet from "@/assets/pearlmillet.png";

export type Crop = {
  id: string;
  name: string;
  scientific: string;
  image: string;
  price: number;
  classification: {
    kingdom: string;
    family: string;
    genus: string;
    species: string;
    type: string;
    origin: string;
  };
  conditions: {
    temperature: string;
    water: string;
    humidity: string;
    soil: string;
    season: string;
    harvest: string;
  };
  nutrition: [string, string];
};

export const CROPS: Crop[] = [
  {
    id: "wheat",
    name: "Triticum Aestivum",
    scientific: "Wheat",
    image: wheat,
    price: 4.5,
    classification: {
      kingdom: "Plantae",
      family: "Poaceae",
      genus: "Triticum",
      species: "Aestivum",
      type: "Cereal",
      origin: "Fertile Crescent",
    },
    conditions: {
      temperature: "10°C – 25°C",
      water: "450 – 650 mm",
      humidity: "50 – 60%",
      soil: "Loamy, well-drained",
      season: "Rabi (Oct – Dec)",
      harvest: "March – April",
    },
    nutrition: ["Carbs ~71g / 100g", "Protein 13g, Fiber 12g"],
  },
  {
    id: "cotton",
    name: "Gossypium Hirsutum",
    scientific: "Cotton",
    image: cotton,
    price: 9.0,
    classification: {
      kingdom: "Plantae",
      family: "Malvaceae",
      genus: "Gossypium",
      species: "Hirsutum",
      type: "Fibre",
      origin: "Mesoamerica",
    },
    conditions: {
      temperature: "21°C – 30°C",
      water: "700 – 1300 mm",
      humidity: "60 – 75%",
      soil: "Black cotton soil",
      season: "Kharif (Apr – May)",
      harvest: "Oct – December",
    },
    nutrition: ["Seed oil rich in linoleic acid", "Protein 23g per 100g seed"],
  },
  {
    id: "rice",
    name: "Oryza Sativa",
    scientific: "Rice",
    image: rice,
    price: 5.25,
    classification: {
      kingdom: "Plantae",
      family: "Poaceae",
      genus: "Oryza",
      species: "Sativa",
      type: "Cereal",
      origin: "South-East Asia",
    },
    conditions: {
      temperature: "20°C – 35°C",
      water: "1200 – 1800 mm",
      humidity: "70 – 90%",
      soil: "Clayey, water-retentive",
      season: "Kharif (June – July)",
      harvest: "Sept – November",
    },
    nutrition: ["Carbs ~80g / 100g", "Protein 7g, low fat"],
  },
  {
    id: "kinnow",
    name: "Citrus Reticulata",
    scientific: "Kinnow",
    image: kinnow,
    price: 7.75,
    classification: {
      kingdom: "Plantae",
      family: "Rutaceae",
      genus: "Citrus",
      species: "Nobilis × Deliciosa",
      type: "Fruit",
      origin: "Punjab, India",
    },
    conditions: {
      temperature: "13°C – 37°C",
      water: "500 – 750 mm",
      humidity: "55 – 70%",
      soil: "Sandy loam, deep",
      season: "Plant Feb – March",
      harvest: "Jan – February",
    },
    nutrition: ["Vitamin C ~55mg / 100g", "Fiber 2g, low calorie 50 kcal"],
  },
  {
    id: "groundnut",
    name: "Arachis Hypogaea",
    scientific: "Groundnut",
    image: groundnut,
    price: 6.5,
    classification: {
      kingdom: "Plantae",
      family: "Fabaceae",
      genus: "Arachis",
      species: "Hypogaea",
      type: "Oilseed",
      origin: "South America",
    },
    conditions: {
      temperature: "20°C – 30°C",
      water: "500 – 1000 mm",
      humidity: "50 – 75%",
      soil: "Light sandy loam",
      season: "Kharif (June – July)",
      harvest: "Oct – November",
    },
    nutrition: ["Protein 26g / 100g", "Healthy fats 49g, Vit E"],
  },
  {
    id: "sugarcane",
    name: "Saccharum Officinarum",
    scientific: "Sugarcane",
    image: sugarcane,
    price: 8.25,
    classification: {
      kingdom: "Plantae",
      family: "Poaceae",
      genus: "Saccharum",
      species: "Officinarum",
      type: "Cash crop",
      origin: "New Guinea",
    },
    conditions: {
      temperature: "20°C – 35°C",
      water: "1500 – 2500 mm",
      humidity: "75 – 85%",
      soil: "Deep loam, alluvial",
      season: "Feb – March",
      harvest: "Dec – March",
    },
    nutrition: ["Sucrose ~70% of juice", "Iron, Calcium, Potassium"],
  },
  {
    id: "mothbean",
    name: "Vigna Aconitifolia",
    scientific: "Moth Bean",
    image: mothbean,
    price: 3.75,
    classification: {
      kingdom: "Plantae",
      family: "Fabaceae",
      genus: "Vigna",
      species: "Aconitifolia",
      type: "Pulse",
      origin: "India / Pakistan",
    },
    conditions: {
      temperature: "24°C – 32°C",
      water: "200 – 500 mm",
      humidity: "30 – 50%",
      soil: "Sandy, drought-tolerant",
      season: "Kharif (July)",
      harvest: "Oct – November",
    },
    nutrition: ["Protein 23g / 100g", "Iron 11mg, high fiber"],
  },
  {
    id: "pearlmillet",
    name: "Pennisetum Glaucum",
    scientific: "Pearl Millet",
    image: pearlmillet,
    price: 4.0,
    classification: {
      kingdom: "Plantae",
      family: "Poaceae",
      genus: "Pennisetum",
      species: "Glaucum",
      type: "Millet",
      origin: "West Africa",
    },
    conditions: {
      temperature: "25°C – 35°C",
      water: "350 – 600 mm",
      humidity: "40 – 60%",
      soil: "Sandy, low-fertility ok",
      season: "Kharif (June – July)",
      harvest: "Sept – October",
    },
    nutrition: ["Protein 11g / 100g", "Iron 8mg, Magnesium rich"],
  },
];
