import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Changed to import directly
import './globals.css';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({ // Use Geist directly
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({ // Use Geist_Mono directly
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DevForge Studio - Web & Game Development Experts',
  description: 'DevForge Studio specializes in innovative web development and immersive game development. Let us forge your digital future.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
