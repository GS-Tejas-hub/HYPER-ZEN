
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Code2, Gamepad2, Users, Info, Mail } from 'lucide-react'; // Gamepad2 can be removed if not used elsewhere
import { useState, useEffect } from 'react';
import { Logo } from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

type NavItem = {
  href: string;
  label: string;
  icon?: React.ElementType; // Icon is now optional
};

const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: Code2 },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/portfolio', label: 'Portfolio' }, // Icon removed for Portfolio
  { href: '/team', label: 'Team', icon: Users },
  { href: '/contact', label: 'Contact Us', icon: Mail },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild
              className={cn(
                "text-foreground hover:bg-accent/10 hover:text-accent transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium",
                pathname === item.href ? 'text-primary font-semibold border-b-2 border-primary' : ''
              )}
            >
              <Link href={item.href}>
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex justify-between items-center mb-8">
                <Logo />
                <SheetClose asChild>
                   <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <SheetClose key={item.label} asChild>
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "flex items-center rounded-md px-3 py-2 text-base font-medium hover:bg-accent/10 hover:text-accent transition-colors duration-200",
                        pathname === item.href ? 'bg-primary/10 text-primary' : 'text-foreground'
                      )}
                    >
                      {item.icon && <item.icon className="mr-3 h-5 w-5" />}
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
