import { Github, Linkedin, Twitter } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { BentoCard } from './card';

interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  social: {
    github: string;
    twitter: string;
    linkedin: string;
  };
}

export function ProfileCard({
  name,
  title,
  bio,
  avatar,
  social,
}: ProfileCardProps) {
  return (
    <BentoCard size="sm" className="flex flex-col justify-between">
      <div className="flex items-start gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-muted-foreground">{title}</p>
        </div>
      </div>
      <p className="mt-4 text-muted-foreground">{bio}</p>
      <div className="mt-6 flex gap-4">
        {[
          { icon: Github, href: social.github },
          { icon: Twitter, href: social.twitter },
          { icon: Linkedin, href: social.linkedin },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </BentoCard>
  );
}
