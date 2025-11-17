import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl("Home")} className="text-xl md:text-2xl font-bold text-background">
              Geener
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-background/80 hover:text-background transition-colors text-sm font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-background/80 hover:text-background transition-colors text-sm font-medium"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("company")}
                className="text-background/80 hover:text-background transition-colors text-sm font-medium"
              >
                Company
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-background/80 hover:text-background transition-colors text-sm font-medium"
              >
                Teams
              </button>
              <Link to={createPageUrl("Contact")}>
                <button className="bg-background text-foreground px-6 py-2 rounded-full font-medium hover:bg-background/90 transition-colors border border-foreground">
                  Contact Us
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-[73px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-5">
              <h3 className="text-2xl font-bold mb-4">Geener</h3>
              <p className="text-sm opacity-80 leading-relaxed mb-4">
                We are a fully transparent, data-driven and adaptive team who are very thankful for our close relationships.
              </p>
              <p className="text-sm opacity-80">1900-347-0123</p>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold text-sm mb-4">Home</h4>
              <ul className="space-y-2 text-sm opacity-80">
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
                  <Link to={createPageUrl("Contact")} className="hover:opacity-100 transition-opacity">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold text-sm mb-4">Webmaster</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Resources</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-bold text-sm mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Condition</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Terms Condition</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>Copyright geener {new Date().getFullYear()} All Right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
