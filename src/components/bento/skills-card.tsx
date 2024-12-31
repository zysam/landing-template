import * as Icons from 'lucide-react';

import { Progress } from '@/components/ui/progress';

import { BentoCard } from './card';

interface Skill {
  name: string;
  icon: keyof typeof Icons;
  level: number;
}

interface SkillsCardProps {
  skills: Skill[];
}

export function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <BentoCard size="sm" className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill) => {
          const Icon = Icons[skill.icon];
          return (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
              <Progress value={skill.level} className="h-1.5" />
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
}
