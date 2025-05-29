
import { Logo } from '@/components/shared/Logo';
import { Twitter, Instagram } from 'lucide-react'; // Removed Linkedin

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Elevating digital experiences with clarity and purpose. Experts in web solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* LinkedIn icon and link removed */}
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/hyperzen.dev_official?utm_source=qr&igsh=MTNvNG05d2EzMXU1cw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              hyperzen360@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HyperZen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
