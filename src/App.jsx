import { useState } from "react";
import Viktoriin from "./components/Viktoriin";
import Tulemused from "./components/Tulemused";
import Tervitus from "./components/Tervitus";
import t from "./i18n";
import "./App.css";

const küsimused = [
  {
    id: 1,
    ET: {
      küsimus: "Millal on Eesti iseseisvuspäev?",
      valikud: ["24. veebruar", "20. veebruar", "16. juuni"],
    },
    EN: {
      küsimus: "When is the Estonian Independence Day?",
      valikud: ["24 February", "20 February", "16 June"],
    },
    õigeIndeks: 0,
  },
  {
    id: 2,
    ET: {
      küsimus: "Millal sõlmiti Tartu rahuleping?",
      valikud: ["1920", "1918", "1940"],
    },
    EN: {
      küsimus: "When was the Treaty of Tartu signed?",
      valikud: ["1920", "1918", "1940"],
    },
    õigeIndeks: 0,
  },
  {
    id: 3,
    ET: {
      küsimus: "Millisesse keelkonda kuulub eesti keel?",
      valikud: ["Soome-ugri", "Indoeuroopa", "Slaavi"],
    },
    EN: {
      küsimus: "Which language group does Estonian belong to?",
      valikud: ["Finno-Ugric", "Indo-European", "Slavic"],
    },
    õigeIndeks: 0,
  },
  {
    id: 4,
    ET: {
      küsimus: "Millal asutati Tartu Ülikool?",
      valikud: ["1632", "1861", "1905"],
    },
    EN: {
      küsimus: "When was the University of Tartu founded?",
      valikud: ["1632", "1861", "1905"],
    },
    õigeIndeks: 0,
  },
  {
    id: 5,
    ET: {
      küsimus: "Millal toimus esimene üldlaulupidu Eestis?",
      valikud: ["1869", "1918", "1940"],
    },
    EN: {
      küsimus: "When was the first Song Festival held in Estonia?",
      valikud: ["1869", "1918", "1940"],
    },
    õigeIndeks: 0,
  },
];

