// import { useState, useMemo } from "react";
// import {Search, User, Bell, ChevronDown,  ChevronLeft, ChevronRight, Filter, DollarSign, Users,Fuel, Zap,Car,} from "lucide-react";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Slider } from "@/components/ui/slider";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// // Car images imports
// import maybachS680 from "@/assets/cars/maybach-s680.jpg";
// import maybachGls600 from "@/assets/cars/maybach-gls600.jpg";
// import maybachS580 from "@/assets/cars/maybach-s580.jpg";
// import maybachPullman from "@/assets/cars/maybach-pullman.jpg";
// import maybachGlsNight from "@/assets/cars/maybach-gls-night.jpg";
// import maybachS580Exec from "@/assets/cars/maybach-s580-exec.jpg";
// import Navbar from "@/components/Navbar";

// // Types
// interface CarData {
//   id: number;
//   name: string;
//   year: number;
//   color: string;
//   image: string;
//   seats: number;
//   transmission: string;
//   fuelType: string;
//   pricePerDay: number;
//   badge?: string;
//   badgeColor?: string;
//   vehicleClass: string;
//   features: string[];
// }

// // Car data
// const carsData: CarData[] = [
//   {
//     id: 1,
//     name: "Maybach S 680",
//     year: 2024,
//     color: "Two-Tone Obsidian",
//     image: maybachS680,
//     seats: 4,
//     transmission: "Auto",
//     fuelType: "Petrol",
//     pricePerDay: 1200,
//     badge: "V12",
//     badgeColor: "bg-navy text-navy-foreground",
//     vehicleClass: "Maybach S-Class",
//     features: ["Chauffeur Partition", "Night View Assist"],
//   },
//   {
//     id: 2,
//     name: "Maybach GLS 600",
//     year: 2023,
//     color: "Emerald Green",
//     image: maybachGls600,
//     seats: 4,
//     transmission: "Auto",
//     fuelType: "Hybrid",
//     pricePerDay: 1500,
//     badge: "POPULAR",
//     badgeColor: "bg-primary text-primary-foreground",
//     vehicleClass: "Maybach GLS",
//     features: ["Champagne Fridge", "Night View Assist"],
//   },
//   {
//     id: 3,
//     name: "Maybach S 580",
//     year: 2023,
//     color: "Diamond White",
//     image: maybachS580,
//     seats: 6,
//     transmission: "Auto",
//     fuelType: "Petrol",
//     pricePerDay: 950,
//     vehicleClass: "Maybach S-Class",
//     features: ["Chauffeur Partition"],
//   },
//   {
//     id: 4,
//     name: "Maybach Pullman",
//     year: 2022,
//     color: "Deep Black",
//     image: maybachPullman,
//     seats: 6,
//     transmission: "Auto",
//     fuelType: "Petrol",
//     pricePerDay: 2200,
//     badge: "CHAUFFEUR READY",
//     badgeColor: "bg-navy/80 text-navy-foreground",
//     vehicleClass: "Limited Edition",
//     features: ["Chauffeur Partition", "Champagne Fridge", "Night View Assist"],
//   },
//   {
//     id: 5,
//     name: "GLS 600 Night",
//     year: 2024,
//     color: "Selenite Grey",
//     image: maybachGlsNight,
//     seats: 4,
//     transmission: "Auto",
//     fuelType: "Hybrid",
//     pricePerDay: 1800,
//     badge: "NEW ARRIVAL",
//     badgeColor: "bg-primary text-primary-foreground",
//     vehicleClass: "Maybach GLS",
//     features: ["Night View Assist"],
//   },
//   {
//     id: 6,
//     name: "S 580 Executive",
//     year: 2023,
//     color: "Manufaktur Gold",
//     image: maybachS580Exec,
//     seats: 4,
//     transmission: "Auto",
//     fuelType: "PHEV",
//     pricePerDay: 1100,
//     vehicleClass: "Maybach S-Class",
//     features: ["Champagne Fridge"],
//   },
// ];

// const vehicleClasses = ["Maybach S-Class", "Maybach GLS", "Limited Edition"];
// const features = ["Chauffeur Partition", "Champagne Fridge", "Night View Assist"];

