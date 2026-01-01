import { useState } from "react";
import { tools } from "@/data/tools";
import ToolLayout from "@/components/tools/ToolLayout";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Copy, Braces, AlertCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const tool = tools.find(t => t.slug === "json-formatter")!;

const JsonFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
      setIsValid(true);
    } catch (e: any) {
      setError(e.message);
      setOutput("");
      setIsValid(false);
    }
  };

  const handleMinify = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
      setIsValid(true);
    } catch (e: any) {
      setError(e.message);
      setOutput("");
      setIsValid(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard!");
  };

  return (
    <ToolLayout tool={tool}>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="input">JSON Input</Label>
          <Textarea
            id="input"
            placeholder='{"key": "value"}'
            value={input}
            onChange={(e) => { setInput(e.target.value); setIsValid(null); }}
            className="min-h-40 font-mono text-sm"
          />
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={handleFormat} disabled={!input} className="gap-2">
            <Braces className="w-4 h-4" />
            Format
          </Button>
          <Button onClick={handleMinify} disabled={!input} variant="outline">
            Minify
          </Button>
          
          {isValid !== null && (
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium ${
              isValid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}>
              {isValid ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
              {isValid ? "Valid JSON" : "Invalid JSON"}
            </div>
          )}
        </div>

        {error && (
          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm">
            <strong>Error:</strong> {error}
          </div>
        )}

        {output && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Output</Label>
              <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-2">
                <Copy className="w-4 h-4" />
                Copy
              </Button>
            </div>
            <pre className="p-4 bg-muted/50 rounded-xl overflow-x-auto text-sm font-mono">
              {output}
            </pre>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default JsonFormatter;
