import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/use-document-title";
import Index from "./pages/Index";
import Status from "./pages/Status";
import Reports from "./pages/Reports";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  useDocumentTitle();
  
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/status" element={<Status />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
