import { Bell, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Header() {
  return (
    <header className="border-b border-glass shadow-soft" style={{ background: '#2F205E' }}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section - Sidebar Trigger & Brand */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 transition-smooth h-7 w-7"
            onClick={() => {
              const sidebarTrigger = document.querySelector('[data-sidebar="trigger"]') as HTMLButtonElement;
              if (sidebarTrigger) {
                sidebarTrigger.click();
              }
            }}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="text-white">
            <h1 className="text-xl font-bold tracking-wide">ESQM (DLIFE)</h1>
          </div>
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 transition-smooth"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 transition-smooth"
          >
            <User className="h-5 w-5" />
          </Button>
          <Button
            className="bg-white text-[#2F205E] hover:bg-white/90 transition-smooth font-medium px-6"
          >
            DISCOVER
          </Button>
        </div>
      </div>
      {/* Hidden sidebar trigger for functionality */}
      <SidebarTrigger className="hidden" />
    </header>
  );
}