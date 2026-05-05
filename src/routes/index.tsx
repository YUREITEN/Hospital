import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero1 from "@/assets/hospital-hero1.jpg";
import hero2 from "@/assets/hospital-hero2.jpg";
import hero3 from "@/assets/hospital-hero3.jpg";
import apollo from "@/assets/tantia.png";
import satyam from "@/assets/hosp-satyam.png";
import aiims from "@/assets/aastha.png";
import maxh from "@/assets/hosp-max.jpg";
import medanta from "@/assets/medanta.png";
import manipal from "@/assets/perival.png";
import cStetho from "@/assets/cartoon-stethoscope.png";
import cSyringe from "@/assets/cartoon-syringe.png";
import cBandage from "@/assets/cartoon-bandage.png";
import cPill from "@/assets/cartoon-pill.png";
import cScissors from "@/assets/cartoon-scissors.png";
import cTherm from "@/assets/cartoon-thermometer.png";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const COLLECTIONS = [
  // Change collection titles and images here.
  { title: "Best Multispeciality", places: "8 Hospitals", img: apollo },
  { title: "Trending Cardiac Centres", places: "12 Hospitals", img: medanta },
  { title: "Top Maternity Care", places: "6 Hospitals", img: manipal },
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
    time: "30 min",
  },
  {
    name: "Satyam Multispeciality Hospital",
    img: satyam,
    rating: "4.5",
    website:
      "https://www.justdial.com/Sri-Ganganagar-Rajasthan/Satyam-Multispeciality-Hospital-Jwahar-Nagar-Ganganagar/9999PX154-X154-131206110228-Z6R8_BZDET",
    specs: "Orthopedics, Neurology",
    price: "Rs. 500 consult",
    time: "25 min",
  },
  {
    name: "Aastha Hospital",
    img: aiims,
    rating: "4.8",
    website:
      "https://www.justdial.com/Sri-Ganganagar-Rajasthan/Aastha-Kidney-General-Hospital-Behind-Khurana-Palace-Ganganagar/9999PX154-X154-140116155908-B5C7_BZDET?trkid=9940619209-fcomp-cmpucars&term=aastha%20hospital%20sgnr&ncatid=10253670&area=&search=Showing%20Results%20for%20%22Aastha%20Hospital%20Sgnr%22%20in%20Sri%20Ganganagar%20Rajasthan&mncatname=aastha%20hospital%20sgnr&ftterm=Aastha%20Hospital%20Sgnr&csell=&oncatid=10253670&abd_btn=&abd_heading=&isFreetxt=1&bd=2&cat_b2b_flag=&searchfrom=lst&thumbnail=",
    specs: "All specialities",
    price: "Rs. 50 consult",
    time: "1 hr",
  },
  {
    name: "Max Super Specialty",
    img: maxh,
    rating: "4.4",
    website:
      "https://www.justdial.com/Sri-Ganganagar-Rajasthan/Max-Care-Hospital-Cancer-Care-Centre-Opposite-Andh-Vidhalaya-Ganganagar/9999PX154-X154-131220134907-W2N4_BZDET?auto=1&trkid=9940077877&term=Max%20Care%20Hospital%20&%20Cancer%20Care%20Centre",
    specs: "Oncology, Surgery",
    price: "Rs. 700 consult",
    time: "20 min",
  },
  {
    name: "Medanta Medicity",
    img: medanta,
    rating: "4.7",
    website:
      "https://www.bajajfinservhealth.in/hospitals/sri-ganganagar/medanta-s-n-superspecialty-hospital-ridhi-sidhi-enclave",
    specs: "Cardiac, Transplant",
    price: "Rs. 800 consult",
    time: "35 min",
  },
  {
    name: "Periwal Nursing Home",
    img: manipal,
    rating: "4.3",
    website: "https://periwalnursinghome.com/",
    specs: "Pediatrics, Maternity",
    price: "Rs. 550 consult",
    time: "28 min",
  },
];

const CHIPS = [
  "Filters",
  "Rating: 4.0+",
  "Open Now",
  "Cardiology",
  "Pediatrics",
  "Pharmacy",
  "Insurance",
];

