import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { UtensilsCrossed, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/Logo';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Logo className="w-full h-auto max-w-md" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 font-heading">
              The Blue Apron
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Savor authentic flavors crafted with passion, served in a warm and inviting atmosphere.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" variant="default">
                <a href="/The Blue Apron Menu Card.pdf" target="_blank" rel="noopener noreferrer">View Our Menu</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/order">Order Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary font-heading">Welcome to The Blue Apron</h2>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          At The Blue Apron, we believe that dining is more than just eating; it&apos;s an experience. 
          Our chefs meticulously prepare each dish using the freshest local ingredients, bringing you a delightful fusion of traditional recipes and modern culinary techniques. 
          Join us for a memorable meal that will tantalize your taste buds.
        </p>
      </section>
      
      {/* Featured Section */}
       <section className="w-full bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-primary font-heading">Our Signature Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <CardTitle className="text-xl mb-2 text-primary">Finest Ingredients</CardTitle>
              <CardDescription>We source the freshest local produce and high-quality ingredients for every dish.</CardDescription>
            </div>
            <div className="p-6">
              <CardTitle className="text-xl mb-2 text-primary">Skilled Artistry</CardTitle>
              <CardDescription>Our experienced chefs pour their passion and expertise into creating culinary masterpieces.</CardDescription>
            </div>
            <div className="p-6">
              <CardTitle className="text-xl mb-2 text-primary">Warm Ambiance</CardTitle>
              <CardDescription>Enjoy your meal in a comfortable and inviting setting, perfect for any occasion.</CardDescription>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-primary font-heading">Visit Us or Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary">Address</h3>
                <p className="text-muted-foreground">123 Culinary Street, Foodville, Flavor Town, India 400001</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary">Contact Us</h3>
                <p className="text-muted-foreground">Email: info@theblueapron.in</p>
                <p className="text-muted-foreground">Phone: +91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <UtensilsCrossed className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary">Hours of Operation</h3>
                <p className="text-muted-foreground">Monday - Friday: 11:00 AM - 10:00 PM</p>
                <p className="text-muted-foreground">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
          <div className="h-64 md:h-full w-full bg-secondary/40 rounded-lg flex items-center justify-center">
             <p className="text-muted-foreground">Map placeholder</p>
          </div>
        </div>
      </section>
    </div>
  );
}
