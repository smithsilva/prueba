import { useState } from "react";
import { Search, Plus, Eye, Pencil, Trash2, Download, TrendingUp, TrendingDown, FileText, DollarSign, Calendar, Filter } from "lucide-react";
 
const styles = {
  /* ── layout ── */
  page: {
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    background: "#f4f6f9",
    minHeight: "100vh",
    padding: "32px",
    color: "#1a1d23",
  },
  /* ── header ── */
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "28px",
  },
  headerTitle: { fontSize: "26px", fontWeight: 700, color: "#0f1117", letterSpacing: "-0.5px" },
  headerSub: { fontSize: "13.5px", color: "#7a8499", marginTop: "4px" },
  headerActions: { display: "flex", gap: "10px", alignItems: "center" },
  /* ── buttons ── */
  btnOutline: {
    display: "flex", alignItems: "center", gap: "7px",
    padding: "9px 18px", borderRadius: "8px", fontSize: "13.5px",
    fontWeight: 500, cursor: "pointer", border: "1.5px solid #e2e6ef",
    background: "#fff", color: "#374151", fontFamily: "inherit",
    transition: "background 0.15s",
  },
  btnPrimary: {
    display: "flex", alignItems: "center", gap: "7px",
    padding: "9px 18px", borderRadius: "8px", fontSize: "13.5px",
    fontWeight: 500, cursor: "pointer", border: "none",
    background: "#3b6ef8", color: "#fff", fontFamily: "inherit",
    transition: "background 0.15s",
  },
  /* ── cards grid ── */
  cardsGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" },
  card: (bg, border) => ({
    background: bg, borderRadius: "14px", padding: "22px 24px",
    border: `1.5px solid ${border}`, position: "relative", overflow: "hidden",
  }),
  cardIcon: (bg) => ({
    position: "absolute", top: "20px", right: "20px",
    width: "32px", height: "32px", borderRadius: "8px",
    background: bg, display: "flex", alignItems: "center", justifyContent: "center",
  }),
  cardLabel: { fontSize: "13px", fontWeight: 500, color: "#6b7280", marginBottom: "14px" },
  cardAmount: (color) => ({
    fontSize: "27px", fontWeight: 700, letterSpacing: "-1px",
    fontFamily: "'DM Mono', monospace", color,
  }),
  cardSub: { fontSize: "12px", color: "#9ca3af", marginTop: "6px" },
  /* ── section box ── */
  sectionBox: {
    background: "#fff", borderRadius: "14px", border: "1.5px solid #eaecf2",
    padding: "22px 24px", marginBottom: "20px",
  },
  sectionTitle: { fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: "4px" },
  sectionSub: { fontSize: "12.5px", color: "#9ca3af", marginBottom: "18px" },
  /* ── filters ── */
  filtersRow: { display: "flex", gap: "14px", alignItems: "center" },
  filterInput: {
    flex: 1, display: "flex", alignItems: "center", gap: "8px",
    border: "1.5px solid #e2e6ef", borderRadius: "8px",
    padding: "9px 14px", background: "#fafbfc",
  },
  filterInputEl: {
    border: "none", background: "transparent", fontFamily: "inherit",
    fontSize: "13.5px", color: "#374151", outline: "none", width: "100%",
  },
  /* ── table ── */
  tableHeaderRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "16px" },
  tableTitle: { fontSize: "15px", fontWeight: 600, color: "#111827" },
  tableCount: { fontSize: "12.5px", color: "#9ca3af", marginTop: "2px" },
  table: { width: "100%", borderCollapse: "collapse" },
  th: {
    textAlign: "left", fontSize: "12px", fontWeight: 600, color: "#6b7280",
    textTransform: "uppercase", letterSpacing: "0.5px",
    padding: "10px 12px", borderBottom: "1.5px solid #eaecf2",
  },
  td: { padding: "14px 12px", fontSize: "13.5px", color: "#374151", verticalAlign: "middle" },
  idCell: { display: "flex", alignItems: "center", gap: "8px", fontFamily: "'DM Mono', monospace", fontSize: "13px", fontWeight: 500 },
  dateCell: { display: "flex", alignItems: "center", gap: "6px", color: "#6b7280", fontSize: "13px" },
  /* ── badges ── */
  badge: (bg, color) => ({
    display: "inline-flex", alignItems: "center", gap: "4px",
    padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: 600,
    background: bg, color,
  }),
  maintenanceId: {
    fontFamily: "'DM Mono', monospace", fontSize: "12px",
    background: "#f3f4f6", color: "#6b7280", padding: "3px 8px", borderRadius: "5px",
  },
  amount: (color) => ({ fontFamily: "'DM Mono', monospace", fontWeight: 600, fontSize: "13.5px", color }),
  /* ── action buttons ── */
  actionBtns: { display: "flex", gap: "6px", alignItems: "center", justifyContent: "center" },
  actionBtn: {
    width: "30px", height: "30px", borderRadius: "7px",
    border: "1.5px solid #e2e6ef", background: "#fff",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", color: "#6b7280", transition: "all 0.12s",
  },
};
 
