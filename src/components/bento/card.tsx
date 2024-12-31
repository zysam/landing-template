import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'col-span-1 row-span-1',
  md: 'col-span-1 row-span-2',
  lg: 'col-span-2 row-span-2'
};

export function BentoCard({ children, className, size = 'sm', ...props }: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={cn(
        'rounded-3xl bg-card p-6 shadow-sm backdrop-blur-sm',
        'border border-border/50',
        'hover:border-border/80 transition-colors',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}