import React, { useState, useEffect, Suspense } from "react";
import { initialize } from "./smoothScroll";
import "./App.css";

import DesktopHeroSection from "./components/pages/DesktopHeroSection";

// Lazy load components
const Navbar = React.lazy(() => import("./components/pages/Navbar"));
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
const LogoSlider = React.lazy(() => import("./components/pages/LogoSlider"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div data-name="app" className="min-h-screen bg-white">
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>

        <Navbar />

        {/* Hero Section */}
        <div className="hidden max-lg:block">
          <HeroSection />
        </div>
        <div className="hidden lg:block">
          <DesktopHeroSection />
        </div>

        {/* Main Sections */}
        <PlacementSection />
        <Scroll />
        <AcademicDisciplines />

        {/* Sticky and Logo Slider */}
        <div className="hidden min-[1000px]:block">
          <StickyScroll />
        </div>
        <div className="block min-[1000px]:hidden">
          <LogoSlider />
        </div>

        {/* Additional Sections */}
        <CampusLife />
        <AwardsSection />
        <Testimonial />
        <Explorecollege />
        <FAQ />

        {/* Footer */}
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
