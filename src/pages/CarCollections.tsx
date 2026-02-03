import { useState, useMemo, useEffect } from "react";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  Users,
  Fuel,
  Zap,
  Car,
  Star,
  Heart,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

// Car images imports
import maybachS680 from "@/assets/cars/maybach-s680.jpg";
import maybachGls600 from "@/assets/cars/maybach-gls600.jpg";
import maybachS580 from "@/assets/cars/maybach-s580.jpg";
import maybachPullman from "@/assets/cars/maybach-pullman.jpg";
import maybachGlsNight from "@/assets/cars/maybach-gls-night.jpg";
import maybachS580Exec from "@/assets/cars/maybach-s580-exec.jpg";
import { useNavigate } from "react-router-dom";

// --- Types ---
interface CarData {
  id: number;
  name: string;
  year: number;
  color: string;
  image: string;
  seats: number;
  transmission: string;
  fuelType: string;
  pricePerDay: number;
  badge?: string;
  badgeColor?: string;
  vehicleClass: string;
  features: string[];
}

// --- Data ---
const carsData: CarData[] = [
  {
    id: 1,
    name: "Maybach S 680",
    year: 2024,
    color: "Two-Tone Obsidian",
    image: maybachS680,
    seats: 4,
    transmission: "Auto",
    fuelType: "Petrol",
    pricePerDay: 1200,
    badge: "V12 FLAGSHIP",
    badgeColor: "bg-amber-600 text-white",
    vehicleClass: "Maybach S-Class",
    features: ["Chauffeur Partition", "Night View Assist"],
  },
  {
    id: 2,
    name: "Maybach GLS 600",
    year: 2023,
    color: "Emerald Green",
    image: maybachGls600,
    seats: 4,
    transmission: "Auto",
    fuelType: "Hybrid",
    pricePerDay: 1500,
    badge: "POPULAR",
    badgeColor: "bg-slate-900 text-white",
    vehicleClass: "Maybach GLS",
    features: ["Champagne Fridge", "Night View Assist"],
  },
  {
    id: 3,
    name: "Maybach S 580",
    year: 2023,
    color: "Diamond White",
    image: maybachS580,
    seats: 6,
    transmission: "Auto",
    fuelType: "Petrol",
    pricePerDay: 950,
    vehicleClass: "Maybach S-Class",
    features: ["Chauffeur Partition"],
  },
  {
    id: 4,
    name: "Maybach Pullman",
    year: 2022,
    color: "Deep Black",
    image: maybachPullman,
    seats: 6,
    transmission: "Auto",
    fuelType: "Petrol",
    pricePerDay: 2200,
    badge: "ROYAL EDITION",
    badgeColor: "bg-indigo-900 text-white",
    vehicleClass: "Limited Edition",
    features: ["Chauffeur Partition", "Champagne Fridge", "Night View Assist"],
  },
  {
    id: 5,
    name: "GLS 600 Night",
    year: 2024,
    color: "Selenite Grey",
    image: maybachGlsNight,
    seats: 4,
    transmission: "Auto",
    fuelType: "Hybrid",
    pricePerDay: 1800,
    badge: "NEW ARRIVAL",
    badgeColor: "bg-emerald-600 text-white",
    vehicleClass: "Maybach GLS",
    features: ["Night View Assist"],
  },
  {
    id: 6,
    name: "S 580 Executive",
    year: 2023,
    color: "Manufaktur Gold",
    image: maybachS580Exec,
    seats: 4,
    transmission: "Auto",
    fuelType: "PHEV",
    pricePerDay: 1100,
    vehicleClass: "Maybach S-Class",
    features: ["Champagne Fridge"],
  },
];

const vehicleClasses = ["Maybach S-Class", "Maybach GLS", "Limited Edition"];
const features = [
  "Chauffeur Partition",
  "Champagne Fridge",
  "Night View Assist",
];

// --- Styles for Animation (Inline) ---
const customStyles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-up { animation: fadeInUp 0.6s ease-out forwards; }
  .stagger-1 { animation-delay: 100ms; }
  .glass-panel {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
  }
  .card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
  ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
