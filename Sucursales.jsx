import { useState, useMemo } from "react";
 
const SUCURSALES_INICIALES = [
  {
    id: "SUC-001",
    nombre: "Sucursal Centro",
    direccion: "Calle 10 #15-30, Centro Histórico",
    ciudad: "Bogotá",
    telefono: "+57 (1) 234-5678",
    horario: "08:00 - 18:00",
    estado: "Activa",
  },
  {
    id: "SUC-002",
    nombre: "Sucursal Norte",
    direccion: "Avenida 15 #120-45, Usaquén",
    ciudad: "Bogotá",
    telefono: "+57 (1) 345-6789",
    horario: "09:00 - 19:00",
    estado: "Activa",
  },
  {
    id: "SUC-003",
    nombre: "Sucursal Medellín",
    direccion: "Carrera 43A #14-20, El Poblado",
    ciudad: "Medellín",
    telefono: "+57 (4) 456-7890",
    horario: "08:30 - 18:30",
    estado: "Activa",
  },
  {
    id: "SUC-004",
    nombre: "Sucursal Cali",
    direccion: "Avenida 6 #28-50, San Fernando",
    ciudad: "Cali",
    telefono: "+57 (2) 567-8901",
    horario: "08:00 - 17:00",
    estado: "Inactiva",
  },
  {
    id: "SUC-005",
    nombre: "Sucursal Barranquilla",
    direccion: "Calle 93 #51B-55, Riomar",
    ciudad: "Barranquilla",
    telefono: "+57 (5) 678-9012",
    horario: "09:00 - 18:00",
    estado: "Activa",
  },
  {
    id: "SUC-006",
    nombre: "Sucursal Suba",
    direccion: "Transversal 91 #127-35, Suba",
    ciudad: "Bogotá",
    telefono: "+57 (1) 789-0123",
    horario: "08:00 - 17:30",
    estado: "Inactiva",
  },
];
 
function StatCard({ label, valor, sublabel, color, bgColor, icon }) {
  return (
    <div
      style={{
        flex: 1,
        background: bgColor || "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: "1rem 1.25rem",
        minWidth: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 13,
          fontWeight: 500,
          color: "#374151",
          marginBottom: 6,
        }}
      >
        {label}
        <span style={{ fontSize: 18 }}>{icon}</span>
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, color, margin: "4px 0 2px" }}>
        {valor}
      </div>
      <div style={{ fontSize: 12, color: "#6b7280" }}>{sublabel}</div>
    </div>
  );
}
 
function BadgeEstado({ estado }) {
  const activa = estado === "Activa";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "3px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 500,
        background: activa ? "#dcfce7" : "#fee2e2",
        color: activa ? "#166534" : "#991b1b",
        border: `1px solid ${activa ? "#bbf7d0" : "#fecaca"}`,
      }}
    >
      <span style={{ fontSize: 9 }}>●</span>
      {estado}
    </span>
  );
}
 
