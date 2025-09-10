import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCw, Quote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuoteData {
  text: string;
  author: string;
}

const QuoteCard = () => {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Sample quotes for demonstration (will be replaced with database)
  const sampleQuotes: QuoteData[] = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "Life is what happens to you while you're busy making other plans.",
      author: "John Lennon"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle"
    }
  ];

  const fetchRandomQuote = () => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * sampleQuotes.length);
      const randomQuote = sampleQuotes[randomIndex];
      setQuote(randomQuote);
      setLoading(false);
      
      toast({
        title: "New quote loaded!",
        description: "Here's some inspiration for you.",
      });
    }, 800);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Quote className="w-8 h-8 text-quote-primary" />
          <h1 className="text-4xl font-bold quote-text">Daily Inspiration</h1>
        </div>
        <p className="text-quote-muted text-lg">
          Discover wisdom and motivation with every click
        </p>
      </div>

      <Card className="quote-card p-8 mb-8 border-border/50">
        {quote ? (
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-6 text-foreground">
              "{quote.text}"
            </blockquote>
            <cite className="text-quote-accent text-lg font-medium">
              — {quote.author}
            </cite>
          </div>
        ) : (
          <div className="text-center py-12">
            <Quote className="w-16 h-16 text-quote-muted mx-auto mb-4 opacity-50" />
            <p className="text-quote-muted text-xl">
              Click the button below to get your first inspiring quote
            </p>
          </div>
        )}
      </Card>

      <div className="text-center">
        <Button
          onClick={fetchRandomQuote}
          disabled={loading}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 disabled:scale-100"
        >
          {loading ? (
            <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
          ) : (
            <Quote className="w-5 h-5 mr-2" />
          )}
          {loading ? "Loading..." : quote ? "Get Another Quote" : "Get Your First Quote"}
        </Button>
      </div>

      <div className="mt-12 text-center">
        <p className="text-quote-muted text-sm">
          💡 <strong>Coming Soon:</strong> Database integration for unlimited quotes
        </p>
      </div>
    </div>
  );
};

export default QuoteCard;