import { Utensils } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const menuData = {
  "Appetizers (Veg)": [
    { name: "Dahi kebab", price: "490" },
    { name: "Paneer Tikka Shashlik", price: "480" },
    { name: "Jalapeno Paneer Tikka", price: "480" },
    { name: "Malai Paneer Tikka", price: "480" },
    { name: "Achari Paneer Tikka", price: "480" },
    { name: "Lehsuni Paneer Tikka", price: "480" },
    { name: "Tandoori Malai Broccoli", price: "450" },
    { name: "Mushroom Duplex", price: "460" },
    { name: "Tandoori Mushroom Tikka", price: "460" },
  ],
  "Appetizers (Non-Veg)": [
    { name: "Tandoori Chicken", price: "490" },
    { name: "Bhatti Ka Murgh", price: "550" },
    { name: "Chicken Seekh", price: "530" },
    { name: "Gilafi Chicken Seekh Kebab", price: "530" },
    { name: "Classic Chicken Tikka", price: "520" },
    { name: "Chicken Malai Tikka", price: "530" },
    { name: "Lemon Chicken Tikka", price: "530" },
    { name: "Jalapeno Chicken Tikka", price: "530" },
    { name: "Achari Chicken Tikka", price: "530" },
    { name: "Lehsuni Chicken Tikka", price: "530" },
    { name: "Kali Mirch Chicken Tikka", price: "530" },
    { name: "Dohra Kebab", price: "580" },
    { name: "Galouti Kebab", price: "580" },
    { name: "Mughlai Kalmi Kebab", price: "530" },
  ],
  "Main Course (Veg)": [
    { name: "Shahi Paneer", price: "520" },
    { name: "Kadhai Paneer", price: "520" },
    { name: "Paneer Makhani", price: "530" },
    { name: "Paneer Tikka Butter Masala", price: "530" },
    { name: "Paneer Lababdar", price: "530" },
    { name: "Paneer Do Pyaaza", price: "520" },
    { name: "Palak Paneer", price: "520" },
    { name: "Mushroom Do Pyaaza", price: "490" },
    { name: "Matar Mushroom", price: "490" },
    { name: "Soya Tikka Butter Masala", price: "420" },
    { name: "Kadhai Chaap Gravy", price: "420" },
    { name: "Tawa Chaap Gravy", price: "420" },
  ],
  "Main Course (Non-Veg)": [
      { name: "Butter Chicken", price: "630" },
      { name: "Kadhai Chicken", price: "630" },
      { name: "Rara Chicken", price: "630" },
      { name: "Murgh Lababdar", price: "630" },
      { name: "Awadhi Chicken Korma", price: "630" },
      { name: "Murgh Tikka Butter Masala", price: "630" },
      { name: "Chef's Signature Chicken Dish", price: "650" },
      { name: "Dhaba Style Teekha Murgh", price: "590" },
      { name: "Lahori Chicken", price: "630" },
      { name: "Chicken Handi", price: "650" },
      { name: "Mutton Rogan Josh", price: "730" },
      { name: "Rara Mutton", price: "730" },
      { name: "The Blue Apron Signature Mutton Kofta", price: "760" },
      { name: "Awadhi Mutton Korma", price: "730" },
      { name: "Fish Curry", price: "660" },
  ]
};

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <Utensils className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground font-sans">Our Exquisite Menu</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Discover a variety of dishes crafted with the freshest ingredients and authentic recipes.
        </p>
      </header>

      <Accordion type="multiple" className="w-full max-w-4xl mx-auto">
        {Object.entries(menuData).map(([category, items]) => (
          <AccordionItem key={category} value={category}>
            <AccordionTrigger className="text-2xl font-semibold font-sans hover:no-underline">
              {category}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4">
                {items.map((item) => (
                  <div key={item.name} className="flex justify-between items-baseline">
                    <p className="text-base text-foreground">{item.name}</p>
                    <p className="text-base text-muted-foreground font-semibold">₹{item.price}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
