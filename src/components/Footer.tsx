const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
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
              <li><a href="#" className="hover:opacity-100 transition-opacity">Programs</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Company</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
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
          <p>Copyright geener {currentYear} All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
