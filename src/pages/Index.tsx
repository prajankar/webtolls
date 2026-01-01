import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import ToolsGrid from "@/components/ToolsGrid";
import { tools, searchTools, getToolsByCategory, ToolCategory } from "@/data/tools";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | "all">("all");

  const filteredTools = useMemo(() => {
    if (searchQuery) {
      return searchTools(searchQuery);
    }
    if (selectedCategory !== "all") {
      return getToolsByCategory(selectedCategory);
    }
    return tools;
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>MultiTools - 100+ Free Online Tools | Converters, Calculators & More</title>
        <meta name="description" content="Free online tools for everyone. Image converters, SEO tools, calculators, text utilities, developer tools and more. Fast, secure, and no registration required." />
        <meta name="keywords" content="online tools, image converter, calculator, SEO tools, developer tools, text tools, unit converter" />
        <link rel="canonical" href="https://multitools.app" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        <main className="flex-1">
          {!searchQuery && selectedCategory === "all" && <HeroSection />}
          
          <CategoryFilter 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          
          <ToolsGrid 
            tools={filteredTools}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
