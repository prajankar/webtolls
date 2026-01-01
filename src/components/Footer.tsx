import { Link } from "react-router-dom";
import { Wrench, Github, Twitter, Mail, Heart } from "lucide-react";
import { categories, ToolCategory } from "@/data/tools";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Multi<span className="text-primary">Tools</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Your one-stop destination for 100+ free online tools. Convert, calculate, generate, and more - all in one place.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              {Object.entries(categories).slice(0, 5).map(([key, category]) => (
                <li key={key}>
                  <Link 
                    to={`/?category=${key}`} 
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">More Tools</h4>
            <ul className="space-y-2">
              {Object.entries(categories).slice(5).map(([key, category]) => (
                <li key={key}>
                  <Link 
                    to={`/?category=${key}`} 
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ad Space */}
          <div>
            <div className="ad-placeholder h-48 bg-background/5 text-background/50 border-background/20">
              Advertisement
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-destructive fill-current" /> © 2024 MultiTools. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-background/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-background/60 hover:text-primary text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
