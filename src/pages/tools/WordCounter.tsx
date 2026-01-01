import { useState } from "react";
import { tools } from "@/data/tools";
import ToolLayout from "@/components/tools/ToolLayout";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const tool = tools.find(t => t.slug === "word-counter")!;

const WordCounter = () => {
  const [text, setText] = useState("");

  const stats = {
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, "").length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    sentences: text.split(/[.!?]+/).filter(s => s.trim()).length,
    paragraphs: text.split(/\n\n+/).filter(p => p.trim()).length,
    readingTime: Math.ceil((text.trim() ? text.trim().split(/\s+/).length : 0) / 200),
  };

  return (
    <ToolLayout tool={tool}>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="text">Enter your text</Label>
          <Textarea
            id="text"
            placeholder="Start typing or paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-48 resize-y"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "Words", value: stats.words },
            { label: "Characters", value: stats.characters },
            { label: "No Spaces", value: stats.charactersNoSpaces },
            { label: "Sentences", value: stats.sentences },
            { label: "Paragraphs", value: stats.paragraphs },
            { label: "Reading Time", value: `${stats.readingTime} min` },
          ].map((stat) => (
            <div key={stat.label} className="bg-muted/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
};

export default WordCounter;
