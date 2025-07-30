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
  const isExpanded = navigationItems.some((item) => isActive(item.url));

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} transition-smooth`}
      style={{
        background: 'linear-gradient(135deg, #2F205E, #241849)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)'
      }}
      collapsible="icon"
    >
      <SidebarContent className="bg-transparent">
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
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-smooth ${
                          isActive 
                            ? "bg-white/10 text-white font-medium shadow-lg" 
                            : "text-white/70 hover:bg-white/5 hover:text-white transition-smooth"
                        }`
                      }
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