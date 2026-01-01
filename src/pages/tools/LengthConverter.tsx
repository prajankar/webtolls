import { useState } from "react";
import { tools } from "@/data/tools";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightLeft } from "lucide-react";

const tool = tools.find(t => t.slug === "length-converter")!;

const units = {
  mm: { name: "Millimeters", toMeter: 0.001 },
  cm: { name: "Centimeters", toMeter: 0.01 },
  m: { name: "Meters", toMeter: 1 },
  km: { name: "Kilometers", toMeter: 1000 },
  in: { name: "Inches", toMeter: 0.0254 },
  ft: { name: "Feet", toMeter: 0.3048 },
  yd: { name: "Yards", toMeter: 0.9144 },
  mi: { name: "Miles", toMeter: 1609.344 },
};

const LengthConverter = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("ft");
  const [result, setResult] = useState("");

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return;

    const meters = num * units[fromUnit as keyof typeof units].toMeter;
    const converted = meters / units[toUnit as keyof typeof units].toMeter;
    setResult(converted.toFixed(6).replace(/\.?0+$/, ""));
  };

  const swap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    if (result) {
      setValue(result);
      setResult(value);
    }
  };

  return (
    <ToolLayout tool={tool}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-end">
          <div className="space-y-2">
            <Label>From</Label>
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger className="h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(units).map(([key, unit]) => (
                  <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter value"
              className="h-12 text-lg"
            />
          </div>

          <Button variant="outline" size="icon" onClick={swap} className="h-12 w-12 self-center mt-6">
            <ArrowRightLeft className="w-5 h-5" />
          </Button>

          <div className="space-y-2">
            <Label>To</Label>
            <Select value={toUnit} onValueChange={setToUnit}>
              <SelectTrigger className="h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(units).map(([key, unit]) => (
                  <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              readOnly
              value={result}
              placeholder="Result"
              className="h-12 text-lg bg-muted/50"
            />
          </div>
        </div>

        <Button onClick={convert} className="w-full h-12">Convert</Button>

        {result && (
          <div className="p-6 bg-primary/10 rounded-xl text-center">
            <p className="text-2xl font-bold text-foreground">
              {value} {units[fromUnit as keyof typeof units].name} = {result} {units[toUnit as keyof typeof units].name}
            </p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default LengthConverter;
