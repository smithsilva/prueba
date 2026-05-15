import { useState, useMemo } from "react";
 
const PROVEEDORES_INICIALES = [
  {
    id: "SUP-001",
    nombre: "Blindajes Industriales SAS",
    telefono: "+57 (1) 345-6789",
    correo: "ventas@blindajes.com",
    direccion: "Calle 50 #25-30",
    ciudad: "Bogotá",
  },
  {
    id: "SUP-002",
    nombre: "Aceros Especiales Ltda",
    telefono: "+57 (4) 234-5678",
    correo: "contacto@aceros.com",
    direccion: "Carrera 43A #12-15",
    ciudad: "Medellín",
  },
  {
    id: "SUP-003",
    nombre: "Tecnología Balística SA",
    telefono: "+57 (2) 456-7890",
    correo: "info@tecbalistica.com",
    direccion: "Av. 6 #28-40",
    ciudad: "Cali",
  },
];
 
export default function Proveedores() {
  const [proveedores] = useState(PROVEEDORES_INICIALES);
  const [busqueda, setBusqueda] = useState("");
 
  const filtrados = useMemo(() => {
    const q = busqueda.toLowerCase();
    if (!q) return proveedores;
    return proveedores.filter(
      (p) =>
        p.nombre.toLowerCase().includes(q) ||
        p.correo.toLowerCase().includes(q)
    );
  }, [proveedores, busqueda]);
 
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
            Proveedores
          </h1>
          <p style={{ fontSize: 14, color: "#6b7280", marginTop: 4 }}>
            Gestiona los proveedores de la empresa
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
          + Agregar Proveedor
        </button>
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
            placeholder="Buscar por nombre o correo..."
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
            Proveedores Registrados
          </p>
          <p style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>
            {filtrados.length} proveedor{filtrados.length !== 1 ? "es" : ""}
          </p>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #e5e7eb", background: "#f9fafb" }}>
                {["ID", "Nombre", "Teléfono", "Correo", "Dirección", "Ciudad", "Acciones"].map(
                  (col) => (
                    <th
                      key={col}
                      style={{
                        padding: "10px 16px",
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
              {filtrados.map((p, i) => (
                <tr
                  key={p.id}
                  style={{
                    borderBottom:
                      i < filtrados.length - 1 ? "1px solid #f3f4f6" : "none",
                    transition: "background 0.1s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#f9fafb")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
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
                    {p.id}
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
                    {p.nombre}
                  </td>
 
                  {/* Teléfono */}
                  <td
                    style={{
                      padding: "14px 16px",
                      fontSize: 14,
                      color: "#374151",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontSize: 13 }}>📞</span>
                      {p.telefono}
                    </span>
                  </td>
 
                  {/* Correo */}
                  <td
                    style={{
                      padding: "14px 16px",
                      fontSize: 14,
                      color: "#374151",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontSize: 13 }}>✉️</span>
                      {p.correo}
                    </span>
                  </td>
 
                  {/* Dirección */}
                  <td
                    style={{
                      padding: "14px 16px",
                      fontSize: 14,
                      color: "#374151",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontSize: 13 }}>📍</span>
                      {p.direccion}
                    </span>
                  </td>
 
                  {/* Ciudad */}
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
                      {p.ciudad}
                    </span>
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
                    colSpan={7}
                    style={{
                      padding: "2rem",
                      textAlign: "center",
                      color: "#9ca3af",
                      fontSize: 14,
                    }}
                  >
                    No se encontraron proveedores.
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