function Index() {
  const [activeChip, setActiveChip] = useState("");

  return (
    <main>
      <section className="hero">
        <div className="hero-slide" style={{ backgroundImage: `url(${hero1})` }} />
        <div className="hero-slide" style={{ backgroundImage: `url(${hero2})` }} />
        <div className="hero-slide" style={{ backgroundImage: `url(${hero3})` }} />

        <nav className="top-nav">
          <div className="logo">HOSPITALS </div>

          <div className="nav-links">
            <button>Log in</button>
            <button className="signup">Sign up</button>
          </div>
        </nav>

        <div className="hero-content">
          <h1>Find the best hospitals &amp; doctors near you</h1>
          <p className="tagline">Discover the best multispeciality care in your city</p>
          <div className="search-bar">
            <div className="loc">
              <span aria-hidden="true">&#128205;</span>
              <span>Sri Ganganagar</span>
              <span aria-hidden="true">&#9662;</span>
            </div>
            <div className="q">
              <span aria-hidden="true">&#128269;</span>
              <input placeholder="Search for hospitals, doctors or specialities" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <svg className="squiggle" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path
            d="M0,300 C200,100 400,500 600,300 S1000,100 1200,300"
            fill="none"
            stroke="oklch(0.68 0.22 18)"
            strokeWidth="1.5"
          />
          <path
            d="M0,400 C300,200 500,600 800,400 S1100,200 1200,400"
            fill="none"
            stroke="oklch(0.68 0.22 18)"
            strokeWidth="1"
            opacity="0.6"
          />
        </svg>
        <img src={cStetho} className="float f1" alt="" />
        <img src={cBandage} className="float f2" alt="" />
        <img src={cSyringe} className="float f3" alt="" />
        <img src={cPill} className="float f4" alt="" />
        <img src={cScissors} className="float f5" alt="" />
        <img src={cTherm} className="float f6" alt="" />
        <h2>Better health for more people</h2>
        <p>
          For over a decade, we've connected our patients with the finest doctors and hospitals,
          delivered care right to their doorstep
        </p>
        <div className="stats-bar">
          <div className="stat">
            <div className="num">50+</div>
            <div className="label">Clinics and hospitals</div>
          </div>
          <div className="stat">
            <div className="num">800+</div>
            <div className="label">Doctors</div>
          </div>
          <div className="stat">
            <div className="num">10k+</div>
            <div className="label">Patients served</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Collections</h2>
        <p style={{ color: "var(--muted)", marginTop: "-16px", marginBottom: 20, fontSize: 14 }}>
          Explore curated lists of top hospitals, based on trends across New Delhi
        </p>
        <div className="collections">
          {COLLECTIONS.map((collection) => (
            <div key={collection.title} className="collection-card">
              <img src={collection.img} alt={collection.title} loading="lazy" />
              <div className="overlay">
                <h3>{collection.title}</h3>
                <div className="meta">{collection.places} &rarr;</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Hospitals near you</h2>
        <div className="chips">
          {CHIPS.map((chip) => (
            <button
              key={chip}
              className="chip"
              onClick={() => setActiveChip(chip)}
              style={
                activeChip === chip ? { borderColor: "var(--brand)", color: "var(--brand)" } : {}
              }
              type="button"
            >
              {chip}
            </button>
          ))}
        </div>
        <div className="hosp-grid">
          {HOSPITALS.map((hospital) => (
            <a
              key={hospital.name}
              className="hosp-card"
              href={hospital.website}
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-wrap">
                <img src={hospital.img} alt={hospital.name} loading="lazy" />
                <div className="promo">Cashless &middot; Insurance</div>
              </div>
              <div className="body">
                <div className="head">
                  <div className="name">{hospital.name}</div>
                  <div className="rating">{hospital.rating} &#9733;</div>
                </div>
                <div className="specs">{hospital.specs}</div>
                <div className="meta">
                  <span>{hospital.price}</span>
                  <span>{hospital.time} away</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <p>श्री GANGANAGAR </p>
            <p>Rajasthan, India</p>
            <div>
              <p>Experience the elegance, culture, and innovation of Sri Ganganagar.</p>
            </div>
            <div>
              <p>© 2026 Sri Ganganagar. All rights reserved.</p>
              <h2>Designed & Developed by Gouri Goyal</h2>
            </div>
            {/* <h4>MEDICONNECT</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Careers</li>
              <li>Team</li>
            </ul>
          </div>
          <div>
            <h4>FOR PATIENTS</h4>
            <ul>
              <li>Book Appointment</li>
              <li>Find Doctor</li>
              <li>Emergency</li>
              <li>Pharmacy</li>
            </ul>
          </div>
          <div>
            <h4>FOR HOSPITALS</h4>
            <ul>
              <li>Partner with us</li>
              <li>Apps for you</li>
            </ul>
          </div>
          <div>
            <h4>LEARN MORE</h4>
            <ul>
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
            // </ul>*/}
          </div>
        </div>
      </footer>
    </main>
  );
}
