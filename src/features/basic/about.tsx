import { motion } from 'framer-motion';

import { Section } from '@/components/ui/section';

export function About() {
  return (
    <Section className="bg-secondary/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm a passionate developer with over 5 years of experience in
            building web applications. I specialize in React, Node.js, and
            modern web technologies. When I'm not coding, you can find me
            exploring new technologies or contributing to open source projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '20+', label: 'Happy Clients' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="p-6 rounded-lg bg-background shadow-sm"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
