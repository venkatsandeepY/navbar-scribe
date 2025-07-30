import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Header() {
  return (
    <header className="bg-nav-gradient border-b border-glass shadow-soft">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section - Sidebar Trigger & Brand */}
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-primary-foreground hover:bg-nav-hover transition-smooth" />
          <div className="text-primary-foreground">
            <h1 className="text-xl font-bold tracking-wide">ESQM</h1>
            <p className="text-xs text-primary-foreground/70">(DLIFE)</p>
          </div>
        </div>

        {/* Center Section - Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-search border-search focus:ring-primary focus:border-primary transition-smooth"
            />
          </div>
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-nav-hover transition-smooth"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-nav-hover transition-smooth"
          >
            <User className="h-5 w-5" />
          </Button>
          <Button
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-smooth font-medium px-6"
          >
            DISCOVER
          </Button>
        </div>
      </div>
    </header>
  );
}