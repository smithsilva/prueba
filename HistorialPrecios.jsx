import { useState, useMemo } from "react";
 
const HISTORIAL_INICIAL = [
  {
    id: "HIST-081",
    producto: "Placa Balística Nivel IV",
    prod_id: "PROD-081",
    precio_anterior: 2500000,
    precio_nuevo: 2750000,
    variacion: 10.0,
    fecha_cambio: "2026-05-08",
    motivo: "Ajuste por inflación y aumento en costo de mate",
    usuario: "Patricia Ramírez",
  },
  {
    id: "HIST-082",
    producto: "Blindaje Frontal Reforzado",
    prod_id: "PROD-082",
    precio_anterior: 3200000,
    precio_nuevo: 2900000,
    variacion: -9.38,
    fecha_cambio: "2026-05-07",
    motivo: "Promoción especial para clientes corporativos",
    usuario: "Patricia Ramírez",
  },
  {
    id: "HIST-083",
    producto: "Sistema de Blindaje Lateral",
    prod_id: "PROD-083",
    precio_anterior: 4500000,
    precio_nuevo: 4500000,
    variacion: 0,
    fecha_cambio: "2026-05-06",
    motivo: "Corrección de precio por error en el sistema",
    usuario: "Patricia Ramírez",
  },
  {
    id: "HIST-084",
    producto: "Vidrio Antibalas",
    prod_id: "PROD-084",
    precio_anterior: 1800000,
    precio_nuevo: 2100000,
    variacion: 16.67,
    fecha_cambio: "2026-05-05",
    motivo: "Incremento por nueva tecnología mejorada",
    usuario: "Patricia Ramírez",
  },
  {
    id: "HIST-085",
    producto: "Placa Balística Nivel IV",
    prod_id: "PROD-085",
    precio_anterior: 2400000,
    precio_nuevo: 2500000,
    variacion: 4.17,
    fecha_cambio: "2026-05-03",
    motivo: "Ajuste trimestral de precios",
    usuario: "Patricia Ramírez",
  },
  {
    id: "HIST-086",
    producto: "Kit de Blindaje Completo",
    prod_id: "PROD-086",
    precio_anterior: 15000000,
    precio_nuevo: 13500000,
    variacion: -10.0,
    fecha_cambio: "2026-05-01",
    motivo: "Descuento por volumen en temporada baja",
    usuario: "Patricia Ramírez",
  },
];
 
const fmt = (n) =>
  "$ " + n.toLocaleString("es-CO", { minimumFractionDigits: 0 });
 
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
      <div style={{ fontSize: 28, fontWeight: 600, color, margin: "4px 0 2px" }}>
        {valor}
      </div>
      <div style={{ fontSize: 12, color: "#6b7280" }}>{sublabel}</div>
    </div>
  );
}
 
