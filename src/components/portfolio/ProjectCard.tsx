import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  category: 'Web Development' | 'Game Development';
  tags: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-video">
        <Image
          src={project.imageUrl}
          alt={project.title}
          data-ai-hint={project.dataAiHint}
          fill
          style={{objectFit: 'cover'}}
          className="transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-semibold text-foreground">{project.title}</CardTitle>
          <Badge variant={project.category === 'Web Development' ? 'secondary' : 'default'} className="capitalize">
            {project.category}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2 pt-4">
        {project.liveUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Live</Link>
          </Button>
        )}
        {project.caseStudyUrl ? (
           <Button size="sm" asChild>
            <Link href={project.caseStudyUrl}>Case Study <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        ) : (
          <Button size="sm" variant="ghost" disabled>Case Study Coming Soon</Button>
        )}
      </CardFooter>
    </Card>
  );
}
