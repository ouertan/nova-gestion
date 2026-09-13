import ContactForm from "./ContactForm";

const C = {
  navy: "#0B2545",
  sky: "#3E92CC",
  ink: "#5B7089",
};

export default function ContactSection() {
  return (
    <div id="contact" style={{ maxWidth: 1120, margin: "0 auto", padding: "72px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: 2.5, color: C.sky, textTransform: "uppercase", marginBottom: 12 }}>Contact</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, color: C.navy, margin: "0 0 10px" }}>Parlons de votre activité</h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: C.ink }}>Réponse sous 24h. Offre de lancement : -20% le premier mois.</p>
      </div>
      <ContactForm />
    </div>
  );
}