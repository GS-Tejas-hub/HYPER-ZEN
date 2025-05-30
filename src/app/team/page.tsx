
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
    role: 'UX/UI Lead and Game Developer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man smiling professional',
    expertise: ['Python', 'C lang', 'Flutter Dart', 'Unity', 'Prototyping', 'UI/UX in Figma'],
    bio: "Passionate UI/UX Designer with a focus on intuitive, user-centered design for games and digital products.\nBlending design and development to create seamless, engaging, and visually rich user experiences.",
    linkedinUrl: 'https://www.linkedin.com/in/manish-r-v-676178326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    githubUrl: '#',
  },
  {
    id: '4', // Original ID for Achinth M
    name: 'Achinth M',
    role: 'UX/UI',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man programmer focused',
    expertise: ['React', 'Next.js', 'Python', 'C lang', 'Javascript'],
    bio: "Accomplished UI/UX Designer specializing in creating intuitive, user-centric digital experiences that drive engagement and enhance usability.\nExpertise in applying design principles and user research to deliver elegant, accessible, and visually compelling interfaces across multiple platforms.",
    linkedinUrl: 'https://www.linkedin.com/in/achinth522000?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    githubUrl: '#',
  },
  {
    id: '3', // Original ID for G S Tejas
    name: 'G S Tejas',
    role: 'Senior Full-Stack Developer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'person designer thoughtful',
    expertise: ['Java Script', 'React JS', 'Node JS', 'MongoDB', 'UI/UX', 'Python'],
    bio: 'Tejas is a versatile developer comfortable across the full stack. He enjoys tackling complex challenges and is always eager to learn new technologies, optimize performance, and deliver impactful solutions.',
    linkedinUrl: 'https://www.linkedin.com/in/g-s-tejas-10580929a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    githubUrl: '#',
  },
  {
    id: '2', // Original ID for Balasubramanyam B S
    name: 'Balasubramanyam B S',
    role: 'Senior App Developer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man creative glasses',
    expertise: ['Java Script', 'React JS', 'Node JS', 'Java', 'React Native', 'Firebase'],
    bio: 'Balasubramanyam brings virtual worlds to life. With a knack for engaging gameplay and immersive storytelling, he spearheads our game design projects, ensuring every game is an adventure.',
    linkedinUrl: 'https://www.linkedin.com/in/balasubramanyam-bs-7325a02ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: '7', // Original ID for Kanduri Hari Hara Deeraj
    name: 'Kanduri Hari Hara Deeraj',
    role: 'Marketing & Strategy Lead',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'person marketing professional',
    expertise: ['Digital Marketing', 'SEO', 'Content Strategy', 'Brand Development', 'Editing'],
    bio: 'Deeraj crafts compelling narratives and strategies that elevate our clients\' digital presence. He is adept at identifying market opportunities and driving growth.',
    linkedinUrl: 'https://www.linkedin.com/in/kanduri-hari-hara-deeraj-b795a6312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: '8', // Original ID for Kummetha Spurthika
    name: 'Kummetha Spurthika',
    role: 'App Developer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'woman engineer futuristic',
    expertise: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
    bio: "Skilled App Developer specializing in designing and building high-performance, scalable mobile applications with seamless user experiences.\nProficient in leveraging modern frameworks and best practices to deliver reliable, efficient, and intuitive solutions across iOS and Android platforms.",
    linkedinUrl: 'https://www.linkedin.com/in/kummetha-spurthika-218310326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    githubUrl: '#',
  },
  {
    id: '5', // Original ID for PoliReddy Thrisha Reddy
    name: 'PoliReddy Thrisha Reddy',
    role: 'Game Developer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'person mobile developer',
    expertise: ['Unity', 'C#', 'Game Design', 'C lang', 'Python'],
    bio: 'Thrisha Reddy specializes in developing cross-platform games that deliver native-level performance, immersive gameplay, and captivating visual experiences',
    linkedinUrl: 'https://www.linkedin.com/in/thrisha-reddy-96958533a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
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
