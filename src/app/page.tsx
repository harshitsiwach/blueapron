import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { UtensilsCrossed, Phone, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative">
        <Image
          src="https://placehold.co/1600x700.png"
          alt="Restaurant ambiance"
          width={1600}
          height={700}
          className="object-cover w-full h-[calc(100vh-5rem)] max-h-[700px]"
          priority
          data-ai-hint="restaurant ambiance elegant"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white shadow-xl mb-4">
            The Blue Apron
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl shadow-md">
            Savor authentic flavors crafted with passion, served in a warm and inviting atmosphere.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" variant="default">
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="/order">Order Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">Welcome to The Blue Apron</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          At The Blue Apron, we believe that dining is more than just eating; it's an experience. 
          Our chefs meticulously prepare each dish using the freshest local ingredients, bringing you a delightful fusion of traditional recipes and modern culinary techniques. 
          Join us for a memorable meal that will tantalize your taste buds.
        </p>
      </section>
      
      {/* Featured Section - Example */}
       <section className="w-full bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">Our Signature Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Image src="https://placehold.co/600x400.png" alt="Fresh Ingredients" data-ai-hint="fresh vegetables spices" width={600} height={400} className="rounded-t-lg object-cover aspect-video"/>
              </CardHeader>
              <CardContent className="text-center p-6">
                <CardTitle className="text-xl mb-2">Finest Ingredients</CardTitle>
                <CardDescription>We source the freshest local produce and high-quality ingredients for every dish.</CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Image src="https://placehold.co/600x400.png" alt="Expert Chefs" data-ai-hint="chef cooking kitchen" width={600} height={400} className="rounded-t-lg object-cover aspect-video"/>
              </CardHeader>
              <CardContent className="text-center p-6">
                <CardTitle className="text-xl mb-2">Skilled Artistry</CardTitle>
                <CardDescription>Our experienced chefs pour their passion and expertise into creating culinary masterpieces.</CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Image src="https://placehold.co/600x400.png" alt="Cozy Ambiance" data-ai-hint="cozy restaurant interior" width={600} height={400} className="rounded-t-lg object-cover aspect-video"/>
              </CardHeader>
              <CardContent className="text-center p-6">
                <CardTitle className="text-xl mb-2">Warm Ambiance</CardTitle>
                <CardDescription>Enjoy your meal in a comfortable and inviting setting, perfect for any occasion.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">Visit Us or Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-2"><MapPin className="mr-2 h-5 w-5 text-primary" />Address</h3>
              <p className="text-muted-foreground">123 Culinary Street, Foodville, Flavor Town, India 400001</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-2"><Phone className="mr-2 h-5 w-5 text-primary" />Contact Us</h3>
              <p className="text-muted-foreground">Email: info@theblueapron.in</p>
              <p className="text-muted-foreground">Phone: +91 98765 43210</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-2"><UtensilsCrossed className="mr-2 h-5 w-5 text-primary" />Hours of Operation</h3>
              <p className="text-muted-foreground">Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p className="text-muted-foreground">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>
          </div>
          <div>
            {/* Placeholder for a map or an image of the restaurant exterior */}
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Restaurant Location" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg object-cover"
              data-ai-hint="restaurant exterior map" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
