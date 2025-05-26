
import { Section } from '@/components/Section';
import { TeamMemberCard, type TeamMember } from '@/components/team/TeamMemberCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | HyperZen Experts',
  description: 'Meet the talented team behind HyperZen. Our developers, designers, and strategists are passionate about creating exceptional digital experiences.',
};

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Manish R V',
    role: 'Lead Web Developer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man smiling professional', // Updated hint slightly for a male name
    expertise: ['React', 'Next.js', 'Node.js', 'System Architecture'],
    bio: 'Manish is a seasoned web architect with over 10 years of experience building scalable and robust web applications. He leads our web development efforts with a passion for clean code and innovative solutions.', // Updated bio pronoun
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
  {
    id: '5',
    name: 'Eva Williams',
    role: 'Mobile App Developer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'woman mobile developer',
    expertise: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
    bio: 'Eva specializes in creating cross-platform mobile applications that offer native performance and engaging user interfaces. She is passionate about mobile trends and user experience.',
    linkedinUrl: '#',
    githubUrl: '#',
  },
  {
    id: '6',
    name: 'Frank Miller',
    role: 'Project Manager',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man project manager',
    expertise: ['Agile', 'Scrum', 'Client Communication', 'Risk Management'],
    bio: 'Frank ensures projects are delivered on time and within budget. His excellent communication and organizational skills keep our teams aligned and clients informed.',
    linkedinUrl: '#',
  },
  {
    id: '7',
    name: 'Grace Davis',
    role: 'Marketing & Strategy Lead',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'woman marketing professional',
    expertise: ['Digital Marketing', 'SEO', 'Content Strategy', 'Brand Development'],
    bio: 'Grace crafts compelling narratives and strategies that elevate our clients\' digital presence. She is adept at identifying market opportunities and driving growth.',
    linkedinUrl: '#',
  },
  {
    id: '8',
    name: 'Henry Garcia',
    role: 'AI/ML Engineer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man engineer futuristic',
    expertise: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
    bio: 'Henry is passionate about leveraging artificial intelligence to solve complex problems. He develops innovative AI solutions and integrates machine learning models into our projects.',
    linkedinUrl: '#',
    githubUrl: '#',
  },
];

export default function TeamPage() {
  return (
    <Section title="Meet Our Team" subtitle="The Minds Behind HyperZen">
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
