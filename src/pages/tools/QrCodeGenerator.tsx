import { useState } from "react";
import { tools } from "@/data/tools";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QrCode, Download, Copy } from "lucide-react";
import { toast } from "sonner";

const tool = tools.find(t => t.slug === "qr-code-generator")!;

const QrCodeGenerator = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(256);
  const qrUrl = text ? `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}` : "";

  const handleDownload = async () => {
    if (!qrUrl) return;
    
    try {
      const response = await fetch(qrUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "qrcode.png";
      a.click();
      URL.revokeObjectURL(url);
      toast.success("QR Code downloaded!");
    } catch {
      toast.error("Failed to download QR Code");
    }
  };

  const handleCopy = async () => {
    if (!qrUrl) return;
    await navigator.clipboard.writeText(qrUrl);
    toast.success("QR Code URL copied!");
  };

  return (
    <ToolLayout tool={tool}>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="text">Text or URL</Label>
          <Input
            id="text"
            placeholder="Enter text or URL to encode..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="size">Size: {size}x{size}px</Label>
          <Input
            id="size"
            type="range"
            min={128}
            max={512}
            step={64}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </div>

        {text && (
          <div className="space-y-4">
            <div className="flex justify-center p-8 bg-muted/30 rounded-xl">
              <img src={qrUrl} alt="QR Code" className="rounded-lg shadow-lg" />
            </div>
            
            <div className="flex gap-3">
              <Button onClick={handleDownload} className="flex-1 gap-2">
                <Download className="w-4 h-4" />
                Download PNG
              </Button>
              <Button onClick={handleCopy} variant="outline" className="gap-2">
                <Copy className="w-4 h-4" />
                Copy URL
              </Button>
            </div>
          </div>
        )}

        {!text && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <QrCode className="w-16 h-16 text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">Enter text or URL above to generate QR Code</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default QrCodeGenerator;
