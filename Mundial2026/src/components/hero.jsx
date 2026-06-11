import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h1>FIFA World Cup 2026</h1>

      <p>
        Vive toda la emoción del mundial con resultados,
        estadísticas y noticias en tiempo real.
      </p>

      <div>
        <Link to="/partidos">
          <button>Ver Partidos</button>
        </Link>

        <Link to="/equipos">
          <button>Ver Equipos</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;