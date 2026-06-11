// src/pages/Home.jsx

import { useNavigate } from "react-router-dom";

const partidos = [
  { home: "Colombia", homeFlag: "https://flagcdn.com/w160/co.png", away: "Brasil", awayFlag: "https://flagcdn.com/w160/br.png", date: "15 Jun 2026", time: "7:00 PM", group: "Grupo A" },
  { home: "México", homeFlag: "https://flagcdn.com/w160/mx.png", away: "Canadá", awayFlag: "https://flagcdn.com/w160/ca.png", date: "16 Jun 2026", time: "8:00 PM", group: "Grupo A" },
  { home: "Argentina", homeFlag: "https://flagcdn.com/w160/ar.png", away: "Francia", awayFlag: "https://flagcdn.com/w160/fr.png", date: "17 Jun 2026", time: "7:00 PM", group: "Grupo B" },
  { home: "Uruguay", homeFlag: "https://flagcdn.com/w160/uy.png", away: "Estados Unidos", awayFlag: "https://flagcdn.com/w160/us.png", date: "18 Jun 2026", time: "9:00 PM", group: "Grupo B" },
  { home: "España", homeFlag: "https://flagcdn.com/w160/es.png", away: "Alemania", awayFlag: "https://flagcdn.com/w160/de.png", date: "19 Jun 2026", time: "6:00 PM", group: "Grupo C" },
  { home: "Portugal", homeFlag: "https://flagcdn.com/w160/pt.png", away: "Marruecos", awayFlag: "https://flagcdn.com/w160/ma.png", date: "20 Jun 2026", time: "8:00 PM", group: "Grupo C" },
  { home: "Inglaterra", homeFlag: "https://flagcdn.com/w160/gb-eng.png", away: "Italia", awayFlag: "https://flagcdn.com/w160/it.png", date: "21 Jun 2026", time: "7:00 PM", group: "Grupo D" },
  { home: "Países Bajos", homeFlag: "https://flagcdn.com/w160/nl.png", away: "Croacia", awayFlag: "https://flagcdn.com/w160/hr.png", date: "22 Jun 2026", time: "9:00 PM", group: "Grupo D" },
  { home: "Bélgica", homeFlag: "https://flagcdn.com/w160/be.png", away: "Suiza", awayFlag: "https://flagcdn.com/w160/ch.png", date: "23 Jun 2026", time: "6:00 PM", group: "Grupo E" },
  { home: "Dinamarca", homeFlag: "https://flagcdn.com/w160/dk.png", away: "Suecia", awayFlag: "https://flagcdn.com/w160/se.png", date: "24 Jun 2026", time: "8:00 PM", group: "Grupo E" },
  { home: "Japón", homeFlag: "https://flagcdn.com/w160/jp.png", away: "Corea del Sur", awayFlag: "https://flagcdn.com/w160/kr.png", date: "25 Jun 2026", time: "7:00 PM", group: "Grupo F" },
  { home: "Australia", homeFlag: "https://flagcdn.com/w160/au.png", away: "Irán", awayFlag: "https://flagcdn.com/w160/ir.png", date: "26 Jun 2026", time: "9:00 PM", group: "Grupo F" },
  { home: "Nigeria", homeFlag: "https://flagcdn.com/w160/ng.png", away: "Senegal", awayFlag: "https://flagcdn.com/w160/sn.png", date: "27 Jun 2026", time: "6:00 PM", group: "Grupo G" },
  { home: "Camerún", homeFlag: "https://flagcdn.com/w160/cm.png", away: "Egipto", awayFlag: "https://flagcdn.com/w160/eg.png", date: "28 Jun 2026", time: "8:00 PM", group: "Grupo G" },
  { home: "Chile", homeFlag: "https://flagcdn.com/w160/cl.png", away: "Perú", awayFlag: "https://flagcdn.com/w160/pe.png", date: "29 Jun 2026", time: "7:00 PM", group: "Grupo H" },
  { home: "Ecuador", homeFlag: "https://flagcdn.com/w160/ec.png", away: "Paraguay", awayFlag: "https://flagcdn.com/w160/py.png", date: "30 Jun 2026", time: "9:00 PM", group: "Grupo H" },
];

const flagStyle = {
  width: "36px",
  height: "24px",
  objectFit: "cover",
  borderRadius: "3px",
  flexShrink: 0,
};

