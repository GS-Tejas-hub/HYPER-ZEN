import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, ExternalLink, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Dummy data for case studies - in a real app, this would come from a CMS or database
const caseStudiesData: { [slug: string]: CaseStudy } = {
  'odyssey-online': {
    slug: 'odyssey-online',
    title: 'Odyssey Online: Revolutionizing E-Learning',
    subtitle: 'A Deep Dive into a Modern Learning Platform',
    imageUrl: 'https://placehold.co/1200x600.png',
    dataAiHint: 'elearning platform dashboard',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Supabase', 'Tailwind CSS', 'UX/UI'],
    challenge: 'The client needed a scalable and engaging e-learning platform to replace their outdated system. Key requirements included interactive course content, user progress tracking, and a robust admin panel for content management.',
    solution: 'We developed Odyssey Online using Next.js for optimal performance and SEO, leveraging Supabase for its real-time database and authentication. A custom-built CMS allows for easy course creation and management. The UI was designed for intuitive navigation and a pleasant learning experience.',
    results: [
      '40% increase in user engagement within 3 months.',
      'Reduced content update time by 60% for admins.',
      'Successfully scaled to handle 10,000+ concurrent users.',
      'Positive feedback on UI/UX from 95% of beta testers.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    liveUrl: '#',
  },
  'pixel-raiders': {
    slug: 'pixel-raiders',
    title: 'Pixel Raiders Arena: Crafting a Retro Multiplayer Hit',
    subtitle: 'The Making of an Addictive Arcade Experience',
    imageUrl: 'https://placehold.co/1200x600.png',
    dataAiHint: 'pixel art game battle',
    category: 'Game Development',
    tags: ['Unity', 'C#', 'Multiplayer', 'Photon Engine', 'Pixel Art'],
    challenge: 'To create a fast-paced, retro-themed multiplayer arcade game that is easy to pick up but hard to master, with stable online functionality and engaging core gameplay loop.',
    solution: 'Pixel Raiders Arena was built using the Unity engine, with Photon Engine for reliable multiplayer networking. We focused on tight controls, balanced gameplay mechanics, and a distinctive pixel art style. Regular playtesting sessions helped refine the user experience.',
    results: [
      'Over 50,000 downloads in the first month of soft launch.',
      'Average player session time of 25 minutes.',
      'Featured on several indie game discovery platforms.',
      'Strong community engagement on Discord and social media.',
    ],
    technologies: ['Unity', 'C#', 'Photon PUN', 'Aseprite', 'Firebase (Leaderboards)'],
    liveUrl: '#',
  },
   'artisan-showcase': {
    slug: 'artisan-showcase',
    title: 'Artisan Showcase: A Digital Gallery for Creators',
    subtitle: 'Designing an Elegant Platform for Artists',
    imageUrl: 'https://placehold.co/1200x600.png',
    dataAiHint: 'art website elegant',
    category: 'Web Development',
    tags: ['Gatsby', 'GraphQL', 'Contentful', 'Animations', 'Performance'],
    challenge: "A collective of artisans required a visually captivating and high-performance website to showcase their diverse works. The platform needed to be easily updatable by non-technical users and provide an immersive viewing experience for visitors.",
    solution: "We chose Gatsby for its static site generation capabilities, ensuring fast load times and excellent SEO. Contentful was integrated as a headless CMS, allowing artists to manage their portfolios effortlessly. The design focused on minimalism and high-quality imagery, with subtle animations to enhance user engagement.",
    results: [
      "Achieved a Lighthouse performance score of 98.",
      "Increased artist inquiries by 70% after launch.",
      "Average time on page increased by 2 minutes, indicating higher engagement.",
      "Praised for its aesthetic appeal and ease of navigation by users and artists alike."
    ],
    technologies: ['Gatsby.js', 'React', 'GraphQL', 'Contentful', 'Styled Components', 'Netlify'],
    liveUrl: '#',
  }
};

interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  dataAiHint: string;
  category: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  liveUrl?: string;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudiesData[params.slug];
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }
  return {
    title: `${caseStudy.title} | DevForge Studio Case Study`,
    description: caseStudy.subtitle,
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudiesData[params.slug];

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <Section className="pt-8 pb-4 bg-muted/30">
        <Button variant="outline" asChild>
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>
      </Section>
      <Section title={caseStudy.title} subtitle={caseStudy.category}>
        <div className="relative aspect-[16/7] rounded-lg overflow-hidden shadow-xl mb-12">
          <Image
            src={caseStudy.imageUrl}
            alt={caseStudy.title}
            data-ai-hint={caseStudy.dataAiHint}
            fill
            style={{objectFit: 'cover'}}
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Our Solution</h3>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-foreground mb-3">Project Details</h4>
              <p className="text-sm text-muted-foreground"><strong>Category:</strong> {caseStudy.category}</p>
              <p className="text-sm text-muted-foreground mt-1"><strong>Technologies:</strong></p>
              <div className="flex flex-wrap gap-2 mt-2">
                {caseStudy.technologies.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">{tech}</span>
                ))}
              </div>
              {caseStudy.liveUrl && caseStudy.liveUrl !== '#' && (
                <Button className="w-full mt-4" asChild>
                  <Link href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </aside>
        </div>
      </Section>

      <Section title="Key Results & Impact" subtitle="Project Outcomes" className="bg-muted/30">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudy.results.map((result, index) => (
            <div key={index} className="p-6 bg-card rounded-lg shadow-md flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">{result}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

// This function can be used if you want to statically generate these pages at build time.
// export async function generateStaticParams() {
//   return Object.keys(caseStudiesData).map((slug) => ({
//     slug,
//   }));
// }