export default function App() {
  const [ekraan, setEkraan] = useState("tervitus");
  const [vastused, setVastused] = useState([]);
  const [lang, setLang] = useState("ET");

  const tr = t[lang];

  function alustаViktoriin() {
    setVastused([]);
    setEkraan("viktoriin");
  }

  function lõpetaViktoriin(kogutudVastused) {
    setVastused(kogutudVastused);
    setEkraan("tulemused");
  }

  function taaskäivitaViktoriin() {
    setEkraan("tervitus");
  }

  return (
    <div className="app">

      {/* HEADER */}
      <header className="app-header">
        <div className="header-left">
          <a href="/">{tr.headerTitle}</a>
        </div>

        <nav className="header-social" aria-label="Social media">
          <ul>
            <li>
              <a href="https://et-ee.facebook.com/Statistikaamet" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 9.50861H10.39V8.14861C10.3168 7.41559 10.4741 6.67799 10.84 6.03861C11.1011 5.69244 11.445 5.41737 11.84 5.23861C12.2025 5.06953 12.6004 4.99062 13 5.00861C13.8614 4.97067 14.7238 5.05825 15.56 5.26861L15.21 7.34861C14.8381 7.24664 14.4554 7.18957 14.07 7.17861C13.53 7.17861 13.07 7.37861 13.07 7.93861V9.50861H15.28L15.13 11.5086H13V18.5786H10.39V11.5486H9V9.50861Z" />
                </svg>
                <span className="tooltip">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://x.com/eestistatistika" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.61 7.26384C18.1031 7.49376 17.5632 7.64226 17.01 7.70384C17.5875 7.35267 18.0203 6.80639 18.23 6.16384C17.6842 6.49857 17.0858 6.73862 16.46 6.87384C16.0704 6.47295 15.5742 6.19189 15.03 6.06384C14.4857 5.94644 13.9188 5.99164 13.4 6.19384C12.8824 6.39069 12.4362 6.73923 12.12 7.19384C11.9018 7.51163 11.7518 7.87119 11.6795 8.24984C11.6073 8.62849 11.6142 9.01802 11.7 9.39384C10.5888 9.33743 9.50193 9.04782 8.51 8.54384C7.51733 8.0422 6.64161 7.33685 5.94 6.47384C5.59887 7.08142 5.49215 7.79292 5.64 8.47384C5.79977 9.16596 6.21842 9.77067 6.81 10.1638C6.36943 10.1715 5.93359 10.0719 5.54 9.87384C5.54352 10.5199 5.76954 11.145 6.18 11.6438C6.58121 12.1574 7.15179 12.5118 7.79 12.6438C7.54792 12.7039 7.29941 12.7341 7.05 12.7338C6.86871 12.737 6.68762 12.7203 6.51 12.6838C6.6863 13.2403 7.03328 13.7271 7.50174 14.0753C7.97019 14.4235 8.53637 14.6154 9.12 14.6238C7.95393 15.5398 6.47267 15.9569 5 15.7838C6.20006 16.5558 7.58618 16.9896 9.0122 17.0396C10.4382 17.0896 11.8513 16.7539 13.1025 16.0679C14.3537 15.3819 15.3966 14.371 16.1213 13.1419C16.8459 11.9127 17.2255 10.5107 17.22 9.08384V8.70384C17.7637 8.30848 18.2341 7.82115 18.61 7.26384Z" />
                </svg>
                <span className="tooltip">X (Twitter)</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/statistikaamet-statistics-estonia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.98067 18.5149H5.34067V10.0049H7.98067V18.5149ZM6.59067 9.00489C6.38721 9.0233 6.1822 8.99596 5.99067 8.9249C5.79666 8.86102 5.61913 8.75518 5.47068 8.61489C5.3265 8.47528 5.21099 8.30882 5.13067 8.12489C5.04397 7.94035 4.99957 7.73879 5.00068 7.5349C4.99436 7.32537 5.03233 7.11687 5.1121 6.92301C5.19186 6.72916 5.31163 6.55432 5.46358 6.40992C5.61554 6.26552 5.79625 6.1548 5.99392 6.08501C6.19158 6.01522 6.40174 5.98792 6.61068 6.0049C6.81399 5.99187 7.01787 6.01906 7.21067 6.0849C7.40292 6.15256 7.57972 6.25796 7.73067 6.3949C7.88126 6.53504 8.00054 6.70543 8.08068 6.8949C8.16018 7.08181 8.20425 7.28187 8.21067 7.4849C8.21569 7.69451 8.17643 7.90282 8.09543 8.09622C8.01443 8.28962 7.89353 8.46374 7.74062 8.60721C7.58772 8.75067 7.40625 8.86025 7.20809 8.92878C7.00993 8.99731 6.79954 9.02325 6.59067 9.00489ZM18.5907 18.5649H15.5907V14.1249C15.5907 12.9849 15.1207 12.1849 14.0807 12.1849C13.7607 12.1842 13.4488 12.2858 13.1907 12.4749C12.9335 12.6613 12.7411 12.9236 12.6407 13.2249C12.5807 13.4497 12.5604 13.6832 12.5807 13.9149V18.5149H9.58068C9.58068 18.5149 9.58068 10.7349 9.58068 10.0249H12.5807V11.3749C12.8388 10.9182 13.2234 10.5459 13.6883 10.3028C14.1531 10.0598 14.6784 9.95629 15.2007 10.0049C17.0907 10.0049 18.5607 11.2249 18.5607 13.8549L18.5907 18.5649Z" />
                </svg>
                <span className="tooltip">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/Statistikaamet/featured" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4506 11.7808L9.99055 14.4008V9.1708L14.4506 11.7808ZM18.6106 14.2008V9.3408C18.6174 9.03078 18.5613 8.72258 18.4455 8.43491C18.3297 8.14724 18.1567 7.88608 17.9369 7.66728C17.7172 7.44847 17.4553 7.27657 17.1671 7.16201C16.879 7.04744 16.5705 6.9926 16.2606 7.0008H7.34055C7.03139 6.99397 6.72405 7.04983 6.43707 7.16501C6.15008 7.28019 5.88939 7.4523 5.67072 7.67097C5.45206 7.88963 5.27995 8.15032 5.16477 8.43731C5.04959 8.7243 4.99373 9.03164 5.00056 9.3408V14.2108C4.99373 14.52 5.04959 14.8273 5.16477 15.1143C5.27995 15.4013 5.45206 15.662 5.67072 15.8806C5.88939 16.0993 6.15008 16.2714 6.43707 16.3866C6.72405 16.5018 7.03139 16.5576 7.34055 16.5508H16.2606C16.5664 16.5522 16.8694 16.4923 17.1517 16.3747C17.434 16.2571 17.6899 16.0842 17.9043 15.8661C18.1187 15.648 18.2872 15.3891 18.3999 15.1048C18.5126 14.8205 18.5672 14.5166 18.5606 14.2108" />
                </svg>
                <span className="tooltip">YouTube</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/eesti_statistika/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.625 5H9.375C6.95913 5 5 6.95913 5 9.375V14.625C5 17.0409 6.95913 19 9.375 19H14.625C17.0409 19 19 17.0409 19 14.625V9.375C19 6.95913 17.0409 5 14.625 5ZM17.6875 14.625C17.6875 16.3138 16.3138 17.6875 14.625 17.6875H9.375C7.68625 17.6875 6.3125 16.3138 6.3125 14.625V9.375C6.3125 7.68625 7.68625 6.3125 9.375 6.3125H14.625C16.3138 6.3125 17.6875 7.68625 17.6875 9.375V14.625Z" />
                  <path d="M12 8.5C10.0671 8.5 8.5 10.0671 8.5 12C8.5 13.9329 10.0671 15.5 12 15.5C13.9329 15.5 15.5 13.9329 15.5 12C15.5 10.0671 13.9329 8.5 12 8.5ZM12 14.1875C10.7943 14.1875 9.8125 13.2057 9.8125 12C9.8125 10.7934 10.7943 9.8125 12 9.8125C13.2057 9.8125 14.1875 10.7934 14.1875 12C14.1875 13.2057 13.2057 14.1875 12 14.1875Z" />
                  <path d="M15.7623 8.70374C16.0198 8.70374 16.2286 8.49494 16.2286 8.23737C16.2286 7.9798 16.0198 7.771 15.7623 7.771C15.5047 7.771 15.2959 7.9798 15.2959 8.23737C15.2959 8.49494 15.5047 8.70374 15.7623 8.70374Z" />
                </svg>
                <span className="tooltip">Instagram</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-right">
          <a
            className="header-accessibility"
            href={tr.accessibilityUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tr.accessibility}
          </a>

          <div className="header-lang">
            <button
              className={lang === "ET" ? "active" : ""}
              onClick={() => setLang("ET")}
            >
              EST
            </button>
            <span>|</span>
            <button
              className={lang === "EN" ? "active" : ""}
              onClick={() => setLang("EN")}
            >
              ENG
            </button>
          </div>
        </div>
      </header>

      {/* SUBHEADER */}
      <div className="app-subheader">
        <div className="subheader-logo">
          <img
            src="https://brand.stat.ee/assets/img/logo.svg"
            alt="Statistikaamet"
          />
        </div>
      </div>

      {/* MAIN */}
      <main className="app-main">
        <div className="main-layout">

          {/* LEFT */}
          <div className="main-content">
            {ekraan === "tervitus" && (
              <Tervitus
                onStart={alustаViktoriin}
                koguKüsimusi={küsimused.length}
                lang={lang}
              />
            )}

            {ekraan === "viktoriin" && (
              <Viktoriin
                küsimused={küsimused}
                onFinish={lõpetaViktoriin}
                lang={lang}
              />
            )}

            {ekraan === "tulemused" && (
              <Tulemused
                vastused={vastused}
                küsimused={küsimused}
                onRestart={taaskäivitaViktoriin}
                lang={lang}
              />
            )}
          </div>

          {/* RIGHT */}
          {ekraan !== "tulemused" && (
            <div className="side-image">

            </div>
          )}

        </div>
      </main>

      {/* FOOTER */}
      <footer className="app-footer">
        <div className="footer-inner">

          {/* Box 1 — Contacts */}
          <div className="footer-box">
            <h2 className="footer-box-title">{tr.footerContacts}</h2>
            <div className="footer-box-links">
              <a className="footer-link footer-link-contact" href="tel:+3726259300">
                <img src="/src/assets/phone.svg" alt="" width="18" height="18" style={{filter:"invert(1)",marginRight:"0.5em",verticalAlign:"middle"}} />
                +372 625 9300
              </a>
              <a className="footer-link footer-link-contact" href="mailto:stat@stat.ee">
                <img src="/src/assets/email.svg" alt="" width="18" height="18" style={{filter:"invert(1)",marginRight:"0.5em",verticalAlign:"middle"}} />
                stat@stat.ee
              </a>
            </div>
          </div>

          {/* Box 2 — Quick links */}
          <div className="footer-box">
            <h2 className="footer-box-title">{tr.footerQuick}</h2>
            <div className="footer-box-links">
              <a
                className="footer-link"
                href={tr.footerSitemapUrl}
                target="_blank"
                rel="noreferrer"
              >
                {tr.footerSitemap}
              </a>
            </div>
          </div>

          {/* Box 3 — Data protection */}
          <div className="footer-box">
            <h2 className="footer-box-title">{tr.footerPrivacy}</h2>
            <div className="footer-box-links">
              <a
                className="footer-link"
                href={tr.footerPrivacyUrl}
                target="_blank"
                rel="noreferrer"
              >
                {tr.footerPrivacyLabel}
              </a>
              <button className="footer-btn" onClick={() => {}} type="button">
                {tr.footerCookies}
              </button>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}