/* ─── badge config by type ─── */
const badgeConfig = {
  Egreso:  { bg: "#fee2e2", color: "#dc2626", label: "↙ Egreso" },
  Ingreso: { bg: "#dcfce7", color: "#16a34a", label: "↗ Ingreso" },
  Ajuste:  { bg: "#e0e9ff", color: "#3b6ef8", label: "📋 Ajuste" },
};
 
const amountColor = {
  Egreso:  "#dc2626",
  Ingreso: "#16a34a",
  Ajuste:  "#3b6ef8",
};
 
/* ─── static data (same as image) ─── */
const DATA = [
  { id: "MOV-001", fecha: "8 de mayo de 2026",  tipo: "Egreso",  concepto: "Compra de placas balísticas nivel IV - 50 unidad", mantenimiento: "MAN-001", valor: 125000000, usuario: "Patricia Ramírez" },
  { id: "MOV-002", fecha: "7 de mayo de 2026",  tipo: "Ingreso", concepto: "Venta de blindaje frontal reforzado",                mantenimiento: "MAN-002", valor: 85000000,  usuario: "Patricia Ramírez" },
  { id: "MOV-003", fecha: "6 de mayo de 2026",  tipo: "Egreso",  concepto: "Mantenimiento preventivo vehículo VT-001",           mantenimiento: "MAN-003", valor: 15000000,  usuario: "Patricia Ramírez" },
  { id: "MOV-004", fecha: "5 de mayo de 2026",  tipo: "Ajuste",  concepto: "Ajuste contable por diferencia en inventario",       mantenimiento: "MAN-004", valor: 2500000,   usuario: "Patricia Ramírez" },
  { id: "MOV-005", fecha: "4 de mayo de 2026",  tipo: "Egreso",  concepto: "Reparación de blindaje lateral LAV-25",              mantenimiento: "MAN-005", valor: 42000000,  usuario: "Patricia Ramírez" },
];
 
const fmt = (n) => `$ ${n.toLocaleString("es-CO")}`;
 
