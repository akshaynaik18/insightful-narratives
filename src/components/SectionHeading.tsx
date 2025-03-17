
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'left',
  className
}) => {
  return (
    <div className={cn(
      `mb-10 ${alignment === 'center' ? 'text-center' : 'text-left'}`,
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-gradient relative inline-block mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
