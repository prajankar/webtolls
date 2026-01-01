import { useState } from "react";
import { tools } from "@/data/tools";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

const tool = tools.find(t => t.slug === "percentage-calculator")!;

const PercentageCalculator = () => {
  const [calc1, setCalc1] = useState({ percent: "", of: "", result: "" });
  const [calc2, setCalc2] = useState({ is: "", of: "", result: "" });
  const [calc3, setCalc3] = useState({ from: "", to: "", result: "" });

  const calculate1 = () => {
    const p = parseFloat(calc1.percent);
    const o = parseFloat(calc1.of);
    if (!isNaN(p) && !isNaN(o)) {
      setCalc1(prev => ({ ...prev, result: ((p / 100) * o).toFixed(2) }));
    }
  };

  const calculate2 = () => {
    const i = parseFloat(calc2.is);
    const o = parseFloat(calc2.of);
    if (!isNaN(i) && !isNaN(o) && o !== 0) {
      setCalc2(prev => ({ ...prev, result: ((i / o) * 100).toFixed(2) + "%" }));
    }
  };

  const calculate3 = () => {
    const f = parseFloat(calc3.from);
    const t = parseFloat(calc3.to);
    if (!isNaN(f) && !isNaN(t) && f !== 0) {
      const change = ((t - f) / f) * 100;
      setCalc3(prev => ({ ...prev, result: (change >= 0 ? "+" : "") + change.toFixed(2) + "%" }));
    }
  };

  return (
    <ToolLayout tool={tool}>
      <div className="space-y-8">
        {/* Calc 1: What is X% of Y? */}
        <div className="p-6 bg-muted/30 rounded-xl space-y-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            What is X% of Y?
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <span>What is</span>
            <Input
              type="number"
              value={calc1.percent}
              onChange={(e) => setCalc1(prev => ({ ...prev, percent: e.target.value }))}
              className="w-24"
              placeholder="10"
            />
            <span>% of</span>
            <Input
              type="number"
              value={calc1.of}
              onChange={(e) => setCalc1(prev => ({ ...prev, of: e.target.value }))}
              className="w-32"
              placeholder="200"
            />
            <Button onClick={calculate1}>Calculate</Button>
            {calc1.result && (
              <span className="font-bold text-primary text-lg">= {calc1.result}</span>
            )}
          </div>
        </div>

        {/* Calc 2: X is what % of Y? */}
        <div className="p-6 bg-muted/30 rounded-xl space-y-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            X is what percent of Y?
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <Input
              type="number"
              value={calc2.is}
              onChange={(e) => setCalc2(prev => ({ ...prev, is: e.target.value }))}
              className="w-24"
              placeholder="25"
            />
            <span>is what % of</span>
            <Input
              type="number"
              value={calc2.of}
              onChange={(e) => setCalc2(prev => ({ ...prev, of: e.target.value }))}
              className="w-32"
              placeholder="200"
            />
            <Button onClick={calculate2}>Calculate</Button>
            {calc2.result && (
              <span className="font-bold text-primary text-lg">= {calc2.result}</span>
            )}
          </div>
        </div>

        {/* Calc 3: Percentage change */}
        <div className="p-6 bg-muted/30 rounded-xl space-y-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            Percentage Change
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <span>From</span>
            <Input
              type="number"
              value={calc3.from}
              onChange={(e) => setCalc3(prev => ({ ...prev, from: e.target.value }))}
              className="w-28"
              placeholder="100"
            />
            <span>to</span>
            <Input
              type="number"
              value={calc3.to}
              onChange={(e) => setCalc3(prev => ({ ...prev, to: e.target.value }))}
              className="w-28"
              placeholder="150"
            />
            <Button onClick={calculate3}>Calculate</Button>
            {calc3.result && (
              <span className={`font-bold text-lg ${calc3.result.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                = {calc3.result}
              </span>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default PercentageCalculator;
