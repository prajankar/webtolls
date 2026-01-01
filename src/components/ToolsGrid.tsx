import { Tool, ToolCategory, categories, getToolsByCategory } from "@/data/tools";
import ToolCard from "./ToolCard";

interface ToolsGridProps {
  tools: Tool[];
  selectedCategory: ToolCategory | "all";
  searchQuery: string;
}

const ToolsGrid = ({ tools, selectedCategory, searchQuery }: ToolsGridProps) => {
  if (tools.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">No tools found matching your search.</p>
        <p className="text-muted-foreground text-sm mt-2">Try a different keyword or category.</p>
      </div>
    );
  }

  // If searching or filtering by category, show flat grid
  if (searchQuery || selectedCategory !== "all") {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">
            {searchQuery 
              ? `Search Results (${tools.length})` 
              : categories[selectedCategory as ToolCategory]?.name || "All Tools"
            }
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>
      </div>
    );
  }

  // Show by category
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {Object.entries(categories).map(([key, category]) => {
        const categoryTools = getToolsByCategory(key as ToolCategory);
        const Icon = category.icon;
        
        return (
          <section key={key}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h2 className="section-title">{category.name}</h2>
              <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                {categoryTools.length} tools
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categoryTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>

            {/* Ad between sections */}
            {key === "text" && (
              <div className="mt-8">
                <div className="ad-placeholder h-24 md:h-28">
                  Advertisement
                </div>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default ToolsGrid;
