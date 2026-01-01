import { categories, ToolCategory } from "@/data/tools";
import { LayoutGrid } from "lucide-react";

interface CategoryFilterProps {
  selectedCategory: ToolCategory | "all";
  setSelectedCategory: (category: ToolCategory | "all") => void;
}

const categoryColors: Record<string, string> = {
  image: "hover:border-purple-400 hover:bg-purple-50",
  seo: "hover:border-green-400 hover:bg-green-50",
  text: "hover:border-blue-400 hover:bg-blue-50",
  developer: "hover:border-violet-400 hover:bg-violet-50",
  calculator: "hover:border-amber-400 hover:bg-amber-50",
  converter: "hover:border-pink-400 hover:bg-pink-50",
  security: "hover:border-red-400 hover:bg-red-50",
  social: "hover:border-fuchsia-400 hover:bg-fuchsia-50",
  misc: "hover:border-teal-400 hover:bg-teal-50",
};

const CategoryFilter = ({ selectedCategory, setSelectedCategory }: CategoryFilterProps) => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 font-medium text-sm whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:border-primary/50 text-foreground"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            All Tools
          </button>
          
          {Object.entries(categories).map(([key, category]) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === key;
            
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key as ToolCategory)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 font-medium text-sm whitespace-nowrap transition-all ${
                  isSelected
                    ? "border-primary bg-primary text-primary-foreground"
                    : `border-border bg-card text-foreground ${categoryColors[key]}`
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