const BallIcon = ({ size = 18, color = "#c9a84c" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a10 10 0 0 1 6.88 2.74L12 9.5 5.12 4.74A10 10 0 0 1 12 2z"/>
    <path d="M2 12h4.5l3-5.5M22 12h-4.5l-3-5.5M12 22v-4.5l-5-3M12 22v-4.5l5-3"/>
  </svg>
);

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "inherit", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Navbar */}
      <nav style={{ background: "#0a1628", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "54px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#c9a84c", fontWeight: 500, fontSize: "15px" }}>
          <BallIcon size={18} color="#c9a84c" />
          Mundial 2026
        </div>
        <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          {[
            { label: "Inicio", path: "/" },
            { label: "Partidos", path: "/partidos" },
            { label: "Equipos", path: "/equipos" },
            { label: "Estadísticas", path: "/estadisticas" },
            { label: "Noticias", path: "/noticias" },
          ].map((item) => (
            <li key={item.label}>
              <span
                onClick={() => navigate(item.path)}
                style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px", cursor: "pointer" }}
                onMouseEnter={e => e.target.style.color = "#c9a84c"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.75)"}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => navigate("/login")}
          style={{ background: "transparent", border: "0.5px solid rgba(201,168,76,0.6)", color: "#c9a84c", padding: "6px 14px", borderRadius: "8px", fontSize: "13px", cursor: "pointer" }}
        >
          Iniciar sesión
        </button>
      </nav>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2347 60%, #0a1628 100%)", padding: "3rem 2rem 2.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(201,168,76,0.15)", border: "0.5px solid rgba(201,168,76,0.35)", color: "#c9a84c", fontSize: "12px", padding: "4px 12px", borderRadius: "20px", marginBottom: "1rem", position: "relative" }}>
          USA · CANADA · MEXICO
        </div>
        <h1 style={{ fontSize: "42px", fontWeight: 500, color: "#fff", letterSpacing: "-0.5px", position: "relative", margin: 0 }}>
          FIFA World Cup 2026
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginTop: "0.5rem", position: "relative" }}>
          Vive toda la emoción del mundial con resultados, estadísticas y noticias en tiempo real.
        </p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "1.5rem", position: "relative" }}>
          <button onClick={() => navigate("/partidos")} style={{ background: "#c9a84c", color: "#0a1628", border: "none", padding: "9px 20px", borderRadius: "8px", fontSize: "13px", fontWeight: 500, cursor: "pointer" }}>
            Ver partidos
          </button>
          <button onClick={() => navigate("/equipos")} style={{ background: "transparent", color: "#fff", border: "0.5px solid rgba(255,255,255,0.3)", padding: "9px 20px", borderRadius: "8px", fontSize: "13px", cursor: "pointer" }}>
            Ver equipos
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div style={{ background: "#f5f5f5", padding: "1.5rem 2rem", flex: 1 }}>

        <p style={{ fontSize: "13px", fontWeight: 500, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
          Próximos partidos
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "1.5rem" }}>
          {partidos.map((match, i) => (
            <div key={i} style={{ background: "#fff", border: "0.5px solid #e5e5e5", borderRadius: "12px", padding: "1rem 1.25rem" }}>
              <span style={{ fontSize: "11px", color: "#999", background: "#f5f5f5", padding: "2px 8px", borderRadius: "10px" }}>
                Fase de grupos · {match.group}
              </span>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "0.75rem" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
                  <img src={match.homeFlag} alt={match.home} style={flagStyle} />
                  <span style={{ fontSize: "13px", fontWeight: 500 }}>{match.home}</span>
                </div>
                <span style={{ fontSize: "11px", color: "#999", background: "#f5f5f5", padding: "2px 6px", borderRadius: "4px" }}>VS</span>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
                  <img src={match.awayFlag} alt={match.away} style={flagStyle} />
                  <span style={{ fontSize: "13px", fontWeight: 500 }}>{match.away}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "0.5px solid #e5e5e5" }}>
                <span style={{ fontSize: "12px", color: "#666", display: "flex", alignItems: "center", gap: "5px" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {match.date}
                </span>
                <span style={{ fontSize: "12px", color: "#666", display: "flex", alignItems: "center", gap: "5px" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {match.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "13px", fontWeight: 500, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem", marginTop: "1rem" }}>
          Equipos destacados
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
          {[
            { name: "Colombia", flag: "https://flagcdn.com/w160/co.png", group: "Grupo A" },
            { name: "Argentina", flag: "https://flagcdn.com/w160/ar.png", group: "Grupo B" },
            { name: "Brasil", flag: "https://flagcdn.com/w160/br.png", group: "Grupo A" },
            { name: "Francia", flag: "https://flagcdn.com/w160/fr.png", group: "Grupo B" },
          ].map((team, i) => (
            <div
              key={i}
              onClick={() => navigate("/equipos")}
              style={{ background: "#fff", border: "0.5px solid #e5e5e5", borderRadius: "12px", padding: "1rem", textAlign: "center", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#c9a84c"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#e5e5e5"}
            >
              <img src={team.flag} alt={team.name} style={{ width: "64px", height: "43px", objectFit: "cover", borderRadius: "6px", marginBottom: "8px" }} />
              <p style={{ fontSize: "13px", fontWeight: 500, margin: 0 }}>{team.name}</p>
              <p style={{ fontSize: "11px", color: "#999", margin: "2px 0 0" }}>{team.group}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: "#0a1628", padding: "1rem 2rem", textAlign: "center" }}>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
          <span style={{ color: "#c9a84c", display: "inline-flex", alignItems: "center", gap: "5px" }}>
            <BallIcon size={13} color="#c9a84c" />
            Mundial 2026
          </span>{" "}
          · © 2026 Todos los derechos reservados
        </p>
      </footer>

    </div>
  );
}