export default function MovimientosContables() {
  const [busqueda, setBusqueda]   = useState("");
  const [fecha, setFecha]         = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("Todos los tipos");
 
  const movimientos = DATA; // reemplaza con props o fetch real
 
  const totalIngresos = movimientos.filter(m => m.tipo === "Ingreso").reduce((a, m) => a + m.valor, 0);
  const totalEgresos  = movimientos.filter(m => m.tipo === "Egreso" ).reduce((a, m) => a + m.valor, 0);
  const totalAjustes  = movimientos.filter(m => m.tipo === "Ajuste" ).reduce((a, m) => a + m.valor, 0);
  const balance       = totalIngresos - totalEgresos;
 
  const filtrados = movimientos.filter((m) => {
    const matchBusqueda = m.concepto.toLowerCase().includes(busqueda.toLowerCase()) ||
                          m.id.toLowerCase().includes(busqueda.toLowerCase());
    const matchTipo = tipoFiltro === "Todos los tipos" || m.tipo === tipoFiltro;
    return matchBusqueda && matchTipo;
  });
 
  return (
    <div style={styles.page}>
 
      {/* ── Header ── */}
      <div style={styles.header}>
        <div>
          <div style={styles.headerTitle}>Gestión de Movimientos Contables</div>
          <div style={styles.headerSub}>Administra y controla todos los movimientos financieros del sistema</div>
        </div>
        <div style={styles.headerActions}>
          <button style={styles.btnOutline}>
            <Download size={14} /> Exportar CSV
          </button>
          <button style={styles.btnPrimary}>
            <Plus size={14} /> Nuevo Movimiento
          </button>
        </div>
      </div>
 
      {/* ── Summary Cards ── */}
      <div style={styles.cardsGrid}>
        {/* Ingresos */}
        <div style={styles.card("#f0faf4", "#c6e8d3")}>
          <div style={styles.cardIcon("#dcfce7")}><TrendingUp size={16} color="#16a34a" /></div>
          <div style={styles.cardLabel}>Total Ingresos</div>
          <div style={styles.cardAmount("#16a34a")}>{fmt(totalIngresos)}</div>
          <div style={styles.cardSub}>Entradas registradas</div>
        </div>
        {/* Egresos */}
        <div style={styles.card("#fff5f5", "#fecaca")}>
          <div style={styles.cardIcon("#fee2e2")}><TrendingDown size={16} color="#dc2626" /></div>
          <div style={styles.cardLabel}>Total Egresos</div>
          <div style={styles.cardAmount("#dc2626")}>{fmt(totalEgresos)}</div>
          <div style={styles.cardSub}>Salidas registradas</div>
        </div>
        {/* Ajustes */}
        <div style={styles.card("#f0f5ff", "#bfcfff")}>
          <div style={styles.cardIcon("#e0e9ff")}><FileText size={16} color="#3b6ef8" /></div>
          <div style={styles.cardLabel}>Ajustes</div>
          <div style={styles.cardAmount("#3b6ef8")}>{fmt(totalAjustes)}</div>
          <div style={styles.cardSub}>Ajustes contables</div>
        </div>
        {/* Balance */}
        <div style={styles.card("#fffbf0", "#fde68a")}>
          <div style={styles.cardIcon("#fef3c7")}><DollarSign size={16} color="#d97706" /></div>
          <div style={styles.cardLabel}>Balance</div>
          <div style={styles.cardAmount("#d97706")}>{balance < 0 ? `-$ ${Math.abs(balance).toLocaleString("es-CO")}` : fmt(balance)}</div>
          <div style={styles.cardSub}>Diferencia neta</div>
        </div>
      </div>
 
      {/* ── Search & Filters ── */}
      <div style={styles.sectionBox}>
        <div style={styles.sectionTitle}>Búsqueda y Filtros</div>
        <div style={styles.sectionSub}>Encuentra rápidamente movimientos específicos</div>
        <div style={styles.filtersRow}>
          {/* Búsqueda */}
          <div style={{ ...styles.filterInput, flex: 2 }}>
            <Search size={15} color="#9ca3af" />
            <input
              style={styles.filterInputEl}
              type="text"
              placeholder="Buscar por ID, concepto..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
          {/* Fecha */}
          <div style={styles.filterInput}>
            <Calendar size={15} color="#9ca3af" />
            <input
              style={styles.filterInputEl}
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          {/* Tipo */}
          <div style={styles.filterInput}>
            <Filter size={15} color="#9ca3af" />
            <select
              style={styles.filterInputEl}
              value={tipoFiltro}
              onChange={(e) => setTipoFiltro(e.target.value)}
            >
              <option>Todos los tipos</option>
              <option>Ingreso</option>
              <option>Egreso</option>
              <option>Ajuste</option>
            </select>
          </div>
        </div>
      </div>
 
      {/* ── Table ── */}
      <div style={styles.sectionBox}>
        <div style={styles.tableHeaderRow}>
          <div>
            <div style={styles.tableTitle}>Registro de Movimientos</div>
            <div style={styles.tableCount}>{filtrados.length} movimientos registrados</div>
          </div>
        </div>
 
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                {["ID Movimiento", "Fecha", "Tipo", "Concepto", "ID Mantenimiento", "Valor", "Usuario Registro", "Acciones"].map((h, i) => (
                  <th key={h} style={{ ...styles.th, textAlign: i >= 5 ? "right" : "left", ...(i === 7 && { textAlign: "center" }) }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtrados.map((m, idx) => {
                const badge = badgeConfig[m.tipo] || badgeConfig.Ajuste;
                const color = amountColor[m.tipo] || "#374151";
                return (
                  <tr
                    key={m.id}
                    style={{ borderBottom: idx < filtrados.length - 1 ? "1px solid #f3f4f6" : "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f8f9fb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <td style={styles.td}>
                      <div style={styles.idCell}>
                        <FileText size={14} color="#3b6ef8" />
                        {m.id}
                      </div>
                    </td>
                    <td style={styles.td}>
                      <div style={styles.dateCell}>
                        <Calendar size={13} color="#9ca3af" />
                        {m.fecha}
                      </div>
                    </td>
                    <td style={styles.td}>
                      <span style={styles.badge(badge.bg, badge.color)}>{badge.label}</span>
                    </td>
                    <td style={styles.td}>{m.concepto}</td>
                    <td style={styles.td}>
                      <span style={styles.maintenanceId}>{m.mantenimiento}</span>
                    </td>
                    <td style={{ ...styles.td, textAlign: "right" }}>
                      <span style={styles.amount(color)}>{fmt(m.valor)}</span>
                    </td>
                    <td style={styles.td}>{m.usuario}</td>
                    <td style={{ ...styles.td, textAlign: "center" }}>
                      <div style={styles.actionBtns}>
                        <button
                          style={styles.actionBtn}
                          title="Ver"
                          onMouseEnter={(e) => { e.currentTarget.style.background = "#f3f4f6"; e.currentTarget.style.color = "#374151"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#6b7280"; }}
                        >
                          <Eye size={14} />
                        </button>
                        <button
                          style={styles.actionBtn}
                          title="Editar"
                          onMouseEnter={(e) => { e.currentTarget.style.background = "#f3f4f6"; e.currentTarget.style.color = "#374151"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#6b7280"; }}
                        >
                          <Pencil size={14} />
                        </button>
                        <button
                          style={styles.actionBtn}
                          title="Eliminar"
                          onMouseEnter={(e) => { e.currentTarget.style.background = "#fee2e2"; e.currentTarget.style.borderColor = "#fca5a5"; e.currentTarget.style.color = "#dc2626"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e2e6ef"; e.currentTarget.style.color = "#6b7280"; }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
 