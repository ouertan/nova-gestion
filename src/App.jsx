import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ClientSpace from "./pages/ClientSpace";
import AgencySpace from "./pages/AgencySpace";
import { ensureSeed } from "./data/seed";

export default function App() {
  const [page, setPage] = useState("home");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    ensureSeed().then(() => setReady(true));
  }, []);

  if (!ready) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-body)", color: "#5B7089" }}>
        Chargement...
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "var(--font-body)", minHeight: "100vh", background: "white" }}>
      <Nav setPage={setPage} />

      {page === "home" && (
        <>
          <Hero setPage={setPage} />
          <Services />
          <Testimonials />
          <ContactSection />
        </>
      )}

      {page === "client" && <ClientSpace />}
      {page === "agence" && <AgencySpace />}

      <Footer setPage={setPage} />
    </div>
  );
}