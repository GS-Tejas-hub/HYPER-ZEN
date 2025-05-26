
import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      {/* 
        Ensure your logo image (hyperzen-logo.jpg) is in the 'public' folder.
      */}
      <Image
        src="/hyperzen-logo.jpg" // Using the new logo image
        alt="HyperZen Logo"
        width={120} // Adjusted width for the new logo, can be fine-tuned
        height={40} // Adjusted height for the new logo, can be fine-tuned
        className="group-hover:opacity-90 transition-opacity duration-300"
        style={{ objectFit: 'contain' }} // Ensure the logo scales nicely
      />
      {/* The text "HyperZen" is part of the image, so we can remove the span below if preferred,
          or keep it if the image is just the "HZ" symbol.
          For now, I'll assume the provided image is the complete logo including the "HYPERZEN" text.
      */}
      {/* 
      <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
        Hyper<span className="text-primary group-hover:text-accent transition-colors duration-300">Zen</span>
      </span>
      */}
    </Link>
  );
}
