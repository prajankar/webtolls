import { useState } from "react";
import { tools } from "@/data/tools";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightLeft } from "lucide-react";

const tool = tools.find(t => t.slug === "temperature-converter")!;

const TemperatureConverter = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("celsius");
  const [toUnit, setToUnit] = useState("fahrenheit");
  const [result, setResult] = useState("");

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return;

    let celsius: number;
    
    // Convert to Celsius first
    switch (fromUnit) {
      case "fahrenheit": celsius = (num - 32) * 5/9; break;
      case "kelvin": celsius = num - 273.15; break;
      default: celsius = num;
    }

    // Convert from Celsius to target
    let converted: number;
    switch (toUnit) {
      case "fahrenheit": converted = (celsius * 9/5) + 32; break;
      case "kelvin": converted = celsius + 273.15; break;
      default: converted = celsius;
    }

    setResult(converted.toFixed(2));
  };

  const swap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    if (result) {
      setValue(result);
      setResult(value);
    }
  };

  const units = [
    { value: "celsius", label: "Celsius (°C)" },
    { value: "fahrenheit", label: "Fahrenheit (°F)" },
    { value: "kelvin", label: "Kelvin (K)" },
  ];

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
                {units.map((unit) => (
                  <SelectItem key={unit.value} value={unit.value}>{unit.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter temperature"
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
                {units.map((unit) => (
                  <SelectItem key={unit.value} value={unit.value}>{unit.label}</SelectItem>
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
              {value}° {fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)} = {result}° {toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}
            </p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default TemperatureConverter;
