export interface SectionItem {
  title: string;
  image: string;
  price: string;
  desc: string;
}

interface SectionData {
  title: string;
  products: SectionItem[];
}

export const sectionData: SectionData[] = [
  {
    title: "Construction Equipment",
    products: [
      {
        title: "Concrete Mixer",
        image: "/assets/products/concrete-mixer.webp",
        price: "50 AED for 2 hours",
        desc: "Capacity: 140L | Power: 800W | Weight: 50 kg | Portable design for easy transportation",
      },
      {
        title: "Power Drill",
        image: "/assets/products/power-drill.jpg",
        price: "15 AED for 1 hour",
        desc: "Power: 750W | Speed: 0-3000 RPM | Keyless Chuck | Ergonomic Grip",
      },
      {
        title: "Heavy Duty Wheelbarrow",
        image: "/assets/products/wheelbarrow.jpg",
        price: "10 AED per day",
        desc: "Capacity: 120L | Material: Steel | Pneumatic Tires for smooth mobility",
      },
      {
        title: "Electric Tile Cutter",
        image: "/assets/products/tile-cutter.avif",
        price: "25 AED for 1 hour",
        desc: "Power: 1200W | Cutting Depth: 35mm | Water-Cooling System | Portable",
      },
      {
        title: "Scaffolding Tower",
        image: "/assets/products/scaffolding-tower.webp",
        price: "100 AED per day",
        desc: "Height: 6m | Material: Aluminum | Load Capacity: 450kg",
      },
    ],
  },
  {
    title: "Hardware Tools",
    products: [
      {
        title: "Adjustable Wrench Set",
        image: "/assets/products/wrench-set.avif",
        price: "30 AED",
        desc: "Sizes: 6”, 8”, 10” | Material: Chrome Vanadium Steel | Anti-slip Grip",
      },
      {
        title: "Heavy Duty Hammer",
        image: "/assets/products/hammer.jpg",
        price: "15 AED",
        desc: "Weight: 1.5 kg | Material: Drop-forged Steel | Anti-shock Grip",
      },
      {
        title: "Precision Screwdriver Set",
        image: "/assets/products/screwdriver-set.jpg",
        price: "20 AED",
        desc: "Includes 15 pieces | Magnetic Tips | Ergonomic Handles",
      },
      {
        title: "Pipe Wrench",
        image: "/assets/products/pipe-wrench.jpg",
        price: "25 AED",
        desc: "Size: 18” | Material: Cast Iron | Adjustable Jaw | Heavy Duty",
      },
      {
        title: "Allen Key Set",
        image: "/assets/products/allen-key-set.jpg",
        price: "10 AED",
        desc: "Set of 9 keys | Sizes: 1.5mm to 10mm | Rust-resistant Coating",
      },
    ],
  },
  {
    title: "Building Materials",
    products: [
      {
        title: "Cement (50kg Bag)",
        image: "/assets/products/cement.avif",
        price: "12 AED per bag",
        desc: "Grade: OPC 43 | Weight: 50kg | For all construction purposes",
      },
      {
        title: "Red Bricks",
        image: "/assets/products/red-bricks.avif",
        price: "0.80 AED per brick",
        desc: "Size: 9x4x3 inches | High Durability | For load-bearing walls",
      },
      {
        title: "Steel Rebars",
        image: "/assets/products/steel-rebars.avif",
        price: "500 AED per ton",
        desc: "Grade: Fe500 | Diameter: 10mm, 12mm | For concrete reinforcement",
      },
      {
        title: "Plywood Sheets",
        image: "/assets/products/plywood.webp",
        price: "40 AED per sheet",
        desc: "Thickness: 18mm | Size: 8x4 feet | Waterproof",
      },
      {
        title: "Ceramic Floor Tiles",
        image: "/assets/products/ceramic-tiles.jpg",
        price: "20 AED per square meter",
        desc: "Size: 60x60cm | Glossy Finish | Slip-resistant",
      },
    ],
  },
];
