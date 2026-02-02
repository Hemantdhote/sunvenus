import { useState, useMemo } from "react";
import {
  Search,
  User,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  DollarSign,
  Users,
  Fuel,
  Zap,
  Car,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Car images imports
import maybachS680 from "@/assets/cars/maybach-s680.jpg";
import maybachGls600 from "@/assets/cars/maybach-gls600.jpg";
import maybachS580 from "@/assets/cars/maybach-s580.jpg";
import maybachPullman from "@/assets/cars/maybach-pullman.jpg";
import maybachGlsNight from "@/assets/cars/maybach-gls-night.jpg";
import maybachS580Exec from "@/assets/cars/maybach-s580-exec.jpg";
import Navbar from "@/components/Navbar";

// Types
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

// Car data
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
    badge: "V12",
    badgeColor: "bg-navy text-navy-foreground",
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
    badgeColor: "bg-primary text-primary-foreground",
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
    badge: "CHAUFFEUR READY",
    badgeColor: "bg-navy/80 text-navy-foreground",
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
    badgeColor: "bg-primary text-primary-foreground",
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
const features = ["Chauffeur Partition", "Champagne Fridge", "Night View Assist"];

const CarCollections = () => {
  // Filter states
  const [selectedClasses, setSelectedClasses] = useState<string[]>(["Maybach S-Class"]);
  const [priceRange, setPriceRange] = useState<[number, number]>([500, 2500]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Recommended");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle vehicle class
  const toggleClass = (vehicleClass: string) => {
    setSelectedClasses((prev) =>
      prev.includes(vehicleClass)
        ? prev.filter((c) => c !== vehicleClass)
        : [...prev, vehicleClass]
    );
  };

  // Toggle feature
  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  // Filter and sort cars
  const filteredCars = useMemo(() => {
    let result = carsData.filter((car) => {
      // Filter by class
      if (selectedClasses.length > 0 && !selectedClasses.includes(car.vehicleClass)) {
        return false;
      }
      // Filter by price
      if (car.pricePerDay < priceRange[0] || car.pricePerDay > priceRange[1]) {
        return false;
      }
      // Filter by features
      if (selectedFeatures.length > 0) {
        const hasAllFeatures = selectedFeatures.every((f) =>
          car.features.includes(f)
        );
        if (!hasAllFeatures) return false;
      }
      // Filter by search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          car.name.toLowerCase().includes(query) ||
          car.color.toLowerCase().includes(query)
        );
      }
      return true;
    });

    // Sort
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="container mx-auto px-6 py-8 animate-slide-up mt-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-sans">
              The Maybach Collection
            </h1>
            <p className="text-muted-foreground text-lg">
              Experience the pinnacle of automotive luxury. Hand-picked models
              <br className="hidden md:block" />
              for your exclusive journey.
            </p>
          </div>
          <p className="text-muted-foreground">
            Showing <span className="text-primary font-semibold">{filteredCars.length}</span> vehicles
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 shrink-0 animate-slide-up stagger-1">
            <div className="bg-card rounded-2xl p-6 shadow-card space-y-8">
              {/* Vehicle Class */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold font-sans text-foreground">VEHICLE CLASS</h3>
                  <Filter className="w-4 h-4 text-primary" />
                </div>
                <div className="space-y-3">
                  {vehicleClasses.map((vehicleClass) => (
                    <label
                      key={vehicleClass}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <Checkbox
                        checked={selectedClasses.includes(vehicleClass)}
                        onCheckedChange={() => toggleClass(vehicleClass)}
                        className="border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {vehicleClass}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold font-sans text-foreground">PRICE RANGE</h3>
                  <DollarSign className="w-4 h-4 text-primary" />
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}+</span>
                </div>
                <Slider
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  min={500}
                  max={5000}
                  step={100}
                  className="w-full"
                />
                <div className="flex gap-2 mt-4">
                  <div className="flex-1 bg-secondary text-white rounded-lg px-3 py-2 text-center text-sm">
                    ${priceRange[0]}
                  </div>
                  <span className="text-muted-foreground self-center">-</span>
                  <div className="flex-1 bg-secondary text-white rounded-lg px-3 py-2 text-center text-sm">
                    ${priceRange[1]}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold font-sans text-foreground">FEATURES</h3>
                </div>
                <div className="space-y-3">
                  {features.map((feature) => (
                    <label
                      key={feature}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <Checkbox
                        checked={selectedFeatures.includes(feature)}
                        onCheckedChange={() => toggleFeature(feature)}
                        className="border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {feature}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Cars Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex justify-end mb-6 animate-fade-in">
              <div className="relative">
                <button
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => {
                    const sorts = [
                      "Recommended",
                      "Price: Low to High",
                      "Price: High to Low",
                      "Newest",
                    ];
                    const currentIndex = sorts.indexOf(sortBy);
                    setSortBy(sorts[(currentIndex + 1) % sorts.length]);
                  }}
                >
                  <span>Sort by:</span>
                  <span className="text-primary font-medium">{sortBy}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map((car, index) => (
                <div
                  key={car.id}
                  className={`group bg-card rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_90px_rgba(0,0,0,0.15)] transition-all duration-500 animate-slide-up stagger-${(index % 6) + 1}`}>
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {car.badge && (
                      <Badge
                        className={`absolute top-4 left-4 z-20 ${car.badgeColor} backdrop-blur-md bg-opacity-90 px-4 py-1.5 rounded-full text-[11px] tracking-wider`}>
                        {car.badge}
                      </Badge>
                    )}
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                    {/* Luxury gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-5">
                    {/* Title */}
                    <div>
                      <h3 className="text-2xl font-sans font-semibold tracking-tight text-foreground">
                        {car.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {car.year} • {car.color}
                      </p>
                    </div>

                    {/* Specs */}
                    <div className="flex items-center gap-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{car.seats}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        <span className="text-sm">{car.transmission}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel className="w-4 h-4" />
                        <span className="text-sm">{car.fuelType}</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-border/60" />

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-bold text-primary leading-none">
                          ${car.pricePerDay.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 tracking-wide">
                          PER DAY
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="btn-luxury bg-primary rounded-full px-6 py-5 text-sm border-border/60 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredCars.length === 0 && (
              <div className="text-center py-16 animate-fade-in">
                <Car className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No vehicles found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters to see more options.
                </p>
              </div>
            )}

            {/* Pagination */}
            {filteredCars.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-10 animate-fade-in">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-lg border-2"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                {[1, 2, 3].map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="icon"
                    className={`w-10 h-10 rounded-lg font-medium ${currentPage === page
                      ? "bg-primary text-primary-foreground"
                      : "border-2"
                      }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
                <span className="text-muted-foreground px-2">...</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-lg border-2"
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
