import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const ultimo = usuarios[usuarios.length - 1];

  const [form, setForm] = useState({
    correo: ultimo?.correo || "",
    password: ultimo?.password || "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [recordarme, setRecordarme] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.correo || !form.password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const usuario = usuarios.find(
      (u) => u.correo === form.correo && u.password === form.password
    );

    if (!usuario) {
      setError("Correo o contraseña incorrectos");
      return;
    }

    localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
    navigate("/");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", fontFamily: "sans-serif" }}>

      {/* ── Columna izquierda: imagen/hero ── */}
      <div style={{
        flex: 1,
        background: "linear-gradient(135deg, #0a1628 0%, #0f2347 60%, #0a1628 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "32px 48px",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Patrón hexagonal decorativo */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l26 15v30L30 60 4 45V15z' fill='none' stroke='%23ffffff08' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }} />

        {/* Logo arriba */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", zIndex: 1 }}>
          <div style={{
            width: "42px", height: "42px", borderRadius: "50%",
            background: "#1a3a5c", border: "2px solid #4caf80",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px",
          }}>⚽</div>
          <div>
            <div style={{ color: "#ffffff", fontSize: "13px", fontWeight: "700", letterSpacing: "1px" }}>MUNDIAL</div>
            <div style={{ color: "#c9a84c", fontSize: "13px", fontWeight: "700", letterSpacing: "1px" }}> 2026</div>
          </div>
        </div>

        {/* Texto central */}
        <div style={{ zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "20px", padding: "6px 14px", marginBottom: "28px",
          }}>
            <span style={{ color: "#c9a84c", fontSize: "10px" }}>●</span>
            <span style={{ color: "#ffffff", fontSize: "12px", fontWeight: "600", letterSpacing: "1px" }}>FIFA World Cup 2026</span>
          </div>

          <h1 style={{ color: "#ffffff", fontSize: "52px", fontWeight: "900", lineHeight: "1.1", margin: "0 0 20px" }}>
            LA COPA DEL{" "}
            <span style={{ color: "#4caf80" }}>MUNDO</span>{" "}
            <span style={{ color: "#c9a84c" }}>TE</span>
            <br />ESPERA
          </h1>

          <p style={{ color: "#aac4e0", fontSize: "15px", lineHeight: "1.6", maxWidth: "380px", margin: "0 0 40px" }}>
            Accede a tu cuenta para consultar noticias, estadísticas y el calendario oficial de los partidos en tiempo real.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "40px" }}>
            {[{ num: "48", label: "Partidos" }, { num: "16", label: "Estadios" }, { num: "3", label: "Países Sede" }].map((s) => (
              <div key={s.label}>
                <div style={{ color: "#c9a84c", fontSize: "28px", fontWeight: "800" }}>{s.num}</div>
                <div style={{ color: "#aac4e0", fontSize: "13px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer izquierdo */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
          <div style={{ display: "flex", gap: "8px" }}>
            {["🇺🇸 EE.UU.", "🇨🇦 Canadá", "🇲🇽 México"].map((p) => (
              <span key={p} style={{
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                color: "#ffffff", fontSize: "12px", padding: "4px 10px", borderRadius: "20px",
              }}>{p}</span>
            ))}
          </div>
          <span style={{ color: "#aac4e0", fontSize: "12px" }}>16 Jun — 19 Jul 2026</span>
        </div>
      </div>

      {/* ── Columna derecha: formulario ── */}
      <div style={{
        width: "420px",
        background: "#0d1f3c",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "48px 40px",
      }}>

        <h2 style={{ color: "#ffffff", fontSize: "28px", fontWeight: "700", margin: "0 0 6px" }}>Iniciar Sesión</h2>
        <p style={{ color: "#aac4e0", fontSize: "14px", margin: "0 0 28px" }}>Accede a tu cuenta para gestionar boletas</p>

        {error && (
          <div style={{
            background: "rgba(204,0,0,0.15)", border: "1px solid #cc0000",
            color: "#ff6b6b", padding: "10px 14px", borderRadius: "8px",
            fontSize: "13px", marginBottom: "18px", textAlign: "center",
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Correo */}
          <div style={{ marginBottom: "18px" }}>
            <label style={{ display: "block", marginBottom: "8px", color: "#aac4e0", fontWeight: "600", fontSize: "12px", letterSpacing: "1px" }}>
              CORREO ELECTRÓNICO
            </label>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "16px" }}>✉️</span>
              <input
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Contraseña */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px", color: "#aac4e0", fontWeight: "600", fontSize: "12px", letterSpacing: "1px" }}>
              CONTRASEÑA
            </label>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "16px" }}>🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                style={inputStyle}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", fontSize: "16px" }}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* Recordarme + ¿Olvidaste tu contraseña? */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "22px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={recordarme}
                onChange={(e) => setRecordarme(e.target.checked)}
                style={{ accentColor: "#4caf80", width: "15px", height: "15px", cursor: "pointer" }}
              />
              <span style={{ color: "#aac4e0", fontSize: "13px" }}>Recordarme</span>
            </label>
            <span
              onClick={() => navigate("/recuperar-password")}
              style={{ color: "#c9a84c", fontSize: "13px", cursor: "pointer", fontWeight: "600" }}
            >
              ¿Olvidaste tu contraseña?
            </span>
          </div>

          {/* Botón */}
          <button type="submit" style={btnStyle}>
            → INICIAR SESIÓN
          </button>
        </form>

        {/* Crear cuenta */}
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <span style={{ color: "#aac4e0", fontSize: "14px" }}>¿No tienes una cuenta? </span>
          <span
            onClick={() => navigate("/register")}
            style={{ color: "#c9a84c", fontWeight: "700", cursor: "pointer", fontSize: "14px" }}
          >
            Crear Cuenta
          </span>
        </div>

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%", padding: "14px 14px 14px 44px",
  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "10px", outline: "none", fontSize: "15px",
  boxSizing: "border-box", color: "#ffffff",
};

const btnStyle = {
  width: "100%", padding: "15px", background: "#4caf80",
  color: "#ffffff", border: "none", borderRadius: "10px",
  fontWeight: "700", fontSize: "15px", cursor: "pointer", letterSpacing: "1px",
};