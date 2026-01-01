import { useState } from "react";
import { tools } from "@/data/tools";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Copy, RefreshCw, Shield } from "lucide-react";
import { toast } from "sonner";

const tool = tools.find(t => t.slug === "password-generator")!;

const PasswordGenerator = () => {
  const [length, setLength] = useState([16]);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars) {
      toast.error("Select at least one character type");
      return;
    }

    let result = "";
    for (let i = 0; i < length[0]; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    toast.success("Password copied!");
  };

  const getStrength = () => {
    let score = 0;
    if (length[0] >= 12) score++;
    if (length[0] >= 16) score++;
    if (uppercase) score++;
    if (lowercase) score++;
    if (numbers) score++;
    if (symbols) score++;
    
    if (score <= 2) return { label: "Weak", color: "bg-red-500" };
    if (score <= 4) return { label: "Medium", color: "bg-yellow-500" };
    return { label: "Strong", color: "bg-green-500" };
  };

  const strength = getStrength();

  return (
    <ToolLayout tool={tool}>
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label>Password Length: {length[0]}</Label>
          </div>
          <Slider value={length} onValueChange={setLength} min={8} max={64} step={1} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { id: "uppercase", label: "Uppercase (A-Z)", checked: uppercase, onChange: setUppercase },
            { id: "lowercase", label: "Lowercase (a-z)", checked: lowercase, onChange: setLowercase },
            { id: "numbers", label: "Numbers (0-9)", checked: numbers, onChange: setNumbers },
            { id: "symbols", label: "Symbols (!@#$)", checked: symbols, onChange: setSymbols },
          ].map((option) => (
            <div key={option.id} className="flex items-center gap-2">
              <Checkbox
                id={option.id}
                checked={option.checked}
                onCheckedChange={(c) => option.onChange(c as boolean)}
              />
              <Label htmlFor={option.id} className="cursor-pointer">{option.label}</Label>
            </div>
          ))}
        </div>

        <Button onClick={generatePassword} className="w-full gap-2 h-12">
          <RefreshCw className="w-4 h-4" />
          Generate Password
        </Button>

        {password && (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Input value={password} readOnly className="font-mono h-14 text-lg" />
              <Button onClick={handleCopy} size="icon" className="h-14 w-14">
                <Copy className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className={`h-full ${strength.color} transition-all`} style={{ width: "100%" }} />
              </div>
              <span className="text-sm font-medium flex items-center gap-1">
                <Shield className="w-4 h-4" />
                {strength.label}
              </span>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default PasswordGenerator;
