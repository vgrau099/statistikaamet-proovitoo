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
                <span className="tooltip">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://x.com/eestistatistika" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <span className="tooltip">X (Twitter)</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/statistikaamet-statistics-estonia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span className="tooltip">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/Statistikaamet/featured" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <span className="tooltip">YouTube</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/eesti_statistika/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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

          <div className="footer-box">
            <h2 className="footer-box-title">{tr.footerContacts}</h2>
            <div className="footer-box-links">
              <a className="footer-link footer-link-contact" href="tel:+3726259300">
                +372 625 9300
              </a>
              <a className="footer-link footer-link-contact" href="mailto:stat@stat.ee">
                stat@stat.ee
              </a>
            </div>
          </div>

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
              <button className="footer-btn" type="button">
                {tr.footerCookies}
              </button>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}