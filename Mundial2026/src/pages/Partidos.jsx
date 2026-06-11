import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const partidos = [
  {
    home: "Colombia",
    homeFlag: "https://flagcdn.com/w160/co.png",
    away: "Brasil",
    awayFlag: "https://flagcdn.com/w160/br.png",
    date: "15 Jun 2026",
    time: "7:00 PM",
    group: "Grupo A",
  },
  {
    home: "Argentina",
    homeFlag: "https://flagcdn.com/w160/ar.png",
    away: "Francia",
    awayFlag: "https://flagcdn.com/w160/fr.png",
    date: "16 Jun 2026",
    time: "8:00 PM",
    group: "Grupo B",
  },
  {
    home: "España",
    homeFlag: "https://flagcdn.com/w160/es.png",
    away: "Alemania",
    awayFlag: "https://flagcdn.com/w160/de.png",
    date: "18 Jun 2026",
    time: "6:00 PM",
    group: "Grupo C",
  },
  {
    home: "México",
    homeFlag: "https://flagcdn.com/w160/mx.png",
    away: "Canadá",
    awayFlag: "https://flagcdn.com/w160/ca.png",
    date: "16 Jun 2026",
    time: "8:00 PM",
    group: "Grupo A",
  },
  {
    home: "Uruguay",
    homeFlag: "https://flagcdn.com/w160/uy.png",
    away: "Estados Unidos",
    awayFlag: "https://flagcdn.com/w160/us.png",
    date: "18 Jun 2026",
    time: "9:00 PM",
    group: "Grupo B",
  },
  {
    home: "Portugal",
    homeFlag: "https://flagcdn.com/w160/pt.png",
    away: "Marruecos",
    awayFlag: "https://flagcdn.com/w160/ma.png",
    date: "20 Jun 2026",
    time: "8:00 PM",
    group: "Grupo C",
  },
  {
    home: "Inglaterra",
    homeFlag: "https://flagcdn.com/w160/gb-eng.png",
    away: "Italia",
    awayFlag: "https://flagcdn.com/w160/it.png",
    date: "21 Jun 2026",
    time: "7:00 PM",
    group: "Grupo D",
  },
  {
    home: "Países Bajos",
    homeFlag: "https://flagcdn.com/w160/nl.png",
    away: "Croacia",
    awayFlag: "https://flagcdn.com/w160/hr.png",
    date: "22 Jun 2026",
    time: "9:00 PM",
    group: "Grupo D",
  },
  {
    home: "Bélgica",
    homeFlag: "https://flagcdn.com/w160/be.png",
    away: "Suiza",
    awayFlag: "https://flagcdn.com/w160/ch.png",
    date: "23 Jun 2026",
    time: "6:00 PM",
    group: "Grupo E",
  },
  {
    home: "Dinamarca",
    homeFlag: "https://flagcdn.com/w160/dk.png",
    away: "Suecia",
    awayFlag: "https://flagcdn.com/w160/se.png",
    date: "24 Jun 2026",
    time: "8:00 PM",
    group: "Grupo E",
  },
  {
    home: "Japón",
    homeFlag: "https://flagcdn.com/w160/jp.png",
    away: "Corea del Sur",
    awayFlag: "https://flagcdn.com/w160/kr.png",
    date: "25 Jun 2026",
    time: "7:00 PM",
    group: "Grupo F",
  },
  {
    home: "Australia",
    homeFlag: "https://flagcdn.com/w160/au.png",
    away: "Irán",
    awayFlag: "https://flagcdn.com/w160/ir.png",
    date: "26 Jun 2026",
    time: "9:00 PM",
    group: "Grupo F",
  },
  {
    home: "Nigeria",
    homeFlag: "https://flagcdn.com/w160/ng.png",
    away: "Senegal",
    awayFlag: "https://flagcdn.com/w160/sn.png",
    date: "27 Jun 2026",
    time: "6:00 PM",
    group: "Grupo G",
  },
  {
    home: "Camerún",
    homeFlag: "https://flagcdn.com/w160/cm.png",
    away: "Egipto",
    awayFlag: "https://flagcdn.com/w160/eg.png",
    date: "28 Jun 2026",
    time: "8:00 PM",
    group: "Grupo G",
  },
  {
    home: "Chile",
    homeFlag: "https://flagcdn.com/w160/cl.png",
    away: "Perú",
    awayFlag: "https://flagcdn.com/w160/pe.png",
    date: "29 Jun 2026",
    time: "7:00 PM",
    group: "Grupo H",
  },
  {
    home: "Ecuador",
    homeFlag: "https://flagcdn.com/w160/ec.png",
    away: "Paraguay",
    awayFlag: "https://flagcdn.com/w160/py.png",
    date: "30 Jun 2026",
    time: "9:00 PM",
    group: "Grupo H",
  },
];

export default function Partidos() {
  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#f5f5f5",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Calendario de Partidos
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(350px,1fr))",
            gap: "20px",
          }}
        >
          {partidos.map((match, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "20px",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
            >
              <span
                style={{
                  background: "#f2f2f2",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {match.group}
              </span>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <img
                    src={match.homeFlag}
                    alt={match.home}
                    style={{
                      width: "90px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <strong>{match.home}</strong>
                </div>

                <h2 style={{ color: "#666" }}>VS</h2>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <img
                    src={match.awayFlag}
                    alt={match.away}
                    style={{
                      width: "90px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <strong>{match.away}</strong>
                </div>
              </div>

              <hr style={{ margin: "20px 0" }} />

              <p style={{ margin: "4px 0", fontSize: "14px", color: "#444", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {match.date}
              </p>
              <p style={{ margin: "4px 0", fontSize: "14px", color: "#444", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                {match.time}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}