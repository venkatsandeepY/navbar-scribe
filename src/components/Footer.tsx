export function Footer() {
  return (
    <footer 
      className="border-t mt-auto"
      style={{
        background: 'linear-gradient(135deg, #2F205E, #241849)',
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between text-white/70 text-sm">
          <div className="flex items-center gap-4">
            <span>© 2024 ESQM (DLIFE)</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-smooth">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-smooth">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-smooth">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}