`;

const CarCollections = () => {
  // Filter states
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([500, 3000]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Recommended");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleClass = (vehicleClass: string) => {
    setSelectedClasses((prev) =>
      prev.includes(vehicleClass)
        ? prev.filter((c) => c !== vehicleClass)
        : [...prev, vehicleClass]
    );
  };

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const filteredCars = useMemo(() => {
    let result = carsData.filter((car) => {
      if (
        selectedClasses.length > 0 &&
        !selectedClasses.includes(car.vehicleClass)
      ) {
        return false;
      }
      if (car.pricePerDay < priceRange[0] || car.pricePerDay > priceRange[1]) {
        return false;
      }
      if (selectedFeatures.length > 0) {
        const hasAllFeatures = selectedFeatures.every((f) =>
          car.features.includes(f)
        );
        if (!hasAllFeatures) return false;
      }
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          car.name.toLowerCase().includes(query) ||
          car.color.toLowerCase().includes(query)
        );
      }
      return true;
    });

    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else if (sortBy === "Newest") {
      result.sort((a, b) => b.year - a.year);
    }

    return result;
  }, [selectedClasses, priceRange, selectedFeatures, sortBy, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      <style>{customStyles}</style>
      <Navbar />

      {/* --- Ambient Background Vectors --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-amber-100/40 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[100px]" />
      </div>

      {/* --- Header Section --- */}
      <section className="relative z-10 pt-32 pb-12 container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 opacity-0 animate-fade-up">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-amber-600"></span>
              <span className="text-amber-700 uppercase tracking-[0.25em] text-xs font-bold">
                Prestige Collection
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-sans font-medium mb-4 text-slate-900 tracking-tight">
              The Maybach <span className="italic text-slate-400">Reserve</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
              Curated for the extraordinary. Select from our exclusive fleet of high-performance luxury vehicles.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <div className="relative flex items-center bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 rounded-full px-5 py-3 w-full md:w-96 focus-within:ring-2 focus-within:ring-amber-500/20 focus-within:border-amber-500 transition-all">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input
                type="text"
                placeholder="Search by model or color..."
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-400 text-slate-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content --- */}
      <main className="relative z-10 container mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* --- Sidebar Filters --- */}
          <aside className={`lg:w-72 shrink-0 opacity-0 animate-fade-up stagger-1 ${isLoaded ? 'opacity-100' : ''}`}>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm sticky top-24 space-y-10">

              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-amber-600" /> Filters
                </h3>
                <button
                  onClick={() => {
                    setSelectedClasses([]);
                    setPriceRange([500, 5000]);
                    setSelectedFeatures([]);
                  }}
                  className="text-xs text-slate-400 hover:text-amber-600 transition-colors font-medium"
                >
                  RESET
                </button>
              </div>

              {/* Vehicle Class */}
              <div className="space-y-4">
                <h4 className="uppercase tracking-[0.25em] font-sans text-[12px] text-muted-foreground">VEHICLE CLASS</h4>
                <div className="space-y-3">
                  {vehicleClasses.map((vehicleClass) => (
                    <label
                      key={vehicleClass}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="relative flex items-center">
                        <Checkbox
                          checked={selectedClasses.includes(vehicleClass)}
                          onCheckedChange={() => toggleClass(vehicleClass)}
                          className="border-slate-300 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600 rounded-md w-5 h-5 transition-all"
                        />
                      </div>
                      <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors font-medium">
                        {vehicleClass}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="uppercase tracking-[0.25em] text-[12px] text-muted-foreground font-sans">PRICE RANGE</h4>
                </div>
                <Slider
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  min={500}
                  max={5000}
                  step={100}
                  className="py-4"
                />
                <div className="flex justify-between items-center text-sm font-semibold text-slate-700">
                  <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">${priceRange[0]}</span>
                  <span className="text-slate-300">-</span>
                  <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">${priceRange[1]}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="uppercase tracking-[0.25em] font-sans text-[12px] text-muted-foreground">FEATURES</h4>
                <div className="space-y-3">
                  {features.map((feature) => (
                    <label
                      key={feature}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <Checkbox
                        checked={selectedFeatures.includes(feature)}
                        onCheckedChange={() => toggleFeature(feature)}
                        className="border-slate-300 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600 rounded-md"
                      />
                      <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors font-medium">
                        {feature}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* --- Cars Grid --- */}
          <div className="flex-1">
            {/* Sort Toolbar */}
            <div className="flex justify-between items-center mb-8 opacity-0 animate-fade-up stagger-1">
              <p className="text-slate-500 text-sm">
                Showing <span className="text-slate-900 font-bold">{filteredCars.length}</span> vehicles
              </p>

              <div className="relative group">
                <button
                  className="flex items-center gap-2 text-sm text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-full hover:border-amber-300 hover:shadow-sm transition-all"
                  onClick={() => {
                    const sorts = ["Recommended", "Price: Low to High", "Price: High to Low", "Newest"];
                    const currentIndex = sorts.indexOf(sortBy);
                    setSortBy(sorts[(currentIndex + 1) % sorts.length]);
                  }}
                >
                  <span className="text-slate-400">Sort:</span>
                  <span className="text-slate-900 font-medium">{sortBy}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Grid - MODIFIED HERE for 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map((car, index) => (
                <div
                  onClick={() => navigate("/cars-details")}
                  key={car.id}
                  className={` cursor-pointer group relative bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all duration-500 card-hover opacity-0 animate-fade-up`}
                  style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'forwards' }}
                >

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    {car.badge && (
                      <div className="absolute top-4 left-4 z-20">
                        <Badge className={`${car.badgeColor} border-0 px-3 py-1.5 font-bold tracking-wide text-[10px] shadow-sm rounded-md`}>
                          {car.badge}
                        </Badge>
                      </div>
                    )}

                    <button className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-slate-400 shadow-sm hover:text-red-500 hover:scale-110 transition-all duration-300">
                      <Heart className="w-4 h-4" />
                    </button>

                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-700 "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-[10px] font-bold text-gold uppercase tracking-wider mb-1">
                          {car.vehicleClass}
                        </p>
                        <h3 className="text-lg font-bold text-primary  font-sans truncate">
                          {car.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md border border-slate-100 shrink-0">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-slate-700">5.0</span>
                      </div>
                    </div>

                    {/* Specs Row */}
                    <div className="flex items-center justify-between py-3 border-t border-b border-slate-50 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs font-medium text-slate-600">{car.seats}</span>
                      </div>
                      <div className="w-px h-6 bg-slate-100" />
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs font-medium text-slate-600">{car.transmission}</span>
                      </div>
                      <div className="w-px h-6 bg-slate-100" />
                      <div className="flex items-center gap-1.5">
                        <Fuel className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs font-medium text-slate-600">{car.fuelType}</span>
                      </div>
                    </div>

                    {/* Bottom Action Area */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-bold text-slate-900">${car.pricePerDay}</span>
                          <span className="text-[10px] font-medium text-slate-400">/day</span>
                        </div>
                      </div>

                      <Button onClick={(e) => {
                        e.stopPropagation(); 
                        navigate("/booking");
                      }} className="btn-luxury rounded-lg text-white px-5 h-9 text-xs">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredCars.length === 0 && (
              <div className="text-center py-20 animate-fade-up">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  No vehicles found
                </h3>
                <p className="text-slate-500">
                  Try adjusting your filters to see more options.
                </p>
              </div>
            )}

            {/* Pagination */}
            {filteredCars.length > 0 && (
              <div className="flex items-center justify-center gap-3 mt-16 animate-fade-up">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full border-slate-200 text-slate-600 hover:border-amber-500 hover:text-amber-600 bg-white"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                {[1, 2, 3].map((page) => (
                  <Button
                    key={page}
                    variant="ghost"
                    size="icon"
                    className={`w-10 h-10 rounded-full font-bold transition-all ${currentPage === page
                      ? "bg-slate-900 text-white shadow-md"
                      : "text-slate-500 hover:bg-slate-100"
                      }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full border-slate-200 text-slate-600 hover:border-amber-500 hover:text-amber-600 bg-white"
                  onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarCollections;