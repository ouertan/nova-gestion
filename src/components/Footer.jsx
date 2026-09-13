const C = {
  navy: "#0B2545",
  sky: "#3E92CC",
};

export default function Footer({ setPage }) {
  return (
    <div style={{ background: C.navy, color: "white", padding: "30px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14 }}>
          NOVA<span style={{ color: C.sky }}>GESTION</span>
        </span>
        <button onClick={() => setPage("agence")} style={{ background: "none", border: "none", color: "#7C93B0", fontFamily: "var(--font-body)", fontSize: 11.5, textDecoration: "underline" }}>
          Accès agence (démo)
        </button>
      </div>
    </div>
  );
}