function VariacionBadge({ variacion }) {
  if (variacion > 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span
          style={{
            background: "#fee2e2",
            color: "#991b1b",
            borderRadius: 999,
            padding: "2px 8px",
            fontSize: 12,
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          ↑ +{variacion.toFixed(2)}%
        </span>
        <span style={{ fontSize: 12, color: "#dc2626", fontWeight: 500 }}>
          +$ {(0).toLocaleString()}
        </span>
      </div>
    );
  }
  if (variacion < 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span
          style={{
            background: "#dcfce7",
            color: "#166534",
            borderRadius: 999,
            padding: "2px 8px",
            fontSize: 12,
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          ↓ {variacion.toFixed(2)}%
        </span>
        <span style={{ fontSize: 12, color: "#16a34a", fontWeight: 500 }}>
          -$ {Math.abs(0).toLocaleString()}
        </span>
      </div>
    );
  }
  return (
    <span
      style={{
        background: "#f3f4f6",
        color: "#6b7280",
        borderRadius: 999,
        padding: "2px 10px",
        fontSize: 12,
        fontWeight: 500,
      }}
    >
      = Sin cambio
    </span>
  );
}
 
function calcDiff(anterior, nuevo) {
  const diff = nuevo - anterior;
  if (diff === 0) return null;
  const sign = diff > 0 ? "+" : "-";
  return `${sign}$ ${Math.abs(diff).toLocaleString("es-CO")}`;
}
 
function VariacionCell({ item }) {
  const { variacion, precio_anterior, precio_nuevo } = item;
  const diff = calcDiff(precio_anterior, precio_nuevo);
 
  if (variacion > 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <span
          style={{
            background: "#fee2e2",
            color: "#991b1b",
            borderRadius: 999,
            padding: "2px 8px",
            fontSize: 12,
            fontWeight: 600,
            display: "inline-block",
          }}
        >
          ↑ +{variacion.toFixed(2)}%
        </span>
        {diff && (
          <span style={{ fontSize: 12, color: "#dc2626", fontWeight: 500 }}>
            {diff}
          </span>
        )}
      </div>
    );
  }
  if (variacion < 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <span
          style={{
            background: "#dcfce7",
            color: "#166534",
            borderRadius: 999,
            padding: "2px 8px",
            fontSize: 12,
            fontWeight: 600,
            display: "inline-block",
          }}
        >
          ↓ {variacion.toFixed(2)}%
        </span>
        {diff && (
          <span style={{ fontSize: 12, color: "#16a34a", fontWeight: 500 }}>
            {diff}
          </span>
        )}
      </div>
    );
  }
  return (
    <span
      style={{
        background: "#f3f4f6",
        color: "#6b7280",
        borderRadius: 999,
        padding: "2px 10px",
        fontSize: 12,
        fontWeight: 500,
        display: "inline-block",
      }}
    >
      = Sin cambio
    </span>
  );
}
 
function formatFecha(iso) {
  const [y, m, d] = iso.split("-");
  const meses = [
    "enero","febrero","marzo","abril","mayo","junio",
    "julio","agosto","septiembre","octubre","noviembre","diciembre",
  ];
  return `${parseInt(d)} de ${meses[parseInt(m) - 1]} de ${y}`;
}
 
