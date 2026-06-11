import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ nombre: "", nit: "", correo: "", password: "", confirmarPassword: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.nit || !form.correo || !form.password || !form.confirmarPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (form.password !== form.confirmarPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const existe = usuarios.find((u) => u.correo === form.correo);
    if (existe) {
      setError("Ya existe una cuenta con ese correo");
      return;
    }
    const nuevoUsuario = { nombre: form.nombre, nit: form.nit, correo: form.correo, password: form.password };
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    navigate("/login");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", fontFamily: "sans-serif" }}>

      {/* ── Columna izquierda ── */}
      <div style={{
        flex: 1,
        background: "linear-gradient(135deg, #0a1628 0%, #0f2347 60%, #0a1628 100%)",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        padding: "32px 48px", position: "relative", overflow: "hidden",
      }}>

        {/* Fondo campo de fútbol */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Ccircle cx='200' cy='200' r='60' fill='none' stroke='%23ffffff06' stroke-width='2'/%3E%3Ccircle cx='200' cy='200' r='8' fill='%23ffffff06'/%3E%3Cline x1='200' y1='0' x2='200' y2='400' stroke='%23ffffff06' stroke-width='2'/%3E%3Crect x='20' y='140' width='60' height='120' fill='none' stroke='%23ffffff06' stroke-width='2'/%3E%3Crect x='320' y='140' width='60' height='120' fill='none' stroke='%23ffffff06' stroke-width='2'/%3E%3Crect x='20' y='20' width='360' height='360' fill='none' stroke='%23ffffff06' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: "400px 400px", backgroundPosition: "center",
        }} />

        {/* Patrón hexagonal */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l26 15v30L30 60 4 45V15z' fill='none' stroke='%23ffffff05' stroke-width='1'/%3E%3C/svg%3E")`,
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
            <div style={{ color: "#c9a84c", fontSize: "13px", fontWeight: "700", letterSpacing: "1px" }}>2026</div>
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
            VIVE LA EMOCIÓN DEL<br />
            <span style={{ color: "#4caf80" }}>MUNDIAL</span>{" "}
            <span style={{ color: "#c9a84c" }}>2026</span>
          </h1>

          <p style={{ color: "#aac4e0", fontSize: "15px", lineHeight: "1.6", maxWidth: "380px", margin: "0 0 40px" }}>
            Crea tu cuenta para acceder a toda la información del mundial.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "40px" }}>
            {[{ num: "32", label: "Equipos" }, { num: "64", label: "Partidos" }, { num: "3", label: "Países Sede" }].map((s) => (
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
        width: "440px", background: "#0d1f3c",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "40px 36px", overflowY: "auto",
      }}>

        <h2 style={{ color: "#ffffff", fontSize: "26px", fontWeight: "700", margin: "0 0 6px" }}>Crear Cuenta</h2>
        <p style={{ color: "#aac4e0", fontSize: "14px", margin: "0 0 24px" }}>Crea tu cuenta para acceder a toda la información del mundial</p>

        {error && (
          <div style={{
            background: "rgba(204,0,0,0.15)", border: "1px solid #cc0000",
            color: "#ff6b6b", padding: "10px 14px", borderRadius: "8px",
            fontSize: "13px", marginBottom: "16px", textAlign: "center",
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {[
            { label: "NOMBRE COMPLETO", name: "nombre", type: "text", placeholder: "Ingresa tu nombre completo", icon: "👤" },
            { label: "NIT", name: "nit", type: "text", placeholder: "Ingresa tu NIT", icon: "🪪" },
            { label: "CORREO ELECTRÓNICO", name: "correo", type: "email", placeholder: "correo@ejemplo.com", icon: "✉️" },
            { label: "CONTRASEÑA", name: "password", type: "password", placeholder: "••••••••", icon: "🔒" },
            { label: "CONFIRMAR CONTRASEÑA", name: "confirmarPassword", type: "password", placeholder: "••••••••", icon: "🔒" },
          ].map((field) => (
            <div key={field.name} style={{ marginBottom: "14px" }}>
              <label style={{ display: "block", marginBottom: "6px", color: "#aac4e0", fontWeight: "600", fontSize: "11px", letterSpacing: "1px" }}>
                {field.label}
              </label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "15px" }}>{field.icon}</span>
                <input
                  type={field.type} name={field.name}
                  value={form[field.name]} onChange={handleChange}
                  placeholder={field.placeholder} style={inputStyle}
                />
              </div>
            </div>
          ))}

          <button type="submit" style={{ ...btnStyle, marginTop: "8px" }}>→ CREAR CUENTA</button>
        </form>

        {/* Iniciar sesión */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <span style={{ color: "#aac4e0", fontSize: "14px" }}>¿Ya tienes una cuenta? </span>
          <span onClick={() => navigate("/login")}
            style={{ color: "#c9a84c", fontWeight: "700", cursor: "pointer", fontSize: "14px" }}>
            Iniciar sesión
          </span>
        </div>

        {/* Volver al inicio */}
        <button onClick={() => navigate("/")} style={btnBackStyle}>← Volver al inicio</button>

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%", padding: "13px 13px 13px 44px",
  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "10px", outline: "none", fontSize: "14px",
  boxSizing: "border-box", color: "#ffffff",
};
const btnStyle = {
  width: "100%", padding: "14px", background: "#4caf80",
  color: "#ffffff", border: "none", borderRadius: "10px",
  fontWeight: "700", fontSize: "15px", cursor: "pointer", letterSpacing: "1px",
};
const btnBackStyle = {
  width: "100%", marginTop: "12px", padding: "12px",
  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "10px", cursor: "pointer", color: "#aac4e0", fontSize: "14px",
};