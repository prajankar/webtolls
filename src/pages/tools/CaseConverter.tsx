import { useState } from "react";
import { tools } from "@/data/tools";
import ToolLayout from "@/components/tools/ToolLayout";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const tool = tools.find(t => t.slug === "case-converter")!;

const CaseConverter = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const conversions = [
    { name: "UPPERCASE", fn: (t: string) => t.toUpperCase() },
    { name: "lowercase", fn: (t: string) => t.toLowerCase() },
    { name: "Title Case", fn: (t: string) => t.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()) },
    { name: "Sentence case", fn: (t: string) => t.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()) },
    { name: "tOGGLE cASE", fn: (t: string) => t.split("").map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join("") },
    { name: "aLtErNaTiNg", fn: (t: string) => t.split("").map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join("") },
  ];

  const handleConvert = (fn: (t: string) => string) => {
    setResult(fn(text));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result || text);
    toast.success("Copied to clipboard!");
  };

  return (
    <ToolLayout tool={tool}>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="text">Enter your text</Label>
          <Textarea
            id="text"
            placeholder="Type or paste text to convert..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-32"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {conversions.map((conv) => (
            <Button
              key={conv.name}
              variant="outline"
              onClick={() => handleConvert(conv.fn)}
              disabled={!text}
            >
              {conv.name}
            </Button>
          ))}
        </div>

        {result && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Result</Label>
              <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-2">
                <Copy className="w-4 h-4" />
                Copy
              </Button>
            </div>
            <div className="p-4 bg-muted/50 rounded-xl">
              <p className="whitespace-pre-wrap break-words">{result}</p>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default CaseConverter;
