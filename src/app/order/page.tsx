import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Phone } from 'lucide-react';

export default function OrderPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
      <ShoppingCart className="mx-auto h-16 w-16 text-primary mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Order Your Meal</h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
        Craving our delicious food? You can place your order online for pickup or delivery, or give us a call.
      </p>
      
      <div className="space-y-4 md:space-y-0 md:space-x-6">
        <Button size="lg" variant="default" disabled>
          <ShoppingCart className="mr-2 h-5 w-5" /> Order Online (Coming Soon)
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="tel:+919876543210">
            <Phone className="mr-2 h-5 w-5" /> Call to Order
          </a>
        </Button>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <h2 className="text-2xl font-semibold text-foreground mb-4">How Ordering Works</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Our online ordering system will be available soon. In the meantime, please call us directly at <strong>+91 98765 43210</strong> to place your order. We appreciate your patience!
        </p>
      </div>
    </div>
  );
}
