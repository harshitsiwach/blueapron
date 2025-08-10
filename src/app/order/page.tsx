import { Button } from '@/components/ui/button';
import { ShoppingCart, Phone } from 'lucide-react';

export default function OrderPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
      <ShoppingCart className="mx-auto h-16 w-16 text-primary mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-foreground font-sans mb-4">Order Your Meal</h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
        Craving our delicious food? You can place your order for delivery through Zomato or give us a call for pickup.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="lg" className="bg-zomato hover:bg-zomato/90">
          <a href="https://link.zomato.com/xqzv/rshare?id=113182333305630f0" target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="mr-2 h-5 w-5" /> Order from Zomato
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="tel:+919876543210">
            <Phone className="mr-2 h-5 w-5" /> Call for Pickup
          </a>
        </Button>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <h2 className="text-2xl font-semibold text-foreground font-sans mb-4">How to Order</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          For delivery, please use the Zomato button above. For takeaway orders, feel free to call us directly at <strong>+91 98765 43210</strong>.
        </p>
      </div>
    </div>
  );
}
