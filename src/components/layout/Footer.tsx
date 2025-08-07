const Footer = () => {
  return (
    <footer className="bg-muted/70 border-t border-border/60 py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} The Blue Apron. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/80 mt-1">
          Chandigarh | Mohali | Panchkula | Phone: +91 8284870918
        </p>
      </div>
    </footer>
  );
};

export default Footer;
