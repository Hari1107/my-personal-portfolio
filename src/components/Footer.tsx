const Footer = () => {
  return (
    <footer className="py-8 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Hariharan K. Built with React, TypeScript & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
