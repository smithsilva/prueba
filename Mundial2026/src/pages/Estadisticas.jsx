// src/pages/Estadisticas.jsx

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const grupos = {
  "Grupo A": [
    { nombre: "Colombia", bandera: "https://flagcdn.com/w160/co.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Brasil",   bandera: "https://flagcdn.com/w160/br.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "México",   bandera: "https://flagcdn.com/w160/mx.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Canadá",   bandera: "https://flagcdn.com/w160/ca.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
  ],
  "Grupo B": [
    { nombre: "Argentina",      bandera: "https://flagcdn.com/w160/ar.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Francia",        bandera: "https://flagcdn.com/w160/fr.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Uruguay",        bandera: "https://flagcdn.com/w160/uy.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Estados Unidos", bandera: "https://flagcdn.com/w160/us.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
  ],
  "Grupo C": [
    { nombre: "España",    bandera: "https://flagcdn.com/w160/es.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Alemania",  bandera: "https://flagcdn.com/w160/de.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Portugal",  bandera: "https://flagcdn.com/w160/pt.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Marruecos", bandera: "https://flagcdn.com/w160/ma.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
  ],
  "Grupo D": [
    { nombre: "Inglaterra",   bandera: "https://flagcdn.com/w160/gb-eng.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Italia",       bandera: "https://flagcdn.com/w160/it.png",     PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Países Bajos", bandera: "https://flagcdn.com/w160/nl.png",     PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Croacia",      bandera: "https://flagcdn.com/w160/hr.png",     PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
  ],
  "Grupo E": [
    { nombre: "Bélgica",   bandera: "https://flagcdn.com/w160/be.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Suiza",     bandera: "https://flagcdn.com/w160/ch.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Dinamarca", bandera: "https://flagcdn.com/w160/dk.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Suecia",    bandera: "https://flagcdn.com/w160/se.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
  ],
  "Grupo F": [
    { nombre: "Japón",         bandera: "https://flagcdn.com/w160/jp.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Corea del Sur", bandera: "https://flagcdn.com/w160/kr.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Australia",     bandera: "https://flagcdn.com/w160/au.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Irán",          bandera: "https://flagcdn.com/w160/ir.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
  ],
  "Grupo G": [
    { nombre: "Nigeria",  bandera: "https://flagcdn.com/w160/ng.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Senegal",  bandera: "https://flagcdn.com/w160/sn.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Camerún",  bandera: "https://flagcdn.com/w160/cm.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Egipto",   bandera: "https://flagcdn.com/w160/eg.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
  ],
  "Grupo H": [
    { nombre: "Chile",    bandera: "https://flagcdn.com/w160/cl.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Perú",     bandera: "https://flagcdn.com/w160/pe.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Ecuador",  bandera: "https://flagcdn.com/w160/ec.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
    { nombre: "Paraguay", bandera: "https://flagcdn.com/w160/py.png", PJ: 0, G: 0, E: 0, P: 0, GF: 0, GC: 0 },
  ],
};

const cols = ["PJ", "G", "E", "P", "GF", "GC", "DG", "Pts"];

export default function Estadisticas() {
  const grupoKeys = Object.keys(grupos);
  const [grupoActivo, setGrupoActivo] = useState(grupoKeys[0]);

  const equipos = grupos[grupoActivo].map((eq) => ({
    ...eq,
    DG: eq.GF - eq.GC,
    Pts: eq.G * 3 + eq.E,
  }));

  return (
    <>
      <Navbar />

      <div style={{ background: "#f5f5f5", minHeight: "100vh", padding: "2rem" }}>

        <h1 style={{ color: "#0a1628", marginBottom: "1.5rem" }}>Estadísticas — Fase de Grupos</h1>

        {/* Tabs de grupos */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "1.5rem",
          }}
        >
          {grupoKeys.map((g) => (
            <button
              key={g}
              onClick={() => setGrupoActivo(g)}
              style={{
                padding: "7px 18px",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 500,
                background: grupoActivo === g ? "#0a1628" : "#fff",
                color: grupoActivo === g ? "#c9a84c" : "#555",
                boxShadow: grupoActivo === g
                  ? "0 2px 8px rgba(10,22,40,0.25)"
                  : "0 1px 4px rgba(0,0,0,0.08)",
                transition: "all 0.2s",
              }}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Tabla */}
        <div
          style={{
            background: "#fff",
            borderRadius: "14px",
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#0a1628" }}>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "12px",
                    fontWeight: 500,
                    width: "40%",
                  }}
                >
                  Equipo
                </th>
                {cols.map((col) => (
                  <th
                    key={col}
                    style={{
                      padding: "12px 10px",
                      textAlign: "center",
                      color: col === "Pts" ? "#c9a84c" : "rgba(255,255,255,0.5)",
                      fontSize: "12px",
                      fontWeight: col === "Pts" ? 700 : 500,
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {equipos.map((eq, i) => (
                <tr
                  key={i}
                  style={{
                    background: i % 2 === 0 ? "#fff" : "#f9f9f9",
                    borderBottom: "0.5px solid #ebebeb",
                  }}
                >
                  {/* Equipo */}
                  <td style={{ padding: "12px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span
                        style={{
                          fontSize: "11px",
                          color: "#aaa",
                          width: "16px",
                          textAlign: "center",
                          flexShrink: 0,
                        }}
                      >
                        {i + 1}
                      </span>
                      <img
                        src={eq.bandera}
                        alt={eq.nombre}
                        style={{
                          width: "36px",
                          height: "24px",
                          objectFit: "cover",
                          borderRadius: "3px",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: "14px", fontWeight: 500, color: "#0a1628" }}>
                        {eq.nombre}
                      </span>
                    </div>
                  </td>

                  {/* Estadísticas */}
                  {cols.map((col) => (
                    <td
                      key={col}
                      style={{
                        padding: "12px 10px",
                        textAlign: "center",
                        fontSize: "14px",
                        fontWeight: col === "Pts" ? 700 : 400,
                        color: col === "Pts" ? "#0a1628" : "#555",
                      }}
                    >
                      {eq[col]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Leyenda */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "1rem",
            flexWrap: "wrap",
          }}
        >
          {[
            ["PJ", "Partidos jugados"],
            ["G", "Ganados"],
            ["E", "Empatados"],
            ["P", "Perdidos"],
            ["GF", "Goles a favor"],
            ["GC", "Goles en contra"],
            ["DG", "Diferencia de goles"],
            ["Pts", "Puntos"],
          ].map(([key, desc]) => (
            <span key={key} style={{ fontSize: "11px", color: "#999" }}>
              <strong style={{ color: "#555" }}>{key}</strong> — {desc}
            </span>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}