import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="text-3xl font-bold font-heading text-foreground hover:text-primary transition-colors">
      The Blue Apron
    </Link>
  );
};

export default Logo;
