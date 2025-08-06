import Link from 'next/link';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Header = () => {
  return (
    <header className="bg-background/90 backdrop-blur-md sticky top-0 z-40 w-full border-b border-border/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <Logo />
          <div className="flex items-center space-x-2 sm:space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/links">Socials/Links</Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Coming soon</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button asChild variant="default" size="sm" className="bg-zomato hover:bg-zomato/90">
              <Link href="https://link.zomato.com/xqzv/rshare?id=113182333305630f0" target="_blank">Order from Zomato</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
