
import Image from 'next/image';
import { Section } from '@/components/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Gem, Users, Handshake, Lightbulb, Code2, Gamepad2, AppWindow } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About HyperZen | Our Mission, Values, and Expertise',
  description: 'Learn about HyperZen, our mission to craft exceptional digital solutions, our core values, and the expertise that drives our web, app, and game development projects.',
};

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We continuously explore new technologies and creative approaches to deliver cutting-edge solutions." },
  { icon: Handshake, title: "Collaboration", description: "We believe in strong partnerships with our clients, working together to achieve shared goals." },
  { icon: Gem, title: "Quality", description: "Excellence is non-negotiable. We are committed to delivering high-quality, polished products." },
  { icon: Users, title: "Integrity", description: "Transparency and honesty are the cornerstones of all our interactions and projects." },
];

export default function AboutPage() {
  return (
    <>
      <Section title="About HyperZen" subtitle="Who We Are">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Journey</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded by a group of passionate developers and designers, HyperZen was born from a shared vision: to build digital products that are not only functional but also beautiful and engaging. We saw a need for a development partner that truly understands the intricacies of crafting exceptional digital solutions, and can seamlessly blend technical prowess with creative flair.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we are a thriving studio dedicated to helping businesses and creators bring their ambitious ideas to life. We pride ourselves on our commitment to quality, innovation, and client satisfaction in web, app, and game development.
            </p>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/500x500.png" 
              alt="HyperZen team collaborating around a large monitor displaying a project dashboard"
              data-ai-hint="team meeting project"
              fill
              style={{objectFit: 'cover'}}
              className="transform hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section title="Our Mission" subtitle="Purpose-Driven Development" className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <Target className="w-16 h-16 text-primary mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            "To empower our clients by crafting innovative and high-quality digital solutions that drive growth, engagement, and success in an ever-evolving technological landscape."
          </p>
        </div>
      </Section>

      <Section title="Core Values" subtitle="The Principles We Live By">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(value => (
            <Card key={value.title} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Our Expertise" subtitle="Masters of the Craft" className="bg-muted/30">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
              <Code2 className="w-8 h-8 text-primary mr-3" /> Web Development
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We specialize in creating dynamic, responsive, and scalable web solutions. Our expertise spans front-end technologies like React and Next.js, back-end development, and database management. We build everything from custom business applications to engaging e-commerce platforms.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
              <AppWindow className="w-8 h-8 text-primary mr-3" /> App Development
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We create engaging and high-performance mobile and desktop applications. From native iOS and Android apps to cross-platform solutions with React Native or Flutter, we transform your app ideas into functional and user-friendly products.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
              <Gamepad2 className="w-8 h-8 text-primary mr-3" /> Game Development
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our game development team is passionate about creating immersive and entertaining experiences. We work with industry-standard engines like Unity and Unreal Engine to develop games for PC, console, and mobile. From 2D platformers to complex 3D simulations.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
