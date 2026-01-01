import { useState, useRef, ChangeEvent } from "react";
import { tools } from "@/data/tools";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Upload, Download, Loader2 } from "lucide-react";
import { toast } from "sonner";

const tool = tools.find(t => t.slug === "image-to-jpg")!;

const ImageToJpg = () => {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [quality, setQuality] = useState([85]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file");
      return;
    }

    setLoading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target?.result as string);
      setFileName(file.name.replace(/\.[^/.]+$/, "") + ".jpg");
      setLoading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    if (!image) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = fileName;
          a.click();
          URL.revokeObjectURL(url);
          toast.success("Image downloaded!");
        }
      }, "image/jpeg", quality[0] / 100);
    };
    
    img.src = image;
  };

  return (
    <ToolLayout tool={tool}>
      <div className="space-y-6">
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-border rounded-xl p-8 md:p-12 text-center cursor-pointer hover:border-primary/50 hover:bg-muted/30 transition-all"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-lg font-medium text-foreground mb-2">Click to upload image</p>
          <p className="text-sm text-muted-foreground">Supports PNG, WEBP, GIF, BMP and more</p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {image && !loading && (
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden bg-muted/30 p-4">
              <img src={image} alt="Preview" className="max-w-full max-h-96 mx-auto rounded-lg" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Quality: {quality[0]}%</label>
              </div>
              <Slider value={quality} onValueChange={setQuality} min={10} max={100} step={5} />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Output: {fileName}</span>
              <Button onClick={handleDownload} className="gap-2">
                <Download className="w-4 h-4" />
                Download JPG
              </Button>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default ImageToJpg;
