import { useState, useEffect } from "react";
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
  const collapsed = state === "collapsed";

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} transition-all duration-300 ease-in-out`}
      style={{
        background: '#2F205E',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)'
      }}
      collapsible="icon"
    >
      <SidebarContent 
        className="bg-transparent"
        style={{ background: '#2F205E' }}
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
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="w-full"
                  >
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) => {
                        const isActiveState = isActive || (item.url === "/" && location.pathname === "/");
                        return `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out text-white ${
                          isActiveState
                            ? "bg-white/20 font-semibold shadow-lg shadow-black/10" 
                            : "bg-transparent hover:bg-white/5 hover:shadow-md hover:shadow-white/5"
                        }`;
                      }}
                    >
                      <item.icon className={`h-5 w-5 transition-colors duration-200 ${collapsed ? 'mx-auto' : ''}`} />
                      {!collapsed && (
                        <span className="text-sm font-medium transition-colors duration-200">{item.title}</span>
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