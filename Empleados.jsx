import { useState, useMemo } from "react";
 
const EMPLEADOS_INICIALES = [
  {
    id: "EMP-001",
    nombre: "General Roberto Vásquez",
    cargo: "Administrador",
    salario: 15000000,
    fecha_contratacion: "2020-01-15",
  },
  {
    id: "EMP-002",
    nombre: "General Carlos Mendoza",
    cargo: "Gerente",
    salario: 12000000,
    fecha_contratacion: "2020-03-10",
  },
  {
    id: "EMP-003",
    nombre: "Sargento Miguel Rodríguez",
    cargo: "Mecánico Senior",
    salario: 4500000,
    fecha_contratacion: "2021-06-20",
  },
  {
    id: "EMP-004",
    nombre: "Licenciada Patricia Ramírez",
    cargo: "Contador",
    salario: 5500000,
    fecha_contratacion: "2020-08-05",
  },
];
 
const fmt = (n) =>
  "$ " + n.toLocaleString("es-CO", { minimumFractionDigits: 0 });
 
function formatFecha(iso) {
  const [y, m, d] = iso.split("-");
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  return `${parseInt(d)} de ${meses[parseInt(m) - 1]} de ${y}`;
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
        <span style={{ fontSize: 18, color }}>{icon}</span>
      </div>
      <div style={{ fontSize: 26, fontWeight: 700, color, margin: "4px 0 2px" }}>
        {valor}
      </div>
      <div style={{ fontSize: 12, color: "#6b7280" }}>{sublabel}</div>
    </div>
  );
}
 
export default function Empleados() {
  const [empleados] = useState(EMPLEADOS_INICIALES);
  const [busqueda, setBusqueda] = useState("");
 
  const filtrados = useMemo(() => {
    const q = busqueda.toLowerCase();
    if (!q) return empleados;
    return empleados.filter(
      (e) =>
        e.nombre.toLowerCase().includes(q) ||
        e.cargo.toLowerCase().includes(q)
    );
  }, [empleados, busqueda]);
 
  const nominaMensual = empleados.reduce((acc, e) => acc + e.salario, 0);
  const salarioPromedio = Math.round(nominaMensual / empleados.length);
 
  return (
    <div
      style={{
        padding: "1.5rem",
        fontFamily: "system-ui, sans-serif",
        maxWidth: 1100,
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
            Empleados
          </h1>
          <p style={{ fontSize: 14, color: "#6b7280", marginTop: 4 }}>
            Gestiona el personal de la empresa
          </p>
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
          + Agregar Empleado
        </button>
      </div>
 
      {/* Stats */}
      <div style={{ display: "flex", gap: 12, marginBottom: "1.5rem" }}>
        <StatCard
          label="Total Empleados"
          valor={empleados.length}
          sublabel="personal activo"
          color="#2563eb"
          icon="👥"
        />
        <StatCard
          label="Nómina Mensual"
          valor={fmt(nominaMensual)}
          sublabel="costo total"
          color="#16a34a"
          icon="$"
        />
        <StatCard
          label="Salario Promedio"
          valor={fmt(salarioPromedio)}
          sublabel="por empleado"
          color="#7c3aed"
          icon="$"
        />
      </div>
 
      {/* Búsqueda */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: "1rem 1.25rem",
          marginBottom: "1.5rem",
        }}
      >
        <p style={{ fontSize: 14, fontWeight: 500, color: "#111827", marginBottom: 10 }}>
          Búsqueda
        </p>
        <div style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9ca3af",
              fontSize: 15,
            }}
          >
            🔍
          </span>
          <input
            type="text"
            placeholder="Buscar por nombre o cargo..."
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
            Empleados Registrados
          </p>
          <p style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>
            {filtrados.length} empleado{filtrados.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #e5e7eb", background: "#f9fafb" }}>
                {["ID", "Nombre", "Cargo", "Salario", "Fecha Contratación", "Acciones"].map(
                  (col) => (
                    <th
                      key={col}
                      style={{
                        padding: "10px 16px",
                        textAlign:
                          col === "Acciones" || col === "Salario"
                            ? "right"
                            : "left",
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
              {filtrados.map((e, i) => (
                <tr
                  key={e.id}
                  style={{
                    borderBottom:
                      i < filtrados.length - 1 ? "1px solid #f3f4f6" : "none",
                  }}
                  onMouseEnter={(ev) =>
                    (ev.currentTarget.style.background = "#f9fafb")
                  }
                  onMouseLeave={(ev) =>
                    (ev.currentTarget.style.background = "transparent")
                  }
                >
                  {/* ID */}
                  <td
                    style={{
                      padding: "14px 16px",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#6b7280",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {e.id}
                  </td>
 
                  {/* Nombre */}
                  <td
                    style={{
                      padding: "14px 16px",
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#111827",
                    }}
                  >
                    {e.nombre}
                  </td>
 
                  {/* Cargo */}
                  <td style={{ padding: "14px 16px" }}>
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
                      {e.cargo}
                    </span>
                  </td>
 
                  {/* Salario */}
                  <td
                    style={{
                      padding: "14px 16px",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#111827",
                      textAlign: "right",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {fmt(e.salario)}
                  </td>
 
                  {/* Fecha */}
                  <td
                    style={{
                      padding: "14px 16px",
                      fontSize: 13,
                      color: "#374151",
                      whiteSpace: "nowrap",
                    }}
                  >
                    📅 {formatFecha(e.fecha_contratacion)}
                  </td>
 
                  {/* Acciones */}
                  <td style={{ padding: "14px 16px", textAlign: "right" }}>
                    <div
                      style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}
                    >
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
 
              {filtrados.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    style={{
                      padding: "2rem",
                      textAlign: "center",
                      color: "#9ca3af",
                      fontSize: 14,
                    }}
                  >
                    No se encontraron empleados.
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