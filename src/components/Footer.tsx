export function Footer() {
  return (
    <footer className="bg-nav-gradient border-t border-glass mt-auto">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between text-primary-foreground/70 text-sm">
          <div className="flex items-center gap-4">
            <span>© 2024 ESQM (DLIFE)</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary-foreground transition-smooth">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary-foreground transition-smooth">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary-foreground transition-smooth">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}