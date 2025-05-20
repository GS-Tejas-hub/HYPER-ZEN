import { Section } from '@/components/Section';
import { ProjectCard, type Project } from '@/components/portfolio/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | DevForge Studio Projects',
  description: 'Explore the diverse portfolio of DevForge Studio, showcasing our expertise in innovative web development and captivating game development projects.',
};

const projects: Project[] = [
  {
    id: '1',
    title: 'Odyssey Online Platform',
    description: 'A comprehensive e-learning platform with interactive courses, progress tracking, and community features. Built with Next.js and Supabase.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'website interface learning',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Supabase', 'Tailwind CSS'],
    liveUrl: '#',
    caseStudyUrl: '/portfolio/odyssey-online',
  },
  {
    id: '2',
    title: 'Pixel Raiders Arena',
    description: 'A fast-paced multiplayer retro-style arcade game developed with Unity. Features online leaderboards and customizable characters.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'pixel game screenshot',
    category: 'Game Development',
    tags: ['Unity', 'C#', 'Multiplayer', 'Photon Engine'],
    caseStudyUrl: '/portfolio/pixel-raiders',
  },
  {
    id: '3',
    title: 'EcoConnect Marketplace',
    description: 'An e-commerce platform connecting local producers with consumers, focusing on sustainable and organic products. Includes vendor dashboards and secure payments.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'ecommerce website organic',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
  },
  {
    id: '4',
    title: 'Galaxy Voyager VR',
    description: 'An immersive VR space exploration game built with Unreal Engine. Players pilot spacecraft, discover planets, and complete missions.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'vr game space',
    category: 'Game Development',
    tags: ['Unreal Engine', 'C++', 'VR', 'Oculus SDK'],
  },
  {
    id: '5',
    title: 'Artisan Showcase Site',
    description: 'A visually stunning portfolio website for a collective of artists, featuring high-resolution galleries and an integrated blog.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'art gallery website',
    category: 'Web Development',
    tags: ['Gatsby', 'GraphQL', 'Contentful', 'Animations'],
    liveUrl: '#',
    caseStudyUrl: '/portfolio/artisan-showcase',
  },
  {
    id: '6',
    title: 'Mindful Moments App',
    description: 'A mobile puzzle game designed to promote relaxation and mindfulness through calming visuals and engaging challenges.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'mobile game puzzle',
    category: 'Game Development',
    tags: ['Flutter', 'Dart', 'Mobile Game', 'Firebase'],
  },
];

const webProjects = projects.filter(p => p.category === 'Web Development');
const gameProjects = projects.filter(p => p.category === 'Game Development');

export default function PortfolioPage() {
  return (
    <Section title="Our Portfolio" subtitle="Showcasing Our Craft">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-10">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="web">Web Development</TabsTrigger>
          <TabsTrigger value="game">Game Development</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="web">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
            {webProjects.length === 0 && <p className="text-center text-muted-foreground">No web development projects to display yet.</p>}
        </TabsContent>
        <TabsContent value="game">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
            {gameProjects.length === 0 && <p className="text-center text-muted-foreground">No game development projects to display yet.</p>}
        </TabsContent>
      </Tabs>
    </Section>
  );
}