export default function Sucursales() {
  const [sucursales] = useState(SUCURSALES_INICIALES);
  const [busqueda, setBusqueda] = useState("");
  const [ciudadFiltro, setCiudadFiltro] = useState("");
  const [estadoFiltro, setEstadoFiltro] = useState("");
 
  const ciudades = useMemo(
    () => [...new Set(sucursales.map((s) => s.ciudad))],
    [sucursales]
  );
 
  const filtradas = useMemo(() => {
    const q = busqueda.toLowerCase();
    return sucursales.filter((s) => {
      const matchQ =
        !q ||
        s.nombre.toLowerCase().includes(q) ||
        s.direccion.toLowerCase().includes(q) ||
        s.ciudad.toLowerCase().includes(q);
      const matchCiudad = !ciudadFiltro || s.ciudad === ciudadFiltro;
      const matchEstado = !estadoFiltro || s.estado === estadoFiltro;
      return matchQ && matchCiudad && matchEstado;
    });
  }, [sucursales, busqueda, ciudadFiltro, estadoFiltro]);
 
  const activas = sucursales.filter((s) => s.estado === "Activa").length;
  const inactivas = sucursales.filter((s) => s.estado === "Inactiva").length;
  const ciudadesUnicas = ciudades.length;
 
  const selectStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: "8px 12px",
    fontSize: 14,
    outline: "none",
    cursor: "pointer",
    color: "#374151",
    background: "#fff",
    minWidth: 160,
  };
 
  return (
    <div
      style={{
        padding: "1.5rem",
        fontFamily: "system-ui, sans-serif",
        maxWidth: 1150,
        margin: "0 auto",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 600, color: "#111827", margin: 0 }}>
            Sucursales
          </h1>
          <p style={{ fontSize: 14, color: "#6b7280", marginTop: 4 }}>
            Gestiona y administra todas las sucursales de la empresa
          </p>
        </div>
        <button
          style={{
            background: "#16a34a",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "8px 16px",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          + Agregar Sucursal
        </button>
      </div>
 
      {/* Stats */}
      <div style={{ display: "flex", gap: 12, marginBottom: "1.5rem" }}>
        <StatCard
          label="Total Sucursales"
          valor={sucursales.length}
          sublabel="registradas en el sistema"
          color="#16a34a"
          bgColor="#f0fdf4"
          icon="🏢"
        />
        <StatCard
          label="Activas"
          valor={activas}
          sublabel="en operación"
          color="#16a34a"
          bgColor="#f0fdf4"
          icon="✅"
        />
        <StatCard
          label="Inactivas"
          valor={inactivas}
          sublabel="temporalmente cerradas"
          color="#dc2626"
          bgColor="#fef2f2"
          icon="🚫"
        />
        <StatCard
          label="Ciudades"
          valor={ciudadesUnicas}
          sublabel="con cobertura"
          color="#2563eb"
          bgColor="#eff6ff"
          icon="📍"
        />
      </div>
 
      {/* Filtros */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: "1rem 1.25rem",
          marginBottom: "1.5rem",
        }}
      >
        <p style={{ fontSize: 14, fontWeight: 500, color: "#111827", marginBottom: 2 }}>
          Búsqueda y Filtros
        </p>
        <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 12 }}>
          Encuentra rápidamente sucursales específicas
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <div style={{ position: "relative", flex: 2, minWidth: 200 }}>
            <span
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9ca3af",
                fontSize: 14,
              }}
            >
              🔍
            </span>
            <input
              type="text"
              placeholder="Buscar por nombre, dirección, ciudad..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                width: "100%",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                padding: "8px 12px 8px 34px",
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
                color: "#111827",
                background: "#f9fafb",
              }}
            />
          </div>
          <select
            value={ciudadFiltro}
            onChange={(e) => setCiudadFiltro(e.target.value)}
            style={selectStyle}
          >
            <option value="">Todas las ciudades</option>
            {ciudades.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={estadoFiltro}
            onChange={(e) => setEstadoFiltro(e.target.value)}
            style={selectStyle}
          >
            <option value="">Todos los estados</option>
            <option value="Activa">Activa</option>
            <option value="Inactiva">Inactiva</option>
          </select>
        </div>
      </div>
 
      {/* Tabla */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid #e5e7eb" }}>
          <p style={{ fontSize: 14, fontWeight: 500, color: "#111827", margin: 0 }}>
            Registro de Sucursales
          </p>
          <p style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>
            {filtradas.length} sucursal{filtradas.length !== 1 ? "es" : ""} encontrada{filtradas.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #e5e7eb", background: "#f9fafb" }}>
                {["ID Sucursal", "Nombre", "Dirección", "Ciudad", "Teléfono", "Horario", "Estado", "Acciones"].map(
                  (col) => (
                    <th
                      key={col}
                      style={{
                        padding: "10px 14px",
                        textAlign: col === "Acciones" ? "right" : "left",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "#6b7280",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filtradas.map((s, i) => (
                <tr
                  key={s.id}
                  style={{
                    borderBottom: i < filtradas.length - 1 ? "1px solid #f3f4f6" : "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <td style={{ padding: "13px 14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span
                        style={{
                          background: "#f0fdf4",
                          borderRadius: 6,
                          padding: "3px 6px",
                          fontSize: 13,
                        }}
                      >
                        🏢
                      </span>
                      <span style={{ fontSize: 13, fontWeight: 500, color: "#6b7280" }}>
                        {s.id}
                      </span>
                    </div>
                  </td>
 
                  <td style={{ padding: "13px 14px", fontSize: 14, fontWeight: 500, color: "#111827" }}>
                    {s.nombre}
                  </td>
 
                  <td style={{ padding: "13px 14px", fontSize: 13, color: "#374151" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ fontSize: 12, color: "#9ca3af" }}>📍</span>
                      {s.direccion}
                    </span>
                  </td>
 
                  <td style={{ padding: "13px 14px" }}>
                    <span
                      style={{
                        background: "#f3f4f6",
                        color: "#374151",
                        borderRadius: 6,
                        padding: "3px 10px",
                        fontSize: 13,
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.ciudad}
                    </span>
                  </td>
 
                  <td style={{ padding: "13px 14px", fontSize: 13, color: "#374151", whiteSpace: "nowrap" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ fontSize: 12, color: "#9ca3af" }}>📞</span>
                      {s.telefono}
                    </span>
                  </td>
 
                  <td style={{ padding: "13px 14px", fontSize: 13, color: "#374151", whiteSpace: "nowrap" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ fontSize: 12, color: "#9ca3af" }}>🕐</span>
                      {s.horario}
                    </span>
                  </td>
 
                  <td style={{ padding: "13px 14px" }}>
                    <BadgeEstado estado={s.estado} />
                  </td>
 
                  <td style={{ padding: "13px 14px", textAlign: "right" }}>
                    <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
                      <button
                        title="Ver"
                        style={{
                          background: "none",
                          border: "1px solid #e5e7eb",
                          borderRadius: 6,
                          cursor: "pointer",
                          padding: "5px 8px",
                          fontSize: 14,
                          color: "#6b7280",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        👁
                      </button>
                      <button
                        title="Editar"
                        style={{
                          background: "none",
                          border: "1px solid #e5e7eb",
                          borderRadius: 6,
                          cursor: "pointer",
                          padding: "5px 8px",
                          fontSize: 14,
                          color: "#6b7280",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        ✏️
                      </button>
                      <button
                        title="Eliminar"
                        style={{
                          background: "none",
                          border: "1px solid #fecaca",
                          borderRadius: 6,
                          cursor: "pointer",
                          padding: "5px 8px",
                          fontSize: 14,
                          color: "#dc2626",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        🗑
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
 
              {filtradas.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    style={{
                      padding: "2rem",
                      textAlign: "center",
                      color: "#9ca3af",
                      fontSize: 14,
                    }}
                  >
                    No se encontraron sucursales.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}