// const CarCollections = () => {
//   // Filter states
//   const [selectedClasses, setSelectedClasses] = useState<string[]>(["Maybach S-Class"]);
//   const [priceRange, setPriceRange] = useState<[number, number]>([500, 2500]);
//   const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
//   const [sortBy, setSortBy] = useState("Recommended");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Toggle vehicle class
//   const toggleClass = (vehicleClass: string) => {
//     setSelectedClasses((prev) =>
//       prev.includes(vehicleClass)
//         ? prev.filter((c) => c !== vehicleClass)
//         : [...prev, vehicleClass]
//     );
//   };

//   // Toggle feature
//   const toggleFeature = (feature: string) => {
//     setSelectedFeatures((prev) =>
//       prev.includes(feature)
//         ? prev.filter((f) => f !== feature)
//         : [...prev, feature]
//     );
//   };

//   // Filter and sort cars
//   const filteredCars = useMemo(() => {
//     let result = carsData.filter((car) => {
//       // Filter by class
//       if (selectedClasses.length > 0 && !selectedClasses.includes(car.vehicleClass)) {
//         return false;
//       }
//       // Filter by price
//       if (car.pricePerDay < priceRange[0] || car.pricePerDay > priceRange[1]) {
//         return false;
//       }
//       // Filter by features
//       if (selectedFeatures.length > 0) {
//         const hasAllFeatures = selectedFeatures.every((f) =>
//           car.features.includes(f)
//         );
//         if (!hasAllFeatures) return false;
//       }
//       // Filter by search
//       if (searchQuery) {
//         const query = searchQuery.toLowerCase();
//         return (
//           car.name.toLowerCase().includes(query) ||
//           car.color.toLowerCase().includes(query)
//         );
//       }
//       return true;
//     });

//     // Sort
//     if (sortBy === "Price: Low to High") {
//       result.sort((a, b) => a.pricePerDay - b.pricePerDay);
//     } else if (sortBy === "Price: High to Low") {
//       result.sort((a, b) => b.pricePerDay - a.pricePerDay);
//     } else if (sortBy === "Newest") {
//       result.sort((a, b) => b.year - a.year);
//     }

//     return result;
//   }, [selectedClasses, priceRange, selectedFeatures, sortBy, searchQuery]);

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <section className="container mx-auto px-6 py-8 animate-slide-up mt-20">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-sans">
//               The Maybach Collection
//             </h1>
//             <p className="text-muted-foreground text-lg">
//               Experience the pinnacle of automotive luxury. Hand-picked models
//               <br className="hidden md:block" />
//               for your exclusive journey.
//             </p>
//           </div>
//           <p className="text-muted-foreground">
//             Showing <span className="text-primary font-semibold">{filteredCars.length}</span> vehicles
//           </p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="container mx-auto px-6 pb-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar Filters */}
//           <aside className="lg:w-64 shrink-0 animate-slide-up stagger-1">
//             <div className="bg-card rounded-2xl p-6 shadow-card space-y-8">
//               {/* Vehicle Class */}
//               <div>
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="font-semibold font-sans text-foreground">VEHICLE CLASS</h3>
//                   <Filter className="w-4 h-4 text-primary" />
//                 </div>
//                 <div className="space-y-3">
//                   {vehicleClasses.map((vehicleClass) => (
//                     <label
//                       key={vehicleClass}
//                       className="flex items-center gap-3 cursor-pointer group"
//                     >
//                       <Checkbox
//                         checked={selectedClasses.includes(vehicleClass)}
//                         onCheckedChange={() => toggleClass(vehicleClass)}
//                         className="border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
//                       />
//                       <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
//                         {vehicleClass}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Price Range */}
//               <div>
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="font-semibold font-sans text-foreground">PRICE RANGE</h3>
//                   <DollarSign className="w-4 h-4 text-primary" />
//                 </div>
//                 <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
//                   <span>${priceRange[0]}</span>
//                   <span>${priceRange[1]}+</span>
//                 </div>
//                 <Slider
//                   value={priceRange}
//                   onValueChange={(value) => setPriceRange(value as [number, number])}
//                   min={500}
//                   max={5000}
//                   step={100}
//                   className="w-full"
//                 />
//                 <div className="flex gap-2 mt-4">
//                   <div className="flex-1 bg-secondary text-white rounded-lg px-3 py-2 text-center text-sm">
//                     ${priceRange[0]}
//                   </div>
//                   <span className="text-muted-foreground self-center">-</span>
//                   <div className="flex-1 bg-secondary text-white rounded-lg px-3 py-2 text-center text-sm">
//                     ${priceRange[1]}
//                   </div>
//                 </div>
//               </div>

