import { useState } from "react";
import { tools } from "@/data/tools";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const tool = tools.find(t => t.slug === "color-picker")!;

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
};

const ColorPicker = () => {
  const [color, setColor] = useState("#0d9488");

  const rgb = hexToRgb(color);
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null;

  const formats = [
    { label: "HEX", value: color.toUpperCase() },
    { label: "RGB", value: rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : "" },
    { label: "HSL", value: hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : "" },
    { label: "RGBA", value: rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)` : "" },
  ];

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard!");
  };

  return (
    <ToolLayout tool={tool}>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <Label htmlFor="color">Pick a Color</Label>
            <div className="mt-2 flex items-center gap-4">
              <input
                id="color"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-20 h-20 rounded-xl cursor-pointer border-2 border-border"
              />
              <Input
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="#000000"
                className="flex-1 h-12 font-mono"
              />
            </div>
          </div>
          
          <div 
            className="w-full md:w-48 h-32 rounded-xl border-2 border-border shadow-inner"
            style={{ backgroundColor: color }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formats.map((format) => (
            <div key={format.label} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
              <div className="flex-1">
                <div className="text-xs text-muted-foreground font-medium mb-1">{format.label}</div>
                <div className="font-mono text-sm">{format.value}</div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleCopy(format.value)}>
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
};

export default ColorPicker;