export default function HistorialPrecios() {
  const [historial] = useState(HISTORIAL_INICIAL);
  const [busqueda, setBusqueda] = useState("");
  const [fecha, setFecha] = useState("");
  const [productoFiltro, setProductoFiltro] = useState("");
 
  const filtrado = useMemo(() => {
    const q = busqueda.toLowerCase();
    return historial.filter((h) => {
      const matchQ =
        !q ||
        h.id.toLowerCase().includes(q) ||
        h.producto.toLowerCase().includes(q) ||
        h.motivo.toLowerCase().includes(q);
      const matchFecha = !fecha || h.fecha_cambio === fecha;
      const matchProd = !productoFiltro || h.producto === productoFiltro;
      return matchQ && matchFecha && matchProd;
    });
  }, [historial, busqueda, fecha, productoFiltro]);
 
  const aumentos = historial.filter((h) => h.variacion > 0).length;
  const reducciones = historial.filter((h) => h.variacion < 0).length;
  const sinCambio = historial.filter((h) => h.variacion === 0).length;
 
  const productosUnicos = [...new Set(historial.map((h) => h.producto))];
 
  return (
    <div
      style={{
        padding: "1.5rem",
        fontFamily: "system-ui, sans-serif",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: "#111827", margin: 0 }}>
          Historial de Precios
        </h1>
        <p style={{ fontSize: 14, color: "#6b7280", marginTop: 4 }}>
          Rastrea y analiza todos los cambios de precios de productos
        </p>
      </div>
 
      {/* Stats */}
      <div style={{ display: "flex", gap: 12, marginBottom: "1.5rem" }}>
        <StatCard
          label="Total Registros"
          valor={historial.length}
          sublabel="cambios registrados"
          color="#2563eb"
          icon="🕐"
        />
        <StatCard
          label="Aumentos"
          valor={aumentos}
          sublabel="precios incrementados"
          color="#dc2626"
          icon="↗"
        />
        <StatCard
          label="Reducciones"
          valor={reducciones}
          sublabel="precios reducidos"
          color="#16a34a"
          icon="↘"
        />
        <StatCard
          label="Sin Cambio"
          valor={sinCambio}
          sublabel="correcciones"
          color="#6b7280"
          icon="—"
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
          Encuentra rápidamente registros históricos
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          {/* Búsqueda */}
          <div style={{ position: "relative", flex: 1 }}>
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
              placeholder="Buscar por ID, producto, motivo..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                width: "100%",
                border: "1px solid #d1d5db",
                borderRadius: 8,
                padding: "8px 12px 8px 32px",
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
                color: "#111827",
              }}
            />
          </div>
          {/* Fecha */}
          <div style={{ position: "relative" }}>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              style={{
                border: "1px solid #d1d5db",
                borderRadius: 8,
                padding: "8px 12px",
                fontSize: 14,
                outline: "none",
                color: fecha ? "#111827" : "#9ca3af",
                minWidth: 160,
              }}
            />
          </div>
          {/* Producto */}
          <select
            value={productoFiltro}
            onChange={(e) => setProductoFiltro(e.target.value)}
            style={{
              border: "1px solid #d1d5db",
              borderRadius: 8,
              padding: "8px 12px",
              fontSize: 14,
              minWidth: 180,
              outline: "none",
              cursor: "pointer",
              color: "#111827",
            }}
          >
            <option value="">Todos los productos</option>
            {productosUnicos.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
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
            Registro Histórico de Precios
          </p>
          <p style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>
            {filtrado.length} registro{filtrado.length !== 1 ? "s" : ""} encontrado
            {filtrado.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                {[
                  "ID Historial",
                  "Producto",
                  "Precio Anterior",
                  "Precio Nuevo",
                  "Variación",
                  "Fecha Cambio",
                  "Motivo",
                  "Usuario",
                  "Acciones",
                ].map((col) => (
                  <th
                    key={col}
                    style={{
                      padding: "10px 12px",
                      textAlign: col === "Acciones" ? "right" : "left",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#6b7280",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtrado.map((h) => (
                <tr
                  key={h.id}
                  style={{ borderBottom: "1px solid #f3f4f6" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#f9fafb")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  {/* ID */}
                  <td style={{ padding: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span
                        style={{
                          background: "#eff6ff",
                          borderRadius: 6,
                          padding: "4px 6px",
                          fontSize: 14,
                        }}
                      >
                        🕐
                      </span>
                      <span
                        style={{ fontSize: 13, fontWeight: 500, color: "#374151" }}
                      >
                        {h.id}
                      </span>
                    </div>
                  </td>
                  {/* Producto */}
                  <td style={{ padding: "12px" }}>
                    <div
                      style={{ fontSize: 14, fontWeight: 500, color: "#111827" }}
                    >
                      {h.producto}
                    </div>
                    <div style={{ fontSize: 11, color: "#9ca3af" }}>{h.prod_id}</div>
                  </td>
                  {/* Precio Anterior */}
                  <td
                    style={{
                      padding: "12px",
                      fontSize: 14,
                      color: "#374151",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {fmt(h.precio_anterior)}
                  </td>
                  {/* Precio Nuevo */}
                  <td
                    style={{
                      padding: "12px",
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#111827",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {fmt(h.precio_nuevo)}
                  </td>
                  {/* Variación */}
                  <td style={{ padding: "12px" }}>
                    <VariacionCell item={h} />
                  </td>
                  {/* Fecha */}
                  <td
                    style={{
                      padding: "12px",
                      fontSize: 13,
                      color: "#374151",
                      whiteSpace: "nowrap",
                    }}
                  >
                    📅 {formatFecha(h.fecha_cambio)}
                  </td>
                  {/* Motivo */}
                  <td
                    style={{
                      padding: "12px",
                      fontSize: 13,
                      color: "#6b7280",
                      maxWidth: 220,
                    }}
                  >
                    {h.motivo}
                  </td>
                  {/* Usuario */}
                  <td
                    style={{
                      padding: "12px",
                      fontSize: 13,
                      color: "#374151",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h.usuario}
                  </td>
                  {/* Acciones */}
                  <td style={{ padding: "12px", textAlign: "right" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: 4,
                        justifyContent: "flex-end",
                      }}
                    >
                      <button
                        title="Ver"
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: 6,
                          borderRadius: 6,
                          fontSize: 15,
                          color: "#6b7280",
                        }}
                      >
                        👁
                      </button>
                      <button
                        title="Editar"
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: 6,
                          borderRadius: 6,
                          fontSize: 15,
                          color: "#6b7280",
                        }}
                      >
                        ✏️
                      </button>
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