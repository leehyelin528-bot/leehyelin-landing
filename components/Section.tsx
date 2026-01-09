import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  bgColor?: 'white' | 'light' | 'dark';
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  bgColor = 'white', 
  children,
  id 
}) => {
  const bgClass = {
    white: 'bg-white',
    light: 'bg-primary-50',
    dark: 'bg-primary-900 text-white',
  };

  const textClass = bgColor === 'dark' ? 'text-white' : 'text-primary-800';
  const subTextClass = bgColor === 'dark' ? 'text-stone-300' : 'text-primary-600';

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass[bgColor]}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {subtitle && (
              <p className={`text-sm md:text-base font-medium tracking-wider uppercase mb-2 ${subTextClass}`}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={`text-3xl md:text-4xl font-serif font-bold ${textClass}`}>
                {title}
              </h2>
            )}
            <div className={`mt-4 w-16 h-1 mx-auto ${bgColor === 'dark' ? 'bg-accent-gold' : 'bg-primary-500'}`} />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;