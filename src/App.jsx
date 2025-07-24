import HeroSection from "./layout/HeroSection";
import AboutSection from "./layout/AboutSection";
import ProvideSection from "./layout/ProvideSection";
import OverviewSection from "./layout/OverviewSection";
import BenefitsSection from "./layout/BenefitsSection";
import ContactSection from "./layout/ContactSection";
import NewsletterSection from "./layout/NewsletterSection";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
function App() {
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="scroll-smooth">
        <HeroSection />
        <AboutSection />
        <ProvideSection />
        <OverviewSection />
        <BenefitsSection />
        <ContactSection />
        <NewsletterSection />
      </main>

      {/* <div className="img-container absolute opacity-[.5] z-10">
        <img src="/assets/images/footer-blueprint.png" alt="" />
      </div> */}
      <Footer />
    </>
  );
}

export default App;