//               {/* Features */}
//               <div>
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="font-semibold font-sans text-foreground">FEATURES</h3>
//                 </div>
//                 <div className="space-y-3">
//                   {features.map((feature) => (
//                     <label
//                       key={feature}
//                       className="flex items-center gap-3 cursor-pointer group"
//                     >
//                       <Checkbox
//                         checked={selectedFeatures.includes(feature)}
//                         onCheckedChange={() => toggleFeature(feature)}
//                         className="border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
//                       />
//                       <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
//                         {feature}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* Cars Grid */}
//           <div className="flex-1">
//             {/* Sort Dropdown */}
//             <div className="flex justify-end mb-6 animate-fade-in">
//               <div className="relative">
//                 <button
//                   className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
//                   onClick={() => {
//                     const sorts = [
//                       "Recommended",
//                       "Price: Low to High",
//                       "Price: High to Low",
//                       "Newest",
//                     ];
//                     const currentIndex = sorts.indexOf(sortBy);
//                     setSortBy(sorts[(currentIndex + 1) % sorts.length]);
//                   }}
//                 >
//                   <span>Sort by:</span>
//                   <span className="text-primary font-medium">{sortBy}</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Grid */}
//             <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
//               {filteredCars.map((car, index) => (
//                 <div
//                   key={car.id}
//                   className={`group bg-card rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_90px_rgba(0,0,0,0.15)] transition-all duration-500 animate-slide-up stagger-${(index % 6) + 1}`}>
//                   {/* Image */}
//                   <div className="relative aspect-[4/3] overflow-hidden">
//                     {car.badge && (
//                       <Badge
//                         className={`absolute top-4 left-4 z-20 ${car.badgeColor} backdrop-blur-md bg-opacity-90 px-4 py-1.5 rounded-full text-[11px] tracking-wider`}>
//                         {car.badge}
//                       </Badge>
//                     )}
//                     <img
//                       src={car.image}
//                       alt={car.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

//                     {/* Luxury gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 space-y-5">
//                     {/* Title */}
//                     <div>
//                       <h3 className="text-2xl font-sans font-semibold tracking-tight text-foreground">
//                         {car.name}
//                       </h3>
//                       <p className="text-sm text-muted-foreground mt-1">
//                         {car.year} • {car.color}
//                       </p>
//                     </div>

//                     {/* Specs */}
//                     <div className="flex items-center gap-6 text-muted-foreground">
//                       <div className="flex items-center gap-2">
//                         <Users className="w-4 h-4" />
//                         <span className="text-sm">{car.seats}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Zap className="w-4 h-4" />
//                         <span className="text-sm">{car.transmission}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Fuel className="w-4 h-4" />
//                         <span className="text-sm">{car.fuelType}</span>
//                       </div>
//                     </div>

//                     {/* Divider */}
//                     <div className="h-px bg-border/60" />

//                     {/* Price & CTA */}
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-3xl font-bold text-primary leading-none">
//                           ${car.pricePerDay.toLocaleString()}
//                         </p>
//                         <p className="text-xs text-muted-foreground mt-1 tracking-wide">
//                           PER DAY
//                         </p>
//                       </div>
//                       <Button
//                         variant="outline"
//                         className="btn-luxury bg-primary rounded-full px-6 py-5 text-sm border-border/60 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300">
//                         Book Now
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Empty State */}
//             {filteredCars.length === 0 && (
//               <div className="text-center py-16 animate-fade-in">
//                 <Car className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold text-foreground mb-2">
//                   No vehicles found
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Try adjusting your filters to see more options.
//                 </p>
//               </div>
//             )}

