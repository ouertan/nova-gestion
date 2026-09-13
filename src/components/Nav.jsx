import { useState } from "react";
import { LayoutDashboard, Menu, X as XIcon } from "lucide-react";

const C = {
  navy: "#0B2545",
  blueMid: "#2C5F9E",
  sky: "#3E92CC",
  amber: "#E8A33D",
};

export default function Nav({ setPage }) {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "home", label: "Accueil" },
    { id: "services", label: "Services" },
    { id: "temoignages", label: "Témoignages" },
    { id: "contact", label: "Contact" },
  ];

  const go = (id) => {
    setOpen(false);
    setPage("home");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 30);
  };

  return (
    <div style={{ background: C.navy, position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => go("home")}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: `linear-gradient(135deg, ${C.sky}, ${C.blueMid})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LayoutDashboard size={16} color="white" />
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "white" }}>
            NOVA<span style={{ color: C.sky }}>GESTION</span>
          </span>
        </div>

        <nav className="nav-desktop" style={{ gap: 26, alignItems: "center" }}>
          {links.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} style={{ background: "none", border: "none", color: "#C7D8EC", fontSize: 14 }}>
              {l.label}
            </button>
          ))}
          <button
            onClick={() => setPage("client")}
            className="btn-anim"
            style={{ background: C.amber, color: C.navy, fontWeight: 700, fontSize: 13.5, padding: "10px 18px", borderRadius: 8, border: "none" }}
          >
            Espace Client
          </button>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
          style={{ background: "none", border: "none", color: "white", alignItems: "center", justifyContent: "center" }}
        >
          {open ? <XIcon size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`nav-mobile-panel ${open ? "open" : ""}`} style={{ flexDirection: "column", padding: "0 24px 20px", gap: 4 }}>
        {links.map((l) => (
          <button key={l.id} onClick={() => go(l.id)} style={{ background: "none", border: "none", color: "#C7D8EC", fontSize: 15, textAlign: "left", padding: "10px 0" }}>
            {l.label}
          </button>
        ))}
        <button
          onClick={() => { setOpen(false); setPage("client"); }}
          style={{ background: C.amber, color: C.navy, fontWeight: 700, fontSize: 14, padding: "12px 18px", borderRadius: 8, border: "none", marginTop: 8 }}
        >
          Espace Client
        </button>
      </div>
    </div>
  );
}