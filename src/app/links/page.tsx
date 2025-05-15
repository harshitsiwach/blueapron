import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface LinkItem {
  name: string;
  url: string;
}

const LinksPage: React.FC = () => {
  const links: LinkItem[] = [
    { name: 'Order Online', url: 'https://example.com/order' },
    { name: 'View Menu', url: 'https://example.com/menu' },
    { name: 'Make a Reservation', url: 'https://example.com/reserve' },
    { name: 'Directions', url: 'https://example.com/directions' },
  ];

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle>Our Links</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          {links.map((link) => (
            <Button key={link.name} asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default LinksPage;