//             {/* Pagination */}
//             {filteredCars.length > 0 && (
//               <div className="flex items-center justify-center gap-2 mt-10 animate-fade-in">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className="w-10 h-10 rounded-lg border-2"
//                   onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//                 >
//                   <ChevronLeft className="w-4 h-4" />
//                 </Button>
//                 {[1, 2, 3].map((page) => (
//                   <Button
//                     key={page}
//                     variant={currentPage === page ? "default" : "outline"}
//                     size="icon"
//                     className={`w-10 h-10 rounded-lg font-medium ${currentPage === page
//                       ? "bg-primary text-primary-foreground"
//                       : "border-2"
//                       }`}
//                     onClick={() => setCurrentPage(page)}
//                   >
//                     {page}
//                   </Button>
//                 ))}
//                 <span className="text-muted-foreground px-2">...</span>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className="w-10 h-10 rounded-lg border-2"
//                   onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CarCollections;






















// import { useState, useMemo } from "react";
// import { Search, ChevronLeft, ChevronRight, Filter, DollarSign, Users, Fuel, Zap, Car, X, Sparkles, Star } from "lucide-react";

// // Car images imports
// import maybachS680 from "@/assets/cars/maybach-s680.jpg";
// import maybachGls600 from "@/assets/cars/maybach-gls600.jpg";
// import maybachS580 from "@/assets/cars/maybach-s580.jpg";
// import maybachPullman from "@/assets/cars/maybach-pullman.jpg";
// import maybachGlsNight from "@/assets/cars/maybach-gls-night.jpg";
// import maybachS580Exec from "@/assets/cars/maybach-s580-exec.jpg";
// import Navbar from "@/components/Navbar";

// // Types
// interface CarData {
//   id: number;
//   name: string;
//   year: number;
//   color: string;
//   image: string;
//   seats: number;
//   transmission: string;
//   fuelType: string;
//   pricePerDay: number;
//   badge?: string;
//   badgeColor?: string;
//   vehicleClass: string;
//   features: string[];
// }

// // Car data
// const carsData: CarData[] = [
//   {
//     id: 1,
//     name: "Maybach S 680",
//     year: 2024,
//     color: "Two-Tone Obsidian",
//     image: maybachS680,
//     seats: 4,
//     transmission: "Auto",
//     fuelType: "Petrol",
//     pricePerDay: 1200,
//     badge: "V12",
//     badgeColor: "bg-gradient-to-r from-purple-600 to-blue-600",
//     vehicleClass: "Maybach S-Class",
//     features: ["Chauffeur Partition", "Night View Assist"],
//   },
//   {
//     id: 2,
//     name: "Maybach GLS 600",
//     year: 2023,
//     color: "Emerald Green",
//     image: maybachGls600,
//     seats: 4,
//     transmission: "Auto",
//     fuelType: "Hybrid",
//     pricePerDay: 1500,
//     badge: "POPULAR",
//     badgeColor: "bg-gradient-to-r from-amber-500 to-orange-600",
//     vehicleClass: "Maybach GLS",
//     features: ["Champagne Fridge", "Night View Assist"],
//   },
//   {
//     id: 3,
//     name: "Maybach S 580",
//     year: 2023,
//     color: "Diamond White",
//     image: maybachS580,
//     seats: 6,
//     transmission: "Auto",
//     fuelType: "Petrol",
//     pricePerDay: 950,
//     vehicleClass: "Maybach S-Class",
//     features: ["Chauffeur Partition"],
//   },
//   {
//     id: 4,
//     name: "Maybach Pullman",
//     year: 2022,
//     color: "Deep Black",
//     image: maybachPullman,
//     seats: 6,
//     transmission: "Auto",
//     fuelType: "Petrol",
//     pricePerDay: 2200,
//     badge: "CHAUFFEUR READY",
//     badgeColor: "bg-gradient-to-r from-slate-700 to-slate-900",
//     vehicleClass: "Limited Edition",
//     features: ["Chauffeur Partition", "Champagne Fridge", "Night View Assist"],
//   },
//   {
//     id: 5,
//     name: "GLS 600 Night",
//     year: 2024,
//     color: "Selenite Grey",
//     image: maybachGlsNight,
//     seats: 4,
//     transmission: "Auto",
//     fuelType: "Hybrid",
//     pricePerDay: 1800,
//     badge: "NEW ARRIVAL",
//     badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-600",
//     vehicleClass: "Maybach GLS",
//     features: ["Night View Assist"],
//   },
//   {
//     id: 6,
//     name: "S 580 Executive",
//     year: 2023,
//     color: "Manufaktur Gold",
//     image: maybachS580Exec,
//     seats: 4,
//     transmission: "Auto",
//     fuelType: "PHEV",
//     pricePerDay: 1100,
//     vehicleClass: "Maybach S-Class",
//     features: ["Champagne Fridge"],
//   },
// ];

