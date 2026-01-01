import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Tool, categories } from "@/data/tools";

interface ToolCardProps {
  tool: Tool;
  index: number;
}

const categoryColors: Record<string, { bg: string; text: string; iconBg: string }> = {
  image: { bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-100" },
  seo: { bg: "bg-green-50", text: "text-green-600", iconBg: "bg-green-100" },
  text: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-100" },
  developer: { bg: "bg-violet-50", text: "text-violet-600", iconBg: "bg-violet-100" },
  calculator: { bg: "bg-amber-50", text: "text-amber-600", iconBg: "bg-amber-100" },
  converter: { bg: "bg-pink-50", text: "text-pink-600", iconBg: "bg-pink-100" },
  security: { bg: "bg-red-50", text: "text-red-600", iconBg: "bg-red-100" },
  social: { bg: "bg-fuchsia-50", text: "text-fuchsia-600", iconBg: "bg-fuchsia-100" },
  misc: { bg: "bg-teal-50", text: "text-teal-600", iconBg: "bg-teal-100" },
};

const ToolCard = ({ tool, index }: ToolCardProps) => {
  const Icon = tool.icon;
  const colors = categoryColors[tool.category] || categoryColors.misc;
  const category = categories[tool.category];

  return (
    <Link
      to={`/tool/${tool.slug}`}
      className="tool-card group block"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      <div className={`tool-card-icon ${colors.iconBg}`}>
        <Icon className={`w-6 h-6 ${colors.text}`} />
      </div>
      
      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
        {tool.name}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
        {tool.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className={`category-badge ${colors.bg} ${colors.text}`}>
          {category.name.replace(" Tools", "")}
        </span>
        
        <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
          <ArrowRight className="w-4 h-4 text-primary" />
        </span>
      </div>
    </Link>
  );
};

export default ToolCard;
