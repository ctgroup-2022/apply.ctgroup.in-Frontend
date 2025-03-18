import React, { useState, Suspense } from "react";
import "./App.css";
import Recruiters from "./components/pages/Recruiters";

// Lazy load components
const Navbar = React.lazy(() => import("./components/pages/Navbar"));
const DesktopHeroSection = React.lazy(() =>
  import("./components/pages/DesktopHeroSection")
);
const HeroSection = React.lazy(() => import("./components/pages/HeroSection"));
const PlacementSection = React.lazy(() => import("./PlacementSection"));
const Scroll = React.lazy(() => import("./components/pages/Scroll"));
const StickyScroll = React.lazy(() =>
  import("./components/pages/StickyScroll")
);
const CampusLife = React.lazy(() => import("./components/CampusLife"));
const AwardsSection = React.lazy(() =>
  import("./components/pages/AwardsSection")
);
const Testimonial = React.lazy(() => import("./components/pages/Testimonial"));
const FAQ = React.lazy(() => import("./components/pages/FAQ"));
const Footer = React.lazy(() => import("./components/Footer"));
const Explorecollege = React.lazy(() => import("./components/Explorecollege"));
const AcademicDisciplines = React.lazy(() =>
  import("./components/Academic-disciplines")
);


function App() {
  return (
    <div data-name="app" className="min-h-screen bg-white text-gray-900">
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Navbar />

        {/* Hero Section */}
        <section aria-labelledby="hero-section">
          <div className="hidden max-lg:block">
            <HeroSection />
          </div>
          <div className="hidden lg:block">
            <DesktopHeroSection />
          </div>
        </section>

        {/* Main Sections */}
        <main>
          <PlacementSection />
          <Scroll />
          <AcademicDisciplines />

          {/* Sticky and Logo Slider */}
          <div className="hidden min-[1000px]:block">
            <StickyScroll />
          </div>
          <div className="block min-[1000px]:hidden">
            <Recruiters/>
          </div>

          {/* Additional Sections */}
          <CampusLife />
          <AwardsSection />
          <Testimonial />
          <div className="hidden md:block">
            <Explorecollege />
          </div>
          <FAQ />
        </main>

        {/* Footer */}
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
