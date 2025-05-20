import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Github, Briefcase } from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  dataAiHint: string;
  expertise: string[];
  bio: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-primary/20 shadow-md">
        <Image
          src={member.imageUrl}
          alt={member.name}
          data-ai-hint={member.dataAiHint}
          fill
          style={{objectFit: 'cover'}}
          className="transition-transform duration-500 group-hover:scale-110"
          sizes="160px"
        />
      </div>
      <CardHeader className="p-0 mb-2">
        <CardTitle className="text-xl font-semibold text-foreground">{member.name}</CardTitle>
        <CardDescription className="text-primary flex items-center justify-center">
          <Briefcase className="w-4 h-4 mr-1.5" /> {member.role}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 flex-grow">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{member.bio}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {member.expertise.map(skill => (
            <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
          ))}
        </div>
        <div className="flex justify-center space-x-3">
          {member.linkedinUrl && (
            <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn Profile`} className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {member.githubUrl && (
            <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} Github Profile`} className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
