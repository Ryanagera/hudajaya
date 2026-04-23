import rubberRollImg from "@/assets/images/products/rubber_roll.jpg";
import steelRollImg from "@/assets/images/products/steel_roll.jpg";
import brushRollImg from "@/assets/images/products/brush_roll.png";
import customSparePartImg from "@/assets/images/products/custom_spare_part.png";
import laminatingMachineImg from "@/assets/images/products/laminating_machine.jpg";

/**
 * Products Categories and Subcategories
 */

export const PRODUCT_CATEGORIES = [
  {
    id: 1,
    name: "Rubber Roll",
    slug: "rubber-roll",
    description: "High-quality rubber rolls for various applications",
    icon: rubberRollImg,
    color: "bg-amber-50/0",
    products: [
      {
        id: 1,
        name: "Mangel Roll",
        slug: "mangel-roll",
        description: "Professional mangle roller system engineered for high-performance industrial environments. Our rubber rolls provide unmatched durability, precision tolerances, and resistance to extreme chemical and thermal stress.",
        icon: "⚙️",
        specifications: {
          hardness: "40 — 95 Shore A",
          tempRange: "-40°C / +220°C",
          resistance: "Class A+",
          tolerance: "±0.05 mm"
        }
      },
      {
        id: 2,
        name: "Glue Spreader Roll",
        slug: "glue-spreader-roll",
        description: "Precision adhesive application system designed for uniform coating and exceptional durability in high-volume production lines.",
        icon: "🎨",
        specifications: {
          hardness: "50 — 80 Shore A",
          tempRange: "-20°C / +180°C",
          resistance: "High Chemical Resistance",
          tolerance: "±0.03 mm"
        }
      },
      {
        id: 3,
        name: "Polyurethane Roll",
        slug: "polyurethane-roll",
        description: "High-performance polyurethane rollers offering superior abrasion resistance and load-bearing capacity compared to standard rubber.",
        icon: "🎨",
        specifications: {
          hardness: "60 — 95 Shore A",
          tempRange: "-30°C / +120°C",
          resistance: "Superior Oil Resistance",
          tolerance: "±0.05 mm"
        }
      },
      {
        id: 4,
        name: "Silicon Roll",
        slug: "silicon-roll",
        description: "Heat-resistant silicon rollers perfect for high-temperature applications requiring non-stick properties and thermal stability.",
        icon: "🎨",
        specifications: {
          hardness: "30 — 70 Shore A",
          tempRange: "-60°C / +250°C",
          resistance: "Excellent Heat Resistance",
          tolerance: "±0.1 mm"
        }
      },
      {
        id: 5,
        name: "Press Roll",
        slug: "press-roll",
        description: "Heavy-duty press rollers built for extreme pressure applications in paper, textile, and steel processing industries.",
        icon: "⏸️",
        specifications: {
          hardness: "80 — 100 Shore A",
          tempRange: "-20°C / +150°C",
          resistance: "High Pressure Resistance",
          tolerance: "±0.02 mm"
        }
      },
      {
        id: 6,
        name: "Expander Roll",
        slug: "expander-roll",
        description: "Specialized rollers designed to eliminate wrinkles and ensure uniform material tension across various processing lines.",
        icon: "📏",
        specifications: {
          hardness: "40 — 60 Shore A",
          tempRange: "-10°C / +100°C",
          resistance: "Standard Industrial",
          tolerance: "±0.2 mm"
        }
      },
      {
        id: 7,
        name: "Sizing Roll",
        slug: "sizing-roll",
        description: "Precision sizing rollers used for controlling thickness and surface finish in textile and film production.",
        icon: "🔧",
        specifications: {
          hardness: "70 — 90 Shore A",
          tempRange: "-10°C / +120°C",
          resistance: "High Wear Resistance",
          tolerance: "±0.01 mm"
        }
      },
      {
        id: 8,
        name: "Groving Roll",
        slug: "groving-roll",
        description: "Custom grooved rollers for improved drainage, traction, and specific material handling requirements.",
        icon: "📤",
        specifications: {
          hardness: "60 — 85 Shore A",
          tempRange: "-20°C / +130°C",
          resistance: "Multi-Chemical Resistance",
          tolerance: "±0.1 mm"
        }
      },
      {
        id: 9,
        name: "Padder Roll",
        slug: "padder-roll",
        description: "Durable padder rollers for uniform liquid application in textile dyeing and finishing processes.",
        icon: "📤",
        specifications: {
          hardness: "50 — 75 Shore A",
          tempRange: "-10°C / +110°C",
          resistance: "Dye and Alkali Resistance",
          tolerance: "±0.05 mm"
        }
      },
      {
        id: 10,
        name: "Coating Roll",
        slug: "coating-roll",
        description: "Specialized coating rollers for precise application of lacquers, adhesives, and decorative finishes.",
        icon: "📤",
        specifications: {
          hardness: "40 — 70 Shore A",
          tempRange: "-20°C / +140°C",
          resistance: "Solvent Resistance",
          tolerance: "±0.02 mm"
        }
      },
      {
        id: 11,
        name: "Calender Roll",
        slug: "calender-roll",
        description: "High-precision calender rollers for smoothing and compressing materials to exact thickness specifications.",
        icon: "📤",
        specifications: {
          hardness: "85 — 95 Shore A",
          tempRange: "0°C / +200°C",
          resistance: "High Thermal Stability",
          tolerance: "±0.005 mm"
        }
      },
    ],
  },
  {
    id: 2,
    name: "Steel Roll",
    slug: "steel-roll",
    description: "Durable steel rolls for industrial use",
    icon: steelRollImg,
    color: "bg-slate-50/0",
    products: [
      {
        id: 1,
        name: "Contact Drum",
        slug: "contact-drum",
        description: "Primary contact drum for precision material guiding and support.",
        icon: "🎯",
        specifications: {
          hardness: "Hard Chrome Plated",
          tempRange: "-20°C / +300°C",
          resistance: "Anti-Corrosive",
          tolerance: "±0.01 mm"
        }
      },
      {
        id: 2,
        name: "Stainless Steel Roll",
        slug: "stainless-steel-roll",
        description: "High-grade stainless steel rollers for sanitary and corrosive environments.",
        icon: "✨",
        specifications: {
          hardness: "300 - 400 HB",
          tempRange: "-100°C / +600°C",
          resistance: "Extreme Corrosion Resistance",
          tolerance: "±0.005 mm"
        }
      },
      {
        id: 3,
        name: "Doctor Roll",
        slug: "doctor-roll",
        description: "Precision-ground doctor rollers for consistent material removal and surface cleaning.",
        icon: "📋",
        specifications: {
          hardness: "Hardened Steel",
          tempRange: "-10°C / +150°C",
          resistance: "Abrasion Resistant",
          tolerance: "±0.01 mm"
        }
      },
      {
        id: 4,
        name: "Chill Roll",
        slug: "chill-roll",
        description: "Internally cooled rollers for rapid material temperature reduction and stabilization.",
        icon: "❄️",
        specifications: {
          hardness: "Ground & Polished",
          tempRange: "-50°C / +100°C",
          resistance: "Thermal Fatigue Resistant",
          tolerance: "±0.02 mm"
        }
      },
      {
        id: 5,
        name: "Drive Drum",
        slug: "drive-drum",
        description: "High-torque drive drums for heavy-duty material transport and conveyor systems.",
        icon: "🏋️",
        specifications: {
          hardness: "Machined Steel",
          tempRange: "-20°C / +200°C",
          resistance: "High Impact Resistance",
          tolerance: "±0.1 mm"
        }
      },
      {
        id: 6,
        name: "Support Roll",
        slug: "support-roll",
        description: "Robust support rollers for heavy load distribution in large-scale industrial machinery.",
        icon: "🛠️",
        specifications: {
          hardness: "Medium Carbon Steel",
          tempRange: "-10°C / +180°C",
          resistance: "Load Bearing Capacity",
          tolerance: "±0.05 mm"
        }
      },
    ],
  },
  {
    id: 3,
    name: "Brush Roll",
    slug: "brush-roll",
    description: "Specialized brush rollers for cleaning and finishing",
    icon: brushRollImg,
    color: "bg-orange-50/0",
    products: [
      {
        id: 1,
        name: "Synthetic Brush",
        slug: "synthetic-brush",
        description: "High-grade synthetic bristle rollers for consistent cleaning and deburring.",
        icon: "🪮",
        specifications: {
          hardness: "Nylon/PP Bristles",
          tempRange: "-10°C / +80°C",
          resistance: "Alkali Resistant",
          tolerance: "Variable"
        }
      },
      {
        id: 2,
        name: "Natural Fiber Brush",
        slug: "natural-fiber-brush",
        description: "Eco-friendly natural fiber rollers for delicate surface treatment and polishing.",
        icon: "🌾",
        specifications: {
          hardness: "Soft/Medium Fibers",
          tempRange: "0°C / +60°C",
          resistance: "Eco-Friendly",
          tolerance: "Variable"
        }
      },
      {
        id: 3,
        name: "Wire Brush",
        slug: "wire-brush",
        description: "Heavy-duty wire brush rollers for rust removal and aggressive surface texturing.",
        icon: "⚡",
        specifications: {
          hardness: "Steel/Brass Wire",
          tempRange: "-20°C / +120°C",
          resistance: "High Abrasion",
          tolerance: "±0.5 mm"
        }
      },
      {
        id: 4,
        name: "Soft Brush",
        slug: "soft-brush",
        description: "Ultra-soft brush rollers for sensitive materials like film and light-weight papers.",
        icon: "☁️",
        specifications: {
          hardness: "Extra Soft Synthetic",
          tempRange: "0°C / +70°C",
          resistance: "Non-Scratch",
          tolerance: "High Precision"
        }
      },
      {
        id: 5,
        name: "Static Brush",
        slug: "static-brush",
        description: "Anti-static brush systems for eliminating static electricity in high-speed material processing.",
        icon: "🌩️",
        specifications: {
          hardness: "Carbon Fiber",
          tempRange: "-10°C / +90°C",
          resistance: "Static Conductive",
          tolerance: "N/A"
        }
      },
      {
        id: 6,
        name: "Combined Brush",
        slug: "combined-brush",
        description: "Hybrid brush technology combining multiple bristle types for complex cleaning requirements.",
        icon: "🔀",
        specifications: {
          hardness: "Multi-Bristle Mix",
          tempRange: "-10°C / +80°C",
          resistance: "Versatile",
          tolerance: "Custom"
        }
      },
    ],
  },
  {
    id: 4,
    name: "Custom Spare Part",
    slug: "custom-spare-part",
    description: "Customized spare parts tailored to your needs",
    icon: customSparePartImg,
    color: "bg-rose-50/0",
    products: [
      {
        id: 1,
        name: "Bearing Assembly",
        slug: "bearing-assembly",
        description: "High-precision bearing assemblies customized for specific load and speed requirements.",
        icon: "🔴",
        specifications: {
          hardness: "Hardened Chrome Steel",
          tempRange: "-30°C / +150°C",
          resistance: "High Speed Rated",
          tolerance: "ABEC-5 / P5"
        }
      },
      {
        id: 2,
        name: "Pulley System",
        slug: "pulley-system",
        description: "Custom pulley systems for efficient power transmission and material transport.",
        icon: "⚙️",
        specifications: {
          hardness: "Anodized Aluminum",
          tempRange: "-20°C / +120°C",
          resistance: "Slip Resistant",
          tolerance: "±0.05 mm"
        }
      },
      {
        id: 3,
        name: "Coupling",
        slug: "coupling",
        description: "Flexible and rigid coupling systems for shaft alignment and vibration dampening.",
        icon: "🔗",
        specifications: {
          hardness: "Cast Iron / Steel",
          tempRange: "-40°C / +100°C",
          resistance: "Vibration Dampening",
          tolerance: "±0.1 mm"
        }
      },
      {
        id: 4,
        name: "Seals & Gaskets",
        slug: "seals-gaskets",
        description: "Industrial sealing components designed for extreme pressure and chemical exposure.",
        icon: "🔐",
        specifications: {
          hardness: "Viton / NBR / EPDM",
          tempRange: "-50°C / +200°C",
          resistance: "Superior Leak Proof",
          tolerance: "Standard / Custom"
        }
      },
      {
        id: 5,
        name: "Shaft Extensions",
        slug: "shaft-extensions",
        description: "Precision-machined shaft extensions for adapting machinery to new requirements.",
        icon: "📏",
        specifications: {
          hardness: "Hardened & Ground",
          tempRange: "N/A",
          resistance: "High Torque Capable",
          tolerance: "±0.01 mm"
        }
      },
      {
        id: 6,
        name: "Bracket Assembly",
        slug: "bracket-assembly",
        description: "Robust support bracket systems for secure equipment mounting and alignment.",
        icon: "⬚",
        specifications: {
          hardness: "Galvanized Steel",
          tempRange: "N/A",
          resistance: "Structural Stability",
          tolerance: "±0.5 mm"
        }
      },
    ],
  },
  {
    id: 5,
    name: "Mesin Laminating Polyester",
    slug: "mesin-laminating-polyester",
    description: "Advanced polyester laminating machinery",
    icon: laminatingMachineImg,
    color: "bg-blue-50/0",
    products: [
      {
        id: 1,
        name: "Entry Unit",
        slug: "entry-unit",
        description: "Automated material entry system for consistent feed and alignment.",
        icon: "📥",
        specifications: {
          hardness: "Variable",
          tempRange: "Ambient",
          resistance: "Dust Proof",
          tolerance: "±1 mm"
        }
      },
      {
        id: 2,
        name: "Heating Zone",
        slug: "heating-zone",
        description: "Precision temperature control zone for optimal polyester activation and bonding.",
        icon: "🔥",
        specifications: {
          hardness: "N/A",
          tempRange: "Up to 300°C",
          resistance: "Thermal Insulation",
          tolerance: "±1°C Control"
        }
      },
      {
        id: 3,
        name: "Press Section",
        slug: "press-section",
        description: "Hydraulic press unit providing uniform pressure for high-quality lamination.",
        icon: "⬇️",
        specifications: {
          hardness: "Steel Backed",
          tempRange: "Up to 150°C",
          resistance: "Uniform Pressure",
          tolerance: "±0.05 mm GAP"
        }
      },
      {
        id: 4,
        name: "Cooling Unit",
        slug: "cooling-unit",
        description: "Rapid cooling and stabilization unit to ensure lamination quality and dimensional stability.",
        icon: "🧊",
        specifications: {
          hardness: "N/A",
          tempRange: "Down to 15°C",
          resistance: "Fast Stabilization",
          tolerance: "±2°C Control"
        }
      },
      {
        id: 5,
        name: "Exit Unit",
        slug: "exit-unit",
        description: "Controlled material exit and winding system for finished polyester laminates.",
        icon: "📤",
        specifications: {
          hardness: "N/A",
          tempRange: "Ambient",
          resistance: "Tension Controlled",
          tolerance: "N/A"
        }
      },
      {
        id: 6,
        name: "Control Panel",
        slug: "control-panel",
        description: "Advanced PLC-based control system with touchscreen interface for full machine management.",
        icon: "🔌",
        specifications: {
          hardness: "IP65 Rated",
          tempRange: "N/A",
          resistance: "EMI/RFI Protected",
          tolerance: "Digital Precision"
        }
      },
    ],
  },
];

export const PRODUCT_SEARCH_INDEX = PRODUCT_CATEGORIES.reduce(
  (acc, category) => [
    ...acc,
    { name: category.name, type: "category", slug: category.slug },
    ...category.products.map((product) => ({
      name: product.name,
      slug: product.slug,
      type: "product",
      categorySlug: category.slug,
      categoryName: category.name,
    })),
  ],
  [],
);
