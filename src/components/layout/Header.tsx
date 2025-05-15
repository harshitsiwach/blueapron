import Link from 'next/link';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
  <Link 
    href={href} 
    className={`text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium ${className || ''}`}
  >
    {children}
  </Link>
);

const Header = () => {
  return (
    <header className="bg-background/90 backdrop-blur-md sticky top-0 z-40 w-full border-b border-border/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <Logo />
          <div className="flex items-center space-x-2 sm:space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/menu">Menu</NavLink>
            <Button asChild variant="default" size="sm">
              <Link href="/links">Socials/Links</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
