const C = {
  navy: "#0B2545",
  ink: "#5B7089",
};

export default function StatCard({ label, value, color }) {
  return (
    <div style={{ background: "white", border: "1px solid #E1E9F2", borderRadius: 10, padding: "14px 16px", textAlign: "center" }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: color || C.navy }}>{value}</div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: C.ink, marginTop: 2 }}>{label}</div>
    </div>
  );
}