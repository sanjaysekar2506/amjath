import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorksByCategory from "@/pages/WorksByCategory";
import WhatWeOffer from "@/components/WhatWeOffer";
import Index from "./pages/Index";
import Works from "./pages/Works";
import NotFound from "./pages/NotFound";
import FloatingQuote from "@/components/FloatingQuote";
import Gallery from "./pages/Gallery";
// import IdeasByRoom from "./components/IdeasByRoom";
// import Gallery from "./pages/Gallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/works" element={<Works />} />
<Route path="/works/:category" element={<WorksByCategory />} />
 {/*\ <Route path="/" element={<IdeasByRoom />} />
        <Route path="/gallery/:slug" element={<Gallery />} /> }
        {/* What We Offer */}
        <Route path="/gallery/:slug" element={<Gallery />} />

        <Route path="/what-we-offer" element={<WhatWeOffer />} />
          {/* KEEP THIS LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
           {/* FLOATING WIDGET — GLOBAL */}
      <FloatingQuote />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;