
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
    dataAiHint: 'man smiling professional', // Updated hint slightly for a male name
    expertise: ['React', 'Next.js', 'Node.js', 'System Architecture'], // <-- Skills
    bio: "Passionate UI/UX Designer with a focus on intuitive, user-centered design for games and digital products.\nBlending design and development to create seamless, engaging, and visually rich user experiences.", // Updated bio
    linkedinUrl: 'https://www.linkedin.com/in/manish-r-v-676178326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    githubUrl: '#',
  },
  {
    id: '2',
    name: 'Balasubramanyam B S',
    role: 'Senior Game Designer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man creative glasses',
    expertise: ['Unity', 'Unreal Engine', 'Gameplay Mechanics', 'Level Design'],
    bio: 'Balasubramanyam brings virtual worlds to life. With a knack for engaging gameplay and immersive storytelling, he spearheads our game design projects, ensuring every game is an adventure.',
    linkedinUrl: 'https://www.linkedin.com/in/balasubramanyam-bs-7325a02ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: '3',
    name: 'G S Tejas',
    role: 'UX/UI Lead',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'person designer thoughtful',
    expertise: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    bio: 'Tejas is dedicated to crafting intuitive and beautiful user experiences. He champions a user-centered design process to create products that are both functional and delightful.',
    linkedinUrl: 'https://www.linkedin.com/in/g-s-tejas-10580929a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    githubUrl: '#',
  },
  {
    id: '4',
    name: 'Achinth M',
    role: 'Full-Stack Developer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man programmer focused',
    expertise: ['Python', 'Django', 'Vue.js', 'DevOps'],
    bio: 'Achinth is a versatile developer comfortable across the full stack. He enjoys tackling complex challenges and is always eager to learn new technologies to enhance our projects.',
    linkedinUrl: 'https://www.linkedin.com/in/achinth522000?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    githubUrl: '#',
  },
  {
    id: '5',
    name: 'PoliReddy Thrisha Reddy',
    role: 'Mobile App Developer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'person mobile developer',
    expertise: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
    bio: 'Poli specializes in creating cross-platform mobile applications that offer native performance and engaging user interfaces. Poli is passionate about mobile trends and user experience.',
    linkedinUrl: 'https://www.linkedin.com/in/thrisha-reddy-96958533a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
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
    name: 'Kanduri Hari Hara Deeraj',
    role: 'Marketing & Strategy Lead',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'person marketing professional',
    expertise: ['Digital Marketing', 'SEO', 'Content Strategy', 'Brand Development'],
    bio: 'Deeraj crafts compelling narratives and strategies that elevate our clients\' digital presence. He is adept at identifying market opportunities and driving growth.',
    linkedinUrl: 'https://www.linkedin.com/in/kanduri-hari-hara-deeraj-b795a6312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: '8',
    name: 'Kummetha Spurthika',
    role: 'AI/ML Engineer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'woman engineer futuristic',
    expertise: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
    bio: 'Spurthika is passionate about leveraging artificial intelligence to solve complex problems. She develops innovative AI solutions and integrates machine learning models into our projects.',
    linkedinUrl: 'https://www.linkedin.com/in/kummetha-spoorthika-218310326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
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
