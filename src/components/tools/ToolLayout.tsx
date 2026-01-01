import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Share2 } from "lucide-react";
import { Tool, categories } from "@/data/tools";
import { toast } from "sonner";

interface ToolLayoutProps {
  tool: Tool;
  children: ReactNode;
}

const ToolLayout = ({ tool, children }: ToolLayoutProps) => {
  const navigate = useNavigate();
  const Icon = tool.icon;
  const category = categories[tool.category];
  const CategoryIcon = category.icon;

  const handleShare = async () => {
    try {
      await navigator.share({
        title: tool.name,
        text: tool.description,
        url: window.location.href,
      });
    } catch {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb & Navigation */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <span className="text-muted-foreground">/</span>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">{category.name}</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{tool.name}</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted hover:bg-muted/80 text-sm font-medium transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Tool Header */}
      <div className="bg-gradient-to-b from-muted/50 to-background py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="category-badge bg-primary/10 text-primary">
                  <CategoryIcon className="w-3.5 h-3.5" />
                  {category.name}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{tool.name}</h1>
              <p className="text-muted-foreground max-w-2xl">{tool.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Tool Area */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              {children}
            </div>
          </div>

          {/* Sidebar with Ad */}
          <div className="lg:col-span-1 space-y-6">
            <div className="ad-placeholder h-64 sticky top-24">
              Advertisement
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ad */}
      <div className="container mx-auto px-4 pb-8">
        <div className="ad-placeholder h-24">
          Advertisement Banner
        </div>
      </div>
    </div>
  );
};

export default ToolLayout;
