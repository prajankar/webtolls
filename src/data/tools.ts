import { 
  Image, FileImage, Maximize2, Archive, Crop, Code, FileType, Film, QrCode, FileDown,
  Search, Tag, Map, FileCode, Globe, Link2, Gauge, Smartphone, CheckCircle, FileSearch,
  Type, Hash, CaseSensitive, Copy, BookOpen, Volume2, Mic, Link, Sparkles, Shuffle,
  Braces, FileText, Minimize2, FileJson, Database, RefreshCw, Palette, Binary, Wifi,
  Percent, Calendar, Heart, DollarSign, Calculator, Gift, Coins, Clock, RotateCw, Receipt,
  Ruler, Weight, Zap, Thermometer, Droplet, HardDrive, Battery, Gauge as PressureIcon, Fuel, Triangle,
  Lock, Key, KeyRound, Fingerprint, ExternalLink, MapPin, Shield, Server, FileWarning, ScrollText,
  Youtube, Instagram, Twitter, Facebook, Video, Tags, HashIcon, MessageSquare, Smile, AtSign,
  Barcode, ImageIcon, FileUser, Receipt as InvoiceIcon, Building, Dices, CircleDot, Shuffle as RandomIcon, Dice1, Activity,
  CalendarDays, Mail, BookMarked, BookType, Bot, Navigation, Home, CreditCard, Lightbulb, Star
} from "lucide-react";

export type ToolCategory = 
  | "image" 
  | "seo" 
  | "text" 
  | "developer" 
  | "calculator" 
  | "converter" 
  | "security" 
  | "social" 
  | "misc";

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: any;
  slug: string;
}

export const categories: Record<ToolCategory, { name: string; icon: any; color: string }> = {
  image: { name: "Image Tools", icon: Image, color: "category-image" },
  seo: { name: "SEO Tools", icon: Search, color: "category-seo" },
  text: { name: "Text Tools", icon: Type, color: "category-text" },
  developer: { name: "Developer Tools", icon: Code, color: "category-dev" },
  calculator: { name: "Calculators", icon: Calculator, color: "category-math" },
  converter: { name: "Unit Converters", icon: RefreshCw, color: "category-unit" },
  security: { name: "Security Tools", icon: Lock, color: "category-security" },
  social: { name: "Social Media", icon: MessageSquare, color: "category-social" },
  misc: { name: "Miscellaneous", icon: Sparkles, color: "category-misc" },
};

