import { useParams, Navigate } from "react-router-dom";
import { tools } from "@/data/tools";
import ToolLayout from "@/components/tools/ToolLayout";
import { Construction } from "lucide-react";

// Import specific tool implementations
import ImageToPng from "./ImageToPng";
import ImageToJpg from "./ImageToJpg";
import QrCodeGenerator from "./QrCodeGenerator";
import WordCounter from "./WordCounter";
import CaseConverter from "./CaseConverter";
import JsonFormatter from "./JsonFormatter";
import ColorPicker from "./ColorPicker";
import PasswordGenerator from "./PasswordGenerator";
import PercentageCalculator from "./PercentageCalculator";
import AgeCalculator from "./AgeCalculator";
import LengthConverter from "./LengthConverter";
import TemperatureConverter from "./TemperatureConverter";

const toolComponents: Record<string, React.ComponentType> = {
  "image-to-png": ImageToPng,
  "image-to-jpg": ImageToJpg,
  "qr-code-generator": QrCodeGenerator,
  "word-counter": WordCounter,
  "case-converter": CaseConverter,
  "json-formatter": JsonFormatter,
  "color-picker": ColorPicker,
  "password-generator": PasswordGenerator,
  "percentage-calculator": PercentageCalculator,
  "age-calculator": AgeCalculator,
  "length-converter": LengthConverter,
  "temperature-converter": TemperatureConverter,
};

const GenericTool = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = tools.find(t => t.slug === slug);

  if (!tool) return <Navigate to="/" replace />;

  // Check if we have a specific implementation
  const SpecificComponent = toolComponents[slug!];
  if (SpecificComponent) return <SpecificComponent />;

  // Generic placeholder for tools not yet implemented
  return (
    <ToolLayout tool={tool}>
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
          <Construction className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-3">Coming Soon</h2>
        <p className="text-muted-foreground max-w-md">
          This tool is currently under development. Check back soon for the full functionality!
        </p>
      </div>
    </ToolLayout>
  );
};

export default GenericTool;
