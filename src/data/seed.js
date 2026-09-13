import { safeGet, safeSet } from "../lib/storage";

export async function ensureSeed() {
  const existing = await safeGet("client-index");
  if (existing && existing.length) return;

  const index = [
    { code: "DEMO-SHOP", name: "S. Amrani", type: "ecommerce" },
    { code: "DEMO-PERSO", name: "Yasmine M.", type: "personnalite" },
  ];

  await safeSet("client-index", index);

  await safeSet("client-record:DEMO-SHOP", {
    profile: {
      code: "DEMO-SHOP",
      name: "S. Amrani",
      type: "ecommerce",
      password: "1234",
    },
    orders: [
      { id: "1", date: "2026-06-28", label: "Commande #4821", status: "livre", total: "890 MAD" },
      { id: "2", date: "2026-07-03", label: "Commande #4907", status: "cours", total: "340 MAD" },
      { id: "3", date: "2026-06-29", label: "Commande #4790", status: "annule", total: "150 MAD" },
    ],
    collabs: [],
  });

  await safeSet("client-record:DEMO-PERSO", {
    profile: {
      code: "DEMO-PERSO",
      name: "Yasmine M.",
      type: "personnalite",
      password: "1234",
    },
    orders: [],
    collabs: [
      { id: "1", date: "Lun. 10h", label: "Marque Atlas Sport — Partenariat produit, 3 mois", status: "acceptee" },
      { id: "2", date: "Mer. 14h", label: "Salon Horizon Business — Intervention conférence", status: "attente" },
      { id: "3", date: "Ven. 09h", label: "Studio Nova Media — Conflit d'horaire", status: "refusee" },
    ],
  });
}