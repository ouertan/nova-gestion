const STATUS_STYLES = {
  livre: { bg: "rgba(46,158,107,0.12)", color: "#2E9E6B", label: "Livré" },
  cours: { bg: "rgba(217,138,43,0.12)", color: "#D98A2B", label: "En cours" },
  annule: { bg: "rgba(192,69,91,0.12)", color: "#C0455B", label: "Annulé" },
  acceptee: { bg: "rgba(46,158,107,0.12)", color: "#2E9E6B", label: "Acceptée" },
  attente: { bg: "rgba(217,138,43,0.12)", color: "#D98A2B", label: "En attente" },
  refusee: { bg: "rgba(192,69,91,0.12)", color: "#C0455B", label: "Refusée" },
};

export default function StatusPill({ status }) {
  const s = STATUS_STYLES[status] || STATUS_STYLES.attente;

  return (
    <span
      style={{
        background: s.bg,
        color: s.color,
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 11,
        padding: "4px 12px",
        borderRadius: 20,
        whiteSpace: "nowrap",
      }}
    >
      {s.label}
    </span>
  );
}