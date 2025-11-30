import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "company", "programs", "team"];
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl("Home")} className="text-xl md:text-2xl font-bold text-background">
              Geener
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("company")}
                className={`transition-colors text-sm font-medium ${
                  activeSection === "company"
                    ? "text-background"
                    : "text-background/80 hover:text-background"
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className={`transition-colors text-sm font-medium ${
                  activeSection === "programs"
                    ? "text-background"
                    : "text-background/80 hover:text-background"
                }`}
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("home")}
                className={`transition-colors text-sm font-medium ${
                  activeSection === "home"
                    ? "text-background"
                    : "text-background/80 hover:text-background"
                }`}
              >
                Company
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className={`transition-colors text-sm font-medium ${
                  activeSection === "team"
                    ? "text-background"
                    : "text-background/80 hover:text-background"
                }`}
              >
                Teams
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-background text-foreground px-6 py-2 rounded-full font-medium hover:bg-background/90 transition-colors border border-foreground"
              >
                Contact Us
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-background p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("company")}
                className={`transition-colors text-sm font-medium text-left ${
                  activeSection === "company"
                    ? "text-background"
                    : "text-background/80"
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className={`transition-colors text-sm font-medium text-left ${
                  activeSection === "programs"
                    ? "text-background"
                    : "text-background/80"
                }`}
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("home")}
                className={`transition-colors text-sm font-medium text-left ${
                  activeSection === "home"
                    ? "text-background"
                    : "text-background/80"
                }`}
              >
                Company
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className={`transition-colors text-sm font-medium text-left ${
                  activeSection === "team"
                    ? "text-background"
                    : "text-background/80"
                }`}
              >
                Teams
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-background text-foreground px-6 py-2 rounded-full font-medium hover:bg-background/90 transition-colors border border-foreground w-fit"
              >
                Contact Us
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-[73px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
            <div className="sm:col-span-2 md:col-span-5">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Geener</h3>
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed mb-3 sm:mb-4">
                We are a fully transparent, data-driven and adaptive team who are very thankful for our close relationships.
              </p>
              <p className="text-xs sm:text-sm opacity-80">1900-347-0123</p>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold text-xs sm:text-sm mb-3 sm:mb-4">Home</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm opacity-80">
                <li>
                  <button onClick={() => scrollToSection("programs")} className="hover:opacity-100 transition-opacity">
                    Programs
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("company")} className="hover:opacity-100 transition-opacity">
                    Company
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:opacity-100 transition-opacity">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold text-xs sm:text-sm mb-3 sm:mb-4">Webmaster</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Resources</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-bold text-xs sm:text-sm mb-3 sm:mb-4">Legal</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Condition</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Terms Condition</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm opacity-80">
            <p>Copyright geener {new Date().getFullYear()} All Right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
