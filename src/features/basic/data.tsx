import { Github } from 'lucide-react';

import { HeroContent } from './hero';

export const heroData: HeroContent = {
  greeting: "Hello, I'm",
  name: 'John Doe',
  role: 'Full Stack Developer',
  description: 'I build exceptional digital experiences...',
  primaryButton: {
    text: 'View My Work',
    href: '/work',
  },
  secondaryButton: {
    text: 'Download CV',
    href: '/cv.pdf',
  },
  socialLinks: [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
    },
    // ... other social links
  ],
};
