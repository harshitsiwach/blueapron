import Link from 'next/link';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className="flex items-center">
      <img 
        src="/The Blue Apron.svg" 
        alt="The Blue Apron Logo" 
        className={className} 
      />
    </Link>
  );
};

export default Logo;