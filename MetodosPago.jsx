import { useState, useMemo } from "react";
 
const METODOS_INICIALES = [
  { id: "PAY-001", nombre_metodo: "Efectivo", tipo: "Efectivo", comision: "0%", estado: "Activo", permite_online: false },
  { id: "PAY-002", nombre_metodo: "Tarjeta Crédito/Débito", tipo: "Tarjeta", comision: "2.5%", estado: "Activo", permite_online: true },
  { id: "PAY-003", nombre_metodo: "Transferencia Bancaria", tipo: "Transferencia", comision: "0%", estado: "Activo", permite_online: true },
  { id: "PAY-004", nombre_metodo: "Nequi", tipo: "Transferencia", comision: "1%", estado: "Activo", permite_online: true },
  { id: "PAY-005", nombre_metodo: "Cheque", tipo: "Transferencia", comision: "0%", estado: "Inactivo", permite_online: false },
];
 
const TIPO_ICONO = {
  Efectivo: "💵",
  Tarjeta: "💳",
  Transferencia: "🏦",
};
 
function BadgeEstado({ estado }) {
  const activo = estado === "Activo";
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
        background: activo ? "#dcfce7" : "#fee2e2",
        color: activo ? "#166534" : "#991b1b",
      }}
    >
      <span style={{ fontSize: 10 }}>{activo ? "●" : "●"}</span>
      {estado}
    </span>
  );
}
 
function StatCard({ label, valor, sublabel, color, icon }) {
  return (
    <div
      style={{
        flex: 1,
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderTop: `3px solid ${color}`,
        borderRadius: 12,
        padding: "1rem 1.25rem",
        minWidth: 0,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, fontWeight: 500, color: "#374151" }}>
        {label}
        <span style={{ fontSize: 18 }}>{icon}</span>
      </div>
      <div style={{ fontSize: 28, fontWeight: 600, color, margin: "6px 0 2px" }}>{valor}</div>
      <div style={{ fontSize: 12, color: "#6b7280" }}>{sublabel}</div>
    </div>
  );
}
 
export default function MetodosPago() {
  const [metodos] = useState(METODOS_INICIALES);
  const [busqueda, setBusqueda] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("");
 
  const metodosFiltrados = useMemo(() => {
    const q = busqueda.toLowerCase();
    return metodos.filter(
      (m) =>
        (m.nombre_metodo.toLowerCase().includes(q) || m.id.toLowerCase().includes(q)) &&
        (tipoFiltro === "" || m.tipo === tipoFiltro)
    );
  }, [metodos, busqueda, tipoFiltro]);
 
  const activos = metodos.filter((m) => m.estado === "Activo").length;
  const inactivos = metodos.filter((m) => m.estado === "Inactivo").length;
 
  return (
    <div style={{ padding: "1.5rem", fontFamily: "system-ui, sans-serif", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 600, color: "#111827", margin: 0 }}>Métodos de Pago</h1>
          <p style={{ fontSize: 14, color: "#6b7280", marginTop: 4 }}>Gestiona las formas de pago aceptadas por la empresa</p>
        </div>
        <button
          style={{
            background: "#2563eb",
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
          + Agregar Método
        </button>
      </div>
 
      {/* Stats */}
      <div style={{ display: "flex", gap: 12, marginBottom: "1.5rem" }}>
        <StatCard label="Total Métodos" valor={metodos.length} sublabel="métodos configurados" color="#2563eb" icon="💳" />
        <StatCard label="Activos" valor={activos} sublabel="disponibles para uso" color="#16a34a" icon="✅" />
        <StatCard label="Inactivos" valor={inactivos} sublabel="temporalmente deshabilitados" color="#dc2626" icon="🚫" />
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
        <p style={{ fontSize: 14, fontWeight: 500, color: "#111827", marginBottom: 4 }}>Búsqueda y Filtros</p>
        <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 12 }}>Encuentra rápidamente métodos de pago</p>
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ position: "relative", flex: 1 }}>
            <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#9ca3af", fontSize: 15 }}>🔍</span>
            <input
              type="text"
              placeholder="Buscar por nombre o ID..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                width: "100%",
                border: "1px solid #d1d5db",
                borderRadius: 8,
                padding: "8px 12px 8px 34px",
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
          <select
            value={tipoFiltro}
            onChange={(e) => setTipoFiltro(e.target.value)}
            style={{
              border: "1px solid #d1d5db",
              borderRadius: 8,
              padding: "8px 32px 8px 12px",
              fontSize: 14,
              minWidth: 160,
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="">Todos los tipos</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Tarjeta">Tarjeta</option>
            <option value="Transferencia">Transferencia</option>
          </select>
        </div>
      </div>
 
      {/* Tabla */}
      <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
        <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid #e5e7eb" }}>
          <p style={{ fontSize: 14, fontWeight: 500, color: "#111827", margin: 0 }}>Métodos de Pago Registrados</p>
          <p style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>
            {metodosFiltrados.length} método{metodosFiltrados.length !== 1 ? "s" : ""} encontrado{metodosFiltrados.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                {["ID Método", "Nombre", "Tipo", "Comisión", "Estado", "Acciones"].map((col) => (
                  <th
                    key={col}
                    style={{
                      padding: "10px 12px",
                      textAlign: col === "Acciones" ? "right" : "left",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#6b7280",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {metodosFiltrados.map((m) => (
                <tr key={m.id} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "12px", fontSize: 13, fontWeight: 500, color: "#6b7280" }}>{m.id}</td>
                  <td style={{ padding: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span
                        style={{
                          background: "#eff6ff",
                          borderRadius: 6,
                          padding: "4px 6px",
                          fontSize: 15,
                          display: "inline-flex",
                        }}
                      >
                        {TIPO_ICONO[m.tipo] || "💳"}
                      </span>
                      <span style={{ fontWeight: 500, fontSize: 14, color: "#111827" }}>{m.nombre_metodo}</span>
                    </div>
                  </td>
                  <td style={{ padding: "12px" }}>
                    <span
                      style={{
                        background: "#f3f4f6",
                        color: "#374151",
                        padding: "2px 8px",
                        borderRadius: 6,
                        fontSize: 12,
                      }}
                    >
                      {m.tipo}
                    </span>
                  </td>
                  <td style={{ padding: "12px", fontSize: 14, fontWeight: 500, color: "#111827" }}>{m.comision}</td>
                  <td style={{ padding: "12px" }}>
                    <BadgeEstado estado={m.estado} />
                  </td>
                  <td style={{ padding: "12px", textAlign: "right" }}>
                    <div style={{ display: "flex", gap: 4, justifyContent: "flex-end" }}>
                      {[
                        { icon: "👁", label: "Ver" },
                        { icon: "✏️", label: "Editar" },
                        { icon: "🗑", label: "Eliminar", danger: true },
                      ].map(({ icon, label, danger }) => (
                        <button
                          key={label}
                          title={label}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "6px",
                            borderRadius: 6,
                            fontSize: 15,
                            color: danger ? "#dc2626" : "#6b7280",
                          }}
                        >
                          {icon}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}