export const tools: Tool[] = [
  // Image Tools (10)
  { id: "1", name: "Image to PNG", description: "Convert any image format to PNG", category: "image", icon: FileImage, slug: "image-to-png" },
  { id: "2", name: "Image to JPG", description: "Convert images to JPG format", category: "image", icon: FileImage, slug: "image-to-jpg" },
  { id: "3", name: "Image Resizer", description: "Resize images to any dimension", category: "image", icon: Maximize2, slug: "image-resizer" },
  { id: "4", name: "Image Compressor", description: "Compress images without quality loss", category: "image", icon: Archive, slug: "image-compressor" },
  { id: "5", name: "Image Cropper", description: "Crop images to perfect dimensions", category: "image", icon: Crop, slug: "image-cropper" },
  { id: "6", name: "Image to Base64", description: "Convert images to Base64 encoding", category: "image", icon: Code, slug: "image-to-base64" },
  { id: "7", name: "WebP to PNG", description: "Convert WebP images to PNG", category: "image", icon: FileType, slug: "webp-to-png" },
  { id: "8", name: "GIF Maker", description: "Create animated GIFs from images", category: "image", icon: Film, slug: "gif-maker" },
  { id: "9", name: "QR Code Generator", description: "Generate custom QR codes", category: "image", icon: QrCode, slug: "qr-code-generator" },
  { id: "10", name: "Screenshot to PDF", description: "Convert screenshots to PDF", category: "image", icon: FileDown, slug: "screenshot-to-pdf" },

  // SEO Tools (10)
  { id: "11", name: "Meta Tag Generator", description: "Generate SEO meta tags", category: "seo", icon: Tag, slug: "meta-tag-generator" },
  { id: "12", name: "Keyword Density", description: "Check keyword density in text", category: "seo", icon: Search, slug: "keyword-density" },
  { id: "13", name: "Sitemap Generator", description: "Generate XML sitemaps", category: "seo", icon: Map, slug: "sitemap-generator" },
  { id: "14", name: "Robots.txt Generator", description: "Create robots.txt files", category: "seo", icon: FileCode, slug: "robots-txt-generator" },
  { id: "15", name: "Google Index Checker", description: "Check if pages are indexed", category: "seo", icon: Globe, slug: "google-index-checker" },
  { id: "16", name: "Domain Authority", description: "Check domain authority score", category: "seo", icon: Gauge, slug: "domain-authority" },
  { id: "17", name: "Backlink Checker", description: "Analyze website backlinks", category: "seo", icon: Link2, slug: "backlink-checker" },
  { id: "18", name: "Page Speed Checker", description: "Test page loading speed", category: "seo", icon: Gauge, slug: "page-speed-checker" },
  { id: "19", name: "XML Sitemap Validator", description: "Validate XML sitemaps", category: "seo", icon: CheckCircle, slug: "sitemap-validator" },
  { id: "20", name: "Mobile-Friendly Test", description: "Test mobile responsiveness", category: "seo", icon: Smartphone, slug: "mobile-friendly-test" },

  // Text Tools (10)
  { id: "21", name: "Word Counter", description: "Count words in text", category: "text", icon: Hash, slug: "word-counter" },
  { id: "22", name: "Character Counter", description: "Count characters in text", category: "text", icon: Type, slug: "character-counter" },
  { id: "23", name: "Case Converter", description: "Convert text case", category: "text", icon: CaseSensitive, slug: "case-converter" },
  { id: "24", name: "Plagiarism Checker", description: "Check for duplicate content", category: "text", icon: Copy, slug: "plagiarism-checker" },
  { id: "25", name: "Grammar Checker", description: "Check grammar and spelling", category: "text", icon: BookOpen, slug: "grammar-checker" },
  { id: "26", name: "Text to Speech", description: "Convert text to audio", category: "text", icon: Volume2, slug: "text-to-speech" },
  { id: "27", name: "Speech to Text", description: "Convert speech to text", category: "text", icon: Mic, slug: "speech-to-text" },
  { id: "28", name: "URL Encoder/Decoder", description: "Encode and decode URLs", category: "text", icon: Link, slug: "url-encoder-decoder" },
  { id: "29", name: "Fancy Text Generator", description: "Create fancy text styles", category: "text", icon: Sparkles, slug: "fancy-text-generator" },
  { id: "30", name: "Lorem Ipsum Generator", description: "Generate placeholder text", category: "text", icon: Shuffle, slug: "lorem-ipsum-generator" },

  // Developer Tools (10)
  { id: "31", name: "JSON Formatter", description: "Format and validate JSON", category: "developer", icon: Braces, slug: "json-formatter" },
  { id: "32", name: "HTML to Markdown", description: "Convert HTML to Markdown", category: "developer", icon: FileText, slug: "html-to-markdown" },
  { id: "33", name: "CSS Minifier", description: "Minify CSS code", category: "developer", icon: Minimize2, slug: "css-minifier" },
  { id: "34", name: "JavaScript Minifier", description: "Minify JavaScript code", category: "developer", icon: Minimize2, slug: "js-minifier" },
  { id: "35", name: "SQL Formatter", description: "Format SQL queries", category: "developer", icon: Database, slug: "sql-formatter" },
  { id: "36", name: "HTACCESS Generator", description: "Generate .htaccess redirects", category: "developer", icon: RefreshCw, slug: "htaccess-generator" },
  { id: "37", name: "Markdown to HTML", description: "Convert Markdown to HTML", category: "developer", icon: FileText, slug: "markdown-to-html" },
  { id: "38", name: "Color Picker", description: "Pick and convert colors", category: "developer", icon: Palette, slug: "color-picker" },
  { id: "39", name: "Base64 Encoder", description: "Encode/decode Base64", category: "developer", icon: Binary, slug: "base64-encoder" },
  { id: "40", name: "IP Address Lookup", description: "Look up IP information", category: "developer", icon: Wifi, slug: "ip-lookup" },

  // Calculators (10)
  { id: "41", name: "Percentage Calculator", description: "Calculate percentages", category: "calculator", icon: Percent, slug: "percentage-calculator" },
  { id: "42", name: "Age Calculator", description: "Calculate exact age", category: "calculator", icon: Calendar, slug: "age-calculator" },
  { id: "43", name: "BMI Calculator", description: "Calculate Body Mass Index", category: "calculator", icon: Heart, slug: "bmi-calculator" },
  { id: "44", name: "Loan EMI Calculator", description: "Calculate loan EMI", category: "calculator", icon: DollarSign, slug: "loan-emi-calculator" },
  { id: "45", name: "Scientific Calculator", description: "Advanced calculations", category: "calculator", icon: Calculator, slug: "scientific-calculator" },
  { id: "46", name: "Discount Calculator", description: "Calculate discounts", category: "calculator", icon: Gift, slug: "discount-calculator" },
  { id: "47", name: "Currency Converter", description: "Convert currencies", category: "calculator", icon: Coins, slug: "currency-converter" },
  { id: "48", name: "Time Zone Converter", description: "Convert time zones", category: "calculator", icon: Clock, slug: "timezone-converter" },
  { id: "49", name: "Binary to Decimal", description: "Convert binary numbers", category: "calculator", icon: RotateCw, slug: "binary-decimal" },
  { id: "50", name: "Tip Calculator", description: "Calculate tips easily", category: "calculator", icon: Receipt, slug: "tip-calculator" },

  // Unit Converters (10)
  { id: "51", name: "Length Converter", description: "Convert length units", category: "converter", icon: Ruler, slug: "length-converter" },
  { id: "52", name: "Weight Converter", description: "Convert weight units", category: "converter", icon: Weight, slug: "weight-converter" },
  { id: "53", name: "Speed Converter", description: "Convert speed units", category: "converter", icon: Zap, slug: "speed-converter" },
  { id: "54", name: "Temperature Converter", description: "Convert temperature units", category: "converter", icon: Thermometer, slug: "temperature-converter" },
  { id: "55", name: "Volume Converter", description: "Convert volume units", category: "converter", icon: Droplet, slug: "volume-converter" },
  { id: "56", name: "Data Storage Converter", description: "Convert data units", category: "converter", icon: HardDrive, slug: "data-converter" },
  { id: "57", name: "Energy Converter", description: "Convert energy units", category: "converter", icon: Battery, slug: "energy-converter" },
  { id: "58", name: "Pressure Converter", description: "Convert pressure units", category: "converter", icon: PressureIcon, slug: "pressure-converter" },
  { id: "59", name: "Fuel Efficiency", description: "Convert fuel efficiency", category: "converter", icon: Fuel, slug: "fuel-efficiency" },
  { id: "60", name: "Angle Converter", description: "Convert angle units", category: "converter", icon: Triangle, slug: "angle-converter" },

  // Security Tools (10)
  { id: "61", name: "MD5 Hash Generator", description: "Generate MD5 hashes", category: "security", icon: Lock, slug: "md5-generator" },
  { id: "62", name: "SHA256 Generator", description: "Generate SHA256 hashes", category: "security", icon: Key, slug: "sha256-generator" },
  { id: "63", name: "Password Generator", description: "Generate secure passwords", category: "security", icon: KeyRound, slug: "password-generator" },
  { id: "64", name: "Random String Generator", description: "Generate random strings", category: "security", icon: Shuffle, slug: "random-string" },
  { id: "65", name: "URL Shortener", description: "Shorten long URLs", category: "security", icon: ExternalLink, slug: "url-shortener" },
  { id: "66", name: "IP Geolocation", description: "Find IP location", category: "security", icon: MapPin, slug: "ip-geolocation" },
  { id: "67", name: "SSL Checker", description: "Check SSL certificates", category: "security", icon: Shield, slug: "ssl-checker" },
  { id: "68", name: "Whois Lookup", description: "Domain WHOIS lookup", category: "security", icon: Server, slug: "whois-lookup" },
  { id: "69", name: "HTTP Headers", description: "Check HTTP headers", category: "security", icon: FileWarning, slug: "http-headers" },
  { id: "70", name: "Privacy Policy Generator", description: "Generate privacy policies", category: "security", icon: ScrollText, slug: "privacy-policy" },

  // Social Media Tools (10)
  { id: "71", name: "YouTube Thumbnail", description: "Download YouTube thumbnails", category: "social", icon: Youtube, slug: "youtube-thumbnail" },
  { id: "72", name: "Instagram Downloader", description: "Download Instagram photos", category: "social", icon: Instagram, slug: "instagram-downloader" },
  { id: "73", name: "Twitter Downloader", description: "Download Twitter videos", category: "social", icon: Twitter, slug: "twitter-downloader" },
  { id: "74", name: "Facebook Downloader", description: "Download Facebook videos", category: "social", icon: Facebook, slug: "facebook-downloader" },
  { id: "75", name: "TikTok Downloader", description: "Download TikTok videos", category: "social", icon: Video, slug: "tiktok-downloader" },
  { id: "76", name: "YouTube Tags", description: "Extract YouTube tags", category: "social", icon: Tags, slug: "youtube-tags" },
  { id: "77", name: "Hashtag Generator", description: "Generate hashtags", category: "social", icon: HashIcon, slug: "hashtag-generator" },
  { id: "78", name: "Post Generator", description: "Generate social posts", category: "social", icon: MessageSquare, slug: "post-generator" },
  { id: "79", name: "Emoji Keyboard", description: "Copy emojis easily", category: "social", icon: Smile, slug: "emoji-keyboard" },
  { id: "80", name: "Twitter Counter", description: "Count Twitter characters", category: "social", icon: AtSign, slug: "twitter-counter" },

  // Miscellaneous Tools (20)
  { id: "81", name: "Barcode Generator", description: "Generate barcodes", category: "misc", icon: Barcode, slug: "barcode-generator" },
  { id: "82", name: "Meme Generator", description: "Create custom memes", category: "misc", icon: ImageIcon, slug: "meme-generator" },
  { id: "83", name: "Resume Builder", description: "Build professional resumes", category: "misc", icon: FileUser, slug: "resume-builder" },
  { id: "84", name: "Invoice Generator", description: "Create invoices", category: "misc", icon: InvoiceIcon, slug: "invoice-generator" },
  { id: "85", name: "Business Name Generator", description: "Generate business names", category: "misc", icon: Building, slug: "business-name" },
  { id: "86", name: "Lottery Generator", description: "Generate lottery numbers", category: "misc", icon: Dices, slug: "lottery-generator" },
  { id: "87", name: "Flip a Coin", description: "Virtual coin flipper", category: "misc", icon: CircleDot, slug: "coin-flip" },
  { id: "88", name: "Random Number", description: "Generate random numbers", category: "misc", icon: RandomIcon, slug: "random-number" },
  { id: "89", name: "Dice Roller", description: "Roll virtual dice", category: "misc", icon: Dice1, slug: "dice-roller" },
  { id: "90", name: "Internet Speed Test", description: "Test internet speed", category: "misc", icon: Activity, slug: "speed-test" },
  { id: "91", name: "Daily Planner", description: "Create daily plans", category: "misc", icon: CalendarDays, slug: "daily-planner" },
  { id: "92", name: "Wedding Invitation", description: "Create invitations", category: "misc", icon: Mail, slug: "wedding-invitation" },
  { id: "93", name: "Story Plot Generator", description: "Generate story plots", category: "misc", icon: BookMarked, slug: "story-generator" },
  { id: "94", name: "E-book Creator", description: "Create simple e-books", category: "misc", icon: BookType, slug: "ebook-creator" },
  { id: "95", name: "AI Chatbot Demo", description: "Test AI chatbot", category: "misc", icon: Bot, slug: "ai-chatbot" },
  { id: "96", name: "IP Tracker", description: "Track IP addresses", category: "misc", icon: Navigation, slug: "ip-tracker" },
  { id: "97", name: "Fake Address", description: "Generate fake addresses", category: "misc", icon: Home, slug: "fake-address" },
  { id: "98", name: "Electric Bill Calculator", description: "Calculate electric bills", category: "misc", icon: CreditCard, slug: "electric-bill" },
  { id: "99", name: "Leap Year Checker", description: "Check leap years", category: "misc", icon: Lightbulb, slug: "leap-year" },
  { id: "100", name: "Numerology Calculator", description: "Name numerology", category: "misc", icon: Star, slug: "numerology" },
];

export const getToolsByCategory = (category: ToolCategory): Tool[] => {
  return tools.filter(tool => tool.category === category);
};

export const searchTools = (query: string): Tool[] => {
  const lowerQuery = query.toLowerCase();
  return tools.filter(
    tool => 
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery)
  );
};
