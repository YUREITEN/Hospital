import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-Lmz9nypC.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const hero1 = "/Hospital/assets/hospital-hero1-wggTi9gw.jpg";
const hero2 = "/Hospital/assets/hospital-hero2-BKMcnrM2.jpg";
const hero3 = "/Hospital/assets/hospital-hero3-CNpHWGQH.jpg";
const apollo = "/Hospital/assets/tantia-B2F39aj8.png";
const satyam = "/Hospital/assets/hosp-satyam-C-eEEqOD.png";
const aiims = "/Hospital/assets/aastha-ChzKC_E_.png";
const maxh = "/Hospital/assets/hosp-max-CSxHEKdc.jpg";
const medanta = "/Hospital/assets/medanta-GGwG3gIX.png";
const manipal = "/Hospital/assets/perival-aoiXcoUU.png";
const cStetho = "/Hospital/assets/cartoon-stethoscope-DRyA4_w3.png";
const cSyringe = "/Hospital/assets/cartoon-syringe-DRNq8njQ.png";
const cBandage = "/Hospital/assets/cartoon-bandage-C4cmVmgP.png";
const cPill = "/Hospital/assets/cartoon-pill-BzQoukH9.png";
const cScissors = "/Hospital/assets/cartoon-scissors-BI68W9Vj.png";
const cTherm = "/Hospital/assets/cartoon-thermometer-DBFiGTGd.png";
const COLLECTIONS = [
  // Change collection titles and images here.
  {
    title: "Best Multispeciality",
    places: "8 Hospitals",
    img: apollo
  },
  {
    title: "Trending Cardiac Centres",
    places: "12 Hospitals",
    img: medanta
  },
  {
    title: "Top Maternity Care",
    places: "6 Hospitals",
    img: manipal
  }
];
const HOSPITALS = [
  // Change hospital titles and card images here.
  {
    name: "Tantia Hospital",
    img: apollo,
    rating: "4.6",
    specs: "Multispeciality, Cardiology",
    website: "https://www.tantiahospitals.com/",
    price: "Rs. 500 consult",
    time: "30 min"
  },
  {
    name: "Satyam Multispeciality Hospital",
    img: satyam,
    rating: "4.5",
    website: "https://www.justdial.com/Sri-Ganganagar-Rajasthan/Satyam-Multispeciality-Hospital-Jwahar-Nagar-Ganganagar/9999PX154-X154-131206110228-Z6R8_BZDET",
    specs: "Orthopedics, Neurology",
    price: "Rs. 500 consult",
    time: "25 min"
  },
  {
    name: "Aastha Hospital",
    img: aiims,
    rating: "4.8",
    website: "https://www.justdial.com/Sri-Ganganagar-Rajasthan/Aastha-Kidney-General-Hospital-Behind-Khurana-Palace-Ganganagar/9999PX154-X154-140116155908-B5C7_BZDET?trkid=9940619209-fcomp-cmpucars&term=aastha%20hospital%20sgnr&ncatid=10253670&area=&search=Showing%20Results%20for%20%22Aastha%20Hospital%20Sgnr%22%20in%20Sri%20Ganganagar%20Rajasthan&mncatname=aastha%20hospital%20sgnr&ftterm=Aastha%20Hospital%20Sgnr&csell=&oncatid=10253670&abd_btn=&abd_heading=&isFreetxt=1&bd=2&cat_b2b_flag=&searchfrom=lst&thumbnail=",
    specs: "All specialities",
    price: "Rs. 50 consult",
    time: "1 hr"
  },
  {
    name: "Max Super Specialty",
    img: maxh,
    rating: "4.4",
    website: "https://www.justdial.com/Sri-Ganganagar-Rajasthan/Max-Care-Hospital-Cancer-Care-Centre-Opposite-Andh-Vidhalaya-Ganganagar/9999PX154-X154-131220134907-W2N4_BZDET?auto=1&trkid=9940077877&term=Max%20Care%20Hospital%20&%20Cancer%20Care%20Centre",
    specs: "Oncology, Surgery",
    price: "Rs. 700 consult",
    time: "20 min"
  },
  {
    name: "Medanta Medicity",
    img: medanta,
    rating: "4.7",
    website: "https://www.bajajfinservhealth.in/hospitals/sri-ganganagar/medanta-s-n-superspecialty-hospital-ridhi-sidhi-enclave",
    specs: "Cardiac, Transplant",
    price: "Rs. 800 consult",
    time: "35 min"
  },
  {
    name: "Periwal Nursing Home",
    img: manipal,
    rating: "4.3",
    website: "https://periwalnursinghome.com/",
    specs: "Pediatrics, Maternity",
    price: "Rs. 550 consult",
    time: "28 min"
  }
];
const CHIPS = ["Filters", "Rating: 4.0+", "Open Now", "Cardiology", "Pediatrics", "Pharmacy", "Insurance"];
function Index() {
  const [activeChip, setActiveChip] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-slide", style: {
        backgroundImage: `url(${hero1})`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-slide", style: {
        backgroundImage: `url(${hero2})`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-slide", style: {
        backgroundImage: `url(${hero3})`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "top-nav", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: "HOSPITALS " }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nav-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: "Log in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "signup", children: "Sign up" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Find the best hospitals & doctors near you" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tagline", children: "Discover the best multispeciality care in your city" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-bar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "loc", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "📍" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sri Ganganagar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "▾" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "q", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "🔍" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Search for hospitals, doctors or specialities" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mission", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "squiggle", viewBox: "0 0 1200 600", preserveAspectRatio: "none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,300 C200,100 400,500 600,300 S1000,100 1200,300", fill: "none", stroke: "oklch(0.68 0.22 18)", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,400 C300,200 500,600 800,400 S1100,200 1200,400", fill: "none", stroke: "oklch(0.68 0.22 18)", strokeWidth: "1", opacity: "0.6" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cStetho, className: "float f1", alt: "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cBandage, className: "float f2", alt: "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cSyringe, className: "float f3", alt: "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cPill, className: "float f4", alt: "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cScissors, className: "float f5", alt: "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cTherm, className: "float f6", alt: "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Better health for more people" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For over a decade, we've connected our patients with the finest doctors and hospitals, delivered care right to their doorstep" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stats-bar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "num", children: "50+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label", children: "Clinics and hospitals" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "num", children: "800+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label", children: "Doctors" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "num", children: "10k+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label", children: "Patients served" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Collections" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        color: "var(--muted)",
        marginTop: "-16px",
        marginBottom: 20,
        fontSize: 14
      }, children: "Explore curated lists of top hospitals, based on trends across New Delhi" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "collections", children: COLLECTIONS.map((collection) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "collection-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: collection.img, alt: collection.title, loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overlay", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: collection.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "meta", children: [
            collection.places,
            " →"
          ] })
        ] })
      ] }, collection.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Hospitals near you" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chips", children: CHIPS.map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "chip", onClick: () => setActiveChip(chip), style: activeChip === chip ? {
        borderColor: "var(--brand)",
        color: "var(--brand)"
      } : {}, type: "button", children: chip }, chip)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hosp-grid", children: HOSPITALS.map((hospital) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "hosp-card", href: hospital.website, target: "_blank", rel: "noreferrer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "img-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hospital.img, alt: hospital.name, loading: "lazy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "promo", children: "Cashless · Insurance" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "head", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "name", children: hospital.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rating", children: [
              hospital.rating,
              " ★"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "specs", children: hospital.specs }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "meta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: hospital.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              hospital.time,
              " away"
            ] })
          ] })
        ] })
      ] }, hospital.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "footer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "श्री GANGANAGAR " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Rajasthan, India" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Experience the elegance, culture, and innovation of Sri Ganganagar." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2026 Sri Ganganagar. All rights reserved." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Designed & Developed by Gouri Goyal" })
      ] })
    ] }) }) })
  ] });
}
export {
  Index as component
};
