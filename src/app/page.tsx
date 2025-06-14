
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Section } from '@/components/Section';
import { Code2, Gamepad2, Users, Sparkles, Target, Mail, AppWindow } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Crafting responsive, high-performance websites and web applications tailored to your business needs. From sleek portfolios to complex e-commerce platforms.",
    link: "/about", // Changed from /portfolio#web
    dataAiHint: "web development code"
  },
  {
    icon: AppWindow,
    title: "App Development",
    description: "Building intuitive mobile and desktop applications for seamless user experiences. From native apps to cross-platform solutions.",
    link: "/about", // Changed from /portfolio
    dataAiHint: "mobile app interface"
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Building immersive and engaging games across multiple platforms. We bring your virtual worlds to life with cutting-edge technology and creative design.",
    link: "/about", // Changed from /portfolio#game
    dataAiHint: "game development controller"
  }
];

const whyChooseUs = [
  {
    icon: Sparkles,
    title: "Innovative Solutions",
    description: "We leverage the latest technologies to deliver creative and future-proof solutions."
  },
  {
    icon: Target,
    title: "Client-Centric Approach",
    description: "Your vision is our priority. We collaborate closely to ensure your goals are met."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our passionate developers and designers are masters of their craft."
  }
]

export default function HomePage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-background to-muted/30 pt-24 md:pt-32 lg:pt-40 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Elevate Your <span className="text-primary">Digital Presence</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-2xl">
              HyperZen is your expert partner in crafting cutting-edge web & app experiences and elevating your digital presence. We transform ideas into reality.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="shadow-lg hover:shadow-primary/50 transition-shadow">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              {/* "Our Work" button removed */}
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/homepageimage(1).png"
              alt="Digital innovation showcase"
              data-ai-hint="abstract technology"
              fill
              style={{objectFit: 'cover'}}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </div>
        </div>
      </Section>

      <Section title="Our Expertise" subtitle="What We Do">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <CardDescription className="text-base text-muted-foreground mb-6">{service.description}</CardDescription>
                 <Button variant="link" asChild className="text-primary hover:text-accent">
                  <Link href={service.link}>Learn More <span aria-hidden="true">&rarr;</span></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section title="Why Choose HyperZen?" subtitle="Our Commitment" className="bg-muted/30">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => (
             <Card key={item.title} className="text-center border-0 shadow-lg bg-card">
               <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-muted-foreground">{item.description}</p>
               </CardContent>
             </Card>
          ))}
        </div>
      </Section>

      <Section title="Ready to start your project?" subtitle="Let's Collaborate">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you have a groundbreaking app idea, a game concept, or need to elevate your online presence, our team is ready to help you succeed.
          </p>
          <Button size="lg" asChild className="shadow-lg hover:shadow-primary/50 transition-shadow">
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" /> Contact Us Today
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