// const vehicleClasses = ["Maybach S-Class", "Maybach GLS", "Limited Edition"];
// const features = ["Chauffeur Partition", "Champagne Fridge", "Night View Assist"];

// const CarCollections = () => {
//   const [selectedClasses, setSelectedClasses] = useState<string[]>(["Maybach S-Class"]);
//   const [priceRange, setPriceRange] = useState<[number, number]>([500, 2500]);
//   const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
//   const [sortBy, setSortBy] = useState("Recommended");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");

//   const toggleClass = (vehicleClass: string) => {
//     setSelectedClasses((prev) =>
//       prev.includes(vehicleClass)
//         ? prev.filter((c) => c !== vehicleClass)
//         : [...prev, vehicleClass]
//     );
//   };

//   const toggleFeature = (feature: string) => {
//     setSelectedFeatures((prev) =>
//       prev.includes(feature)
//         ? prev.filter((f) => f !== feature)
//         : [...prev, feature]
//     );
//   };

//   const filteredCars = useMemo(() => {
//     let result = carsData.filter((car) => {
//       if (selectedClasses.length > 0 && !selectedClasses.includes(car.vehicleClass)) {
//         return false;
//       }
//       if (car.pricePerDay < priceRange[0] || car.pricePerDay > priceRange[1]) {
//         return false;
//       }
//       if (selectedFeatures.length > 0) {
//         const hasAllFeatures = selectedFeatures.every((f) => car.features.includes(f));
//         if (!hasAllFeatures) return false;
//       }
//       if (searchQuery) {
//         const query = searchQuery.toLowerCase();
//         return (
//           car.name.toLowerCase().includes(query) ||
//           car.color.toLowerCase().includes(query)
//         );
//       }
//       return true;
//     });

//     if (sortBy === "Price: Low to High") {
//       result.sort((a, b) => a.pricePerDay - b.pricePerDay);
//     } else if (sortBy === "Price: High to Low") {
//       result.sort((a, b) => b.pricePerDay - a.pricePerDay);
//     } else if (sortBy === "Newest") {
//       result.sort((a, b) => b.year - a.year);
//     }

//     return result;
//   }, [selectedClasses, priceRange, selectedFeatures, sortBy, searchQuery]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-40 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>

//         {/* Decorative Shapes */}
//         <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-purple-200 rounded-full animate-float"></div>
//         <div className="absolute top-1/3 right-20 w-16 h-16 border-2 border-blue-200 rounded-lg rotate-45 animate-float-delayed"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full animate-float"></div>

//         {/* Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
//       </div>

//       <Navbar />

//       {/* Hero Section */}
//       <section className="container mx-auto px-6 py-12 animate-fade-in mt-20 relative z-10">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
//           <div className="space-y-4">
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-full px-4 py-2 backdrop-blur-sm shadow-sm">
//               <Sparkles className="w-4 h-4 text-purple-600" />
//               <span className="text-sm text-purple-700 font-medium">Premium Collection</span>
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-purple-800 to-blue-900 bg-clip-text text-transparent leading-tight">
//               The Maybach Collection
//             </h1>
//             <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
//               Experience the pinnacle of automotive luxury. Hand-picked models for your exclusive journey.
//             </p>
//           </div>

