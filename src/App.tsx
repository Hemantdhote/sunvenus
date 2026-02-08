import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CarCollections from "./pages/CarCollections";
import CarDetails from "./pages/CarDetails";
import BlogPage from "./pages/BlogPage";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import BlogListsPage from "./pages/BlogListsPage";
import ServicesPage from "./pages/ServicesPage";
import useLenis from "./hooks/useLenis";

const queryClient = new QueryClient();

// const App = () => (
//   useLenis();

//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/cars-collection" element={<CarCollections />} />
//           <Route path="/cars-details" element={<CarDetails />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/blogs" element={<BlogListsPage/>} /> 
//           <Route path="/services" element={<ServicesPage/>} /> 
//           {/* <Route path="/blogs" element={<BlogPage />} /> */}
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;



const App = () => {
  useLenis(); // ✅ hook runs here (valid)

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cars-collection" element={<CarCollections />} />
            <Route path="/cars-details" element={<CarDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blogs" element={<BlogListsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
