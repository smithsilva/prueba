import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .wc-nav {
          background: #0a1628 !important;
          padding: 0 2rem !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          height: 54px !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        .wc-nav__brand {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          color: #c9a84c !important;
          font-weight: 500 !important;
          font-size: 15px !important;
          text-decoration: none !important;
          list-style: none !important;
        }
        .wc-nav__links {
          display: flex !important;
          gap: 1.5rem !important;
          list-style: none !important;
          margin: 0 !important;
          padding: 0 !important;
          flex-direction: row !important;
        }
        .wc-nav__links li {
          list-style: none !important;
        }
        .wc-nav__link {
          color: rgba(255,255,255,0.75) !important;
          font-size: 13px !important;
          cursor: pointer !important;
          text-decoration: none !important;
          font-weight: 400 !important;
        }
        .wc-nav__link:hover {
          color: #c9a84c !important;
        }
        .wc-nav__btn {
          background: transparent !important;
          border: 0.5px solid rgba(201,168,76,0.6) !important;
          color: #c9a84c !important;
          padding: 6px 14px !important;
          border-radius: 8px !important;
          font-size: 13px !important;
          cursor: pointer !important;
          font-family: sans-serif !important;
          line-height: normal !important;
        }
        .wc-nav__btn:hover {
          background: rgba(201,168,76,0.08) !important;
        }
      `}</style>

      <nav className="wc-nav">
        <div className="wc-nav__brand">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a10 10 0 0 1 6.88 2.74L12 9.5 5.12 4.74A10 10 0 0 1 12 2z"/>
            <path d="M2 12h4.5l3-5.5M22 12h-4.5l-3-5.5M12 22v-4.5l-5-3M12 22v-4.5l5-3"/>
          </svg>
          Mundial 2026
        </div>

        <ul className="wc-nav__links">
          {[
            { label: "Inicio", path: "/" },
            { label: "Partidos", path: "/partidos" },
            { label: "Equipos", path: "/equipos" },
            { label: "Estadísticas", path: "/estadisticas" },
            { label: "Noticias", path: "/noticias" },
          ].map((item) => (
            <li key={item.label}>
              <span
                className="wc-nav__link"
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <button className="wc-nav__btn" onClick={() => navigate("/login")}>
          Iniciar sesión
        </button>
      </nav>
    </>
  );
}

export default Navbar;