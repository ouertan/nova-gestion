import { Package, Calendar } from "lucide-react";
import ServiceCard from "./ServiceCard";

const C = {
  navy: "#0B2545",
  blueMid: "#2C5F9E",
  sky: "#3E92CC",
};

export default function Services() {
  return (
    <div id="services" style={{ maxWidth: 1120, margin: "0 auto", padding: "72px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: 2.5, color: C.sky, textTransform: "uppercase", marginBottom: 12 }}>Nos services</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, color: C.navy, margin: 0 }}>Un service, deux mondes.</h2>
      </div>

      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        <ServiceCard
          icon={<Package size={20} />}
          title="E-commerce & boutiques"
          accent={C.blueMid}
          items={[
            "Dossier archive complet : statut, fidélité, historique par client",
            "Classification mensuelle et annuelle de votre activité",
            "Gestion des messages, commentaires et appels sur vos réseaux",
            "Zéro commande perdue, même aux heures de forte affluence",
          ]}
        />
        <ServiceCard
          icon={<Calendar size={20} />}
          title="Personnalités & indépendants"
          accent={C.sky}
          items={[
            "Gestion complète de votre emploi du temps",
            "Acceptation ou refus des collaborations selon vos critères",
            "Communication professionnelle avec vos clients et partenaires",
            "Gestion de vos réseaux sociaux au quotidien",
          ]}
        />
      </div>
    </div>
  );
}