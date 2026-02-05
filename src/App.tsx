import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CopyTradingPage from "./pages/services/CopyTrading";
import TradingBotsPage from "./pages/services/TradingBots";
import IndicatorsPage from "./pages/services/Indicators";
import EducationPage from "./pages/Education";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Services */}
          <Route path="/services/copy-trading" element={<CopyTradingPage />} />
          <Route path="/services/trading-bots" element={<TradingBotsPage />} />
          <Route path="/services/indicators" element={<IndicatorsPage />} />
          
          {/* Main Pages */}
          <Route path="/education" element={<EducationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;