import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const Button: React.FC<ButtonProps> = ({ selected, children, ...props }) => (
  <button
    {...props}
    className={`gap-2 flex items-center z-20 h-fit w-full justify-center text-sm p-2 rounded-lg border-2 text-black ${
      selected ? "border-[#8E7D3A] bg-[#FFFBEA]" : "bg-white border-stone-400"
    }`}
  >
    {children}
  </button>
);

export const categoryOptions: string[] = [
  "All Products",
  "Electrical & Plumbing Solutions",
  "Building Materials",
  "Hardware & Hard Tools",
  "Road Construction Tools",
  "Welding Fabrication & Engineering Services",
  "Site Safety & Security Equipment",
];

const FilterSection: React.FC<{
  selectedKey: string;
  onSelect: (key: string) => void;
}> = ({ selectedKey, onSelect }) => (
  <div className="flex flex-col gap-2">
    {categoryOptions?.map((option) => (
      <Button
        key={option}
        selected={selectedKey === option}
        onClick={() => onSelect(option)}
      >
        {option}
      </Button>
    ))}
  </div>
);

export default FilterSection;
