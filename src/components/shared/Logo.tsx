import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      {/* 
        Please ensure your logo image (e.g., logo.png) is in the 'public' folder.
        If your logo file is named differently or is not a PNG, 
        update the src, alt, width, and height attributes below accordingly.
      */}
      <Image
        src="/logo.png" // Replace with your logo's path if different, e.g., /my-logo.svg
        alt="HyperZen Logo"
        width={32} // Corresponds to h-8 w-8 (8 * 4px = 32px)
        height={32}
        className="group-hover:opacity-80 transition-opacity duration-300" // Example hover effect
      />
      <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
        Hyper<span className="text-primary group-hover:text-accent transition-colors duration-300">Zen</span>
      </span>
    </Link>
  );
}
