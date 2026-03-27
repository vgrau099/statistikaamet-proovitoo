import { useState } from "react";
import Viktoriin from "./components/Viktoriin";
import Tulemused from "./components/Tulemused";
import Tervitus from "./components/Tervitus";
import "./App.css";

const küsimused = [ // Küsimused mõtlen pärast välja
  {
    id: 1,
    küsimus: "q1",
    valikud: ["a", "b", "c"],
    õigeVastus: "a",
  },
  {
    id: 2,
    küsimus: "q2",
    valikud: ["a", "b", "c"],
    õigeVastus: "b",
  },
  {
    id: 3,
    küsimus: "q3",
    valikud: ["a", "b", "c"],
    õigeVastus: "c",
  },
  {
    id: 4,
    küsimus: "q4",
    valikud: ["a", "b", "c"],
    õigeVastus: "b",
  },
  {
    id: 5,
    küsimus: "q5",
    valikud: ["a", "b", "c"],
    õigeVastus: "a",
  },
];

export default function App() {
  const [ekraan, setEkraan] = useState("tervitus");
  const [vastused, setVastused] = useState([]);

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
      {/* header */}
      <header className="app-header">
        <div className="header-inner">
          <span className="header-title">Statistikaamet: Viktoriin</span>
        </div>
      </header>

      {/* Sub-header */}
      <div className="app-subheader">
        <div className="subheader-inner">
        </div>
      </div>

      <main className="app-main">
        {ekraan === "tervitus" && (
          <Tervitus
            onStart={alustаViktoriin}
            koguKüsimusi={küsimused.length}
          />
        )}
        {ekraan === "viktoriin" && (
          <Viktoriin
            küsimused={küsimused}
            onFinish={lõpetaViktoriin}
          />
        )}
        {ekraan === "tulemused" && (
          <Tulemused
            vastused={vastused}
            küsimused={küsimused}
            onRestart={taaskäivitaViktoriin}
          />
        )}
      </main>

      <footer className="app-footer">
      </footer>
    </div>
  );
}