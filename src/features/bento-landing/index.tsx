import content from '@/config/content.json';
import { ProfileCard } from '@/components/bento/profile-card';
import { ProjectCard } from '@/components/bento/project-card';
import { SkillsCard } from '@/components/bento/skills-card';
import { StatsCard } from '@/components/bento/stats-card';

export function BentoLanding() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          <ProfileCard {...content.profile} />
          <SkillsCard skills={content.skills as any} />
          <StatsCard stats={content.stats} />
          {content.featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
