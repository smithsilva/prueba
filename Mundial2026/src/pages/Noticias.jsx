import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Noticias() {
  const navigate = useNavigate();
  const [modalAbierto, setModalAbierto] = useState(false);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  const noticias = [
    {
      titulo: "Colombia prepara su debut",
      descripcion:
        "La selección colombiana continúa sus entrenamientos para el Mundial.",
      bandera: "https://flagcdn.com/w160/co.png",
      fecha: "8 de junio, 2026",
      autor: "Redacción Deportiva",
      contenido: [
        "La Selección Colombia vive días de alta intensidad en su sede de entrenamiento de cara al debut en la Copa del Mundo 2026. El cuerpo técnico encabezado por el entrenador nacional ha puesto en marcha una preparación táctica minuciosa, con especial atención en las transiciones defensivas y el juego de presión alta que caracteriza al equipo.",
        "Los jugadores convocados llegaron con buen ritmo tras terminar sus temporadas en Europa y América. Figuras como Luis Díaz, James Rodríguez y Jhon Córdoba lideran las prácticas y mostraron un estado físico óptimo en los últimos entrenamientos con balón, lo que ilusiona a los hinchas cafeteros que esperan una campaña histórica.",
        "Colombia quedó ubicada en el Grupo D junto a selecciones de alto nivel competitivo. La presión es grande, pero el plantel ha respondido con madurez. 'Estamos listos, hemos trabajado muy duro y vamos a dar todo por la camiseta', declaró uno de los capitanes del equipo en la rueda de prensa previa al debut.",
        "El país entero se paraliza cada vez que la tricolor sale a la cancha. Los estadios colombianos retransmitirán los partidos en pantallas gigantes y se espera que millones de personas sigan el camino de los cafeteros en esta Copa del Mundo que se disputa en Estados Unidos, Canadá y México.",
      ],
    },
    {
      titulo: "Argentina busca defender el título",
      descripcion:
        "La actual campeona llega como una de las favoritas del torneo.",
      bandera: "https://flagcdn.com/w160/ar.png",
      fecha: "7 de junio, 2026",
      autor: "Corresponsal Internacional",
      contenido: [
        "La Albiceleste llega al Mundial 2026 con el peso y el honor de ser la actual campeona del mundo. Desde que levantaron la Copa en Qatar 2022, Argentina no ha bajado la guardia: mantiene una racha formidable en eliminatorias y amistosos, y llega al certamen con la plantilla más experimentada de las últimas décadas.",
        "Lionel Messi, con 38 años y desafiando el paso del tiempo, confirmó su participación y lidera una generación dorada que incluye a Julián Álvarez, Enzo Fernández y Rodrigo De Paul. El astro rosarino sueña con alzar una segunda Copa del Mundo y cerrar su carrera de la manera más gloriosa posible ante el mundo entero.",
        "El técnico Lionel Scaloni repite en el banco y lleva consigo el sistema táctico que conquistó Qatar: un bloque compacto, rápido en las transiciones y letal en los contragolpes. 'El hambre de ganar sigue intacta. Este grupo quiere hacer historia dos veces', afirmó el entrenador en la conferencia de prensa oficial de la FIFA.",
        "Los rivales ya los tienen en el radar. Brasil, Francia, España e Inglaterra saben que para llegar a la final deberán enfrentarse, tarde o temprano, con la maquinaria argentina. El mundo futbolístico tiene los ojos puestos en la defensa del título, y Argentina promete un espectáculo memorable.",
      ],
    },
    {
      titulo: "Mbappé lidera a Francia",
      descripcion:
        "Francia espera repetir una gran actuación en la Copa Mundial.",
      bandera: "https://flagcdn.com/w160/fr.png",
      fecha: "6 de junio, 2026",
      autor: "Enviado Especial",
      contenido: [
        "Kylian Mbappé llega al Mundial 2026 en el mejor momento de su carrera. Después de una temporada brillante en el Real Madrid, el delantero francés aterrizó en el campamento de Les Bleus con cifras apabullantes: 42 goles en todas las competiciones y el premio al mejor jugador de Europa bajo el brazo.",
        "Francia construye su proyecto alrededor del crack de Bondy, pero no depende únicamente de él. Antoine Griezmann sigue siendo el motor creativo, Aurélien Tchouaméni domina el medio campo y Marcus Thuram aporta potencia en ataque. Didier Deschamps ha armado un equipo sólido en todas las líneas, con hambre de revancha tras la final perdida en penales en Qatar.",
        "'Este equipo tiene la madurez y el talento para ganar el Mundial. Estamos enfocados, el ambiente en el vestuario es excelente y cada jugador sabe lo que tiene que hacer', declaró Mbappé con la confianza de quien sabe que el mundo entero lo está mirando. Sus palabras resonaron en todo el fútbol mundial.",
        "Los aficionados franceses viajan en masa hacia Norteamérica para apoyar a su selección. Las expectativas son altísimas y los analistas coinciden: si Mbappé está bien, Francia es el equipo a batir. La Copa del Mundo 2026 podría ser el escenario donde el mejor jugador del planeta eleve su leyenda a la inmortalidad.",
      ],
    },
  ];

  const abrirNoticia = (noticia) => {
    setNoticiaSeleccionada(noticia);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setNoticiaSeleccionada(null);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          background: "#0a1628",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "54px",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{ color: "#c9a84c", fontWeight: "bold", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Mundial 2026
        </div>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "transparent",
            border: "1px solid #c9a84c",
            color: "#c9a84c",
            padding: "8px 15px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Volver al inicio
        </button>
      </nav>

      {/* Encabezado */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #0f2347 60%, #0a1628 100%)",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#fff", fontSize: "42px", marginBottom: "10px" }}>
          Noticias Mundial 2026
        </h1>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px" }}>
          Mantente informado con las últimas novedades de la Copa Mundial.
        </p>
      </section>

      {/* Tarjetas */}
      <section
        style={{
          padding: "3rem 2rem",
          maxWidth: "1200px",
          width: "100%",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "20px",
          }}
        >
          {noticias.map((noticia, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "15px",
                padding: "25px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                transition: "transform 0.3s, border 0.3s",
                cursor: "pointer",
                border: "1px solid transparent",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.border = "1px solid rgba(201,168,76,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.border = "1px solid transparent";
              }}
            >
              <div style={{ marginBottom: "15px" }}>
                <img src={noticia.bandera} alt={noticia.titulo} style={{ width: "72px", height: "48px", objectFit: "cover", borderRadius: "6px" }} />
              </div>
              <h2 style={{ color: "#0a1628", marginBottom: "10px", fontSize: "22px" }}>
                {noticia.titulo}
              </h2>
              <p style={{ color: "#666", lineHeight: "1.6", flexGrow: 1 }}>
                {noticia.descripcion}
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "15px" }}>
                <span style={{ fontSize: "12px", color: "#aaa" }}>{noticia.fecha}</span>
                <button
                  onClick={() => abrirNoticia(noticia)}
                  style={{
                    background: "#c9a84c",
                    border: "none",
                    color: "#0a1628",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "14px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#b8963e")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
                >
                  Leer más
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#0a1628",
          textAlign: "center",
          padding: "1rem",
          marginTop: "auto",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.5)", margin: 0 }}>
          © 2026 Mundial FIFA
        </p>
      </footer>

      {/* Modal */}
      {modalAbierto && noticiaSeleccionada && (
        <div
          onClick={cerrarModal}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "1rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "18px",
              width: "100%",
              maxWidth: "660px",
              maxHeight: "85vh",
              overflowY: "auto",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            {/* Header del modal con fondo oscuro */}
            <div
              style={{
                background: "linear-gradient(135deg, #0a1628 0%, #0f2347 100%)",
                borderRadius: "18px 18px 0 0",
                padding: "2rem 2rem 1.5rem",
                position: "relative",
              }}
            >
              <button
                onClick={cerrarModal}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                }}
              >
                ×
              </button>

              <span style={{ display: "block", marginBottom: "12px" }}>
                <img src={noticiaSeleccionada.bandera} alt={noticiaSeleccionada.titulo} style={{ width: "72px", height: "48px", objectFit: "cover", borderRadius: "6px" }} />
              </span>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "24px",
                  marginBottom: "8px",
                  paddingRight: "2.5rem",
                  lineHeight: "1.3",
                }}
              >
                {noticiaSeleccionada.titulo}
              </h2>
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <span style={{ color: "#c9a84c", fontSize: "13px", fontWeight: "bold" }}>
                  {noticiaSeleccionada.autor}
                </span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>•</span>
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px" }}>
                  {noticiaSeleccionada.fecha}
                </span>
              </div>
            </div>

            {/* Línea dorada decorativa */}
            <div style={{ height: "4px", background: "linear-gradient(90deg, #c9a84c, #e8c97a, #c9a84c)" }} />

            {/* Cuerpo del artículo */}
            <div style={{ padding: "1.75rem 2rem 2rem" }}>
              {noticiaSeleccionada.contenido.map((parrafo, i) => (
                <p
                  key={i}
                  style={{
                    color: i === 0 ? "#222" : "#555",
                    lineHeight: "1.8",
                    fontSize: i === 0 ? "16px" : "15px",
                    fontWeight: i === 0 ? "500" : "400",
                    marginBottom: "1.2rem",
                  }}
                >
                  {parrafo}
                </p>
              ))}

              {/* Footer del modal */}
              <div
                style={{
                  borderTop: "1px solid #eee",
                  marginTop: "1.5rem",
                  paddingTop: "1.25rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    background: "#f0e8d5",
                    color: "#8a6a20",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  Mundial 2026
                </span>
                <button
                  onClick={cerrarModal}
                  style={{
                    background: "#0a1628",
                    border: "none",
                    color: "#c9a84c",
                    padding: "10px 22px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "14px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#162540")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0a1628")}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}