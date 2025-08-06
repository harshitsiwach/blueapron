import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, FileText } from 'lucide-react';

const links = [
  {
    name: 'Order from Zomato',
    url: 'https://link.zomato.com/xqzv/rshare?id=113182333305630f0',
    icon: <Link className="h-5 w-5 mr-3" />
  },
  {
    name: 'View Full Menu',
    url: '/The Blue Apron Menu Card.pdf',
    icon: <FileText className="h-5 w-5 mr-3" />
  },
];

export default function LinksPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex justify-center">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-heading">Find Us Online</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4 p-6">
          {links.map((link) => (
            <Button key={link.name} asChild size="lg" variant="outline">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                {link.icon}
                {link.name}
              </a>
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}