//           {/* Stats Card */}
//           <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl shadow-purple-100/50">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-300/50">
//                 <Car className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{filteredCars.length}</p>
//                 <p className="text-slate-600 text-sm">Available Vehicles</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="mt-8 max-w-2xl">
//           <div className="relative group">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-purple-600 transition-colors" />
//             <input
//               type="text"
//               placeholder="Search by name or color..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-white border-2 border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-100/50 transition-all"
//             />
//             {searchQuery && (
//               <button
//                 onClick={() => setSearchQuery("")}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="container mx-auto px-6 pb-12 relative z-10">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar Filters */}
//           <aside className="lg:w-80 shrink-0">
//             <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl shadow-slate-200/50 sticky top-24 space-y-8">
//               {/* Vehicle Class */}
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <h3 className="font-bold text-slate-900 flex items-center gap-2">
//                     <Filter className="w-4 h-4 text-purple-600" />
//                     VEHICLE CLASS
//                   </h3>
//                 </div>
//                 <div className="space-y-3">
//                   {vehicleClasses.map((vehicleClass) => (
//                     <label
//                       key={vehicleClass}
//                       className="flex items-center gap-3 cursor-pointer group"
//                     >
//                       <div className="relative">
//                         <input
//                           type="checkbox"
//                           checked={selectedClasses.includes(vehicleClass)}
//                           onChange={() => toggleClass(vehicleClass)}
//                           className="peer sr-only"
//                         />
//                         <div className="w-5 h-5 border-2 border-slate-300 rounded peer-checked:border-purple-500 peer-checked:bg-gradient-to-br peer-checked:from-purple-600 peer-checked:to-blue-600 transition-all group-hover:border-purple-400"></div>
//                         <svg
//                           className="absolute inset-0 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
//                         {vehicleClass}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Price Range */}
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <h3 className="font-bold text-slate-900 flex items-center gap-2">
//                     <DollarSign className="w-4 h-4 text-purple-600" />
//                     PRICE RANGE
//                   </h3>
//                 </div>
//                 <div className="space-y-4">
//                   <input
//                     type="range"
//                     min="500"
//                     max="5000"
//                     step="100"
//                     value={priceRange[1]}
//                     onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//                     className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
//                   />
//                   <div className="flex gap-3">
//                     <div className="flex-1 bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl px-4 py-3 text-center shadow-sm">
//                       <p className="text-xs text-slate-500">MIN</p>
//                       <p className="text-slate-900 font-bold">${priceRange[0]}</p>
//                     </div>
//                     <div className="flex-1 bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl px-4 py-3 text-center shadow-sm">
//                       <p className="text-xs text-slate-500">MAX</p>
//                       <p className="text-slate-900 font-bold">${priceRange[1]}+</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Features */}
//               <div className="space-y-4">
//                 <h3 className="font-bold text-slate-900 flex items-center gap-2">
//                   <Star className="w-4 h-4 text-purple-600" />
//                   FEATURES
//                 </h3>
//                 <div className="space-y-3">
//                   {features.map((feature) => (
//                     <label
//                       key={feature}
//                       className="flex items-center gap-3 cursor-pointer group"
//                     >
//                       <div className="relative">
//                         <input
//                           type="checkbox"
//                           checked={selectedFeatures.includes(feature)}
//                           onChange={() => toggleFeature(feature)}
//                           className="peer sr-only"
//                         />
//                         <div className="w-5 h-5 border-2 border-slate-300 rounded peer-checked:border-purple-500 peer-checked:bg-gradient-to-br peer-checked:from-purple-600 peer-checked:to-blue-600 transition-all group-hover:border-purple-400"></div>
//                         <svg
//                           className="absolute inset-0 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
//                         {feature}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* Cars Grid */}
//           <div className="flex-1">
//             {/* Sort Dropdown */}
//             <div className="flex justify-end mb-8">
//               <button
//                 className="flex items-center gap-3 bg-white border-2 border-slate-200 rounded-2xl px-6 py-3 text-slate-900 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-100/50 transition-all group"
//                 onClick={() => {
//                   const sorts = ["Recommended", "Price: Low to High", "Price: High to Low", "Newest"];
//                   const currentIndex = sorts.indexOf(sortBy);
//                   setSortBy(sorts[(currentIndex + 1) % sorts.length]);
//                 }}
//               >
//                 <span className="text-sm text-slate-600">Sort by:</span>
//                 <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                   {sortBy}
//                 </span>
//                 <svg className="w-4 h-4 text-purple-600 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//             </div>

