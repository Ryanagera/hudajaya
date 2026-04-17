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
        description: "Professional mangle roller system",
        icon: "⚙️",
      },
      {
        id: 2,
        name: "Glue Spreader Roll",
        description: "Precision adhesive application",
        icon: "🎨",
      },
      {
        id: 3,
        name: "Polyurethane Roll",
        description: "Precision adhesive application",
        icon: "🎨",
      },
      {
        id: 4,
        name: "Silicon Roll",
        description: "Precision adhesive application",
        icon: "🎨",
      },
      {
        id: 5,
        name: "Press Roll",
        description: "Heavy-duty press roller",
        icon: "⏸️",
      },
      {
        id: 6,
        name: "Expander Roll",
        description: "Material expansion roll",
        icon: "📏",
      },
      {
        id: 7,
        name: "Sizing Roll",
        description: "...",
        icon: "🔧",
      },
      {
        id: 8,
        name: "Groving Roll",
        description: "...",
        icon: "📤",
      },
      {
        id: 9,
        name: "Padder Roll",
        description: "...",
        icon: "📤",
      },
      {
        id: 10,
        name: "Coating Roll",
        description: "...",
        icon: "📤",
      },
      {
        id: 11,
        name: "Calender Roll",
        description: "...",
        icon: "📤",
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
        description: "Primary contact drum",
        icon: "🎯",
      },
      {
        id: 2,
        name: "Stainless Steel Roll",
        description: "Corrosion-resistant steel roll",
        icon: "✨",
      },
      {
        id: 3,
        name: "Doctor Roll",
        description: "Precision doctor roll",
        icon: "📋",
      },
      {
        id: 4,
        name: "Chill Roll",
        description: "Industrial chill roller",
        icon: "❄️",
      },
      {
        id: 5,
        name: "Drive Drum",
        description: "Heavy-duty drive drum",
        icon: "🏋️",
      },
      {
        id: 6,
        name: "Support Roll",
        description: "Support structure roller",
        icon: "🛠️",
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
        description: "High-grade synthetic bristles",
        icon: "🪮",
      },
      {
        id: 2,
        name: "Natural Fiber Brush",
        description: "100% natural fiber brush",
        icon: "🌾",
      },
      {
        id: 3,
        name: "Wire Brush",
        description: "Industrial wire brush",
        icon: "⚡",
      },
      {
        id: 4,
        name: "Soft Brush",
        description: "Soft-touch brush roller",
        icon: "☁️",
      },
      {
        id: 5,
        name: "Static Brush",
        description: "Anti-static brush system",
        icon: "🌩️",
      },
      {
        id: 6,
        name: "Combined Brush",
        description: "Hybrid brush technology",
        icon: "🔀",
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
        description: "Custom bearing configurations",
        icon: "🔴",
      },
      {
        id: 2,
        name: "Pulley System",
        description: "Precision pulley components",
        icon: "⚙️",
      },
      {
        id: 3,
        name: "Coupling",
        description: "Flexible coupling system",
        icon: "🔗",
      },
      {
        id: 4,
        name: "Seals & Gaskets",
        description: "Industrial sealing components",
        icon: "🔐",
      },
      {
        id: 5,
        name: "Shaft Extensions",
        description: "Custom shaft extensions",
        icon: "📏",
      },
      {
        id: 6,
        name: "Bracket Assembly",
        description: "Support bracket systems",
        icon: "⬚",
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
        description: "Material entry system",
        icon: "📥",
      },
      {
        id: 2,
        name: "Heating Zone",
        description: "Temperature control system",
        icon: "🔥",
      },
      {
        id: 3,
        name: "Press Section",
        description: "Hydraulic press unit",
        icon: "⬇️",
      },
      {
        id: 4,
        name: "Cooling Unit",
        description: "Cooling and stabilization",
        icon: "🧊",
      },
      {
        id: 5,
        name: "Exit Unit",
        description: "Material exit system",
        icon: "📤",
      },
      {
        id: 6,
        name: "Control Panel",
        description: "Advanced control system",
        icon: "🔌",
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
      type: "product",
      categorySlug: category.slug,
      categoryName: category.name,
    })),
  ],
  [],
);
