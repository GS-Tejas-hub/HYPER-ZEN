import Link from 'next/link';
import type { SVGProps } from 'react';

// Minimalist gear icon variant as an inline SVG
const GearIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m4.93 19.07 1.41-1.41" />
    <path d="m17.66 6.34 1.41-1.41" />
  </svg>
);


export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <GearIcon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
      <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
        DevForge <span className="text-primary group-hover:text-accent transition-colors duration-300">Studio</span>
      </span>
    </Link>
  );
}
