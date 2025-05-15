import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Utensils, Soup, Beef, CakeSlice, GlassWater, Leaf } from 'lucide-react'; // Added Leaf
import type { LucideIcon } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  imageHint: string;
}

interface MenuCategory {
  name: string;
  icon: LucideIcon;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: 'Appetizers',
    icon: Soup,
    items: [
      { name: 'Paneer Tikka', description: 'Marinated paneer cubes grilled to perfection.', price: '₹350', imageHint: 'paneer tikka indian' },
      { name: 'Vegetable Spring Rolls', description: 'Crispy rolls filled with fresh vegetables.', price: '₹280', imageHint: 'spring rolls appetizer' },
      { name: 'Mushroom Galouti', description: 'Soft, melt-in-your-mouth mushroom patties.', price: '₹320', imageHint: 'mushroom patty appetizer' },
    ],
  },
  {
    name: 'Main Courses (Veg)',
    icon: Leaf,
    items: [
      { name: 'Dal Makhani', description: 'Creamy black lentils simmered overnight with spices.', price: '₹450', imageHint: 'dal makhani indian' },
      { name: 'Palak Paneer', description: 'Fresh spinach puree with soft paneer cubes.', price: '₹420', imageHint: 'palak paneer indian' },
      { name: 'Vegetable Biryani', description: 'Aromatic basmati rice cooked with mixed vegetables and spices.', price: '₹480', imageHint: 'vegetable biryani indian' },
    ],
  },
  {
    name: 'Main Courses (Non-Veg)',
    icon: Beef, // General icon for non-veg
    items: [
      { name: 'Butter Chicken', description: 'Tender chicken in a rich tomato and butter gravy.', price: '₹550', imageHint: 'butter chicken indian' },
      { name: 'Rogan Josh', description: 'Aromatic lamb curry from Kashmir.', price: '₹620', imageHint: 'rogan josh indian' },
      { name: 'Fish Tikka Masala', description: 'Grilled fish tikka in a spiced creamy sauce.', price: '₹580', imageHint: 'fish tikka indian' },
    ],
  },
  {
    name: 'Desserts',
    icon: CakeSlice,
    items: [
      { name: 'Gulab Jamun', description: 'Soft, deep-fried milk solids soaked in sugar syrup.', price: '₹200', imageHint: 'gulab jamun indian' },
      { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a gooey molten center.', price: '₹250', imageHint: 'chocolate lava cake' },
      { name: 'Kulfi Falooda', description: 'Traditional Indian ice cream served with vermicelli and rose syrup.', price: '₹220', imageHint: 'kulfi falooda indian' },
    ],
  },
  {
    name: 'Beverages',
    icon: GlassWater,
    items: [
      { name: 'Masala Chai', description: 'Spiced Indian tea.', price: '₹100', imageHint: 'masala chai tea' },
      { name: 'Fresh Lime Soda', description: 'Refreshing sweet or salted lime soda.', price: '₹120', imageHint: 'lime soda drink' },
      { name: 'Lassi (Sweet/Salted)', description: 'Traditional yogurt-based drink.', price: '₹150', imageHint: 'lassi drink indian' },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <Utensils className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Exquisite Menu</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Discover a variety of dishes crafted with the freshest ingredients and authentic recipes.
        </p>
      </header>

      {menuData.map((category) => (
        <section key={category.name} className="mb-12 md:mb-16">
          <div className="flex items-center mb-8">
            <category.icon className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">{category.name}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {category.items.map((item) => (
              <Card key={item.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <Image
                  src={`https://placehold.co/600x400.png`}
                  alt={item.name}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                  data-ai-hint={item.imageHint}
                />
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg pt-1">{item.price}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
