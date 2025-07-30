import { useState } from "react";
import { Home, Activity, FileText, MessageSquare, ChevronDown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Status", url: "/status", icon: Activity },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "Feedback", url: "/feedback", icon: MessageSquare },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} transition-smooth`}
      style={{
        background: 'linear-gradient(135deg, hsl(252 47% 22%), hsl(252 47% 15%))',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)'
      }}
      collapsible="icon"
    >
      <SidebarContent 
        className="bg-transparent"
        style={{ background: 'linear-gradient(135deg, hsl(252 47% 22%), hsl(252 47% 15%))' }}
      >
        {/* Brand Section */}
        {!collapsed && (
          <div className="p-6 border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <div className="text-primary-foreground">
              <h2 className="text-lg font-bold tracking-wide">ESQM</h2>
              <p className="text-xs text-primary-foreground/70">(DLIFE)</p>
            </div>
          </div>
        )}

        <SidebarGroup className="px-3 py-4">
          {!collapsed && (
            <SidebarGroupLabel className="text-white/60 text-xs uppercase tracking-wider font-medium mb-2">
              Navigation
            </SidebarGroupLabel>
          )}

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="w-full hover:bg-white/10 data-[active=true]:bg-white/15 data-[active=true]:text-white"
                  >
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ease-in-out ${
                          isActive 
                            ? "bg-white/15 text-white font-semibold shadow-lg border-l-4 border-white/50 transform scale-105" 
                            : "text-white/70 hover:bg-white/10 hover:text-white hover:transform hover:scale-102"
                        }`
                      }
                      style={({ isActive }) => ({
                        background: isActive 
                          ? 'linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))'
                          : 'transparent'
                      })}
                    >
                      <item.icon className={`h-5 w-5 ${collapsed ? 'mx-auto' : ''}`} />
                      {!collapsed && (
                        <span className="text-sm font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}