//             {/* Grid */}
//             <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
//               {filteredCars.map((car, index) => (
//                 <div
//                   key={car.id}
//                   className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-200/50 hover:border-purple-300 transition-all duration-500 hover:-translate-y-2"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   {/* Image */}
//                   <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
//                     {car.badge && (
//                       <div className={`absolute top-4 left-4 z-20 ${car.badgeColor} backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold tracking-wider shadow-lg`}>
//                         {car.badge}
//                       </div>
//                     )}
//                     <img
//                       src={car.image}
//                       alt={car.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-60"></div>

//                     {/* Hover Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 space-y-5">
//                     {/* Title */}
//                     <div>
//                       <h3 className="text-2xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all">
//                         {car.name}
//                       </h3>
//                       <p className="text-sm text-slate-500 mt-1">
//                         {car.year} • {car.color}
//                       </p>
//                     </div>

//                     {/* Specs */}
//                     <div className="flex items-center gap-4 text-slate-600">
//                       <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
//                         <Users className="w-4 h-4" />
//                         <span className="text-xs font-medium">{car.seats}</span>
//                       </div>
//                       <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
//                         <Zap className="w-4 h-4" />
//                         <span className="text-xs font-medium">{car.transmission}</span>
//                       </div>
//                       <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
//                         <Fuel className="w-4 h-4" />
//                         <span className="text-xs font-medium">{car.fuelType}</span>
//                       </div>
//                     </div>

//                     {/* Divider */}
//                     <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

//                     {/* Price & CTA */}
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                           ${car.pricePerDay.toLocaleString()}
//                         </p>
//                         <p className="text-xs text-slate-400 mt-1 tracking-wide">
//                           PER DAY
//                         </p>
//                       </div>
//                       <button className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl px-6 py-3 text-white text-sm font-medium shadow-lg shadow-purple-300/50 hover:shadow-purple-400/70 hover:scale-105 transition-all duration-300 group/btn overflow-hidden">
//                         <span className="relative z-10">Book Now</span>
//                         <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Empty State */}
//             {filteredCars.length === 0 && (
//               <div className="text-center py-20 bg-white border border-slate-200 rounded-3xl shadow-xl">
//                 <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <Car className="w-10 h-10 text-purple-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-slate-900 mb-2">
//                   No vehicles found
//                 </h3>
//                 <p className="text-slate-600">
//                   Try adjusting your filters to see more options.
//                 </p>
//               </div>
//             )}

//             {/* Pagination */}
//             {filteredCars.length > 0 && (
//               <div className="flex items-center justify-center gap-3 mt-12">
//                 <button
//                   className="w-12 h-12 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center text-slate-900 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-100/50 transition-all"
//                   onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </button>
//                 {[1, 2, 3].map((page) => (
//                   <button
//                     key={page}
//                     className={`w-12 h-12 rounded-xl font-medium transition-all ${
//                       currentPage === page
//                         ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-300/50"
//                         : "bg-white border-2 border-slate-200 text-slate-900 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-100/50"
//                     }`}
//                     onClick={() => setCurrentPage(page)}
//                   >
//                     {page}
//                   </button>
//                 ))}
//                 <span className="text-slate-400 px-2">...</span>
//                 <button
//                   className="w-12 h-12 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center text-slate-900 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-100/50 transition-all"
//                   onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out;
//         }

//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.4;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.6;
//             transform: scale(1.1);
//           }
//         }

//         .animate-pulse {
//           animation: pulse 4s ease-in-out infinite;
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(5deg);
//           }
//         }

//         @keyframes float-delayed {
//           0%, 100% {
//             transform: translateY(0px) rotate(45deg);
//           }
//           50% {
//             transform: translateY(-15px) rotate(50deg);
//           }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }

//         .delay-1000 {
//           animation-delay: 1s;
//         }

//         .delay-2000 {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CarCollections;













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
                  key={car.id}
                  className={`group relative bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all duration-500 card-hover opacity-0 animate-fade-up`}
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

                      <Button className="btn-luxury rounded-lg text-white px-5 h-9 text-xs">
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