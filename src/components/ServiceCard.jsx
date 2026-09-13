import { CheckCircle2 } from "lucide-react";

const C = {
  navy: "#0B2545",
  sky: "#3E92CC",
  ice: "#EAF2FB",
  ink: "#5B7089",
};

export default function ServiceCard({ icon, title, items, accent }) {
  return (
    <div className="card-hover" style={{ background: "white", border: "1px solid #E1E9F2", borderRadius: 14, padding: 28, flex: 1, minWidth: 280 }}>
      <div style={{ width: 44, height: 44, borderRadius: 10, background: C.ice, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, color: accent }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: C.navy, margin: "0 0 12px" }}>{title}</h3>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10, fontFamily: "var(--font-body)", fontSize: 13.5, color: C.ink, lineHeight: 1.5 }}>
            <CheckCircle2 size={16} color={C.sky} style={{ flexShrink: 0, marginTop: 2 }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}