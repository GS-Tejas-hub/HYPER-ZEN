import { Section } from '@/components/Section';
import { TeamMemberCard, type TeamMember } from '@/components/team/TeamMemberCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | DevForge Studio Experts',
  description: 'Meet the talented team behind DevForge Studio. Our developers, designers, and strategists are passionate about creating exceptional digital experiences.',
};

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alice Thompson',
    role: 'Lead Web Developer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'woman smiling professional',
    expertise: ['React', 'Next.js', 'Node.js', 'System Architecture'],
    bio: 'Alice is a seasoned web architect with over 10 years of experience building scalable and robust web applications. She leads our web development efforts with a passion for clean code and innovative solutions.',
    linkedinUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    name: 'Bob Robertson',
    role: 'Senior Game Designer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man creative glasses',
    expertise: ['Unity', 'Unreal Engine', 'Gameplay Mechanics', 'Level Design'],
    bio: 'Bob brings virtual worlds to life. With a knack for engaging gameplay and immersive storytelling, he spearheads our game design projects, ensuring every game is an adventure.',
    linkedinUrl: '#',
  },
  {
    id: '3',
    name: 'Carol Lee',
    role: 'UX/UI Lead',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'woman designer thoughtful',
    expertise: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    bio: 'Carol is dedicated to crafting intuitive and beautiful user experiences. She champions a user-centered design process to create products that are both functional and delightful.',
    linkedinUrl: '#',
    githubUrl: '#',
  },
  {
    id: '4',
    name: 'David Green',
    role: 'Full-Stack Developer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man programmer focused',
    expertise: ['Python', 'Django', 'Vue.js', 'DevOps'],
    bio: 'David is a versatile developer comfortable across the full stack. He enjoys tackling complex challenges and is always eager to learn new technologies to enhance our projects.',
    linkedinUrl: '#',
    githubUrl: '#',
  },
];

export default function TeamPage() {
  return (
    <Section title="Meet Our Team" subtitle="The Minds Behind DevForge">
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        We are a collective of passionate creators, thinkers, and innovators dedicated to pushing the boundaries of digital craftsmanship.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </Section>
  );
}
