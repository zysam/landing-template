import { Badge } from '@/components/ui/badge';
import { BentoCard } from './card';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export function ProjectCard({ title, description, image, tags }: Project) {
  return (
    <BentoCard className="group overflow-hidden">
      <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </BentoCard>
  );
}