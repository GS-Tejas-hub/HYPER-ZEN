
import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      {/* 
        Ensure your logo image (e.g., logo.png) is in the 'public' folder.
        Adjust src, alt, width, and height attributes as needed.
      */}
      <Image
        src="/logo.png" // Defaulting to logo.png, ensure this file exists in /public
        alt="HyperZen Logo"
        width={40} // Example width, adjust to your logo's aspect ratio
        height={40} // Example height, adjust to your logo's aspect ratio
        className="group-hover:opacity-90 transition-opacity duration-300"
      />
      {/* 
        If your logo image already includes the text "HyperZen", you can remove the span below.
        If your logo is just a symbol, you might want to keep the text.
      */}
      {/*
      <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
        Hyper<span className="text-primary group-hover:text-accent transition-colors duration-300">Zen</span>
      </span>
      */}
    </Link>
  );
}
